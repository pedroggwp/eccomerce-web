import styled from 'styled-components';
import send from '../assets/SEND.svg'

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: #000;
  color: #fff;
  padding: 100px;
`;

export const FooterSection = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: start;
  text-align: start;
`;

export const FooterHeading = styled.h2`
  margin: 0;
`;

export const FooterSubHeading = styled.h3`
  margin: 0;
`;

export const FooterText = styled.p`
  margin: 0;
  &:hover {
    cursor: pointer;
    color: #e74c3c;
  }
`;

export const GrayText = styled.p`
  font-size: 14px;
  color: #c1c1c1;
`;

export const SubscribeInput = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  background-color: black;

  input {
    margin-right: 10px;
    padding: 20px;
    border: 3px solid white;
    color: #FAFAFA;
    font-size: 16px;
    background-color: black;
    border-radius: 4px;
  }
`;

export const QrCodes = styled.div`
  margin: 0;
  width: 100%;
`;

export const SocialMedia = styled.div`
  margin: 0;
`;