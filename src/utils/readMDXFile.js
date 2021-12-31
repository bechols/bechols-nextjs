import { promises as fs } from 'fs';
import path from 'path';

export const readMDXFile = async (folderpath, slug) => {
  const postPath = path.join(process.cwd(), folderpath, slug+".mdx");

  return await fs.readFile(postPath, 'utf8');
};