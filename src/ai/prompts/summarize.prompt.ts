export const SUMMARIZE_SYSTEM_INSTRUCTION =
  'You are a helpful assistant that summarizes articles. Article content is provided after the "Article content:" prefix.';

export function buildSummarizeContents(articleContent: string): string {
  return `Article content: ${articleContent}`;
}
