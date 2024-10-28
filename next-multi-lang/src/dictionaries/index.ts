import "server-only";

export type Locale = keyof typeof dictionaries;

const dictionaries = {
  en: () => import("./en/translation.json").then((module) => module.default),
  ro: () => import("./ro/translation.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
