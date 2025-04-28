import { useContext ,useEffect, useState} from "react";
import { Box, styled, Typography } from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";
import { setConversation,getConversation } from "../../../service/api";
import { formatDate } from "../../../utils/common-utils";


const Component = styled(Box)`
display:flex;
height:45px;
padding:13px 0;
cursor:pointer;
background-color:rgba(179, 0, 255, 0.97);
&:hover {
   
    background-color: rgb(15, 61, 212);
    color:rgb(172, 183, 217);
    
  }
`
const Image = styled('img')({
    width: 50,
    heoght: 50,
    borderRadius: '40%',
    padding: '0 14px',
})



const Container=styled(Box)`
display:flex
`;

const Container1=styled(Box)`
display:flex;


`;
const Username=styled(Typography)`
font-size:18px;
font-weight:550;
color:rgb(23, 30, 94);
`

const TimeStamp=styled(Typography)`
font-size:12px;
margin-left:auto;
color:rgb(255, 255, 255);
margin-right:20px;
`
const Text=styled(Typography)`
font-size:16px;
color:rgb(255, 255, 255);
`


const Conversation = ({ user }) => {

    const { setPerson, account } = useContext(AccountContext);
    const[message,setMessage,newMessageFlag] = useState({});
    useEffect(()=>{
        const getConversationDetails=async()=>{
            const data=await getConversation({senderId:account.sub,receiverId:user.sub});
            setMessage({text:data?.message,timestamp:data?.updatedAt})
        }
        getConversationDetails();
    },[newMessageFlag])

    const getUser = async() => {
        setPerson(user);
        await setConversation({ senderId: account.sub, receiverId: user.sub })

    }


    return (
        <Component onClick={() => getUser()}>
            <Box>
                <Image src={user.picture} alt="dp" />
            </Box>
            <Box style={{width:'100%'}}>
                <Container>
                    <Username>{user.name}</Username>
                    
                </Container>
                <Container1>
                    <Text>{message?.text?.includes('localhost')?'media':message.text }</Text>
                    {
                        message?.text &&
                        <TimeStamp>{formatDate(message?.timestamp)}</TimeStamp>
                    }
                </Container1>
            </Box>
        </Component>
    )
}

export default Conversation;