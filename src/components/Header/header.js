import styled from "styled-components";

export const HeaderWrapper = styled.header`
    display: flex;
    height: 15vh;
    margin-top: 20px;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid black;
`;

export const Title = styled.h1`
    font-family: 'Inter', sans-serif;
    font-size: 24px;
    letter-spacing: 3%;
`;

export const NavList = styled.ul`
    display: flex;
    align-items: center;
`;

export const NavItem = styled.li`
    list-style: none;
    margin-left: 48px;
    justify-content: center;
`;

export const NavLink = styled.a`
    color: black;
    text-decoration: none;
    line-height: 24px;
    font-weight: 500;

    &.active {
        font-weight: bold;
        border-bottom: 2px solid black;
    }
`;

export const IconsWrapper = styled.div`
    display: flex;
    align-items: center;

    button {
        background: none;
        border: none;
        cursor: pointer;

        img {
            width: 24px;
            height: 24px;
        }
    }
`;