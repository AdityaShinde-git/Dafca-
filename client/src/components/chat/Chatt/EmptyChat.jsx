import { Box, Dialog, DialogActions, DialogContent, DialogTitle, styled, Typography } from '@mui/material';
import React, { useState } from 'react';
import Divider from '@mui/material/Divider';
//import { blue } from '@mui/material/colors';

const EmptyContainer=styled(Box)`
    display: absolute;
    justify-content: center; 
    align-items: center;     
    height:100%;   
`
const Container1=styled(Box)`
    justify-content: center; 
   text-align: center;  
      margin:220px 0 220px 0;
    
    
`
const Container2=styled(Box)`
    justify-content: right; 
   text-align: right;  
   margin:150px 0 150px 0;
   background:rgb(149, 0, 255);
   
`
const TectContainer=styled(Typography)`
font-size:30px;
font-weight:300px;
color:rgb(97, 57, 123);
`
const Dividend = styled(Divider)`
    background:rgb(79, 0, 135);
    height:10px;
`
const Button=styled('button')({
    width: 70,
    height: 80,
    borderRadius: '40%',
    padding: '25px 0',
    background:'#5f17d4',
    
})
const Button2=styled('button')({
  width: 150,
  height: 80,
  borderRadius: '40%',
  padding: '25px 0',
  background:'#5f17d4',
  opacity:'10%',
  '&:hover': {
    opacity: '100%',
    background:'#61499d'    
  }
})

const EmptyChat = () => {
  const [count, setCount] = useState(0);
  const  [open ,setOpen]= useState(false);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  
  return (
      
    <EmptyContainer>
            <Container1>
                <TectContainer >Start Communicating</TectContainer>
               
            </Container1>
            <Container2 >
            <Dividend />
            <Button2 onClick={()=>setOpen(true)}>EASTER EGG</Button2>
           <Dialog aria-labelledby='dialog-title' aria-describedby='dialog-description'
           open={open}
           onClose={()=>setOpen(false)}
           >
            <DialogTitle id='dialog-title' >COUNTER</DialogTitle>
            <DialogContent id='dialog-description' >{count}</DialogContent>
            <DialogActions>
              <Button onClick={handleIncrement}>Increment</Button>
              <Button onClick={handleReset}>Reset</Button>
              <Button onClick={()=> setOpen(false)}>Close</Button>

            </DialogActions>
           </Dialog> 
           </Container2>
             {/* <Container2 >
              <Dividend />   
            <h2>Counter</h2>
            <Box >
                <h4>{count}</h4>
            </Box>
            <Button 
                onClick={handleIncrement}
               
            >
                Increment
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button 
                onClick={handleReset}
               
            >
                Reset
            </Button>
            </Container2> */}
    </EmptyContainer>
  );
};

export default EmptyChat;