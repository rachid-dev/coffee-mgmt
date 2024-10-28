import styled from 'styled-components'
import { Link } from 'react-router-dom'



export const Title = styled.h1`
    text-align : center;
    color : white;
    cursor : pointer;
    `
export const HeaderContainer = styled.div`
    display : block flow;
    border-bottom : 2px solid black ;
    padding : 20px;
    background-color : green;
    `
export const StyledLink = styled(Link)`
    padding: 10px 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    text-align: center;
    `

export const NavContainer = styled.nav`
    padding: 3px;
    position : realtive;
    text-align : right;
    justify-content: space-between;
    align-items: center;
  `