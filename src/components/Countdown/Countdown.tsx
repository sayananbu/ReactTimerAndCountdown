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

export default function Countdown({ title }: any) {
    const [time, setTime] = useState({ min: 0, sec: 0 });
    const [countDownIsSet, setCountDownIsSet] = useState(false);
    const [intervalId, setIntervalId]: any = useState(null);
    const [memoTime, setMemoTime] = useState({ min: 0, sec: 0 });
    function inputMinutes(e: any) {
        let insertData = e.nativeEvent.data;
        if (e.nativeEvent.inputType === 'insertText' && (Number(insertData) || insertData === '0')) {
            setTime(val => {
                let minValue = val.min * 10 + Number(insertData);
                minValue = minValue > 720 ? 720 : minValue;
                return { min: minValue, sec: val.sec };
            });
        } else if (e.nativeEvent.inputType.startsWith('delete') && Number(time.min)) {
            setTime(val => ({ min: Math.floor(val.min / 10), sec: val.sec }));
        }
    }
    function inputSeconds(e: any) {
        let insertData = e.nativeEvent.data;
        if (e.nativeEvent.inputType === 'insertText' && (Number(insertData) || insertData === '0')) {
            setTime(val => {
                let secValue = val.sec * 10 + Number(insertData);
                secValue = secValue > 60 ? 60 : secValue;
                return { min: val.min, sec: secValue };
            });
        } else if (e.nativeEvent.inputType.startsWith('delete') && Number(time.sec)) {
            setTime(val => ({ min: val.min, sec: Math.floor(val.sec / 10) }));
        }
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
                            return { min: 0, sec: 0 };
                        } else return { min: val.min, sec: val.sec - 1 };
                    });
                }, 1000)
            );
        }
    } 
	function inputRange(e:any){
		let value = parseInt(e.target.value)
		let minutes = Math.floor(value/60)
		let seconds = value - minutes*60
		setTime(val=>({min:minutes,sec:seconds}))
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
					<SRange type='range' max={60*60} min={0} step={15} value={time.min*60+time.sec} onChange={inputRange}/>
                </>
            )}
            <SButtonStart onClick={startCountDown}>{!intervalId ? 'Запустить' : 'Пауза'}</SButtonStart>
            <SButtonReset onClick={resetCountDown}>Сброс</SButtonReset>
        </SCountdown>
    );
}
