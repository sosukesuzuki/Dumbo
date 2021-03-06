import fs from 'fs';
import { promisify } from 'util';

export const mkdir = promisify(fs.mkdir);
export const readFile = promisify(fs.readFile);
export const stat = promisify(fs.stat);
export const writeFile = promisify(fs.writeFile);
