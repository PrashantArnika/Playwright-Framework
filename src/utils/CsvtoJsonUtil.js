import * as fs from 'fs';
import path from 'path';

const CSVToJSON = (data, delimiter = ',') => {
    const titles = data.slice(0, data.indexOf('\n')).split(delimiter);
    return data
        .slice(data.indexOf('\n') + 1)
        .split('\n')
        .filter(line => line.trim() !== '')
        .map((v) => {
            const values = v.split(delimiter);
            return titles.reduce(
                (obj, title, index) => {
                    obj[title.trim()] = values[index]?.trim() ?? '';
                    return obj;
                },
                {}
            );
        });
};

const currentDir = __dirname;
const srcDir = path.resolve(currentDir, "..");
const testdataDir = path.resolve(srcDir, "data");

export const convertCsvFileToJsonFile = (csvFileName, jsonFileName, delimiter = ',') => {
    try {
        const csvFilePath = path.join(testdataDir, csvFileName);
        const jsonFilePath = path.join(testdataDir, jsonFileName);

        const csvData = fs.readFileSync(csvFilePath, 'utf8');
        const jsonData = CSVToJSON(csvData, delimiter);

        fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));

        console.log(`Conversion completed. JSON data written to: ${jsonFilePath}`);
    } catch (error) {
        console.log('Error converting CSV to JSON:', error.message);
    }
};
