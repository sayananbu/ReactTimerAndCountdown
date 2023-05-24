import React from 'react';
import { SSubtitle, SInput } from '../../../assets/styles/Countdown.style';

export default function TimeInput(props:any) {
    return (
        <>
            <SSubtitle>{props.title}</SSubtitle>
            <SInput type='text' {...props} />
        </>
    );
}
