
import PropTypes from 'prop-types';
import Translated from '../Translated/Translated';


export enum TitleTypes {
  main = "Main",
  subTitle = "SubTitle"
}

export interface SectionTitleInterface {
    titleTranslatedKey: string;
    titleType?: TitleTypes
}

function SectionTitle({titleTranslatedKey, titleType = TitleTypes.main}: SectionTitleInterface) {

  const renderTitle = (type: TitleTypes) =>{
     switch (type){
      
      case TitleTypes.subTitle:
        return (<h4 className="text-2xl font-normal leading-normal mt-0 mb-2 text-purple-800">
        <Translated translatationKey={titleTranslatedKey}/>
      </h4>);

      default:
        return (<h3 className="text-3xl font-normal leading-normal mt-0 mb-2 text-purple-800">
        <Translated translatationKey={titleTranslatedKey}/>
      </h3>)
      
     }
  }
    return (
        renderTitle(titleType)
    )
}

SectionTitle.propTypes = {
  titleTranslatedKey: PropTypes.string.isRequired,
  titleType: PropTypes.string
  };

  SectionTitle.defaultProps = {
    titleType: TitleTypes.main
  }
export default SectionTitle
