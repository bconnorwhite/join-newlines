
const newline = "\n";

export default function join(lines: string[], end = false) {
  const string = lines.join(newline);
  return end ? string.concat(newline) : string;
}
