import styled from 'styled-components';

export const CircleContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

export const Circle = styled.select`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;