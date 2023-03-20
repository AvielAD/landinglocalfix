import { useState } from "react"

const Page=() => {
    const [user, setUser] = useState("")
    const [user2, setUser2] = useState("")
    const [user3, setUser3] = useState("")

    const subir=(event:any)=>{
        let datasend={user, user2}
        console.log('Probando funcionamiento: ', datasend)
        //api-POST /users {nombre: "Juan"}
        //api-post /users {user, user2, user3}
        event.preventDefault()

    }
    return (
        <>
            <form onSubmit={(e)=>subir(e)}>
                <label>
                    Usuario: 
                    <input type="text" name="usuario" value={user} onChange={(e)=>setUser(e.target.value)}/>
                </label>
                <label>
                    Apellido: 
                    <input type="text" name="apellido" value={user2} onChange={(e)=>setUser2(e.target.value)}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    )

}


export default Page