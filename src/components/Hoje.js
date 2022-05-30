import React from "react" 
import styled from 'styled-components';
import axios from "axios";
import { LoginContext } from "../Contexts/LoginComponent";
import dayjs from "dayjs";

import TopBar from "./TopBar";
import Menu from "./Menu";
import ListingTodayHabits from "./innerComponents/ListingTodayHabits"


export default function Hoje() {
    const {setUserName,setImage,image,token,setToken,habitsList, setHabitsList,percent,setPercent} = React.useContext(LoginContext);
    const [todayHabits,setTodayHabits] = React.useState([]); 
    const [sumHabits,setSumHabits] = React.useState(0);
    const [sumDone,setSumDone] = React.useState(0);

    const listaSerializada = localStorage.getItem("meusDados");
    if (listaSerializada){
        const dadosDeserializados = JSON.parse(listaSerializada);
        console.log(dadosDeserializados);
        setImage(dadosDeserializados.image);
        setUserName(dadosDeserializados.name); 
        setToken(dadosDeserializados.token);
    }
    
    //inicio da lista de habitos
    React.useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const request = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',config);
        request.then(success);
        function success(resposta){ 
            setTodayHabits([...resposta.data]);
            setSumHabits(resposta.data.length);
            console.log("quanto habitos: ",resposta.data.length);
        }
        request.catch(erro);  
        function erro(){
            alert("Deu erro");
        }
        //fim da lista de habitos     
	}, []);
    function Percent(){
        let contador = 0;
        for (let i=0;i<todayHabits.length;i++){
            
            if (todayHabits[i].done === true){
                console.log(i);
                contador ++;
            }
        }
        setSumDone(contador);

        let percentual = Math.round((sumDone/sumHabits)*100);
        setPercent(percentual);
        if (percentual === 0){
            return (
                <p className="nothingDone">Nenhum hábito concluído ainda</p>
            )
        }
        else{
            return (
                <p className="somethingDone">{percentual}% dos hábitos concluídos</p>
            );
        }
    }

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
            <Percent />
            <ListingTodayHabits list={todayHabits} setList ={setTodayHabits} token ={token}/>
        </Container>
        <Menu percent={percent}/>
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
    .nothingDone{
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA;

    }
    .somethingDone{
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #8FC549;
    }
    .previous{
        margin-top:34px;
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }
    


`
