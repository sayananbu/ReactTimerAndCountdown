import { SSubtitle, SInput } from '../../../styledComponents/Countdown.style';

type InputTypes = {
	title:string,
	value:number,
	onChange:React.ChangeEventHandler<HTMLInputElement>
}
export default function TimeInput({title, value, onChange}:InputTypes) {
    return (
        <>
            <SSubtitle>{title}</SSubtitle>
            <SInput type='text' value={value} onChange={onChange}/>
        </>
    );
}
