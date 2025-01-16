const fs = require('fs');
const xlsx = require('xlsx');
const puppeteer = require('puppeteer');
const path = require('path'); 

// Field Mapping
const fieldMapping = {
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
    "Logical L1": "~ll1",
    "Logical L2": "~ll2",
    "Logical L3": "~ll3",
    "Overall Total": "~AptiTotal",
    "Overall level": "~AptiLevel",
    "Level in Verbal": "~vlevel",
    "Level in Quants": "~qlevel",
    "Level in Logical": "~llevel",
    "Performamce in Verbal": "~vperf",
    "Performance in Quants": "~qperf",
    "Performance in Logical": "~lperf",
    "Overall Performance": "~operf",
    "Candidate's Email": "email", 
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
    "Coding Total": "~codetot",
    "Level": "~codel",
    "Descriptor": "~desc"
};

// Read HTML Template
const template = fs.readFileSync('./ReportAll.html', 'utf8');

// Map Fields Function
function mapFields(data) {
    return data.map(entry => {
        let mappedEntry = {};
        for (const [originalField, mappedField] of Object.entries(fieldMapping)) {
            mappedEntry[mappedField] = entry[originalField] !== undefined ? entry[originalField] : "-";
        }
        return mappedEntry;
    });
}

// Convert Excel to JSON
function convertExcelToJson(filePath, sheetName) {
    const workbook = xlsx.readFile(filePath);
    if (!workbook.SheetNames.includes(sheetName)) {
        throw new Error(`Sheet "${sheetName}" not found in the file.`);
    }
    const sheet = workbook.Sheets[sheetName];
    return xlsx.utils.sheet_to_json(sheet);
}

// Main Function
const generateReports = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const excelPath = "./SKIT.xlsx";
    const sheetName = "KSAD Overall Analysis";

    // Convert Excel data to JSON
    const rawData = convertExcelToJson(excelPath, sheetName);
    const mappedData = mapFields(rawData);
    fs.writeFileSync("test.json", JSON.stringify(mappedData, null, 2));
    console.log("Mapped Data:", mappedData);

    // Ensure PDFs directory exists
    const pdfDir = path.join(__dirname, "pdfs");
    if (!fs.existsSync(pdfDir)) {
        fs.mkdirSync(pdfDir);
    }

    // Generate PDFs
    for (const stud of mappedData) {
        let populatedTemplate = template;
        for (const key in stud) {
            populatedTemplate = populatedTemplate.replace(new RegExp(key, 'g'), stud[key] || "-");
        }
        await page.setContent(populatedTemplate, { waitUntil: 'domcontentloaded' });
        await page.emulateMediaType('print');

        const filename = `${stud["~name"]}_${stud["~usn"]}.pdf`;
        const pdfPath = path.join(pdfDir, filename);
        await page.pdf({
            path: pdfPath,
            format: 'A4',
            printBackground: true,
            scale: 0.6,
            landscape: false,
        });

        console.log(`PDF saved: ${pdfPath}`);
    }

    await browser.close();
};

generateReports().catch(err => console.error("Error:", err));