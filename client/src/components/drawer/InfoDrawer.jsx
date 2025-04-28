import { Box, Drawer, styled, Typography } from "@mui/material"
import { ArrowBack } from "@mui/icons-material"
//components

import Profile from "./Profile";

const Header=styled(Box)`
    background:rgb(63, 35, 153);;
    height:107px;
    color:#FFFFFF;
    display:flex;
    &>svg,&>p{
    margin-top:auto;
    padding:15px;
    font-weight:900;
    }
`;

const Component=styled(Box)`
    background :rgb(32, 12, 96);
    height:85%;
`;
const Text=styled(Typography)`
    font-size:20px;
`;

    const drawerstyle={
        left:20,
        top:17,
        height:'95%',
        width:'30%',
        boxShadow:'none'
    }

const InfoDrawer=({open,setOpen})=>{

    const handleClose=()=>{
        setOpen(false); 
    }


    return(
       <Drawer
            open={open}
            onClose={handleClose}
            PaperProps={{sx:drawerstyle}}
            style={{zIndex:1500}}
       >
        <Header>
        <ArrowBack onClick={() => setOpen(false)} />
            <Text>Profile</Text>
        </Header>
        <Component>
            <Profile/>
        </Component>

       </Drawer>
    )
}

export default InfoDrawer;