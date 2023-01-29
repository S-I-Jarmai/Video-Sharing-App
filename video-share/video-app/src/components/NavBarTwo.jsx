import React from 'react'
import styled from 'styled-components'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import SearchOutlined from '@mui/icons-material/SearchOutlined'
const Container = styled.div`
    position: sticky;
    top: 0px;
    height: 36px;
    background-color: ${({theme})=>theme.bg};
    color: ${({theme})=>theme.text};
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
`
const Search = styled.div`
    width: 40%;
    position: absolute;
    left: 0px;
    right: 0px;
    margin: auto;
   border: 1px solid #aaaaaa;
   display: flex;
   justify-content: space-between;
`
const Input = styled.input`
    border: none;
    background-color: transparent;
    padding-right: 70%;
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
function NavBarTwo(){
    return(
        <Container>
            <Wrapper>
                <Search>
                    <Input placeholder="Search"/>
                    <SearchOutlined/>
                 </Search>
                <Button>
             <AccountCircleOutlinedIcon/>
                Subscribe
             </Button>
            </Wrapper>
        </Container>
    )
}
export default NavBarTwo