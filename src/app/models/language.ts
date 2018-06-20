export interface Language {
  readonly message: string;
}

export const updateMessage = (
  language: Language,
  message: string
): Language => {
  return { ...language, message: message };
};
