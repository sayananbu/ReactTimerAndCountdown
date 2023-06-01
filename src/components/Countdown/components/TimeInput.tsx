import { SSubtitle, SInput } from '../../../styledComponents/Countdown.style';

export default function TimeInput(props:any) {
    return (
        <>
            <SSubtitle>{props.title}</SSubtitle>
            <SInput type='text' {...props} />
        </>
    );
}
