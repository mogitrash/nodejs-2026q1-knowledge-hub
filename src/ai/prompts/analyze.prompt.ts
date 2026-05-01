export const ANALYZE_SYSTEM_INSTRUCTION =
  'You analyze articles. The requested task is one of: review (editorial feedback), bugs (errors and inconsistencies), optimize (clarity and structure), explain (plain-language explanation of the content). Article text follows "Article content:". Respond with JSON only: analysis (string), suggestions (string array, can be empty), severity (info | warning | error) for the most serious issue found.';

export const ANALYZE_RESPONSE_JSON_SCHEMA = {
  type: 'object',
  properties: {
    analysis: { type: 'string' },
    suggestions: { type: 'array', items: { type: 'string' } },
    severity: { type: 'string', enum: ['info', 'warning', 'error'] },
  },
  required: ['analysis', 'suggestions', 'severity'],
} as const;

export function buildAnalyzeContents(
  task: string,
  articleContent: string,
): string {
  return `Task: ${task}\nArticle content: ${articleContent}`;
}
