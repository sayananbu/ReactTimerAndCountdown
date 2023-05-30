import { useState } from 'react';
import {
    SButtonReset,
    SButtonStart,
    SCountdown,
    SMinutes,
    SRange,
    SSeconds,
    STitle,
} from '../../assets/styles/Countdown.style';
import ProgressBar from './components/ProgressBar';
import TimeCounter from './components/TimeCounter';
import TimeInput from './components/TimeInput';
import useSound from 'use-sound';
import sound from '../Countdown/sounds/fuckyou.mp3';

export default function Countdown({ title }: any) {
    const [time, setTime] = useState({ min: 0, sec: 0 });
    const [countDownIsSet, setCountDownIsSet] = useState(false);
    const [intervalId, setIntervalId]: any = useState(null);
    const [memoTime, setMemoTime] = useState({ min: 0, sec: 0 });
    const [playActive] = useSound(sound, { volume: 0.4 });
    function inputMinutes(e: any) {
        let value = parseInt(e.target.value)
        setTime(val=>({min:!value ? 0 : value>720 ? 720 : value,sec:val.sec}))
    }
	function inputSeconds(e: any) {
		let value = parseInt(e.target.value)
        setTime(val=>({min:val.min,sec:!value ? 0 : value>59 ? 59 : value}))
    }
	function inputRange(e: any) {
        let value = parseInt(e.target.value);
        let minutes = Math.floor(value / 60);
        let seconds = value - minutes * 60;
        setTime(val => ({ min: minutes, sec: seconds }));
    }
    function startCountDown() {
        if (!time.min && !time.sec) return;
        if (!countDownIsSet) setMemoTime({ min: time.min, sec: time.sec });
        setCountDownIsSet(true);
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        } else {
            setIntervalId(
                setInterval(() => {
                    setTime(val => {
                        if (val.min && !val.sec) {
                            return { min: val.min - 1, sec: 59 };
                        } else if (!(val.min + val.sec - 1)) {
                            setIntervalId((val: any) => {
                                clearInterval(val);
                                return null;
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
            setIntervalId((val: any) => {
                clearInterval(val);
                return null;
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
            <SButtonStart onClick={startCountDown}>{!intervalId ? 'Запустить' : 'Пауза'}</SButtonStart>
            <SButtonReset onClick={resetCountDown}>Сбросить</SButtonReset>
        </SCountdown>
    );
}
