import * as S from './Category.js'

export default function Category({ name, imageUrl }) {
    return (
        <S.CategoryContainer>
            <img src={imageUrl} alt={name} />
            <p>{name}</p>
        </S.CategoryContainer>
    )
  }