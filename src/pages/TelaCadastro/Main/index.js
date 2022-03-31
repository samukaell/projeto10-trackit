import { useState } from "react"
import Login from "../../../components/Login"

export default function Main(){

    const [email,setEmail] = useState("");
    const [name,setName] = useState("");
    const [image,setImage] = useState("");
    const [password,setPassword] = useState("");


    return (
        <>
            <Login
                cadastro = {true}
                email = {email}
                setEmail = {(email)=>{setEmail(email)}}
                name = {name}
                setName = {(name)=>{setName(name)}}
                image = {image}
                setImage = {(image)=>{setImage(image)}}
                password = {password}
                setPassword = {(password)=>{setPassword(password)}}
            />
        </>
    )
}