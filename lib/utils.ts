import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function containsSQLInjection(input: string) {
    // SQL special characters that might indicate an injection attempt
    const sqlSpecialChars = new Set([';', '-', '"', "'", '\\', '<', '>', '=', '(', ')', "'", '"', '/*', '*/', '!', '$', '@', '%', '^', '&', '*', '~', '`', '+', '#', ' ']);
  
    // Check if the input contains any of the SQL special characters
    for (let char of input) {
        if (sqlSpecialChars.has(char)) {
            return true; // Found a potentially harmful character
        }
    }
  
    return false; // No harmful characters found
}