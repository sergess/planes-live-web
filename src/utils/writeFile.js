import * as fs from 'fs';

const JSON_PATH = 'public/commonData.json';
export const writeJSON = (json) => {
  fs.writeFileSync(JSON_PATH, JSON.stringify(json));
};
export const readJSON = () => JSON.parse(fs.readFileSync(JSON_PATH, 'utf8'));
