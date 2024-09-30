import * as S from './Card.js'
import fillHeart from '../assets/FillHeart.svg'
import fillEye from '../assets/FillEye.svg'
import Star from '../Star/Star.jsx'

export default function Card({ 
        name, 
        currentPrice, 
        oldPrice, 
        starsNumber, 
        avaliationsNumber, 
        discountOrPhrase, 
        imageUrl,   
        discountColor = 'red', 
        isCompactLayout = false, 
        circleColors = [] }) {
    
    return (
        <S.CardContainer>
          <S.CardImageDiscount imageUrl={imageUrl}>

          {discountOrPhrase ? (
                    <S.Discount discountColor={discountColor == 'red' ? 'red' : 'green'}>
                        {isCompactLayout ? 'NEW' : `-${discountOrPhrase}%`}
                    </S.Discount>
                ) : null}
    
            <S.CardIcons>
              <img src={fillHeart} alt="Heart" />
              <img src={fillEye} alt="Eye" />
            </S.CardIcons>

          </S.CardImageDiscount>
           <S.CardAddToCart>
                <S.CardAddToCartText>Add to Cart</S.CardAddToCartText>
            </S.CardAddToCart>

    
          <div>
            <S.CardProductName>{name}</S.CardProductName>
    
            {isCompactLayout ? (
                    <>
                        <S.CardOneLineContainer>
                            <S.CardCurrentPrice>${currentPrice}</S.CardCurrentPrice>
                            <Star starsQuantity={starsNumber} />
                            <S.CardAvalitions>({avaliationsNumber})</S.CardAvalitions>
                        </S.CardOneLineContainer>

                        {circleColors && circleColors.length > 0 && (
                            <S.RadioGroup>
                                {circleColors.map((color, index) => (
                                    <label key={index}>
                                        <S.RadioInput
                                            type="radio"
                                            name="colorSelect"
                                            value={color}
                                        />
                                        <S.ColorCircle color={color} />
                                    </label>
                                ))}
                            </S.RadioGroup>
                        )}
                    </>
                ) : (
                    <>
                        <S.CardOneLineContainer>
                            <S.CardCurrentPrice>${currentPrice}</S.CardCurrentPrice>
                            {oldPrice && <S.CardOldPrice>${oldPrice}</S.CardOldPrice>}
                        </S.CardOneLineContainer>
                        <S.CardOneLineContainer>
                            <Star starsQuantity={starsNumber} />
                            <S.CardAvalitions>({avaliationsNumber})</S.CardAvalitions>
                        </S.CardOneLineContainer>
                    </>
                )}
          </div>
        </S.CardContainer>
      );
}