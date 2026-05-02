export const TRANSLATE_SYSTEM_INSTRUCTION =
  'You translate articles. Respond with JSON only: full translation and detectedLanguage for the original text.';

export const TRANSLATE_RESPONSE_JSON_SCHEMA = {
  type: 'object',
  properties: {
    translatedText: { type: 'string' },
    detectedLanguage: {
      type: 'string',
      description: 'Language of the original article',
    },
  },
  required: ['translatedText', 'detectedLanguage'],
} as const;

export function buildTranslateContents(
  targetLanguage: string,
  sourceLanguage: string | undefined,
  articleContent: string,
): string {
  return [
    `Target language: ${targetLanguage}.`,
    sourceLanguage &&
      `Source hint: ${sourceLanguage} (use as detectedLanguage if it matches the text).`,
    `Article content: ${articleContent}`,
  ].join('\n');
}
