
import PropTypes from 'prop-types';

interface ProgressBarInterface {
    value: number;
    max: number;
}

function ProgressBar({value, max}: ProgressBarInterface) {
    return (
        <>
          <progress className="progress w-56" value={value} max={max}></progress> 
        </>
    )
}

ProgressBar.propTypes = {
    value: PropTypes.number.isRequired
  };
export default ProgressBar
