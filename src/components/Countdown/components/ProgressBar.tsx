import PropTypes from 'prop-types';
import {SProgressLabel, SProgress, SProgressContainer } from '../../../styledComponents/Countdown.style';

type ProgressBarProps = {
	min:number,
	sec:number,
	memoTime:{min:number,sec:number}
}
export default function ProgressBar({min,sec,memoTime}:ProgressBarProps) {
	let fullTimeSecs = min * 60 + sec
	let memoFullTimeSecs = memoTime.min * 60 + memoTime.sec
    return (
        <SProgressContainer>
            <SProgressLabel>
                {100 - Math.floor(fullTimeSecs * 100 / memoFullTimeSecs)}%
            </SProgressLabel>
            <SProgress
                max={memoFullTimeSecs}
                value={memoFullTimeSecs - fullTimeSecs}
            />
        </SProgressContainer>
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
