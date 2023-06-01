import { useState } from 'react';
import { SButtonStart, SButtonReset } from '../../styledComponents/Countdown.style';
import { STimer } from '../../styledComponents/Timer.style';
type ITimerProps = {
    title: string;
};
type IntervalType = ReturnType<typeof setInterval> | undefined;
export default function Timer({ title }: ITimerProps) {
    const [time, setTime] = useState<number>(0);
    const [timerId, setTimerId] = useState<IntervalType>(undefined);
    const [firtsStart, setFirtsStart] = useState<boolean>(true);

    function toggle() {
        if (timerId) {
            setTimerId((val: IntervalType) => {
                clearInterval(val);
                return undefined;
            });
        } else {
            setFirtsStart(false);
            setTimerId(
                setInterval(() => {
                    setTime((time: number) => time + 1);
                })
            );
        }
    }
    function reset() {
        setTimerId((val: IntervalType) => {
            clearInterval(val);
            return undefined;
        });
        setTime(0);
        setFirtsStart(true);
    }
    function formatDisplayTime(time: number): string[] {
        let minutes = Math.floor(time / (60 * 100)).toString();
        let seconds: number | string = Math.floor(time / 100) % 60;
        let milliseconds: number | string = time - Math.floor(time / 1000) * 1000;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        milliseconds = milliseconds < 10 ? '00' + milliseconds : milliseconds < 100 ? '0' + milliseconds : milliseconds;
        return [minutes, seconds as string, milliseconds as string];
    }
	function buttonStatus():string{
		return !timerId && firtsStart ? 'Запустить' : timerId ? 'Пауза' : 'Возобновить'
	}
    let [minutes, seconds, milliseconds] = formatDisplayTime(time);
    return (
        <STimer>
            <h2>{title}</h2>
            <p>
                Время:
                <br /> {minutes} : {seconds} : {milliseconds}
            </p>
            <SButtonStart onClick={toggle}>
                {buttonStatus()}
            </SButtonStart>
            <SButtonReset onClick={reset}>Сбросить</SButtonReset>
        </STimer>
    );
}
