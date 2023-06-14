import { existsSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'url';
import path from 'path';

const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const filePath = `${__dirname}/files/fresh.txt`;

  if (existsSync(filePath)) throw new Error('FS operation failed');

  writeFileSync(filePath, 'I am fresh and young');
};

await create();
