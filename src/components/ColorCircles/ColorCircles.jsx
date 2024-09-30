import * as S from './ColorCircles.js'

export default function ColorCircles({ color1, color2 }) {
    return (
        <S.CircleContainer>
          <S.Circle color={color1} />
          <S.Circle color={color2} />
        </S.CircleContainer>
      );
}