import * as S from "./advertisement.js"

export default function Advertisement({text, linkText, linkAddress, languages}) {

    return (
        <S.Article>
            <S.Div>
                <S.P>{text}</S.P>

                <S.A href={linkAddress} target='_blank'>{linkText}</S.A>
            </S.Div>

            <S.Select name='languages' id='languages'>
                {languages.map( language => 
                    <S.Option value={language}>{language}</S.Option>
                )}
            </S.Select>
        </S.Article>
    );
}