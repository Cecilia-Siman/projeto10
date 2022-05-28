import React from "react" 
import styled from 'styled-components';
import axios from "axios";

export default function CreateHabit(props){
    let habitDays = [];
    const [habitName,setHabitName] = React.useState("");
    const [objNewHabit, setObjNewHabit] = React.useState({});

    function SetDays(){
        const [colorBackground,setColorBackground] = React.useState(false);
        return (
            <>
                <div className={colorBackground ? "selected": "notSelected"} onClick={()=> {habitDays.push(7);setColorBackground(true)} }>D</div>
                <div className={colorBackground ? "selected": "notSelected"} onClick={()=> {habitDays.push(1);setColorBackground(true)} }>S</div>
                <div className={colorBackground ? "selected": "notSelected"} onClick={()=> {habitDays.push(2);setColorBackground(true)} }>T</div>
                <div className={colorBackground ? "selected": "notSelected"} onClick={()=> {habitDays.push(3);setColorBackground(true)} }>Q</div>
                <div className={colorBackground ? "selected": "notSelected"} onClick={()=> {habitDays.push(4);setColorBackground(true)} }>Q</div>
                <div className={colorBackground ? "selected": "notSelected"} onClick={()=> {habitDays.push(5);setColorBackground(true)} }>S</div>
                <div className={colorBackground ? "selected": "notSelected"} onClick={()=> {habitDays.push(6);setColorBackground(true)} }>S</div>
            </>
        )
    }
    


    function sendingNewHabit(){
        if(habitDays.length !== 0 && habitName.length !==0){
            setObjNewHabit({name:habitName, days:habitDays});
            console.log("objeto:"+ objNewHabit.name );
            //{props.token};
        } else{
            alert("Preencha corretamente!");
        }
    }

    return(
        <Container>
            <input onChange={(e) => setHabitName(e.target.value)} placeholder="nome do hábito"></input>
            <div className="listDays">
                <SetDays />
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
        color:#D4D4D4;
        margin-right:4px;
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