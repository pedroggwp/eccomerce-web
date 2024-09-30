import * as S from './Footer.js'
import qrcode from '../assets/QRCODE.svg';
import googleplayappstore from '../assets/GOOGLE_PLAY_APP_STORE.svg';
import socialmedias from '../assets/SOCIAL_MEDIAS.svg';

export default function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterSection>
        <S.FooterHeading>Exclusive</S.FooterHeading>
        <S.FooterSubHeading>Subscribe</S.FooterSubHeading>
        <S.FooterText>Get 10% off your first order</S.FooterText>
        <S.SubscribeInput>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">→</button>
        </S.SubscribeInput>
      </S.FooterSection>

      <S.FooterSection>
        <S.FooterSubHeading>Support</S.FooterSubHeading>
        <S.FooterText>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh</S.FooterText>
        <S.FooterText>exclusive@gmail.com</S.FooterText>
        <S.FooterText>+88015-88888-9999</S.FooterText>
      </S.FooterSection>

      <S.FooterSection>
        <S.FooterSubHeading>Subscribe</S.FooterSubHeading>
        <S.FooterText>My Account</S.FooterText>
        <S.FooterText>Login / Register</S.FooterText>
        <S.FooterText>Cart</S.FooterText>
        <S.FooterText>Wishlist</S.FooterText>
        <S.FooterText>Shop</S.FooterText>
      </S.FooterSection>

      <S.FooterSection>
        <S.FooterSubHeading>Quick Link</S.FooterSubHeading>
        <S.FooterText>Privacy Policy</S.FooterText>
        <S.FooterText>Terms Of Use</S.FooterText>
        <S.FooterText>FAQ</S.FooterText>
        <S.FooterText>Contact</S.FooterText>
      </S.FooterSection>

      <S.FooterSection>
        <S.FooterSubHeading>Download App</S.FooterSubHeading>
        <S.GrayText>Save $3 with App New User Only</S.GrayText>
        <S.QrCodes>
          <img src={qrcode} alt="QR Code" />
          <img src={googleplayappstore} alt="Google Play and App Store" />
        </S.QrCodes>
        <S.SocialMedia>
          <img src={socialmedias} alt="Social Media Icons" />
        </S.SocialMedia>
      </S.FooterSection>
    </S.FooterContainer>
  );
}
