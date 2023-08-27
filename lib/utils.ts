import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { decrypt } from '../app/utils/tweetnacl';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const hashFragment = (): string[] => {
  if (typeof window === 'undefined') {
    return [];
  }

  return new URL(window?.location.href)?.hash.split('#');
};

export function getFragment(property: string) {
  return hashFragment()
    .map((fragment: string) =>
      fragment.startsWith(property + '=')
        ? fragment.split(property + '=')[1]
        : ''
    )
    .filter(Boolean);
}

export function getSensitiveContent(
  secret: string,
  decryptionKey: string
): string {
  try {
    const sensitive = decrypt(secret, decryptionKey);

    return sensitive;
  } catch (err) {
    console.error("Couldn't decrypt secret.", 'Missing the password?');

    return '';
  }
}
