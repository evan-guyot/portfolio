import en from "./en";
import fr from "./fr";

export const dictionaries = {
  en,
  fr,
};

export type Locale = keyof typeof dictionaries;
