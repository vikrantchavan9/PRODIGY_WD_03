import { useNavigate } from "react-router-dom";
import hero_img from "../assets/apparel.png";

const Hero = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/collection");
  };

  return (
    <div className="relative w-auto text-white bg-gradient-to-r from-blue-800 to-blue-950 font-archivos">
      <div className="flex flex-col-reverse items-center justify-between px-6 py-12 mx-auto lg:flex-row lg:p-10">
        {/* Text Content */}
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <div className="pl-2">
            {/* <h1 className="mb-4 text-4xl font-bold leading-tight lg:text-6xl">
              Step into Style with <br />
              <span className="text-yellow-400">Fashion that Defines You</span>
            </h1> */}
            <h1 className="pt-4 mb-4 text-3xl font-bold leading-tight text-white lg:text-6xl">
              Fashion that Defines You
            </h1>
            <p className="mb-6 text-lg text-gray-200 lg:text-xl">
              Discover the latest trends and timeless classics for Men, Women,
              and Accessories. Shop now and stand out!
            </p>
          </div>

          {/* Call-to-Actions */}
          <div className="flex flex-col justify-center gap-4 pt-8 sm:flex-row lg:justify-start">
            <button
              onClick={handleRedirect}
              className="px-6 py-3 font-medium text-yellow-400 transition bg-transparent border-2 border-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-blue-900"
            >
              Explore Collections
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex justify-center w-full lg:w-1/2 lg:justify-end">
          <img
            src={hero_img} // Replace with your fashion-related image URL
            alt="Fashion Hero"
            className="rounded-xl "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
