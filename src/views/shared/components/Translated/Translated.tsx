
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { LocalizationContext } from 'store/contexts/LocalizationContext/LocalizationContext';


interface TranslateInterface {
    translatationKey: string;
}

function Translated({translatationKey}: TranslateInterface) {
  const { translations } = useContext(LocalizationContext);
    return (
        <>
         { translatationKey && translations.getString(translatationKey)}  
        </>
    )
}

Translated.propTypes = {
    translatationKey: PropTypes.string
  };

Translated.defaultProps = {
  translatationKey : ""
}
export default Translated
