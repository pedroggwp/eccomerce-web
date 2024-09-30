import * as S from './Arrow.js'
import arrowImageLeft from '../assets/Arrow.svg'
import arrowImageRight from '../assets/ArrowRight.svg'

export default function Arrow() {
  return (
    <S.ArrowContainer>
      <S.Imagem src={arrowImageLeft} alt="Imagem de uma seta apontando para esquerda" />
      <S.Imagem src={arrowImageRight} alt="Imagem de uma seta apontando para direita" />
    </S.ArrowContainer>
  )
}
