import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization';
import i18n from 'i18next';
import { Locale } from '../constants/Types';

const LOCALE_TEXT = {
  [Locale.en]: 'English',
  [Locale.ar]: 'عربي',
  [Locale.tr]: 'Türkçe',
};

const DEFAULT = Locale.en;
const SYSTEM = Localization.locale.split('-')[0].toLowerCase() as Locale;

const Context = createContext({
  locale: DEFAULT,
  locales: Array<{ value: Locale; label: string }>(),
  changeLocale(locale: Locale): void {},
});

interface Props {
  children?: ReactNode;
}
export function LocaleContextProvider({ children }: Props) {
  const [locale, setLocale] = useState(DEFAULT);

  const localesWithNames = Object.values(Locale)
    .map((value: Locale) => ({
      label: LOCALE_TEXT[value],
      value,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));

  useEffect(() => {
    (async () => {
      const lastLocale = await AsyncStorage.getItem('selectedLocale');

      if (!lastLocale) {
        const locale = SYSTEM in Locale ? SYSTEM : DEFAULT;
        changeLocale(locale);
        await i18n.changeLanguage(locale);
        return;
      }

      setLocale(lastLocale as Locale);
    })();
  }, []);

  const changeLocale = async (locale: Locale) => {
    const lastLanguage = await AsyncStorage.getItem('selectedLocale');

    if (lastLanguage === locale) return;

    await AsyncStorage.setItem('selectedLocale', locale);
    setLocale(locale);
  };

  return (
    <Context.Provider
      value={{
        locale,
        locales: localesWithNames,
        changeLocale,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useLocale() {
  return useContext(Context);
}
