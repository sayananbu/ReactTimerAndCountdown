import React from 'react';
import PropTypes from 'prop-types';
import { SProgress, SProgressDiv, SProgressLabel } from '../../../assets/styles/Countdown.style';

 function ProgressBar({min,sec,memoTime}:any) {
	let fullTimeSecs = min * 60 + sec
	let memoFullTimeSecs = memoTime.min * 60 + memoTime.sec
    return (
        <SProgressDiv>
            <SProgressLabel>
                {100 - Math.floor(fullTimeSecs * 100 / memoFullTimeSecs)}%
            </SProgressLabel>
            <SProgress
                max={memoFullTimeSecs}
                value={memoFullTimeSecs - fullTimeSecs}
            />
        </SProgressDiv>
    );
}
ProgressBar.propTypes = {
	min:PropTypes.number.isRequired,
	sec:PropTypes.number.isRequired,
	memoTime:PropTypes.object.isRequired
}
ProgressBar.defaultProps = {
	min:0,
	sec:0
}
export default ProgressBar
