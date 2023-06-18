import { fileURLToPath } from 'url';
import fs from 'node:fs';
import path from 'path';

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  try {
    await fs.promises.mkdir(`${__dirname}/files_copy`);
    const files = await fs.promises.readdir(`${__dirname}/files`);

    for (let file of files) {
      await fs.promises.copyFile(
        `${__dirname}/files/${file}`,
        `${__dirname}/files_copy/${file}`
      );
    }
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await copy();
