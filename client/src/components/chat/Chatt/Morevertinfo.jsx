import { MoreVert } from "@mui/icons-material"
import { Dialog } from "@mui/material";
import { useState } from "react";
import { Box, Typography, Card, CardContent, Stack } from '@mui/material';
import { motion } from 'framer-motion';


const features = [
    {
      title: 'Real-Time Messaging',
      description: 'Communicate instantly with anyone in your network. Messages are delivered instantly without needing to refresh, providing a smooth real-time experience.',
    },
    {
      title: 'File Sharing',
      description: 'Easily share documents, images, and more through the chat interface. Upload and transfer files securely and efficiently.',
    },
    {
      title: 'Scheduled Messaging',
      description: 'Plan your communication ahead of time. Schedule messages to be sent automatically at your preferred date and time.',
    },
  ];
  


const MoreVertinfo = () => {

 const [open, setOpen] = useState(null);

    const handleClick = (e) => {
        setOpen(e.currentTarget);
    }



  return (
    <>
    <MoreVert onClick={handleClick}/>
    <Dialog
    open={open}
    onClose={()=>setOpen(false)}
    PaperProps={{
        sx: {
          marginTop: '70px',
          position: 'absolute',
          right: 0,
          top: 0,
          height: '78%',
          width: '100%',  // or whatever width you want
          borderRadius: 0, // optional: remove border radius
        },
        style:{background:'rgb(0, 102, 210)',opacity:'100%'}
      }}
    >
<Box
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      sx={{
        padding: 4,
        maxWidth: '1000px',
        margin: '0 auto',
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        mb={4}
        textAlign="center"
        component={motion.h1}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Welcome to Dafca !💬 
      </Typography>

      <Typography
        variant="body1"
        mb={6}
        textAlign="center"
        color="text.secondary"
        component={motion.p}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        style={{fontSize:'20px'}}
      >
        Dafca is a cutting-edge real-time communication platform that enhances your conversations
        with powerful features like instant messaging, file sharing, and scheduled messaging.
      </Typography>

      <Stack spacing={4}>
        {features.map((feature, index) => (
          <Card
            key={index}
            component={motion.div}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300 }}
            sx={{
              borderRadius: 3,
              boxShadow: 3,
              cursor: 'pointer',
              backgroundColor: '#fafafa',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: 6,
                backgroundColor: '#99a3a4 ',
              },
            }}
          >
            <CardContent>
              <Typography variant="h5" fontWeight="bold" mb={2}>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {feature.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
        
    </Dialog>



    </>
  )
}

export default MoreVertinfo;
