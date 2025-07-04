export const colorThemes = {
  lightPink: {
    background: '#F5D7E3',
    backgroundDarker: '#E8C2D1',
    backgroundLighter: '#FBE8F0',
    headerText: '#4A2F35',
    bodyText: '#6E4A50',
    error: '#E53935',
    loading: '#FFCDD2',
    success: '#66BB6A',
  },
  terracotta: {
    background: '#E2725B',
    backgroundDarker: '#C05C4A',
    backgroundLighter: '#F1A087',
    headerText: '#3E231E',
    bodyText: '#5E3D36',
    error: '#B71C1C',
    loading: '#F8B4A8',
    success: '#81C784',
  },
  grey: {
    background: '#E0E0E0',
    backgroundDarker: '#BDBDBD',
    backgroundLighter: '#F5F5F5',
    headerText: '#212121',
    bodyText: '#424242',
    error: '#D32F2F',
    loading: '#EEEEEE',
    success: '#388E3C',
  },
  obsidian: {
    background: '#1A1A1A',
    backgroundDarker: '#0F0F0F',
    backgroundLighter: '#2E2E2E',
    headerText: '#FFFFFF',
    bodyText: '#CCCCCC',
    error: '#EF5350',
    loading: '#424242',
    success: '#66BB6A',
  },
} as const;

export type ThemeName = keyof typeof colorThemes;
export type ColorTheme = typeof colorThemes[ThemeName];

export const defaultTheme: ThemeName = 'lightPink';

export function getThemeColors(themeName: ThemeName): ColorTheme {
  return colorThemes[themeName];
}

export function getThemeStyles(themeName: ThemeName) {
  const colors = getThemeColors(themeName);
  
  return {
    '--bg-main': colors.background,
    '--bg-darker': colors.backgroundDarker,
    '--bg-lighter': colors.backgroundLighter,
    '--text-header': colors.headerText,
    '--text-body': colors.bodyText,
    '--color-error': colors.error,
    '--color-loading': colors.loading,
    '--color-success': colors.success,
  } as React.CSSProperties;
} 