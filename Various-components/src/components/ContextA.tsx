import { useState, createContext, useEffect } from "react"
import ContextB from "./ContextB"

export const UserContext = createContext<string>("");

 function ContextA() {
    const [user, setUser] = useState<string>("Razzle")

    useEffect(() => {
        setTimeout(() => {
            setUser("Raz")
        }, 3000);
    
    }, [])
    

  return (
    <div className="box">
       
        <h1>ComponentA</h1>
        <h2>{`Hello ${user}`}</h2>
        <UserContext.Provider value={user}>
            <ContextB />
        </UserContext.Provider>
        
    </div>
  )
}

export default ContextA