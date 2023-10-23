import * as fs from 'fs';

const JSON_PATH = 'cache/commonData.json';

export const writeJSON = (json) => {
  fs.writeFileSync(JSON_PATH, JSON.stringify(json));
};
export const readJSON = () => {
  try {
    if (fs.existsSync(JSON_PATH)) {
      return JSON.parse(fs.readFileSync(JSON_PATH, 'utf8'));
    }

    return null;
  } catch (e) {
    return null;
  }
};
