import * as S from './Benefits.js'

export default function Benefits({ title, description, iconUrl }) { 

    return (
        <S.BenefitsContainer>
            
            <img src={iconUrl}></img>
            <S.BenefitsTitle>{title}</S.BenefitsTitle>
            <S.BenefitsDescription>{description}</S.BenefitsDescription>

        </S.BenefitsContainer>
    )
}