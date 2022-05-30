import React from "react" 
import styled from 'styled-components'
import axios from "axios"

export default function ListingHabits(props){

    

    if (props.list.length === 0){
        return (<p className="previous">Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>)
    } 
    else{
        function RenderTodayHabits(prop){

            function MarkHabit(id,done){
                const config = {
                    headers: { Authorization: `Bearer ${props.token}` }
                };
                if (!done){

                    const requisicao = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,{}, config);
                    requisicao.then(success);
                    function success(){
                        const request = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',config);
                        request.then(success);
                        function success(resposta){ 
                            props.setList([...resposta.data]);
                        }
                        request.catch(erro);  
                        function erro(){
                            alert("Deu erro");
                        }
                    }        
                    
                    requisicao.catch(erro);  
                    function erro(){
                        alert("Deu erro");
                    }
                } else{
                    const req = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,{}, config);
                    req.then(success);
                    function success(){
                        const request = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',config);
                        request.then(success);
                        function success(resposta){ 
                            props.setList([...resposta.data]);
                        }
                        request.catch(erro);  
                        function erro(){
                            alert("Deu erro");
                        }
                    }        
                    
                    req.catch(erro);  
                    function erro(){
                        alert("Deu erro");
                    }
                }
            }
            return(
                <>
                    <Habitos key={prop.id}>
                        <p className="title">{prop.name}</p>
                        <button className={(prop.done ? "selected" : "notSelected")} onClick={()=>MarkHabit(prop.id,prop.done)}>
                        <ion-icon name="checkmark-outline"></ion-icon>
                        </button >
                        <div>
                            <p className={(prop.done ? "finishedSeq" : "unfinishedSeq")}>Sequência atual: {prop.currentSequence}</p>
                            <p>Seu recorde: {prop.highestSequence}</p>
                        </div>
                    </Habitos>
                </>
            )
        }
        const listReturn = props.list.map(RenderTodayHabits);
        return listReturn;
    }
}


const ListDays = styled.div `
display:flex;
flex-direction:row;
margin-left:15px;
div{
    width: 30px;
    height: 30px;
    border: solid 1px #D4D4D4;
    border-radius:5px;
    color:#D4D4D4;
    margin-right:4px;
    display:flex;
    justify-content:center;
    align-items:center;
}
`

const Habitos = styled.div `
    width: 340px;
    height: 91px;
    background:#ffffff;
    border-radius:5px;
    margin-bottom: 10px;
    margin-top:20px;
    border:solid 1px #ffffff;
    box-sizing:border-box;
    position:relative;
    .title{
        margin:10px 0px 8px 15px;
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        color: #666666;
    }

    button{
        position: absolute;
        width: 69px;
        height: 69px;
        right: 12px;
        top: 12px;

        
        border-radius: 5px;
    }
    .selected{
        background: #8FC549;
    }
    .notSelected{
        background: #E7E7E7;
    }
    ion-icon{
        font-size:50px;
        color:#ffffff;
        --ionicon-stroke-width: 70px;
    }

    div{
        //margin-left:15px;
        position: absolute;
        left: 15px;
        bottom: 17px;
    }
    div p{
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;

        color: #666666;
    }
    .finishedSeq{
        color:#8FC549;
    }

`
