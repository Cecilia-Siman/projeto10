import React from "react" 
import styled from 'styled-components';
import axios from "axios";
import { LoginContext } from "../Contexts/LoginComponent";

import TopBar from "./TopBar";
import Menu from "./Menu";
import CreateHabit from "./innerComponents/CreateHabit";




export default function Habits() {
    const {image,token,setToken} = React.useContext(LoginContext);
    const [newHabit,setNewHabit] = React.useState(true);
    
    return (
        <>
            <TopBar image={image} />
            <Container token={token}>
                <div className="top">
                    <h2>Meus hábitos</h2>
                    <button onClick={()=>setNewHabit(false)}>+</button>
                </div>
                {newHabit ? "": <CreateHabit close={setNewHabit}/>}
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </Container>
            <Menu />
        </>
    )
}

const Container = styled.div`
    margin:92px 15px 100px 15px;
    height:100%
    width:100%;
    .top{
        display:flex;
        justify-content:space-between;
        h2{
            margin-top:10px;
            font-style: normal;
            font-weight: 400;
            font-size: 22.976px;
            line-height: 29px;
            color: #126BA5;
        }
        button{
            width: 40px;
            height: 35px;
            background: #52B6FF;
            border-radius: 4.63636px;
            color:#ffffff;
            &:hover{
                cursor:pointer;
            }
        }
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