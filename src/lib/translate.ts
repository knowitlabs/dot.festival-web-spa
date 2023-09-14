import i18n from './i18n';

export default (key: string, language?: string): string => {
  const t = i18n(language);

  return t(key);
};
