import styled from "styled-components"

export const STimer = styled.div`
margin: 0 20px;
display: grid;
grid-template-columns: auto auto;
grid-template-rows: 80px auto 40px;
width: 300px;
height: 300px;
border: 1px solid #888;
border-radius: 15px;
box-sizing: border-box;
padding: 10px;
backdrop-filter:blur(10px);
& p{
	font-size: 36px;
	margin: 0;
	grid-row: 2;
	grid-column: span 2;
}
& h2{
	margin: 0;
	grid-row: 1;
	grid-column: span 2;
	font-size: 38px;
}

`;
export const SButton = styled.button`
width: 120px;
height: 35px;
outline: none;
border-radius: 10px;
border: none;
font-weight: 500;
font-size: 18px;
margin: 5px;
cursor:pointer;
`
export const SButtonStart = styled(SButton)`
background-color: #A8DD5C;
grid-column: 1;
grid-row:3;
align-self: center;
`
export const SButtonReset = styled(SButton)`
background-color: #E76C39;
grid-column: 2;
align-self: center;
grid-row:3;
`