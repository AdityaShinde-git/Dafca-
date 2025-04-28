import { useState } from "react";
import { Info } from "@mui/icons-material";

import { Menu, styled } from "@mui/material";




const Menuchange = styled(Menu)`
    
    font-size:20px;
    padding:15px 60px 5px 24px;
     
`

const Headerabout = () => {
    const [open, setOpen] = useState(null);

    const handleClose = () => {
        setOpen(null);
    }

    const handleClick = (e) => {
        setOpen(e.currentTarget);
    }


    return (
        <>
            <Info onClick={handleClick} />
            <Menuchange
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorE1={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <b><i>Dafca</i> </b>is a revolutionary chatting application<br/>
                 designed to bring people together and <br/>
                 facilitate seamless communication. Developed <br/>
                 by <b><i>Aditya.Rajaram.Shinde</i></b>, Dafca aims to provide<br/>
                  users with a safe, intuitive,and feature-rich <br/>
                  platform for connecting with  others worldwide.<br/>
                 
            </Menuchange>
        </>
    )

}
export default Headerabout;