export function sentenceArrayFromString(targetString: string) {
  return targetString
    .split(".")
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 0);
}
