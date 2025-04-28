import { useEffect } from "react";

import { Box, InputBase, styled, Tooltip } from "@mui/material"

import {  AttachmentOutlined, CancelScheduleSendOutlined,Send} from "@mui/icons-material";
import Scheduledmessage from "./Scheduledmessage";
import { uploadFile } from "../../../service/api";



const Wrapper = styled(Box)`
height:50px;
background:rgba(136, 120, 193, 0.91);
display:flex;
align-items:center;
width:100%;
padding:0 15px;
&>*{
    margin:5px;
}
`;

const Search = styled(Box)`
background-color:#FFFFFF;
border-radius:5px;
width:calc(94% - 80px);
`;

const InputField = styled(InputBase)`
width:100%;
padding:20px;
height:20px;
padding-left:25px;
font-size:14px;

`


const Footer = ({ sendText, setValue, value, file, setFile ,setImage, SchedulesendText,scheduledMessages,sendText1,setScheduledMessages}) => {

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                let response=await uploadFile(data);
                setImage(response.data);
                
            }
        }
        getImage();
    }, [file])

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name);

    }


    return (
        <Wrapper>
            
            {/* Document */}
            <Tooltip title="Document">
                <label htmlFor="fileinput">
                    <AttachmentOutlined
                        sx={{
                            '&:hover': {
                                color: '#FFFFFF',
                            }
                        }}
                    />
                </label>
                </Tooltip>
                <input
                    type="file"
                    id="fileinput"
                    style={{ display: 'none' }}
                    onChange={(e) => onFileChange(e)}
                />

           

            {/* Document     End */}
            <Search>
                <InputField
                    placeholder=" Type a Message"
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => sendText(e)}
                    value={value}

                />
            </Search>
            


            {/*start      Schedule */}

            {/* <ScheduleSendOutlined
                            sx={{
                                '&:hover': {
                                color: '#FFFFFF',
                                }
                            }} 
                            onClick={SchedulesendText}           
                            /> */}
            <Tooltip title="Send Message">
            <Send
            sx={{
                '&:hover': {
                color: '#FFFFFF',
                }
            }} 
            onClick={sendText1}
            />
            </Tooltip>
            
            <Scheduledmessage 
            SchedulesendText={SchedulesendText}
            scheduledMessages={scheduledMessages}
            setScheduledMessages={setScheduledMessages}
            />
            {/* Schedule  message end*/}

            {/* Cancel Schedule */}
            {/* <Tooltip title="Cancel Schedule Send">
                <CancelScheduleSendOutlined
                    sx={{
                        '&:hover': {
                            color: '#FFFFFF',
                        }
                    }}
                />
            </Tooltip> */}

        </Wrapper>
    )
}
export default Footer;