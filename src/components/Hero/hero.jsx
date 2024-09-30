import * as S from './hero.js'

export default function Hero({ imageUrl }) {
  return (

    <S.Div>
      <img src={imageUrl} alt="" />
    </S.Div>
    
  )
}
