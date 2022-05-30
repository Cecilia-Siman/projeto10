import React from "react" 
import styled from 'styled-components';
import axios from "axios";
import { LoginContext } from "../Contexts/LoginComponent";

import TopBar from "./TopBar";
import Menu from "./Menu";
import CreateHabit from "./innerComponents/CreateHabit";
import ListingHabits from "./innerComponents/ListingHabits"



export default function Habits() {
    const {image,token,setToken,habitsList, setHabitsList} = React.useContext(LoginContext);
    const [newHabit,setNewHabit] = React.useState(true); 
    
    //inicio da lista de habitos
    React.useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const req = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',config);
        req.then(su);
        function su(resp){ 
            setHabitsList([...resp.data]);
        }
        req.catch(er);  
        function er(){
            alert("Deu erro");
        }  
	}, []);
    //fim da lista de habitos

    
    
    return (
        <>
            <TopBar image={image} />
            <Container token={token}>
                <div className="top">
                    <h2>Meus hábitos</h2>
                    <button onClick={()=>setNewHabit(false)}>+</button>
                </div>
                {newHabit ? "": <CreateHabit close={setNewHabit} token={token} setList={setHabitsList}/>}
                <ListingHabits list={habitsList} token={token} setList={setHabitsList}/>
                
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
    .previous{
        margin-top:34px;
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }
    
    .habit{
        width: 340px;
        height: 91px;
        background:#ffffff;
        border-radius:5px;
        margin-bottom: 10px;
        margin-top:20px;
        border:solid 1px #ffffff;
        box-sizing:border-box;
        position:relative;
    }
    .title{
        margin:10px 0px 8px 15px;
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        color: #666666;
    }
    ion-icon{
        position:absolute;
        top:10px;
        right: 10px;
        height:20px;
        //width: 13px;
        color:#666666;
        &:hover{
            cursor:pointer;
        }
    }
`