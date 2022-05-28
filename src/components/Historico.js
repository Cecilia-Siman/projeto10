import React from "react" 
import styled from 'styled-components';
import axios from "axios";
import { Link } from "react-router-dom";
import { LoginContext } from "../Contexts/LoginComponent";

import TopBar from "./TopBar";
import Menu from "./Menu";


export default function Historico() {
    const {image,token,setToken} = React.useContext(LoginContext);
    
    return (
        <>
            <TopBar image={image} />
            <Container>
                <h2>Histórico</h2>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Container>
            <Menu />
        </>
    )
}

const Container = styled.div`
    margin:92px 15px 100px 15px;
    height:100%
    width:100%;

    h2{
        margin-top:10px;
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }

    p{
        margin-top:34px;
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }

`