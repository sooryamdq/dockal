import person from "../assets/person.png";
import Certificates from "../assets/Certificates.png";
import NavigationTwo from "../assets/NavigationTwo";
import MyCalendar from "./Calander";
import CardFour from "../assets/CardFour";
import Navigation from "../assets/Navigation";

const EventDetails = () => {
  return (
    <div className="">
      <div className="h-auto flex flex-col justify-center items-center py-4">
        <div className="lg:block hidden">
          <div className="flex lg:flex-row flex-col lg:gap-10 gap-0 items-center justify-center ">
            <div className="flex relative mt-20">
              <div className="bg-imagenew w-44 h-56 ">
                <div className="flex justify-center items-center relative">
                  <div className="w-40 h-40 rounded-full absolute left-2 top-5">
                    <img
                      src={person}
                      alt=""
                      className=" border border-white rounded-full"
                    />
                  </div>
                  <div className="w-40 h-40 rounded-full  absolute left-6 top-5">
                    <img
                      src={person}
                      alt=""
                      className=" border border-white rounded-full"
                    />
                  </div>
                  <div className="w-40 h-40 rounded-full  absolute left-10 top-5">
                    <img
                      src={person}
                      alt=""
                      className=" border border-white rounded-full"
                    />
                  </div>
                  <div className="rounded-full p-3 bg-white  absolute left-14 top-5">
                    <p className="font-normal text-xs text-[#2F2F2F]">50+</p>
                  </div>
                </div>
                <div className="flex justify-center items-center mt-20">
                  <img src={Certificates} alt="" />
                </div>
                <div>
                  <p className="font-semibold text-xs text-white px-5 py-2">
                    Edit Credentials
                  </p>
                </div>
              </div>

              <div className="absolute -top-2 -right-2">
                <Navigation />
              </div>
            </div>
            <div className="cardTwo relative w-40 h-36 mt-20">
              <div className="flex justify-center items-center relative">
                <div className="w-40 h-40 rounded-full absolute left-2 top-5">
                  <img
                    src={person}
                    alt=""
                    className=" border border-white rounded-full"
                  />
                </div>
                <div className="w-40 h-40 rounded-full  absolute left-6 top-5">
                  <img
                    src={person}
                    alt=""
                    className=" border border-white rounded-full"
                  />
                </div>
                <div className="w-40 h-40 rounded-full  absolute left-10 top-5">
                  <img
                    src={person}
                    alt=""
                    className=" border border-white rounded-full"
                  />
                </div>
                <div className="rounded-full p-3 bg-white  absolute left-14 top-5">
                  <p className="font-normal text-xs text-[#2F2F2F]">50+</p>
                </div>
              </div>
              <div className="mt-20">
                <p className="font-semibold text-xs text-white px-5 py-2">
                  Student Management
                </p>
              </div>
              <div className="absolute -top-3 -right-1">
                <NavigationTwo />
              </div>
            </div>
          </div>
        </div>

        <div className="w-auto w-[80%] flex justify-center items-center h-auto lg:mt-0 mt-10 lg:block hidden ">
          <div className="cardThree  w-96  h-80  relative">
            <MyCalendar />

            <div className="absolute z-0 lg:right-0.5 lg:-top-1 -top-2 -right-1">
              <p className="absolute p-3 text-white">Upcoming Events</p>
              <CardFour />
            </div>
          </div>
        </div>
        <div className="w-[80%] p-4 bg-primary my-4 rounded-md flex flex-col justify-center items-center h-auto  block lg:hidden">
          <p className="p-3 text-white">Upcoming Events</p>
          <div className="w-full">
            <MyCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
