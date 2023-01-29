import React, {useState} from "react";
import styled, { ThemeProvider } from 'styled-components'
import Menu from "./components/Menu";
import MenuThree from "./components/MenuThree";
import MenuTwo from "./components/MenuTwo";
import NavBar from "./components/NavBar";
import NavBarTwo from "./components/NavBarTwo";
import { darkTheme, lightTheme } from "./components/utils/Theme";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Video from "./pages/Video";
import SignIn from "./pages/SignIn";
import Search from "./pages/Search";

const Container = styled.div`
display: flex;
`
const Main = styled.div`
flex: 7;
background-color: ${({theme}) => theme.bg};
`
const Wrapper = styled.div`
  padding: 20px 30px;
`
function App() {
  const [darkMode, setdarkMode] = useState(true)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <Container>
      <BrowserRouter>
      <Menu darkMode={darkMode} setdarkMode={setdarkMode}/>
    <Main>
      <NavBar/>
      <Wrapper>
        <Routes>
          <Route path="/">
              <Route index element={<Home type="random"/>}/>
              <Route path="trends" element={<Home type="trend"/>}/>
              <Route path="subscriptions" element={<Home type="sub"/>}/>
              <Route path="search" element={<Search/>}/>

              <Route path="signin">
                  <Route index element={<SignIn/>}/>
              </Route>
              <Route path="video">
                  <Route path=":id" element={<Video/>}/>
              </Route>
          </Route>
        </Routes>
      </Wrapper>
    </Main>
    </BrowserRouter>
    </Container>
    </ThemeProvider>
  );
}

export default App;
