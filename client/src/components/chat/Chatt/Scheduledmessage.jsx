import { useContext, useState } from "react";
import { CancelScheduleSendOutlined, ScheduleSendOutlined } from "@mui/icons-material";

import { Box, Menu, styled, Tooltip } from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";

const Menuchange = styled(Menu)`
    
    font-size:25px;
    
    
     box-shadow:0 1px 3px rgba(0,0,0,0.08);
     
`
const Cancelmsg=styled(CancelScheduleSendOutlined)`
margin-left:auto;
font-size:40px;
`
const Sendmsg=styled(ScheduleSendOutlined)`
font-size:40px;
`
const Boxchange=styled(Box)`
display:flex;
`
const Boxparent=styled(Box)`
background-color:rgba(42, 83, 160, 0.99);
display:relative;
`


const Scheduledmessage = ({ SchedulesendText ,scheduledMessages,setScheduledMessages}) => {
    const [open, setOpen] = useState(null);

    const [currentDate, setCurrentDate] = useState(new Date());

    const {scheduledtime,setScheduledtime}=useContext(AccountContext);

    const CurrentTime=`Current Time: ${currentDate.getHours() < 10 ? '0' + currentDate.getHours() : currentDate.getHours()}:${currentDate.getMinutes() < 10 ? '0' + currentDate.getMinutes() : currentDate.getMinutes()}:${currentDate.getSeconds() < 10 ? '0' + currentDate.getSeconds() : currentDate.getSeconds()}`;

   

    const handleClose = () => {
        setOpen(null);
    }

    const handleClick = (e) => {
        setOpen(e.currentTarget);
        setCurrentDate(new Date());
        

    }

    return (
        <>
            <Tooltip title="Schedule Send">
                <ScheduleSendOutlined onClick={handleClick}
                    sx={{
                        '&:hover': {
                            color: '#FFFFFF',
                        }
                    }}
                />
            </Tooltip>
            <Menuchange
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorE1={null}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                sx={{
                    width: '100%',
                    height: '100%',
                    
                }}
              
                

            ><Boxparent>
                <p>{"Date: " + currentDate.toLocaleDateString()}<br />
                    {CurrentTime}
                </p>
                <input
                type="datetime-local"
                onChange={(e) => setScheduledtime(e.target.value)}
                value={scheduledtime}
                style={{fontSize:'20px'}}
                />
                <p>{scheduledtime}</p>
                
                <br/>
                <Boxchange>
                <Tooltip title="Schedule Message">
                <Sendmsg
                sx={{
                        '&:hover': {
                            color: '#2ed84d',
                        }
                    }}
                    onClick={SchedulesendText} />
                    
                
                </Tooltip>
                

                <Tooltip title="Cancel Schedule Send">
                <Cancelmsg
                sx={{
                        '&:hover': {
                            color: '#cd1e1e',
                        }
                        
                    }}
                    
                    onClick={(e) =>{
                        setScheduledtime('')
                        setScheduledMessages(null)}
                    
                    }/> 
                </Tooltip></Boxchange>
                <br/>
                    {scheduledMessages?.text}
                    </Boxparent>
            </Menuchange>
            
        </>
    )

}
export default Scheduledmessage;