import { useContext, useState, useEffect, useRef } from "react";
import { AccountContext } from "../../../context/AccountProvider";

import { Box, styled } from "@mui/material"
import bgc from "../../../constants/backgroundchat.jpg"
//Component
import Footer from "./Footer"
import { getMessages, newMessage } from "../../../service/api.js";
import Message from "./Message.jsx";

const Wrapper = styled(Box)`
 background-image:url(${bgc});
 background-size:100%;
`
const Component = styled(Box)`
height:78vh;
overflow-y:scroll;
`
const Container = styled(Box)`
padding:1px 40px;
`

const Messages = ({ person, conversation }) => {

    const [value, setValue] = useState('');
    const [messages, setMessages] = useState([]);
    const { account ,socket,newMessageFlag, setnewMessageFlag,scheduledtime,setScheduledtime} = useContext(AccountContext);

    const [file,setFile]=useState('');

    const [image,setImage]=useState('');
    const[incomingMessage,setIncomingMessage]=useState(null);

    const [scheduledMessages, setScheduledMessages] = useState([]);

    const scrollRef=useRef();


    useEffect(()=>{
        socket.current.on('getMessage',data=>{
            setIncomingMessage({
                ...data,
                createdAt:Date.now()
            })
        })
    },[])

    useEffect(() => {
        const getMessageDetails = async () => {
            let data = await getMessages(conversation._id);
            setMessages(data);
        }
        conversation._id && getMessageDetails();
    }, [person._id, conversation._id,newMessageFlag]);

     useEffect(()=>{

        scrollRef.current?.scrollIntoView({transition:'smooth',block: 'end'})
        
     },[messages])

     useEffect(()=>{
        incomingMessage && conversation?.members?.includes(incomingMessage.senderId) &&
        setMessages(prev=>[...prev,incomingMessage])
     },[incomingMessage,conversation])

     useEffect(() => {
          const interval = setInterval(() => {
           const now = new Date();
            const SDate=new Date(scheduledtime);
            const diff = (now.getTime() - SDate.getTime()) / 1000;
            const Messagetosend=async()=>{
                if(diff>0)
                {
                        
                    console.log("success");
                    console.log(scheduledMessages); 
                    if(scheduledMessages){ 
                        
                        socket.current.emit('sendMessage',scheduledMessages);
                     await newMessage(scheduledMessages);
                    }    
                    //Remove sent messages from the scheduledMessages list
                    setScheduledMessages(null); 
                    setScheduledtime(null);
                    clearInterval(interval);          
                }
                else{
                    console.log("fail");
                    console.log(`${now},${SDate}`); 
                    console.log(scheduledMessages);  
            }
        }
                Messagetosend();
                
           
        }, 60000); // Check every minute

        
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    },[scheduledMessages,scheduledtime]);


    const sendText = async (e) => {
        const code = e.keyCode || e.which;
        if (code === 13) {
            let message={};
            if(!file){
                     message = {
                        senderId: account.sub,
                        receiverId: person.sub,
                        conversationId: conversation._id,
                        type: 'text',
                        text: value

                    }
                }else{
                     message = {
                        senderId: account.sub,
                        receiverId: person.sub,
                        conversationId: conversation._id,
                        type: 'file',
                        text: image
                    }
                }
            socket.current.emit('sendMessage',message);
            await newMessage(message);

            setValue('');
            setFile('');
            setImage('');
            setnewMessageFlag(prev => !prev);
        }
    }
    const sendText1= async (e) => {
        
            let message={};
            if(!file){
                     message = {
                        senderId: account.sub,
                        receiverId: person.sub,
                        conversationId: conversation._id,
                        type: 'text',
                        text: value

                    }
                }else{
                     message = {
                        senderId: account.sub,
                        receiverId: person.sub,
                        conversationId: conversation._id,
                        type: 'file',
                        text: image
                    }
                }
            socket.current.emit('sendMessage',message);
            await newMessage(message);

            setValue('');
            setFile('');
            setImage('');
            setnewMessageFlag(prev => !prev);
        
    }
    
    const SchedulesendText = async (e) => {
        
        let message={};
        if(!file){
                 message = {
                    senderId: account.sub,
                    receiverId: person.sub,
                    conversationId: conversation._id,
                    type: 'text',
                    text: value

                }
            }else{
                 message = {
                    senderId: account.sub,
                    receiverId: person.sub,
                    conversationId: conversation._id,
                    type: 'file',
                    text: image
                }
            }
            if (!scheduledtime) {
                console.log("null");
            } 
            else{
                
                // Store the message in the scheduledMessages list
                setScheduledMessages(message);
                console.log(scheduledMessages);
                console.log(scheduledtime);

            
            }
            
                
            

            setValue('');
            setFile('');
            setImage('');
            
            setnewMessageFlag(prev => !prev);
        
    }
    
   

    return (
        <Wrapper>
            <Component>
                {
                    messages && messages.map(message => (
                        <Container ref={scrollRef}>

                            <Message message={message} />
                        </Container>
                    ))
                }
            </Component>
            <Footer
                sendText={sendText}
                setValue={setValue}
                value={value}
                SchedulesendText={SchedulesendText}
                file={file}
                setFile={setFile}
                setImage={setImage}
                scheduledMessages={scheduledMessages}
                sendText1={sendText1}
                setScheduledMessages={setScheduledMessages}
               
                
            />
        </Wrapper>
    )
}

export default Messages;
