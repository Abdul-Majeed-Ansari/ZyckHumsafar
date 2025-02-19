import banner1 from '../../public/banner1.jpg';
import heart from '../../public/heart-white.png';

const Banner1 = () => {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(255, 192, 203, 0.8), rgba(255, 192, 203, 0.8)), url(${banner1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 'auto',
        minHeight: '400px',
        opacity: 0.8,
      }}
      className="px-4 py-10"
    >
      <div className="max-w-[980px] mx-auto flex flex-col items-center">
        {/* Title Section */}
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold text-center mt-6">
            Why <span className="text-pink-500">Shaadee.pk</span> App
          </h1>
          <img src={heart} alt="heart-white" className="w-8 sm:w-10" />
        </div>

        {/* Description Section */}
        <p className="text-white text-base sm:text-lg md:text-2xl text-center mt-6 sm:mt-8 leading-relaxed px-2">
          Unlike traditional rishta theory and matchmaking, we rely on a cooperative, interactive bond between our representatives and our clients. Initially, the user is requested some details and then assisted by an intelligent facilitator (referred to..)
        </p>

        {/* Learn More Section */}
        <p className="text-center text-pink-500 text-sm sm:text-lg md:text-2xl font-semibold mt-4 cursor-pointer hover:underline">
          Learn More {">"}
        </p>
      </div>
    </section>
  );
};

export default Banner1;
