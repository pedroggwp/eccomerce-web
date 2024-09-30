import * as S from './SectionBar.js'
import Time from '../Time/Time.jsx'
import Arrow from '../Arrow/Arrow.jsx'
import Button from '../Button/Button.jsx'

export default function SectionBar({ title, showTime = true, timeData, showArrow = true, showButton = false, buttonText="Click Me" }) {
  return (
    <S.SectionBarContainer>
      
      <S.Title>{title}</S.Title>

      {showTime && (
        <Time
          days={timeData?.days || "00"}
          hours={timeData?.hours || "00"}
          minutes={timeData?.minutes || "00"}
          seconds={timeData?.seconds || "00"}
        />
      )}

      {!showTime && !showArrow && !showButton ? null : (
        showArrow ? <Arrow /> : showButton ? <Button buttonText={buttonText}></Button> : null
      )}
  </S.SectionBarContainer>
  )
}

