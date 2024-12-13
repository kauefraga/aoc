export async function getLines(path: string) {
  const file = await Bun.file(path).text();

  return file.split("\n");
}
