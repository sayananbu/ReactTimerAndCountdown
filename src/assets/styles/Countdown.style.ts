import styled from 'styled-components';

export const SCountdown = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: 80px auto 20px 100px;
    width: 350px;
	justify-items: center;
    border: 1px solid cyan;
    height: 400px;
    border-radius: 15px;
`;
export const STitle = styled.h3`
    grid-row: 1;
    align-self: center;
    justify-self: center;
    grid-column: span 2;
`;
export const SSubtitle = styled.h5``;

export const SProgress = styled.progress`
    grid-column: span 2;
    width: 71%;
	height: 10px;
	appearance:none;
	&::-webkit-progress-bar{
		background-color: #ccc;
		border-radius: 20px;
		overflow: hidden;
	}
`;
export const STimeNumber = styled.span`
    font-size: 3em;
    font-weight: 700;
`;
export const STimeDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-row: 2;
    grid-column: span 2;
`;

export const SProgressDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
	align-items: center;
    grid-column: span 2;
    grid-row: 3;
`;
export const SProgressLabel = styled.label`
    font-size: 20px;
    font-weight: 700;
    width: 60px;
`;

export const SButton = styled.button`
    width: 130px;
    height: 50px;
    font-weight: 700;
    font-size: 20px;
    border-radius: 15px;
    border: none;
    align-self: center;
    justify-self: center;
    cursor: pointer;
`;
export const SButtonStart = styled(SButton)`
    background-color: #74d878;
    grid-column: 1;
    grid-row: 4;
`;
export const SButtonReset = styled(SButton)`
    background-color: #d46d5b;
    grid-column: 2;
    grid-row: 4;
`;
export const SInputDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
`;
export const SMinutes = styled(SInputDiv)`
    grid-column: 1;
    grid-row: 2;
`;
export const SSeconds = styled(SInputDiv)`
    grid-column: 2;
    grid-row: 2;
`;
export const SInput = styled.input`
    border-radius: 10px;
    outline: none;
    border: none;
    height: 50px;
    width: 80%;
    text-align: center;
    font-weight: 600;
    font-size: 35px;
`;
export const SRange = styled.input`
	border-radius: 10px;
	grid-row:3;
	grid-column:span 2;
	
    outline: none;
    border: none;
    height: 20px;
    width: 88%;
`