import { useState } from "react";
import { MoreVert } from "@mui/icons-material";

import {Menu,MenuItem, styled} from "@mui/material";


const MenuOption=styled(MenuItem)`
    font-size:18px;
    padding:15px 60px 5px 24px;
     
`


const HeaderMenu = ({setopenDrawer}) => {
    const [open,setOpen]=useState(null);

    const handleClose=()=>{
        setOpen(null);
    }

    const handleClick=(e)=>{
        setOpen(e.currentTarget);
    }


    return (
        <>
            <MoreVert onClick={handleClick} />
            <Menu
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
                <MenuOption onClick={()=>{handleClose(); setopenDrawer(true)}}>Profile</MenuOption>
                <MenuOption onClick={()=>{handleClose(); setopenDrawer(true)}}>My account</MenuOption>
                <MenuOption onClick={handleClose}>Logout</MenuOption>
            </Menu>
        </>
    )

}
export default HeaderMenu;