import { useContext } from "react";
import { Box, Dialog, List, ListItem, Typography, styled } from "@mui/material";
//import { qrCodeImage } from "../../constants/data";
import image from "../../constants/prologo.jpg";
import { AccountContext } from "../../context/AccountProvider";
import { addUser } from "../../service/api";

import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const Component= styled(Box)`
display:flex;
`

const Container=styled(Box)`
padding:56px 0 56px 56px;
`

const QRCode=styled('img')({
    height:260,
    width:260,
    margin:'50px 0 0 50px'
})

const Title=styled(Typography)`
font-size:28px;
font-weight:800;
color:#212121;
font-family:Sans;
margin-bottom:25px;
`;
const StyledList=styled(List)`
&>li{
padding:0;
margin-top:15px;
font-size:18px;
font-weight:500;
line-height:28px;
color:#4a4a4a;
}
`

const dialogStyle={
    height:'96%',
    marginTop:'12%',
    width:'70%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    overflow:'hidden'
}
const LoginDialog=()=>{
    const {setAccount}=useContext(AccountContext);



    const onLoginSuccess=async(res)=>{
        const decoded=jwtDecode(res.credential); 
        setAccount(decoded);
        await addUser(decoded);

    }
    const onLoginError=(res)=>{
        console.log('Login failed',res);
        
    }
    return(
       <Dialog
        open={true}
        PaperProps={{sx: dialogStyle , style: {
            backgroundColor: '#B19CD9', 
          }}}
          hideBackdrop={true}
       >
           <Component>
                <Box style={{ position:'relative'}}>
                    <QRCode src={image} alt="Dafca"/>
                    <Box style={{ position:'absolute',top:'100%',transform:'translateX(25%)'}}>
                        < GoogleLogin
                            onSuccess={onLoginSuccess}
                            onError={onLoginError}
                        
                        />
                    </Box>
                </Box>


                <Container>
                    <Title>Makes Communication Easier With DAFCA</Title>
                    <StyledList>
                        <ListItem>###."Connect, Communicate, Collaborate".###</ListItem>
                        <ListItem>###."Chat Smarter,Not Harder: Revolutionizing Communication".###</ListItem>
                        <ListItem>###."Where Conversations Come Alive: The Future of Chat is Here".###</ListItem>
                    </StyledList>

                </Container>

                
           </Component>

       </Dialog>
    )
}
export default LoginDialog;