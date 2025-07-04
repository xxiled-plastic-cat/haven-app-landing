export type { ThemeName, ColorTheme } from '~/lib/themes';

export interface WaitlistFormData {
  email: string;
  name?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ComparisonTableRow {
  feature: string;
  traditional: string | boolean;
  haven: string | boolean;
} 