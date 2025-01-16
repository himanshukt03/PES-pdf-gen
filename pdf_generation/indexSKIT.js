const fs = require('fs');
const xlsx = require('xlsx');
const path = require('path');
const puppeteer = require('puppeteer');
const fieldMapping = {
    "Email": "email",
    "small_name": "~sname",
    "Name": "~name",
    "USN": "~usn",
    "DISC": "disc",
    "Aptitude": "apt",
    "Coding ": "coding",
    "Semester": "~sem",
    "DominanceP": "~domsc",
    "InfluenceP": "~infsc",
    "SteadinessP": "~steadsc",
    "ComplianceP": "~conssc",
    "Top 2 Majority": "top2",
    "Results": "res",
    "Branch": "~branch",
    "Verbal L1": "~vl1",
    "Verbal L2": "~vl2",
    "Verbal L3": "~vl3",
    "Quants L1": "~ql1",
    "Quants L2": "~ql2",
    "Quants L3": "~ql3",
    "Overall Total": "~AptiTotal",
    "Overall level": "~AptiLevel",
    "Level in Verbal": "~vlevel",
    "Level in Quants": "~qlevel",
    "Level in Logical": "~llevel",
    "Performamce in Verbal": "~vperf",
    "Performance in Quants": "~qperf",
    "Performance in Logical": "~lperf",
    "Overall Performance": "~operf",
    "Tech Quiz - L4(16)": "tq_l4",
    "TechQuiz - L3(12)": "tq_l3",
    "TechQuiz - L2(8)": "tq_l2",
    "TechQuiz - L1(4)": "tq_l1",
    "TechQuiz total": "tq_tot",
    "TechQuiz Scores in 10": "tq_scr",
    "Band": "~band",
    "Proficency": "~kprof",
    "You’re most likely suited for…": "~suitedfor",
    "Sub Content": "~suitedcont",
    "QLevel": "~qzlevel",
    "CLevel": "~clevel",
    "Coding Round - L1 (Lowest Complexity)": "~codel1",
    "Coding Round - L2 (Low Complexity)": "~codel2",
    "Coding Round - L3 (Medium Complexity)": "~codel3",
    "Coding Round - L4(Highest Complexity)": "~codel4",
    "Total Scores": "~codetot",
    "Level": "~codel",
    "Descriptor": "~desc"
};

const template = fs.readFileSync('Report.html', 'utf8');

function mapFields(data) {
    return data.map(entry => {
        let mappedEntry = {};
        for (const [originalField, mappedField] of Object.entries(fieldMapping)) {
            if (entry[originalField] != undefined) {
                mappedEntry[mappedField] = entry[originalField];
            } else {
                mappedEntry[mappedField] = "0";
            }
        }
        return mappedEntry;
    });
}

function convertExcelToJson(filePath) {
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    return xlsx.utils.sheet_to_json(sheet);
}


const mf = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const epath = "SKIT.xlsx";

    // Convert Excel to JSON and map fields
    const newJson = convertExcelToJson(epath);
    const mappedData = mapFields(newJson);

    // Store the mapped data to test1.json
    fs.writeFileSync("SKIT.json", JSON.stringify(mappedData, null, 2));

    // Load data from test.json for PDF generation
    const findata = JSON.parse(fs.readFileSync("result.json", "utf8"));
    console.log(findata);
    
    for (let stud of findata) {
        let thtml = template;
        for (const key in stud) {
            thtml = thtml.replace(key, stud[key] || "-");
        }

        await page.setContent(thtml, { waitUntil: 'domcontentloaded' });

        // Adjust the scaling of the PDF to 60%
        await page.emulateMediaType('print');

        const filename = `${stud["~name"]}_${stud["~usn"]}.pdf`;
        await page.pdf({
            path: "pdfs/" + filename,
            format: 'A4',
            printBackground: true,
            scale: 0.6,  //scale to 60%
            landscape: false,
        });

        console.log(`PDF saved as ${filename}`);
    }

    await browser.close();
};

mf();
