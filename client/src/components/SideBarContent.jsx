import { CreateOutlined } from '@mui/icons-material'
import { Box, Button,styled, List,ListItem } from '@mui/material'
import React from 'react'
import { SIDEBAR_DATA } from '../config/sidebar.config'

const ComposedButton = styled(Button)({
    background:"#c2e7ff",
    color:"#001d35",
    padding:16,
    borderRadius:16,
    minWidth:"140px",
    textTransform:'none',

})

const Container = styled(Box)({
  padding:0,
  '& > ul':{
    padding: '10px  0 0 5px',
    fontSize:14,
    fontWeight:500,
    cursor:'pointer',
  },
  '& > ul > li > svg':{
         marginRight:20,
  }
})
const SideBarContent = () => {
  return (
    <Container>
       <ComposedButton>
          <Button >
           <CreateOutlined/> Compose
           </Button>
       </ComposedButton>
       <List>
         {    SIDEBAR_DATA.map(data=>(
                 <ListItem>
                    <data.icon fontSize='small'/>   {data.title}
                 </ListItem> 
              ))
             
         }
       </List>
    </Container>
  )
}

export default SideBarContent