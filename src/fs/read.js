import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'node:fs';

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  try {
    const fileData = await fs.promises.readFile(`${__dirname}/files/fileToRead.txt`, 'utf-8');
    console.log(fileData);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await read();
