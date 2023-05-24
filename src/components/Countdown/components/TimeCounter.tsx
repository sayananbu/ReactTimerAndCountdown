import React from 'react';
import PropTypes from 'prop-types'
import { STimeDiv, STimeNumber } from '../../../assets/styles/Countdown.style';

function TimeCounter({time}:any) {
    return (
        <STimeDiv>
            <STimeNumber>{time.min}</STimeNumber>
            <STimeNumber>:</STimeNumber>
            <STimeNumber>{time.sec}</STimeNumber>
        </STimeDiv>
    );
}
export default TimeCounter;
