import PropTypes from 'prop-types';
import { createContext, ReactNode, useState } from 'react';
import LocalizedStrings from 'react-localization';
import config from 'config/config';

const { localization : localeConfig } = config

export const translations = new LocalizedStrings(
    {
        ...localeConfig.languages
    }
);



export const LocalizationContext = createContext({
  translations,
  setAppLanguage: (language: string) => { },
  appLanguage: localeConfig.defaultLanguage,
  initializeAppLanguage: () => { },
  activeLanguageName: (): string => ''
});

export const LocalizationProvider = ({ children }: {children: ReactNode}) => {
  const [appLanguage, setAppLanguage] = useState(localeConfig.defaultLanguage);

  const setLanguage = (language: string) => {
    setAppLanguage(language);
    translations.setLanguage(language);
    return language;
  };

  const initializeAppLanguage = () => {
      //TODO: get from local storage
    setAppLanguage(localeConfig.defaultLanguage);
    translations.setLanguage(localeConfig.defaultLanguage);
  };

  const friendlyLanguageName = (): string =>{
      return translations.getString('friendlyLanguageName')
  }

  return (
    <LocalizationContext.Provider
      value={{
        translations,
        setAppLanguage: setLanguage,
        appLanguage,
        initializeAppLanguage,
        activeLanguageName: friendlyLanguageName
      }}>
      {children}
    </LocalizationContext.Provider>
  );
};

LocalizationProvider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired
};
