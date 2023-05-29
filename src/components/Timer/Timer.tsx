import { useState } from 'react';
import { STimer, SButtonStart, SButtonReset } from '../../assets/styles/Timer.style';

export default function Timer({title}:any) {
    const [time, setTime] = useState(0);
	const [timerId,setTimerId]:any = useState(null)
	const [firtsStart,setFirtsStart] = useState(true)
	function toggle() {
		if(timerId){
			clearTimeout(timerId)
			setTimerId(null)
		}
		else{
			setFirtsStart(false)
			setTimerId(
				setTimeout(function tick(){
					setTime((time:number)=>time+1)
					setTimerId(setTimeout(tick))
				})
			)
		}
	}
	function reset(){
		setTimerId((val:any)=>{
			clearTimeout(val)
			return null
		})
		setTime(0)
		setFirtsStart(true)
	}
    return (
		<STimer>
            <h2>{title}</h2>
            <p>Время:<br/> {Math.floor(time/(60*100))} : {Math.floor(time/(100))%60} : {(time-Math.floor(time/1000)*1000)}</p>
			<SButtonStart onClick={toggle}>{!timerId && firtsStart ? 'Запустить': timerId ? 'Пауза' : 'Возобновить'}</SButtonStart>
			<SButtonReset onClick={reset}>Сбросить</SButtonReset>
		</STimer>
    );
}
