import { useContext, useState } from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { LocalizationContext, LocalizationProvider } from './LocalizationContext';

const App = () => {

    const { translations, setAppLanguage, initializeAppLanguage, activeLanguageName } =
      useContext(LocalizationContext);

      const [data, updateData] = useState({
        activeLanguageName: translations.getString('friendlyLanguageName')
    })

    initializeAppLanguage();

    const changeLanguage = (language: string) => {
      setAppLanguage(language);
      updateState('activeLanguageName', translations.getString('friendlyLanguageName'))
    };

    const updateState = (key: string, value: string) =>{
        updateData(prevState => ({
            ...prevState,
            [key]: value
         }));

    }

    const getActiveLanguageName = () =>{
        updateState('activeLanguageName', activeLanguageName())
    }

    const currentLanguage = () => translations.getLanguage();
    return (
      <>
        <span data-testid="txtDisplayLanguage">{data.activeLanguageName}</span>
        <button
          data-testid="btnChangeLang"
          onClick={() => changeLanguage('ar')}
        >Change Language</button>

        <button data-testid="btnGetActiveLanguageName" onClick={getActiveLanguageName}>
            {data.activeLanguageName}
        </button>
      </>
    );
  };

describe('Context: LocalizationContext', () =>{

    it('should initalize a locale', async () => {
        render(
          <LocalizationProvider>
            <App />
          </LocalizationProvider>
        );
        expect(
            screen.queryByTestId('txtDisplayLanguage')
          ).toBeInTheDocument();

        const txt = screen.queryByTestId('txtDisplayLanguage')
        expect(txt?.textContent).toStrictEqual('English')

      });

      it('should get friendly name of currently activated language', async () => {
        render(
          <LocalizationProvider>
            <App />
          </LocalizationProvider>
        );
    
        const btn = screen.queryByTestId('btnGetActiveLanguageName')
        fireEvent.click(btn!!)
        expect(btn?.textContent).toStrictEqual('English')

      });

      it('should change language', async () => {
        render(
          <LocalizationProvider>
            <App />
          </LocalizationProvider>
        );
        const label = screen.queryByTestId('txtDisplayLanguage')
        const btn = screen.queryByTestId('btnChangeLang')
        
        await act(async () => {
            fireEvent.click(btn!!)
          });
          expect(label?.textContent).toStrictEqual('Arabic')

      });
    
    
    

})