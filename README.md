# PESCodePDF Project

## Overview

This project allows for easy assembly of PDF pages using React components and dynamic data from Excel sheets to generate customized PDFs. Here's a breakdown of the project's structure and functionality:

---

### **1. `pdf_template`**
This folder serves as the foundation for assembling static PDF pages using reusable components. Here's a detailed description:

- **Components Folder**:  
   - Contains individual reusable components.  
   - These components represent smaller building blocks used throughout the application.

- **PDF Pages Folder (`pdf_pages`)**:  
   - Contains pre-assembled pages such as `PageOne.tsx`, `PageTwo.tsx`, etc.  
   - Each page is created by combining components from the `components` folder.

- **Routes Folder**:  
   - The `routes/_index.tsx` file acts as the entry point, assembling all pages from the `pdf_pages` folder into the final application.

- **UI Folder**:  
   - Contains global styling (`tailwind.css`) and additional UI-related files.

### Folder Structure
Refer to the image below for a detailed view of the folder organization.
![image](https://github.com/user-attachments/assets/a0bd065d-baa6-4ecc-87d4-3e9e5a8424fd)

---

### **2. `pdf_generation`**
This folder is responsible for dynamically generating PDFs based on data fetched from an Excel sheet. Here's how it works:

- The static HTML template from the `pdf_template` folder is used as a base.  
- Custom field names are added to represent dynamic values that need to be replaced, such as `~name`, `~usn`, etc.  
- These field names are mapped to the column names in the Excel sheet using a `fieldMapping` object.

#### **How the PDF Generation Works:**
1. The Excel sheet is read and converted into JSON using the `xlsx` library.  
2. Each row in the Excel sheet is mapped to its corresponding fields in the HTML template.  
3. Using Puppeteer, the populated HTML template is converted into a PDF for each record.  
4. The PDFs are saved in the `pdfs` directory, with filenames based on student names and IDs.

#### Code Reference:
Here’s a brief overview of the process:
```javascript
const fieldMapping = { ... }; // Maps Excel column names to HTML placeholders
const template = fs.readFileSync('./ReportAll.html', 'utf8');

// Read and map Excel data
const rawData = convertExcelToJson("./SKIT.xlsx", "KSAD Overall Analysis");
const mappedData = mapFields(rawData);

// Generate PDFs using Puppeteer
for (const record of mappedData) {
    let populatedTemplate = template;
    for (const key in record) {
        populatedTemplate = populatedTemplate.replace(new RegExp(key, 'g'), record[key] || "-");
    }
    // Save the populated template as a PDF
    await page.setContent(populatedTemplate);
    await page.pdf({ path: `./pdfs/${record["~name"]}_${record["~usn"]}.pdf` });
}
```

---

## Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js (version 16 or above)
- npm or yarn package manager

---

### Steps to Run the Project
1. Clone the repository and navigate to the project directory:
   ```bash
   git clone <repository_url>
   cd TestPES
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server for `pdf_template`:
   ```bash
   npm run dev
   ```

4. Run the script in `pdf_generation` to create PDFs:
   ```bash
   node index.js
   ```

5. View the output PDFs in the `pdfs` directory.

---


### Additional Notes
- Tailwind CSS is pre-configured for styling in the `pdf_template` folder.  
- The `pdf_generation` folder dynamically generates PDFs by merging HTML templates with Excel data.  
