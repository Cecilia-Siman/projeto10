import React from "react" 
import styled from 'styled-components'
import axios from "axios"

export default function ListingHabits(props){
    if (props.list.length === 0){
        return (<p className="previous">Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>)
    } 
    else{
        function RenderHabits(prop){
            //console.log("prop",prop.name);

            /*function listDays(){

            }

            function HabitDays(){
            const returnDays = prop.days.map()
            return returnDays;
            }*/

            function Display(number) {
                let nome;
                let classe = "notSelected";
                switch (number) {
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

                for (let i=0;i<prop.days.length;i++){
                    
                    if (number === prop.days[i]){
                        classe = "selected";
                    }
                }
                

                return (
                    <div className={classe} >{nome}</div>
                );
              }
            
                function SetDays(){
                    let lista = [7, 1, 2, 3, 4, 5, 6];
                    let listreturn = lista.map(Display);
                    return listreturn;
                }

            /*function deleteHabit(id){
                const config = {
                    headers: { Authorization: `Bearer ${props.token}` }
                };
                axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,config)
                .then(()=> axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',config)
                .then((res)=>  props.setList([...res.data]))
                )
            }*/

            return(
                <>
                    <div className="habit" key={prop.id}>
                        <p className="title">{prop.name}</p>
                        <ion-icon name="trash-outline" ></ion-icon>
                        <ListDays>
                            <SetDays/>
                        </ListDays>
                        
                    </div>
                </>
            )
        }
        const listReturn = props.list.map(RenderHabits);
        return listReturn;
    }
}
/*onClick={React.useEffect(() => {
    console.log("teste");
    const config = {
        headers: { Authorization: `Bearer ${props.token}` }
    };
    axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${prop.id}`,config)
    .then(()=> axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',config)
    .then((res)=>  props.setList([...res.data]))
    )
}, [])} */

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


    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
}
.notSelected{
    color: #DBDBDB;
}

.selected{
    background:#CFCFCF;
    color:#ffffff; 
}
`
