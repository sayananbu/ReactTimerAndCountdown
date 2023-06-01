import { ChangeEvent, useState } from 'react';
import ProgressBar from './components/ProgressBar';
import TimeCounter from './components/TimeCounter';
import TimeInput from './components/TimeInput';
import useSound from 'use-sound';
import sound from '../Countdown/sounds/fuckyou.mp3';
import {
    SCountdown,
    STitle,
    SMinutes,
    SSeconds,
    SRange,
    SButtonStart,
    SButtonReset,
} from '../../styledComponents/Countdown.style';
type CountdownProps = {
    title: string;
};
type TimeType = { min: number; sec: number };
type IntervalType = ReturnType<typeof setInterval> | undefined;

export default function Countdown({ title }: CountdownProps) {
    const [time, setTime] = useState<TimeType>({ min: 0, sec: 0 });
    const [countDownIsSet, setCountDownIsSet] = useState<boolean>(false);
    const [intervalId, setIntervalId] = useState<IntervalType>(undefined);
    const [memoTime, setMemoTime] = useState<TimeType>({ min: 0, sec: 0 });
    const [playActive] = useSound(sound, { volume: 0.4 });

    function inputMinutes(e: ChangeEvent<HTMLInputElement>) {
        let value = parseInt(e.target.value);
        setTime(val => ({ min: !value ? 0 : value > 720 ? 720 : value, sec: val.sec }));
    }
    function inputSeconds(e: ChangeEvent<HTMLInputElement>) {
        let value = parseInt(e.target.value);
        setTime((val: TimeType) => ({ min: val.min, sec: !value ? 0 : value > 59 ? 59 : value }));
    }
    function inputRange(e: ChangeEvent<HTMLInputElement>) {
        let value = parseInt(e.target.value);
        let minutes = Math.floor(value / 60);
        let seconds = value - minutes * 60;
        setTime({ min: minutes, sec: seconds });
    }
    function startCountDown() {
        if (!time.min && !time.sec) return;
        if (!countDownIsSet) setMemoTime({ min: time.min, sec: time.sec });
        setCountDownIsSet(true);
        if (intervalId) {
            setIntervalId(val => {
                clearInterval(val);
                return undefined;
            });
        } else {
            setIntervalId(
                setInterval(() => {
                    setTime(val => {
                        if (val.min && !val.sec) {
                            return { min: val.min - 1, sec: 59 };
                        } else if (!(val.min + val.sec - 1)) {
                            setIntervalId((val: IntervalType) => {
                                clearInterval(val);
                                return undefined;
                            });
                            playActive();
                            return { min: 0, sec: 0 };
                        } else return { min: val.min, sec: val.sec - 1 };
                    });
                }, 1000)
            );
        }
    }
    function resetCountDown() {
        if (countDownIsSet) {
            setIntervalId((val: IntervalType) => {
                clearInterval(val);
                return undefined;
            });
            setCountDownIsSet(false);
            setTime({ min: memoTime.min, sec: memoTime.sec });
        } else setTime({ min: 0, sec: 0 });
    }

    return (
        <SCountdown>
            <STitle>{title}</STitle>
            {countDownIsSet ? (
                <>
                    <TimeCounter time={time} />
                    <ProgressBar min={time.min} sec={time.sec} memoTime={memoTime} />
                </>
            ) : (
                <>
                    <SMinutes>
                        <TimeInput title='Минуты' value={time.min} onChange={inputMinutes} />
                    </SMinutes>
                    <SSeconds>
                        <TimeInput title='Секунды' value={time.sec} onChange={inputSeconds} />
                    </SSeconds>
                    <SRange
                        type='range'
                        max={60 * 60}
                        min={0}
                        step={15}
                        value={time.min * 60 + time.sec}
                        onChange={inputRange}
                    />
                </>
            )}
            {time.min + time.sec !== 0 && (
                <SButtonStart onClick={startCountDown}>{!intervalId ? 'Запустить' : 'Пауза'}</SButtonStart>
            )}
            <SButtonReset onClick={resetCountDown}>Сбросить</SButtonReset>
        </SCountdown>
    );
}
