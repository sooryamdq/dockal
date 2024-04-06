const WelcomeUser = ({ userData }) => {
  return (
    <>
      <div className="hidden lg:block">
        <div className="w-full h-auto flex flex-col justify-center items-center text-white lg:pt-0 pt-10 ">
          <div className=" w-[80%] lg:h-24 h-[60vh] flex justify-around lg:flex-row flex-col  bg-gradient-to-r from-teal-800 to-teal-200  lg:rounded-full rounded-md  px-4 py-1">
            <div className="flex justify-center items-center flex-col pb-4 block">
              <p className="text-4xl font-semibold">Welcome,</p>
              <p className="text-sm font-medium">
                {userData?.data.firstName}
                <span className="border border-white mx-1"></span>
                <span className="font-light text-xs">Faculty Advisor</span>
              </p>
            </div>

            <div className="flex justify-center lg:items-start items-center flex-col relative ">
              <p className="text-base font-semibold">Credentials Issued</p>
              <p className="text-3xl font-extrabold">57</p>
              <div class="flex-grow h-[80%] w-1 bg-white absolute -left-2 lg:block hidden"></div>
            </div>
            <div className="flex justify-center lg:items-start items-center flex-col relative">
              <p className="text-base font-semibold">Pending Credentials</p>
              <p className="text-3xl font-extrabold">12</p>
              <div class="flex-grow h-[80%] w-1 bg-white absolute -left-2 lg:block hidden"></div>
            </div>
            <div className="flex justify-center lg:items-start items-center flex-col relative">
              <p className="text-base font-semibold">Requests </p>
              <p className="text-3xl font-extrabold">5</p>
              <div class="flex-grow h-[80%] w-1 bg-white absolute -left-2 lg:block hidden"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="block lg:hidden">
        <div className="w-full px-4 py-4">
          <div className="bg-gradient-to-r from-teal-800 to-teal-200  p-4 rounded-md">
            <p className="text-sm font-semibold text-white">Welcome,</p>
            <p className="text-sm font-medium text-white">
              {userData?.data.firstName}
              <span className="border border-white mx-1"></span>
              <span className="font-light text-xs text-white">
                Faculty Advisor
              </span>
            </p>
          </div>
        </div>
        <div className="flex justify-around py-4 px-4">
          <div className="flex flex-col gap-1 justify-center items-center ">
            <p className="text-2xl font-extrabold bg-primary text-white rounded-sm p-1 w-14 text-center">
              57
            </p>
            <p className="text-xs ">Credentials Issued</p>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center">
            <p className="text-2xl font-extrabold bg-primary text-white rounded-sm p-1 w-14 text-center">
              12
            </p>
            <p className="text-xs ">Pending Credentials</p>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center">
            <p className="text-2xl font-extrabold bg-primary text-white rounded-sm p-1 w-14 text-center">
              5
            </p>
            <p className="text-xs">Requests </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeUser;
