import Survey from 'application/models/Survey';
import PropTypes from 'prop-types';
import ProgressBar from 'views/shared/components/ProgressBar/ProgressBar';
import SectionTitle from 'views/shared/components/SectionTitle/SectionTitle';
import Translated from "views/shared/components/Translated/Translated"

interface SurveyTableInterface {
    tableTitleTranslationKey: string;
    data: Survey[]
}

function SurveyTable({tableTitleTranslationKey, data}: SurveyTableInterface)  {
  return ( <>
  <SectionTitle titleTranslatedKey={tableTitleTranslationKey} />

  <table className="table w-full mt-12">

      <thead>
          <tr>
              <th>#</th>
              <th><Translated translatationKey="surveyTitle"/></th>
              <th><Translated translatationKey="surveyIsCurrentlyOpen"/></th>
              <th><Translated translatationKey="targetParticipants"/></th>
              <th><Translated translatationKey="completionProgress"/></th>
          </tr>
      </thead>
      <tbody>

        {data.map((survey, index)=> {
            return (
                <tr key={survey.id}>
                    <td>{index+1}</td>
                    <td>{survey.title}</td>
                    <td>
                        {survey.isCurrentlyOpen ? <Translated translatationKey="yes"/>: <Translated translatationKey="no"/> }
                    </td>
                    <td>{survey.targetNumberOfParticipants}</td>
                    <td><ProgressBar value={30} max={survey.targetNumberOfParticipants} /></td>
                </tr>
            )
        })}

     
      </tbody>
  </table>
</>
)
}

SurveyTable.propTypes = {
    tableTitleTranslationKey: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
  };

export default SurveyTable
