export function parseLinks(text: string): string {
  return text.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (_, linkText, url) =>
      `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-[#c8893a] no-underline hover:underline">${linkText}</a>`
  );
}
