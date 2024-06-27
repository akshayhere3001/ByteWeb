import { IoIosArrowDropleft, IoMdStar } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import LoginImg from "/login-img.png";

const AuthSideBar = () => {
  return (
    <div className="w-1/2 relative">
      <img
        src={LoginImg}
        alt="Login img"
        className="object-cover rounded-xl h-[90vh]"
      />
      {/* text container  */}
      <div className="absolute bottom-8 left-[7%] w-[80%] p-10 flex flex-col bg-[#B0AEAE] text-white items-start space-y-4 rounded-md opacity-90">
        <p className="opacity-100">
          "Managing my digital business cards has never been easier since I
          started using Tapect. The intuitive interface and efficient tools
          streamline the process, allowing me to focus on what truly matters:
          connecting with clients and growing my network. Tapect has truly
          revolutionized the way I manage my professional contacts."
        </p>
        <div className="flex items-center relative w-full">
          <div className="space-y-1">
            <h1 className="text-xl font-bold">Sarah Smith</h1>
            <p>Marketing Consultant</p>
            {/* icons  */}
            <div className="flex list-none space-x-2">
              <li>
                <IoMdStar />
              </li>
              <li>
                <IoMdStar />
              </li>
              <li>
                <IoMdStar />
              </li>
              <li>
                <IoMdStar />
              </li>
              <li>
                <IoMdStar />
              </li>
            </div>
          </div>

          {/* slide arrows  */}
          <div className="flex list-none absolute right-1 bottom-0 space-x-2">
            <li>
              <IoIosArrowDropleft className="text-3xl cursor-pointer" />
            </li>
            <li>
              <IoIosArrowDropright className="text-3xl cursor-pointer" />
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthSideBar;
