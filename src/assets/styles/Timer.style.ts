import styled from "styled-components"

export const STimer = styled.div`
margin: 0 20px;
display: block;
width: 300px;
border: 1px solid #888;
border-radius: 15px;
box-sizing: border-box;
padding: 10px;
backdrop-filter:blur(10px);
`
export const SButton = styled.button`
width: 120px;
height: 30px;
outline: none;
border-radius: 8px;
border: none;
margin: 5px;
cursor:pointer;
`
export const SButtonStart = styled(SButton)`
background-color: #A8DD5C;
`
export const SButtonReset = styled(SButton)`
background-color: #E76C39;
`