import * as S from './header.js'
import SearchInput from '../Search/search.jsx';
import wishlist_image from './assets/Heart.svg'
import cart_image from './assets/Cart.svg'

export default function Header({ title, dictTextAddress }) {
  
    return (
         <S.HeaderWrapper>
            <S.Title>{title}</S.Title>
            <S.NavList>
                {Object.keys(dictTextAddress).map((key) => (
                    <S.NavItem key={key}>
                        <S.NavLink href={dictTextAddress[key]}>{key}</S.NavLink>
                    </S.NavItem>
                ))}
            </S.NavList>

            <SearchInput text="What are you looking for?" />

            <S.IconsWrapper>
                <button>
                    <img src={wishlist_image} alt="Favoritos" />
                </button>
                <button>
                    <img src={cart_image} alt="Carrinho" />
                </button>
            </S.IconsWrapper>
        </S.HeaderWrapper>
    );
  }