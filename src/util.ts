import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const clsxt = (...args: ClassValue[]) => {
  return twMerge(clsx(...args));
};
