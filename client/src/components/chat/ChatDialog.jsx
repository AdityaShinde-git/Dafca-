import { Box, Dialog, styled } from "@mui/material"
//components
import Menu from "./menu/Menu";
import EmptyChat from "./Chatt/EmptyChat";
import ChatBox from "./Chatt/ChatBox";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

const Component=styled(Box)`
display:flex;


`
const LeftComponent=styled(Box)`
min-width:400px;
`

const RightComponent=styled(Box)`
width:73%;
min-width:300px;
height:100%;
border-left:1px solid rgba(0,0,0,0.14);
`




const dialogStyle={
    height:'95%',
    width:'100%',
    margin:'20px',
    borderRadius:'20px',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    overflow:'hidden'
}


const ChatDialog=()=>{

    const{person}=useContext(AccountContext);


    return(
        <Dialog
        open={true}
        PaperProps={{sx: dialogStyle , style: {
            backgroundColor: '#B19CD9', 
          }}}
          hideBackdrop={true}
          maxWidth={'md'}
        >



            <Component>
                <LeftComponent>
                    <Menu/>
                   

                </LeftComponent>


                <RightComponent>
                    
                    {Object.keys(person).length?<ChatBox/>:<EmptyChat/>}
                </RightComponent>

            </Component>

        </Dialog>
    )
}
export default ChatDialog;