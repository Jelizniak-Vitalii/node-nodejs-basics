import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'node:fs';

const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  try {
    const files = await fs.promises.readdir(`${__dirname}/files`);

    for (let file of files) {
      console.log(file);
    }
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await list();
