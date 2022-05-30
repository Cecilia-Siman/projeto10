import React from "react" 
import styled from 'styled-components';
import axios from "axios";
import { LoginContext } from "../Contexts/LoginComponent";
import dayjs from "dayjs";

import TopBar from "./TopBar";
import Menu from "./Menu";
import ListingTodayHabits from "./innerComponents/ListingTodayHabits"


export default function Hoje() {
    const {image,token,setToken,habitsList, setHabitsList} = React.useContext(LoginContext);
    const [newHabit,setNewHabit] = React.useState(true);
    const [todayHabits,setTodayHabits] = React.useState([]); 
    
    //inicio da lista de habitos
    /*React.useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const request = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',config);
        request.then(success);
        function success(resposta){ 
            setTodayHabits([...resposta.data]);
            console.log("ok",resposta.data);
        }
        request.catch(erro);  
        function erro(){
            alert("Deu erro");
        }
        //fim da lista de habitos     
	}, []);*/
    //console.log("lista:",habitsList);

    function Today (){
        let now = dayjs().format('dddd, DD/MM');
        now = now.replace('Sunday','Domingo');
        now = now.replace('Monday','Segunda');
        now = now.replace('Tuesday','Terça');
        now = now.replace('Wednesday','Quarta');
        now = now.replace('Thursday','Quinta');
        now = now.replace('Friday','Sexta');
        now = now.replace('Saturday','Sábado');
        return (
            <h2>{now}</h2>
        )
    }
    return (
        <>
        <TopBar image={image} />
        <Container>
            <Today />
            <p>hi</p>
            <ListingTodayHabits list={todayHabits} />
        </Container>
        <Menu/>
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