import styled from "styled-components";

export const CardAddToCart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    width: 108.9%;
    height: 40px;
    position: absolute;
    text-align: center;
    bottom: 117px;
    background-color: black;
    color: white;
    border-radius: 0px 0px 4px 4px;
    margin: 0;
    transition: opacity 0.3s ease-in-out;
`

export const CardContainer = styled.div`
    width: 270px;
    height: 390px;
    border-radius: 4px;
    position: relative;

    &:hover ${CardAddToCart} {
        opacity: 1;
    }
 `

export const CardImageDiscount = styled.div`
    background-color: #F5F5F5;
    width: 270px;
    height: 250px;
    padding: 12px;
    background-image: url(${props => props.imageUrl});
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 4px;
    margin-bottom: 20px;
`;


export const Discount = styled.p`
    width: min-content;
    padding: 4px 12px;
    color: #FAFAFA;
    background-color: ${({ discountColor }) => (discountColor === 'green' ? '#44DB44' : '#DB4444')}; 
    border-radius: 4px;
    margin: 0;
`
export const CardIcons = styled.div`
   position: absolute;
    right: 0;
    top: 12px;
    display: flex;
    width: min-content;
    gap: 8px;
    flex-direction: column;
`

export const CardProductName = styled.p`
    font-weight: 500;
    font-size: 16px;
    margin: 0;
`
export const CardCurrentPrice = styled.p`
    font-weight: 500;
    color: #DB4444;
    font-size: 16px;
    margin: 0;
`

export const CardOldPrice = styled.del`
    color: #7F7F7F;
    font-size: 16px;
`

export const CardOneLineContainer = styled.div`
    display: flex;
    gap: 12px;
`

export const CardAvalitions = styled.p`
    color: #7F7F7F;
    font-weight: 600;
    margin: 0;
`
export const RadioInput = styled.input`
    display: none;
`;

export const ColorCircle = styled.span`
    background-color: ${({ color }) => color};
    width: 20px;
    height: 20px;
    display: inline-block;
    border-radius: 50%;
    margin-left: 4px;
    padding: 1px;
    cursor: pointer;
    border: 2px solid transparent;

    ${RadioInput}:checked + & {
        border: 2px solid black;
    }
`;

export const RadioGroup = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`;

export const CardAddToCartText = styled.p`
    margin: 0;
    font-size: 16px;
    font-weight: 500;
`