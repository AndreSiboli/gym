export function checkName(name: string) {
  const regex = /\p{L}/gu;

  if (name.length < 2) return "The name field is too short.";
  if (name.match(regex)?.length !== name.length)
    return "The name field only accept letters.";
}

export function checkEmail(email: string) {
  const regex = /[a-z0-9.]/gi;

  if (!email) return false;
  if (email.match(/@/g)?.length !== 1) return false;
  const [root, domain] = email.split("@");

  //Checking the root
  if (root.match(regex)?.length !== root.length) return false;
  if (root.startsWith(".") || root.endsWith(".")) return false;

  const regexDots = /\.{2,}/;
  if (regexDots.test(root)) return false;

  //Checking domain
  if (domain.match(/[.]/g)?.length !== 1) return false;
  const [initial, com] = domain.split(".");

  if (!initial) return false;
  if (!com.endsWith("com")) return false;

  return true;
}

export function checkSubject(subject: string) {
  if (subject.length === 0) return "You need a subject.";
  if (subject.length > 255) return "Too many caracteres in subject.";
}
