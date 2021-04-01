import tlds from "../tlds";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function valid(email: string): boolean {
  if (!EMAIL_REGEX.test(email)) {
    return false;
  }

  const match = email.match(/\.([^\.]+)$/) || [];
  if (match.length > 1) {
    return tlds.has(match[1].toLowerCase());
  }

  return false;
}
