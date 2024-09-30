import styled from "styled-components";
import lupa from './assets/Vector.svg'

export const SearchInput = styled.input`
    width: 245px;
    height: 40px;
    background-image: url(${lupa});
    background-repeat: no-repeat;
    background-position: right;
    background-color: #F5F5F5;
    background-position-x: calc(245px - 34px);
    padding: 7px 12px 7px 20px;
    border-radius: 4px;
    color: #7a7a7a;
    border: 0;

    &::-webkit-search-cancel-button {
        appearance: none;
    }
`;