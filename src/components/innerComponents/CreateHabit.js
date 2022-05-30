import React from "react" 
import styled from 'styled-components';
import axios from "axios";

export default function CreateHabit(props){
    let habitDays = [];
    const [habitName,setHabitName] = React.useState("");
    const [objNewHabit, setObjNewHabit] = React.useState({});
    const arrayDays = [7,1,2,3,4,5,6];

   
  function Display(props) {
    let nome;
    const [chosen, setChosen] = React.useState(false);
    switch (props) {
      case 7:
        nome = "D";
        break;
      case 1:
        nome = "S";
        break;
      case 2:
        nome = "T";
        break;
      case 3:
        nome = "Q";
        break;
      case 4:
        nome = "Q";
        break;
      case 5:
        nome = "S";
        break;
      case 6:
        nome = "S";
        break;
      default:
        nome = "";
    }
    return (
        <div className={chosen ? "selected":"notSelected"} onClick={()=> {habitDays.push(props);setChosen(true);console.log(habitDays)} }>{nome}</div>
    );
  }

    function SetDays(){
        let lista = [7, 1, 2, 3, 4, 5, 6];
        let listreturn = lista.map(Display);
        return listreturn;
    }
    
    function sendingNewHabit(){
        if(habitDays.length !== 0 && habitName.length !==0){
            setObjNewHabit({name:habitName, days:habitDays});

            const config = {
                headers: { Authorization: `Bearer ${props.token}` }
            };
            const requisicao = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',{name:habitName, days:habitDays},config);
            requisicao.then(success);
            function success(resp){ 
                props.close(true);
                const config = {
                    headers: { Authorization: `Bearer ${props.token}` }
                };
                const req = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',config);
                req.then(su);
                function su(res){ 
                    props.setList([...res.data]);
                }
                req.catch(er);  
                function er(){
                    alert("Deu erro");
                } 
            }
            requisicao.catch(erro);  
            function erro(){
                alert("Deu erro");
            }
        } else{
            alert("Preencha corretamente!");
        }
    }

    return(
        <Container>
            <input value={habitName} onChange={(e) => setHabitName(e.target.value)} placeholder="nome do hábito"></input>
            <div className="listDays">
                <SetDays/>
            </div>
            <div className="cancelar">
                <span onClick={()=>props.close(true)}>cancelar</span>
            </div>
            <div onClick={()=>sendingNewHabit()} className="salvar">
                <span>salvar</span>
            </div>
            
        </Container>
    )
}

const Container = styled.div`
    position:relative;
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-left:2px;
    margin-top:24px;
    .listDays{
        display:flex;
        flex-direction:row;
        margin-top:6px;
        margin-left:10px;
        &:hover{
            cursor:pointer;
        }
    }
    .listDays div{
        width: 30px;
        height: 30px;
        border: solid 1px #D4D4D4;
        border-radius:5px;
        //color:#D4D4D4;
        margin-right:4px;
        display:flex;
        justify-content:center;
        align-items:center;

        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
    }
    .notSelected{
        color: #DBDBDB;
    }

    .selected{
        background:#CFCFCF;
        color:#ffffff;    
    }
    input{
        margin-top: 18px;
        margin-left:10px;
        width: 303px;
        height: 45px;
        border: 1px solid #D4D4D4;
        border-radius:5px;
        padding-left: 5px;
        &::placeholder{
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            color:#D4D4D4;
        }
    }
    .cancelar{
        position: absolute;
        right:124px;
        bottom:28px;
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        color: #52B6FF;
    }
    .salvar{
        width: 84px;
        height: 35px;
        border-radius:5px;
        background-color: #52B6FF;
        width: 84px;
        height: 35px;
        position: absolute;
        right:18px;
        bottom:18px;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .salvar span{
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        color: #ffffff;
    }
`