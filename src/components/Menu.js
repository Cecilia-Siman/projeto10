import React from "react" 
import styled from 'styled-components';

import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export default function Menu() {
    const navigate = useNavigate();

    
    return(
        <BarMenu>
            <div className="bar">
                <p onClick={()=>navigate('/habitos')}>Hábitos</p>
                <p onClick={()=>navigate('/historico')}>Histórico</p>
            </div>
            <div onClick={()=>navigate('/hoje')} className="circle">
                <p >Hoje</p>
            </div>
        </BarMenu>
    )
}

const BarMenu = styled.div`

    width:100%;
    display:flex;
    justify-content:center;
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
    }
    .bar p{
        color:#52B6FF;
    }
    .circle p{
        color: #FFFFFF;
    }
    .bar{
        box-sizing:border-box;
        background-color:#ffffff;
        width:100%;
        height:70px;
        position:fixed;
        left: 0px;
        bottom: 0px;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
        padding: 0px 36px;
    }
    .circle{
        background-color: #52B6FF;
        width:90px;
        height:90px;
        border-radius:50%;
        position:fixed;
        bottom: 10px;   
        display:flex;
        justify-content:center;
        align-items:center;
    }
`