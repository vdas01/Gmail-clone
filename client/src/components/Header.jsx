import React from 'react'
import {AppBar,Toolbar,styled,Box} from '@mui/material';
import { Menu as MenuIcon,Search} from '@mui/icons-material';
import { gmailLogo } from '../constants/constant';
import TuneIcon from '@mui/icons-material/Tune';
import InputBase from '@mui/material/InputBase';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const StyledAppBar  = styled(AppBar)({
    background: "#F5F5F5",
    boxShadow:"none",
     
})

const SearchWrapper = styled(Box)({
   background:"#EAF1F8",
   marginLeft:80,
   borderRadius:8,
   minWidth:690,
   maxWidth:720,
   height:48,
   display:'flex',
   alignItems:"center",
   justifyContent:"space-between",
   padding:"0 20px",
   '& > div':{
    width:"100%",
    padding:"0 10px"
   }
})

const OptionsWrapper = styled(Box)({
    width:"100%",
    display:'flex',
    justifyContent:'end',
    '& > svg':{
        marginLeft:20
    }
})

const Header = ({setOpenDrawer}) => {
  return (
    <>
      <StyledAppBar position='static'>
        <Toolbar>
          <MenuIcon color='action' onClick={()=> setOpenDrawer(prev => !prev) }/>
          <img src={gmailLogo} alt='logo' style={{width:110,marginLeft:15}}/>
          <SearchWrapper>
             <Search color='action'/>
             <InputBase color='action'placeholder='Search mail'/>
             <TuneIcon color='action'/>
          </SearchWrapper>
          <OptionsWrapper>
             <HelpOutlineOutlinedIcon color='action'/>
             <SettingsOutlinedIcon color='action'/>
             <AppsOutlinedIcon color="action"/>
             <AccountCircleOutlinedIcon color='action'/>
          </OptionsWrapper>
        </Toolbar>
      </StyledAppBar>
    </>
  )
}

export default Header