const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// Read the Excel file
const excelFile = path.join(__dirname, 'react topics (1).xlsx');
const workbook = XLSX.readFile(excelFile);

// Get all sheet names
const sheetNames = workbook.SheetNames;

// Convert each sheet to JSON
const allData = {};

sheetNames.forEach((sheetName) => {
  const worksheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(worksheet);
  allData[sheetName] = data;
});

// Save as JSON to a new file
const outputPath = path.join(__dirname, 'public/react-topics.json');
fs.writeFileSync(outputPath, JSON.stringify(allData, null, 2), 'utf-8');

console.log('✓ Converted Excel to JSON');
console.log(`✓ Saved to: ${outputPath}`);
console.log(`✓ Sheets converted: ${sheetNames.join(', ')}`);
console.log(`\nData structure:`);
console.log(JSON.stringify(allData, null, 2).substring(0, 500) + '...');
