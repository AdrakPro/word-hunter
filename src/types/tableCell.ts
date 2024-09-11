export type TableCell = {
  word: string;
  language: string;
  type:
    | 'noun'
    | 'verb'
    | 'adjective'
    | 'adverb'
    | 'pronoun'
    | 'preposition'
    | 'conjunction'
    | 'interjection'
    | 'article';
  xp: number;
};
