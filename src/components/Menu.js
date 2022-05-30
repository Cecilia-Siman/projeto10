import React from "react" 
import styled from 'styled-components';

import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export default function Menu(props) {
    const navigate = useNavigate();

    function Progresso() {
        let value = props.percent;
        return (
          <CircularProgressbar
            value={value}
            circleRatio={1} /* Make the circle only 0.7 of the full diameter */
            styles={{
              trail: {
                strokeLinecap: "butt",
                transform: "rotate(-126deg)",
                transformOrigin: "center center",
                stroke:"hsla(205, 100%, 66%, 1)",
              },
              path: {
                transformOrigin: "center center",
                stroke: "hsla(0, 0%, 100%, 1)"
              },
              text: {
                fill: "#ddd"
              }
            }}
            strokeWidth={10}
          />
        );
      }

    
    return(
        <BarMenu>
            <div className="bar">
                <p onClick={()=>navigate('/habitos')}>Hábitos</p>
                <p onClick={()=>navigate('/historico')}>Histórico</p>
            </div>
            <div onClick={()=>navigate('/hoje')} className="circle">
                <div>
                    <Progresso />
                    <p >Hoje</p>
                </div>
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
    .circle div{
        position:relative;
        padding:5px;
    }
    .circle p{
        position:absolute;
        top:35px;
        left:25px;
    }
`