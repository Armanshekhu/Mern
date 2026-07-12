import { createContext } from "react";

const userContext = createContext();

function UserProvider({children}) {
    const [name,setName] = useState("Tom")
    return (
        <>
        <UserContext.Provider values={{name,setName}}>
            {childern}
        </UserContext.Provider>
        </>
    )
}