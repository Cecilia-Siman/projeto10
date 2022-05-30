import React from "react" 
import styled from 'styled-components';

//import { LoginContext } from "../Contexts/LoginComponent";


export default function TopBar(props) {
    //const {image} = React.useContext(LoginContext);
    
    return(
        <Top>
            <h1>TrackIt</h1>
            <img src={props.image} alt='user'></img>
        </Top>
    )
}

const Top = styled.div`
    z-index:1;
    box-sizing:border-box;
    background-color: #126BA5;
    height: 70px;
    width:100%;
    position:fixed;
    left: 0px;
    top: 0px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding:0px 18px;
    img{
        height:51px;
        width:51px;
        border-radius:50%;
    }
`