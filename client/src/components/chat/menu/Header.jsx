
import { useContext,useState } from "react";

import { AccountContext } from "../../../context/AccountProvider";
import { Box, styled } from "@mui/material";
import { Forum as MessageIcon} from '@mui/icons-material';
//component

import HeaderMenu from "./HeaderMenu";
import Headerabout from "./Headerabout";
import InfoDrawer from "../../drawer/InfoDrawer";



const Component=styled(Box)`
    height:40px;
    background:#ededed;
    padding:8px 16px;
    display:flex;
    align-items:center;
    
`
const Wrapper=styled(Box)`
    margin-left:auto;
    & > *{
    margin-left:auto;
    padding:8px;
    
    };
    &:first-child{
        font-size:22px;
        margin-right:8px;
        margin-top:3px;
    }
`




const Image=styled('img')({
    height:40,
    width:40,
    borderRadius:'50%',

})


const Header= () =>{


    const [openDrawer, setopenDrawer]= useState(false);

    const {account}=useContext(AccountContext);

    const toggleDrawer=()=>{
        setopenDrawer(true);
    }


    return(
       <>

            <Component>
                <Image src={account.picture} alt="dp" onClick={()=> toggleDrawer()}/>

                <Wrapper>

                    <Headerabout/>
                    <MessageIcon/>
                    
                    <HeaderMenu setopenDrawer={setopenDrawer}/>
                    
                </Wrapper>
            </Component>
            <InfoDrawer open={openDrawer} setOpen={setopenDrawer} />
       </>
    )
}

export default Header;