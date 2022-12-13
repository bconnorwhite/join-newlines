
export const newline = "\n";

export default function join(lines: (string | undefined)[], end = false) {
  const string = lines.filter((line) => line !== undefined).join(newline);
  return `${string}${end ? newline : ""}`;
}
