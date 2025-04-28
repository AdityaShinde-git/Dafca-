
import { Box, styled, Typography } from "@mui/material";
//Components
import defaultPicture from "../../../constants/defaultpicture.jpg";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import PersonOffOutlined from '@mui/icons-material/PersonOffOutlined';
import PersonOutlineOutlined from '@mui/icons-material/PersonOutlineOutlined';
import MoreVertinfo from "./Morevertinfo";

const Header = styled(Box)`
height:44px;
background-color:rgba(94, 0, 162, 0.91);
padding:6px 16px;
display:flex;
align-items:center;
color:rgba(216, 202, 226, 0.91);
`
const Image = styled('img')({
    height: 40,
    width: 40,
    borderRadius: '40%'
})

const Name = styled(Typography)`
margin-left:12px !important;

`;
const Status = styled(Typography)`
margin-left:12px !important;
font-size:12px;
`;

const RightContainer = styled(Box)`
margin-left:auto;
&>svg{
    padding:8px;
    font-size:24px;
}
`;
const Onlineicon=styled(PersonOutlineOutlined)`
color:rgb(254, 253, 255);
`

const ChatHeader = ({ person }) => {

    const {activeUsers} = useContext(AccountContext);

    return (
        <Header>
            <Image src={person.picture} alt="dp" />
            <Box>
                <Name>{person.name}</Name>
                <Status>{activeUsers?.find(user => user.sub === person.sub)? <b>Online</b> : 'offline'} </Status>
            </Box>
            <RightContainer>
             {activeUsers?.find(user => user.sub === person.sub)?  <Onlineicon/>: <PersonOffOutlined/>} 
                <MoreVertinfo/>
                
            </RightContainer>
            
        </Header>
    )
}
export default ChatHeader;