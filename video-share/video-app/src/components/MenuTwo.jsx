import React from 'react'
import styled from 'styled-components'
import siTube from './images/logoPNG.png'
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
import { Link } from 'react-router-dom';
import SignIn from '../pages/SignIn';

const Container = styled.div`
    position: sticky;
    top: 0;
    flex: 1;
    background-color: ${({theme})=>theme.bg};
    color: ${({theme})=>theme.text};
    height: 100vh;
    font-weight: bolder;
`
const Wrapper = styled.div`
    padding: 15px 20px;
`
const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 10px;
`
const Img = styled.img`
    height: 20px;
`
const Items = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 9px 0px;
`
const Hr = styled.hr`
    color: #aaaaaa;
    margin-bottom: 2px;
`
const Login = styled.div`
    
`
const Button = styled.button`
    background-color: transparent;
    border: 1px solid blue;
    color: blue;
    padding: 5px 15px;
    display: flex;
    align-items: center;
    gap: 5px;
    border-radius: 5px;
    cursor: pointer;
`
function MenuTwo({darkMode, setdarkMode}){
    return(
        <Container>
          <Wrapper>
             <Logo>
                <Img src={siTube}/>
                S-I Tube
             </Logo>
             <Items>
               <HomeIcon/>
                Home
             </Items>
             <Items>
                <ExploreIcon/>
                Explore 
             </Items>
             <Items>
                <SubscriptionsIcon/>
                Subscription
             </Items>
             <Hr/>
             <Items>
             <HistoryIcon/>
             History
             </Items>
             <Items>
                <LocalLibrary/>
                Library
             </Items>
             <Hr/>
             <Login>
             Sigin to like, comment and suscribe
             <Link to="sigin">
             <Button>
             <AccountCircleOutlinedIcon/>
                SignIn
             </Button>
             </Link>
             </Login>
             <Hr/>
             <Items>
                <LibraryMusic/>
                Music
             </Items>
             <Items>
                <SportsKabaddi/>
                Sport
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
             <Items onClick={()=>setdarkMode(!darkMode)}>
                <ModeNightIcon/>
                {
                    darkMode ? 'Light Mode' : 'Dark Mode'
                }
             </Items>

          </Wrapper>
        </Container>
    )
}
export default MenuTwo