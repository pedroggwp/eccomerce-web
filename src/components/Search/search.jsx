import * as S from './search.js'

export default function SearchBar({text}) {

    return (
        <S.SearchInput type='search' placeholder={text}>
        </S.SearchInput>
    );

}