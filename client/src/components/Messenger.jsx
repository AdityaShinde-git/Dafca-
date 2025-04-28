


import { useContext } from 'react';
import { AppBar, Box, Toolbar ,styled } from '@mui/material';
import { AccountContext } from '../context/AccountProvider';
import Log from "./account/LoginDialog";
import ChatDialog from './chat/ChatDialog';


const Component = styled(Box)`
height: 100vh;
width: 100vw;
background-color:rgb(3, 12, 35);
`
const Header= styled(AppBar)`
height: 450px;
background-color:rgb(116, 88, 206);
box-shadow: none;
`

const LoginHeader= styled(AppBar)`
height: 450px;
background-color:rgb(39, 16, 115);
box-shadow: none;
`

const Messenger= () => {
    const { account}=useContext(AccountContext);


    return(
        <Component>
            {
                account?
                <>
        
            <Header>
                <Toolbar>
                    
                </Toolbar>
            </Header>
                
        
            <ChatDialog/>
        </>
                
                :
         <>
        
            <LoginHeader>
                <Toolbar>
                    
                </Toolbar>
            </LoginHeader>
                
        
            <Log />
        </>
        }
        </Component>

    )
}
export default Messenger;