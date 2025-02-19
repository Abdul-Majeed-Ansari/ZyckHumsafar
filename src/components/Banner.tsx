import banner from '../../public/banner.jpg';
import heart from '../../public/heart-white.png';
import phone from '../../public/banner-phone.png';
import phone1 from '../../public/banner-phone1.png';
import appleStore from '../../public/apple-store.png';
import googleStore from '../../public/google-store.png';

const Banner = () => {
  return (
    <section 
      style={{
        backgroundImage: `linear-gradient(rgba(255, 192, 203, 0.8), rgba(255, 192, 203, 0.8)), url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '600px',
        opacity: 0.9,
        position: 'relative',
      }}
      className="px-4"
    >
      <div className="max-w-[880px] mx-auto h-screen">
        {/* Title Section */}
        <div className="flex flex-col gap-2 justify-center items-center sm:pt-10 sm:pb-5 md:pt-15 md:pb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold text-center">
            Download <span className="text-pink-500">Shaadee.pk</span> App
          </h1>
          <img src={heart} alt="heart" className="w-8 sm:w-10" />
        </div>

        {/* Content Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          {/* Phones Section */}
          <div className="flex justify-center gap-4">
            <img src={phone} alt="phone-left" className="w-[120px] sm:w-[140px] md:w-[180px]" />
            <img src={phone1} alt="phone-right" className="w-[120px] sm:w-[140px] md:w-[180px]" />
          </div>

          {/* App Store Buttons Section */}
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-semibold text-center">
              Available on the Shaadee.pk App
            </h2>
            <div className="flex gap-4">
              <a href="#">
                <img src={appleStore} alt="Apple Store" className="w-[120px] sm:w-[140px]" />
              </a>
              <a href="#">
                <img src={googleStore} alt="Google Store" className="w-[120px] sm:w-[140px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
