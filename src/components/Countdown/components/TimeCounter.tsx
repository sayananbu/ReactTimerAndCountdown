import { STimeContainer, STimeNumber } from '../../../styledComponents/Countdown.style';

type TimeCounterProps = {
	time:{min:number,sec:number}
}
function TimeCounter({time}:TimeCounterProps) {
    return (
        <STimeContainer>
            <STimeNumber>{time.min}</STimeNumber>
            <STimeNumber>:</STimeNumber>
            <STimeNumber>{time.sec<10 ? '0'+time.sec : time.sec}</STimeNumber>
        </STimeContainer>
    );
}
export default TimeCounter;
