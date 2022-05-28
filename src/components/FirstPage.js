import React from "react" 
import styled from 'styled-components';
import axios from "axios";
import { Link } from "react-router-dom";
import { LoginContext } from "../Contexts/LoginComponent";

import { useNavigate } from 'react-router-dom';




export default function FirstPage() {

    const {email,setEmail,password,setPassword,setImage,setUserName,image,userName,token,setToken} = React.useContext(LoginContext);
    const navigate = useNavigate();
    function submitData(event){
        event.preventDefault();
        const obj = {
            email:email,
            password:password,
        };
        
        const requisicao = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login',obj);
        requisicao.then(success);
        function success(resp){ 
            setImage(resp.data.image);
            setUserName(resp.data.name); 
            setToken(resp.data.token);
            console.log(image,userName,token);
            navigate('/habitos');
        }
        requisicao.catch(erro);  
        function erro(){
            alert("E-mail ou senha incorretos!")
        }
    }

    return (
        <Container>
            <img width="180px" src="logo.png" alt="TrackIt logo"></img>
            <FormStyle>
                <form onSubmit={submitData}>
                    <input 
                    type="email" 
                    id="email" 
                    value = {email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="email"
                    />
                    <input 
                    type="password" 
                    value = {password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="senha"
                    />
                     <button type="submit" >Entrar</button>
                </form>
            </FormStyle>
            <Link to={`/cadastro`}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Container>
    )
}


const Container = styled.div `
margin-top:68px;
display:flex;
flex-direction:column;
align-items:center;
p{
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
    &:hover{
        cursor:pointer;
    }
}
`

const FormStyle = styled.div `
margin-top:52px;
    form{ 
        display:flex;
        flex-direction:column;
        align-items:center;
    }
    input{
        margin-bottom:10px;
        width: 303px;
        height: 45px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding-left: 12px;
        &::placeholder{
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color: #DBDBDB;
        }
    }
    button{
        width: 303px;
        height: 45px;
        background: #52B6FF;
        border-radius: 4.63636px;
        margin-bottom:24px;

        color:#ffffff;
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;

        &:hover{
            cursor:pointer;
        }
    }
`