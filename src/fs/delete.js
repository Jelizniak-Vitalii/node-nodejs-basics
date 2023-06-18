import { fileURLToPath } from 'url';
import fs from 'node:fs';
import path from 'path';

const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  try {
    await fs.promises.unlink(`${__dirname}/files/fileToRemove.txt`);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await remove();
