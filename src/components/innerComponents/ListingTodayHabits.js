import React from "react" 
import styled from 'styled-components'
import axios from "axios"

export default function ListingHabits(props){
    if (props.list.length === 0){
        return (<p className="previous">Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>)
    } 
    else{
        //return (<p className="previous">Deu certo!</p>)
        function RenderTodayHabits(prop){
            return(
                <>
                    <Habitos key={prop.id}>
                        <p className="title">{prop.name}</p>
                        <button>
                        <ion-icon name="checkmark-outline"></ion-icon>
                        </button>
                        <div>
                            <p>Sequência atual: {prop.currentSequence}</p>
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

        background: #E7E7E7;
        border-radius: 5px;
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

`
