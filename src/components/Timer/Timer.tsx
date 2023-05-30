import { useState } from 'react';
import { STimer, SButtonStart, SButtonReset } from '../../assets/styles/Timer.style';

export default function Timer({ title }: any) {
    const [time, setTime] = useState(0);
    const [timerId, setTimerId]: any = useState(null);
    const [firtsStart, setFirtsStart] = useState(true);
    function toggle() {
        if (timerId) {
			setTimerId((val:any)=>{
				clearTimeout(val)
				return null
			})
        } else {
            setFirtsStart(false);
            setTimerId(
                setTimeout(function tick() {
                    setTime((time: number) => time + 1);
                    setTimerId(setTimeout(tick));
                })
            );
        }
    }
    function reset() {
        setTimerId((val: any) => {
            clearTimeout(val);
            return null;
        });
        setTime(0);
        setFirtsStart(true);
    }
	let minutes = Math.floor(time / (60 * 100))
	let seconds = Math.floor(time / 100) % 60
	let milliseconds = time - Math.floor(time / 1000) * 1000
    return (
        <STimer>
            <h2>{title}</h2>
            <p>
                Время:
                <br /> {minutes} : {seconds <10 ? '0'+ seconds:seconds } :{' '}
                {milliseconds<10 ? '00'+milliseconds:
					milliseconds<100 ? '0'+milliseconds:milliseconds
				}
            </p>
            <SButtonStart onClick={toggle}>
                {!timerId && firtsStart ? 'Запустить' : timerId ? 'Пауза' : 'Возобновить'}
            </SButtonStart>
            <SButtonReset onClick={reset}>Сбросить</SButtonReset>
        </STimer>
    );
}
