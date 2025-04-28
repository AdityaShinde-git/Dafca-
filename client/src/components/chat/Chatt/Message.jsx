import { Box, styled, Typography } from "@mui/material"
import { formatDate,downloadMedia } from "../../../utils/common-utils"
import { useContext } from "react"
import { AccountContext } from "../../../context/AccountProvider"
import FileDownloadOutlined from '@mui/icons-material/FileDownloadOutlined';
import { iconPDF } from "../../../constants/data";

const Own = styled(Box)`
color:#FFFFFF;
background:rgb(0, 96, 152);
max-width:60%;
margin-left:auto;
padding:5px;
width:fit-content;
display:flex;
border-radius:10px;
word-break:break-word;
`

const Wrapper = styled(Box)`
color:#111111;
background:rgb(143, 160, 185);
max-width:60%;
padding:5px;
width:fit-content;
display:flex;
border-radius:10px;
word-break:break-word;
`

const Text = styled(Typography)`
font-size:16px;
padding:0 25px 0 5px
`
const Time = styled(Typography)`
font-size:12px;

word-break:keep-all;
margin-top:auto;
`

export const Message = ({ message }) => {

    const { account } = useContext(AccountContext);
    return (

        <>
            {
                account.sub === message.senderId ?
                    <Own>

                        {
                            message.type === 'file' ? <ImageMessage message={message} /> : <TextMessage message={message} />
                        }

                    </Own>
                    :
                    <Wrapper>

                        {
                            message.type === 'file' ? <ImageMessage message={message} /> : <TextMessage message={message} />
                        }
                    </Wrapper>
            }
        </>


    )
}


const ImageMessage = ({ message }) => {
    return (
        <Box style={{ position: "relative" }} >{
            message?.text?.includes('.pdf') ?
                <Box style={{ display: 'flex' }}>
                    < img src={iconPDF} alt="pdf" style={{ width: 80 }} />
                    <Typography>{message.text.split('-file-').pop()}</Typography>
                </Box>

                :
                <img style={{ width: 300, height: '100%', objectFit: 'cover' }} src={message.text} alt={message.text} />
        }
            <Time style={{ position: "absolute", top: 0, right: 0 }}
            >
                <FileDownloadOutlined
                //  style={{marginRight:10}}
                onClick={(e)=>downloadMedia(e,message.text)}
                sx={{
                    '&:hover': {
                    color: 'rgb(0, 21, 183)',
                    }
                }}
                />

            </Time>
            <Time style={{ position: "absolute", bottom: 0, right: 0 }}>
                {formatDate(message.createdAt)}
            </Time>
        </Box>

    )
}

const TextMessage = ({ message }) => {
    return (
        <>

            <Text>{message.text} </Text>
            <Time> {formatDate(message.createdAt)}</Time>

        </>
    )
}


export default Message;