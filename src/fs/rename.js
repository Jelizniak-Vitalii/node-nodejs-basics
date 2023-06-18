import { fileURLToPath } from 'url';
import fs from 'node:fs';
import path from 'path';

const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  try {
    await fs.promises.rename(`${__dirname}/files/wrongFilename.txt`, `${__dirname}/files/properFilename.md`);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await rename();
