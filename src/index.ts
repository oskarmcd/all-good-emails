import tlds from "../tlds";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function valid(email: string): boolean {
  if (!EMAIL_REGEX.test(email)) {
    return false;
  }

  const suffix = email.split("@");
  const [_, tld] = suffix[suffix.length - 1].split(".");

  return tlds.has(tld.toLowerCase());
}
