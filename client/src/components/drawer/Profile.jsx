import { Box, styled, Typography } from "@mui/material"
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Settings } from "@mui/icons-material";
import { Help } from "@mui/icons-material";

const ImageContainer = styled(Box)`
     display:flex;
     justify-content:center;
 `
const Image = styled("img")({
    width: 150,
    height: 180,
    borderRadius: '40%',
    padding: '25px 0'

})

const BoxWrapper = styled(Box)`
     background:rgb(121, 113, 142);
     padding:12px 30px 2px;
     box-shadow:0 1px 3px rgba(0,0,0,0.08);
    & :first-child{
        font-size:18px;
       color:#000000;
       font-weight:200;
    }
    & :last-child{
        font-size:18px;
         margin:13px 0;
        color:#000000;
        font-weight:400;
    }

 `;
const Qoxed = styled(Box)`
    background:rgb(121, 113, 142);
    font-size:18px;
    color:#000000;

`
const Toxed = styled(ListItemIcon)`
   
    font-size:18px;
    color:#000000;
`
const Voxed = styled(ListItemText)`
    
    font-size:20px;
    color:#000000;
    `
const Dividend = styled(Divider)`
    background:rgb(46, 43, 54);
    height:2px;
`


const Profile = () => {

    const { account } = useContext(AccountContext);



    return (
        <>
            <ImageContainer>
                <Image src={account.picture} alt="pp" />

            </ImageContainer>
            <BoxWrapper>
                <Typography>Your Name</Typography>

                <Typography>{account.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<sub><i>(Assigned by google)</i></sub></Typography>

            </BoxWrapper>
            <Qoxed>
                <Dividend />
                <List>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <Toxed>
                                <Settings />
                            </Toxed>
                            <Voxed  >
                                Setting
                            </Voxed>
                        </ListItemButton>
                    </ListItem>
                    <Dividend />
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Help />
                            </ListItemIcon>
                            <ListItemText  >
                                HelpLine
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>

            </Qoxed>

        </>
    )
}
export default Profile;