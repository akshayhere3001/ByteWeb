import logo from "/logo.png";

const SignUpForm = () => {
  return (
    <>
      {/* Flex Container */}
      <div className="space-y-5">
        <div>
          <img src={logo} alt="Logo" />

          <p className="text-[#505050] font-semibold">
            Create your tapect account by following 3 simple steps.
          </p>
        </div>
        <ul className="list-none flex space-x-6">
          <li>
            <a href="#">Personal Details</a>
          </li>
          <li>
            <a href="#">Personal Info</a>
          </li>
          <li>
            <a href="#">Account Security</a>
          </li>
        </ul>

        {/* Input  */}
        <div className="space-y-3">
          <div>
            <p>First Name</p>
            <input
              type="text"
              placeholder="Enter Your First Name"
              required
              className="w-full py-2 px-3 border-2"
            />
          </div>
          <div>
            <p>Last Name</p>
            <input
              type="text"
              placeholder="Enter Your Last Name"
              required
              className="w-full py-2 px-3 border-2"
            />
          </div>

          <div>
            <p>Email</p>
            <input
              type="text"
              placeholder="Enter Your Email"
              required
              className="w-full py-2 px-3 border-2"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
