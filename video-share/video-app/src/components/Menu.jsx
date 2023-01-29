import React from "react";
import styled from 'styled-components'
import Sitube from './images/logoPNG.png'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HistoryIcon from '@mui/icons-material/History';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import FeedIcon from '@mui/icons-material/Feed';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import ReportIcon from '@mui/icons-material/Report';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LocalLibrary from "@mui/icons-material/LocalLibrary";
import LibraryMusic from "@mui/icons-material/LibraryMusic";
import SportsKabaddi from "@mui/icons-material/SportsKabaddi";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import SignIn from "../pages/SignIn";
import {useSelector} from "react-redux"

const Container = styled.div`
  flex : 1;
  color: ${({theme}) => theme.text};
  background-color: ${({theme}) => theme.bgLighter};
  height: 100vh;
  position: sticky;
  top: 0;
`
const Wrapper = styled.div`
    padding: 16px 26px;
`
const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 25px;
`
const Img = styled.img`
    height: 20px;
`
const Items = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    padding: 5px 0px;
    cursor: pointer;

    &:hover{
        background-color: ${({theme})=>theme.soft};
    }
`
const items = [
    {
        title: 'Home',
        icon: <HomeIcon/>
        
    },
    {
        title: 'Explore',
        icon: <ExploreIcon/>
    },
    {
        title: 'Subcription',
        icon: <SubscriptionsIcon/>
    },
    {
        title: 'Hisory',
        icon: <HistoryIcon/>
    },
    {
        title: 'Library',
        icon: <LocalLibraryIcon/>
    },
    {
        title: 'Music',
        icon: <LibraryMusicIcon/>
    },
    {
        title: 'Sports',
        icon: <SportsKabaddiIcon/>
    },
    {
        title: 'Gaming',
        icon: <SportsEsportsIcon/>
    },
    {
        title: 'Movies',
        icon: <SlideshowIcon/>
    },
    {
        title: 'News',
        icon:  <FeedIcon/>
    },
    {
        title: 'Live',
        icon: <LiveTvIcon/>
    },
    {
        title: 'Settings',
        icon: <SettingsIcon/>
    },
    {
        title: 'Report',
        icon: <ReportIcon/>
    },
    {
        title: 'Help',
        icon: <HelpCenterIcon/>
    },
    {
        title: 'Light Mode',
        icon: <ModeNightIcon/>
    },]

const Hr = styled.hr`
margin: 10px 0px;
border: 0.5px solid ${({theme}) => theme.soft};
`
const Login = styled.div`

`
const Button = styled.button`
   padding: 5px 15px;
   margin-top: 5px;
   background-color: transparent;
   border: 1px solid #3ea6ff;
   border-radius: 3px;
   color: #3ea6ff;
   font-weight: 500px;
   text-align: center;
   display: flex;
   gap: 5px;
   cursor: pointer;
`
function Menu({darkMode, setdarkMode}){
    const {currentUser} = useSelector((state)=>state.user)
    return(
       <Container>
        <Wrapper>
            <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
            <Logo>
                <Img src={Sitube}/>
                LOGO
            </Logo>
            </Link>
            <Items>
            <HomeIcon/>
            Home
            </Items>
            <Link to="trends" style={{textDecoration:"none", color:"inherit"}}>
        <Items>
            <ExploreIcon/>
            Explore
        </Items>        
        </Link>
        <Link to="subscriptions" style={{textDecoration:"none", color:"inherit"}}>
        <Items>
            <SubscriptionsIcon/>
            Subscription 
        </Items>
        </Link>
        <Hr/> 
        <Items>
             <LocalLibraryIcon/>
             Library
        </Items>
        <Items>
            <HistoryIcon/>
            History
        </Items>
        <Hr/>
        {!currentUser &&
        <>
        <Login>
            Sign in to like videos, comment and subscribe 
            <Link to="signin" style={{textDecoration:"none"}}>
            <Button>
                <AccountCircleOutlinedIcon/>
                SignIn</Button>
            </Link>
        </Login>
        <Hr/>
        </>}
        <Items>
        <LibraryMusicIcon/>
        Music
        </Items>
        <Items>
        <SportsKabaddiIcon/>
        Sports
        </Items>
        <Items>
        <SportsEsportsIcon/>
        Gaming
        </Items>
        <Items>
        <SlideshowIcon/>
        Movies
        </Items>
        <Items>
            <FeedIcon/>
            News
        </Items>
        
        <Items>
            <LiveTvIcon/>
            Live
        </Items>
        <Hr/>
        <Items>
            <SettingsIcon/>
            Settings
        </Items>
            <Items>
            <ReportIcon/>
            Report
        </Items>

        <Items>
        <HelpCenterIcon/>
            Help
        </Items>
        <Items onClick={()=> setdarkMode(!darkMode)} >
        <ModeNightIcon/>
        {
            darkMode ? 'Light Mode' : 'Dark Mode'
        }
            </Items>
        </Wrapper>
       </Container>
    )
}
export default Menu