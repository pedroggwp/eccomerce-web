import * as S from './Time.js'
import imagePoints from '../assets/Dots.svg'

export default function Time({ days, hours, minutes, seconds }) {
  return (
    <S.TimeContainer>

        <S.TimeSection>
            <S.TimeText>Days</S.TimeText>
            <S.Time>{days}</S.Time>
        </S.TimeSection>

        <S.TimeDotsImage src={imagePoints}></S.TimeDotsImage>

        <S.TimeSection>
            <S.TimeText>Hours</S.TimeText>
            <S.Time>{hours}</S.Time>
        </S.TimeSection>

        {/* <S.TimePoints>..</S.TimePoints> */}
        <S.TimeDotsImage src={imagePoints}></S.TimeDotsImage>

        <S.TimeSection>
            <S.TimeText>Minutes</S.TimeText>
            <S.Time>{minutes}</S.Time>
        </S.TimeSection>

        {/* <S.TimePoints>..</S.TimePoints> */}
        <S.TimeDotsImage src={imagePoints}></S.TimeDotsImage>

        <S.TimeSection>
            <S.TimeText>Seconds</S.TimeText>
            <S.Time>{seconds}</S.Time>
        </S.TimeSection>

    </S.TimeContainer>
  )
}
