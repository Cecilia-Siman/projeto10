import React from "react" 
import styled from 'styled-components'
import axios from "axios"

export default function ListingHabits(props){
    if (props.list.length === 0){
        return (<p className="previous">Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>)
    } 
    else{
        return (<p className="previous">Boa!</p>)
        /*function RenderTodayHabits(prop){
            return(
                <>
                    <div className="habit" key={prop.id}>
                        <p className="title">{prop.name}</p>
                        <button>Feito</button>
                        
                    </div>
                </>
            )
        }
        const listReturn = props.list.map(RenderTodayHabits);
        return listReturn;*/
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
