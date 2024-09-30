import * as S from './section_header.js'

export default function SectionHeader({subtitle}) {

    return (
        <S.Container>
            <S.Retangle></S.Retangle>
            <S.Subtitle>{subtitle}</S.Subtitle>
        </S.Container>

    );
}