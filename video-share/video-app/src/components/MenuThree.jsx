import React from 'react'
import styled from 'styled-components'

const Containter = styled.div`
    flex: 1;
    position: sticky;
    top: 0;
    background-color: ${({theme})=>theme.bg};
    color: ${({theme})=>theme.text};
    height: 100vh;
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding: 10px 16px;
`
const Logo = styled.div`
    display: flex;
    align-items: center;
`
const Items = styled.div`
    
`
function MenuThree(){
    return(
        <Containter>
        <Wrapper>
            <Logo>
                S~I Tube
            </Logo>
        </Wrapper>
        </Containter>
    )
}

export default MenuThree