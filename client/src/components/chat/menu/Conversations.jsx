import { useEffect ,useState,useContext} from "react";
import { getUsers } from "../../../service/api";
import { Box, Divider, styled } from "@mui/material";


//Components
import Conversation from "./Conversation";
import { AccountContext } from "../../../context/AccountProvider";


const Component=styled(Box)`
height:81vh;
overflow:overlay;
`
const StyledDivder=styled(Divider)`
background:rgb(79, 0, 135);
height:2spx;
`

const Conversations =({text})=>{

    const [users,setUsers]=useState([]);
    const{account,socket,setActiveUsers}=useContext(AccountContext);

    useEffect(()=>{
        const fetchData=async ()=>{
            let response=await getUsers();
            const filteredData=response.filter(user=>user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filteredData);
        }
        fetchData();
    },[text]);

    useEffect(()=>{
        socket.current.emit("addUsers",account);
        socket.current.on("getUsers",users=>{

            setActiveUsers(users);
        })
    },[account])

    return (
        <Component>
            {
                 users.map((user)=>(
                    user.sub!==account.sub&&
                    <>
                    <Conversation user={user} />
                    <StyledDivder/>
                    
                    </>
                ))
            }
        </Component>
    )
}

export default Conversations;