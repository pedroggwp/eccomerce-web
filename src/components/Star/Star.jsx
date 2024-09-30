import * as S from './Star.js'
import fillStar from '../assets/FillStar.svg'

export default function Star( { starsQuantity } ) {
    const stars = [];

    for (let i = 0; i < 5; i++) {
        if (i < starsQuantity) {
            stars.push("#FFAD33");
        } else {
            stars.push("#BFBFBF");
        }
    }

    return (
        <S.StarContainer>
            {stars.map((fill, index) => (
                <S.StarIcon
                    key={index}
                    xmlns={fillStar}
                    viewBox="0 0 24 24"
                    fill={fill}
                >
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.656 1.502 8.114-7.438-4.025-7.438 4.025 1.502-8.114-6.064-5.656 8.332-1.151z" />
                </S.StarIcon>
            ))}
        </S.StarContainer>
    );
}