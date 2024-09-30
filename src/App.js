import './App.css';
import Advertisement from './components/Advertisement/advertisement.jsx';
import Header from './components/Header/header.jsx';
import Hero from './components/Hero/hero.jsx';
import SectionHeader from './components/Subtitle/section_header.jsx';
import SectionBar from './components/SectionBar/SectionBar.jsx';
import Card from './components/Card/Card.jsx';
import controllerImageUrl from "./components/assets/HAVIT_HV_G92_Gamepad.png";
import keyBoardImageUrl from "./components/assets/AK_900_Wired_Keyboard.png";
import monitorImageUrl from "./components/assets/IPS_LCD_Gaming_Monitor.png";
import chairImageUrl from "./components/assets/S_Series_Comfort_Chair.png";
import Button from './components/Button/Button.jsx';
import Category from './components/Category/Category.jsx';
import phoneIcon from './components/assets/Category-CellPhone.svg'
import computerIcon from './components/assets/Category-Computer.svg'
import smartWatchIcon from './components/assets/Category-SmartWatch.svg'
import cameraIcon from './components/assets/Category-Camera.svg'
import headPhoneIcon from './components/assets/Category-Headphone.svg'
import gamingIcon from './components/assets/Category-Gamepad.svg'
import coatImageUrl from "./components/assets/The-North-Face-x-Gucci-coat.png";
import bagImageUrl from "./components/assets/Light-Gucci-Savoy-medium-duffle-bag.png";
import coolerImageUrl from "./components/assets/Cooler.png";
import booSelfImageUrl from "./components/assets/Small_BookSelf.png";
import jblImageUrl from "./components/assets/JBL_IMAGEM.svg";
import iphoneImageUrl from './components/assets/Advertisement.svg'
import dogImageUrl from './components/assets/Breed_Dry_Dog_Food.png'
import cameraImageUrl from './components/assets/CANON_EOS_DSLR_Camera.png'
import laptopImageUrl from './components/assets/ASUS_FHD_Gaming_Laptop.png'
import curologyImageUrl from './components/assets/Curology_Product_Set.png'
import carImageUrl from './components/assets/Kids_Electric_Car.png'
import footballBootImageUrl from './components/assets/Jr_Zoom_Soccer_Cleats.png'
import gamepadImageUrl from './components/assets/GP11_Shooter_USB_Gamepad.png'
import jacketImageUrl from './components/assets/Quilted_Satin_Jacket.png'
import newArriavelImg from './components/assets/NewArrival.png'
import Benefits from './components/Benefits/Benefits.jsx';
import serviceBenefitUrl from './components/assets/ServicesBenefit.png'
import customerServiceBenefit from './components/assets/CustomerServiceBenefit.svg'
import securityServiceBenefit from './components/assets/SecurityServiceBenefit.svg'
import Footer from './components/Footer/Footer.jsx';


function App() {

  const colors = ['#FF0000', '#00FF00', '#0000FF'];
  background: ;


  return (
    <>
      <Advertisement
        text="Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"
        linkText="ShopNow"
        linkAddress="https://www.apple.com/"
        languages={['English', 'Português', '中国人', 'Español']}
      />

      <Header 
        title="Exclusive"
        dictTextAddress={{
          "Home": "/home",
          "Contact": "/contact",
          "About": "/about",
          "Sign Up": "/signup"
        }}
      />

      <Hero
        imageUrl={iphoneImageUrl}
      />

      <SectionHeader
        subtitle="Today's"
      />

      <SectionBar
        title="Flash Sales"
        showTime={true} 
        timeData={{ days: "03", hours: "23", minutes: "19", seconds: "56" }}
      />

      <div className="card-container">
        <Card 
          name="HAVIT HV-G92 Gamepad"
          currentPrice="120"
          oldPrice="160"
          starsNumber="5"
          avaliationsNumber="88"
          discountOrPhrase="40"
          imageUrl={controllerImageUrl}
        />

        <Card 
          name="AK-900 Wired Keyboard"
          currentPrice="960"
          oldPrice="1160"
          starsNumber="4"
          avaliationsNumber="75"
          discountOrPhrase="35"
          imageUrl={keyBoardImageUrl}
        />

        <Card 
          name="IPS LCD Gaming Monitor"
          currentPrice="370"
          oldPrice="400"
          starsNumber="5"
          avaliationsNumber="99"
          discountOrPhrase="30"
          imageUrl={monitorImageUrl}
        />

        <Card 
          name="S-Series Comfort Chair"
          currentPrice="375"
          oldPrice="400"
          starsNumber="4.5"
          avaliationsNumber="99"
          discountOrPhrase="25"
          imageUrl={chairImageUrl}
        />
      </div>

      <div className='button-cotainer'>
        <Button
          buttonText="View All Products"
        />
      </div>

      <hr className='line'></hr>

      <SectionHeader
        subtitle="Categories"
      />

      <SectionBar
        title="Browse By Category"
        showTime={false}
      />

    <div className='category-container'>
      <Category 
        name="Phones"
        imageUrl={phoneIcon}
      />

      <Category 
        name="Computers"
        imageUrl={computerIcon}
      />

      <Category 
        name="SmartWatch"
        imageUrl={smartWatchIcon}
      />

      <Category 
        name="Camera"
        imageUrl={cameraIcon}
      />

      <Category 
        name="HeadPhones"
        imageUrl={headPhoneIcon}
      />

      <Category 
        name="Gaming"
        imageUrl={gamingIcon}
      />
    </div>

    <hr className='line'></hr>


    <SectionHeader
        subtitle="This Month"
    />

    <SectionBar
        title="Best Selling Products"
        showTime={false}
        showArrow={false}
        showButton={true}
        buttonText="View All"
    />

    <div className="card-container">
        <Card 
          name="The north coat"
          currentPrice="260"
          oldPrice="360"
          starsNumber="5"
          avaliationsNumber="65"
          imageUrl={coatImageUrl}
        />

        <Card 
          name="Gucci duffle bag"
          currentPrice="960"
          oldPrice="1160"
          starsNumber="4.5"
          avaliationsNumber="65"
          imageUrl={bagImageUrl}
        />

        <Card 
          name="RGB liquid CPU Cooler"
          currentPrice="160"
          oldPrice="170"
          starsNumber="4.5"
          avaliationsNumber="65"
          imageUrl={coolerImageUrl}
        />

        <Card 
          name="Small BookSelf"
          currentPrice="360"
          starsNumber="5"
          avaliationsNumber="65"
          imageUrl={booSelfImageUrl}
        />
    </div>

    <Hero
      imageUrl={jblImageUrl}
    />

    <SectionHeader
        subtitle="Our Products"
    />

    <SectionBar
        title="Explore Our Products"
        showTime={false}
    />

    <div className="card-container">
        <Card 
          name="Breed Dry Dog Food"
          currentPrice="100"
          starsNumber="3"
          avaliationsNumber="35"
          imageUrl={dogImageUrl}
          isCompactLayout={true}
        />

        <Card 
          name="CANON EOS DSLR Camera"
          currentPrice="360"
          starsNumber="4"
          avaliationsNumber="95"
          imageUrl={cameraImageUrl}
          isCompactLayout={true}
        />

        <Card 
          name="ASUS FHD Gaming Laptop"
          currentPrice="700"
          starsNumber="5"
          avaliationsNumber="325"
          imageUrl={laptopImageUrl}
          isCompactLayout={true}
        />

        <Card 
          name="Curology Product Set"
          currentPrice="500"
          starsNumber="4"
          avaliationsNumber="145"
          imageUrl={curologyImageUrl}
          isCompactLayout={true}
        />
    </div>

    <div className="card-container">
        <Card 
          name="Kids Electric Car"
          currentPrice="960"
          starsNumber="5"
          avaliationsNumber="65"
          imageUrl={carImageUrl}
          discountOrPhrase="NEW"
          discountColor="green"
          isCompactLayout={true}
          circleColors={['#DB4444', '#DB4444']}
        />

        <Card 
          name="Jr. Zoom Soccer Cleats"
          currentPrice="1160"
          starsNumber="5"
          avaliationsNumber="35"
          imageUrl={footballBootImageUrl}
          isCompactLayout={true}
          circleColors={['#EEFF61', '#DB4444']}

        />

        <Card 
          name="GP11 Shooter USB Gamepad"
          currentPrice="660"
          starsNumber="4.5"
          avaliationsNumber="55"
          imageUrl={gamepadImageUrl}
          discountOrPhrase="NEW"
          discountColor="green"
          isCompactLayout={true}
          circleColors={['#000000', '#DB4444']}
        />

        <Card 
          name="Quilted Satin Jacket"
          currentPrice="660"
          starsNumber="4.5"
          avaliationsNumber="55"
          imageUrl={jacketImageUrl}
          isCompactLayout={true}
          circleColors={['#184A48', '#DB4444']}
        />
    </div>

    <div className='button-cotainer'>
        <Button
          buttonText="View All Products"
        />
      </div>
    
    <SectionHeader
        subtitle="Featured"
    />

    <SectionBar
        title="New Arrival"
        showTime={false}
        showArrow={false}
    />

    <Hero
      imageUrl={newArriavelImg}
    />

    <div className='benefits-container'>
      <Benefits
        title="FREE AND FAST DELIVERY"
        description="Free delivery for all orders over $140"
        iconUrl={serviceBenefitUrl} 
      />

      <Benefits
        title="24/7 CUSTOMER SERVICE"
        description="Friendly 24/7 customer support"
        iconUrl={customerServiceBenefit} 
      />
          
      <Benefits
        title="FREE AND FAST DELIVERY"
        description="Free delivery for all orders over $140"
        iconUrl={securityServiceBenefit} 
      />
    </div>

    <Footer />

  </>
  );
}

export default App;
