import logo from "../assets/logo.png";
import { FcGoogle } from "react-icons/fc";
import Button from "../components/Button";
import Or from "../components/Or";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      {/* main container  */}
      <div>
        {/* Flex Container */}

        <div className="flex items-center justify-center p-5">
          {/* Feedback  */}

          {/* Form  */}
          <div className="w-1/2 px-10 mr-32  space-y-6">
            <img src={logo} alt="Logo" />

            <div>
              <h1 className="text-2xl font-bold text-[#010E21]">
                Welcome Back
              </h1>
              <p className="text-[#505050] ">
                Sign in to manage your digital business cards.
              </p>
            </div>

            {/* input  */}
            <div className="space-y-3">
              <div>
                <p>Email</p>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  required
                  className="w-full py-2 px-3 border-2"
                />
              </div>
              <div>
                <p>Password</p>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  required
                  className="w-full py-2 px-3 border-2"
                />
                <div className="flex flex-1 items-center justify-between">
                  <div className="flex space-x-1">
                    <input type="checkbox" />
                    <p>Keep me Logged in</p>
                  </div>

                  <p className="cursor-pointer hover:text-[#652DBF]">
                    Forgot Password?
                  </p>
                </div>
              </div>
            </div>

            {/* Button  */}
            <div className="space-y-4">
              <Button value="Sign Up" />
              <p className="text-center">
                Don't have an account yet?{" "}
                <Link
                  to="signup"
                  className="text-[#652DBF] hover:text-[#652DBA]"
                >
                  Sign Up
                </Link>{" "}
              </p>
            </div>

            <Or />
            <button className="w-full flex items-center justify-center  border-2 border-black rounded-lg py-3">
              <FcGoogle className="text-xl mr-2" /> Continue with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
