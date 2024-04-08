import DocumentIcon from "../assets/DocumentIcon";
import DownArrow from "../assets/DownArrow";
import GalleryIcon from "../assets/GalleryIcon";
import HeroIcon from "../assets/HeroIcon";
import Menubar from "../assets/Menubar";
import MessageIcon from "../assets/MessageIcon";
import MobileIcon from "../assets/MobileIcon";
import PinIcon from "../assets/PinIcon";
import SendIcon from "../assets/SendIcon";
import VoiceIcon from "../assets/VoiceIcon";
import student from "../assets/student.png";

const ChatScreenMobile = ({
  currentChat,
  showUserInfo,
  messages,
  handleUserInfo,
  handleAllChatsClick,
}) => {
  return (
    <div className="md:hidden">
      <div className="px-4 py-2 flex flex-col">
        {/* Chat header */}
        <div className="border-b pb-4 mb-4">
          <div className="flex justify-around items-center ">
            {/* <div className="flex items-center gap-2">
              <img
                src={student}
                alt="student"
                width="30"
                height="30"
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-sm">Reena</p>
                <p className="text-xs text-gray-500">Active Now</p>
              </div>
            </div> */}
            <p className="font-semibold text-xs text-gray-500 cursor-pointer">All chats</p>
            <p className="font-semibold text-xs text-primary cursor-pointer">Requests</p>
            <Menubar  />
          </div>
          <div className="flex justify-between items-center mt-4 w-full">
            
            <div className="flex items-center gap-2 w-full">
             
              <input
                type="text"
                className="bg-gray-100 rounded-full w-full py-1 px-4 outline-none text-sm"
                placeholder="Search here..."
              />
            </div>
          </div>
        </div>

        <div
          className={`${currentChat ? "hidden" : "block"} ${
            showUserInfo ? "hidden" : "block"
          } overflow-y-auto h-[70vh]`}
        >
          {messages.map((message) => (
            <div key={message.id} className="my-2">
              <div className="flex gap-4">
                <div onClick={() => handleUserInfo()}>
                  <img
                    src={student}
                    alt="student"
                    width="50px"
                    height="50px"
                    className="rounded-full"
                  />
                </div>

                <div
                  className="flex items-center w-full justify-between"
                  onClick={handleAllChatsClick}
                >
                  <div className="flex flex-col w-[130px] overflow-hidden">
                    <p className="font-medium text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl truncate">
                      {message.sender}
                    </p>
                    <p className="font-medium text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-500 truncate">
                      {message.text}
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-xs text-gray-500">11:12</p>
                    <div className="flex items-center gap-3 mt-2">
                      <PinIcon />
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chat messages */}

        <div
          className={`${currentChat ? "block" : "hidden"}  ${
            showUserInfo ? "hidden" : "block"
          } overflow-y-auto h-[70vh]`}
        >
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex  ${
                message.sender === "user" ? "justify-end" : "justify-start"
              } mb-2`}
            >
              <div
                className={`text-sm p-2 rounded-sm ${
                  message.sender === "user"
                    ? "text-black mr-2"
                    : "text-black ml-2"
                }`}
              >
                <div className="max-w-xs">
                  <div className="rounded-lg p-2 bg-gray-300">
                    {message.text}
                  </div>
                  {message.sender === "partner" && (
                    <div className="px-4 flex gap-2 py-2 items-center">
                      <img
                        src={student}
                        alt="student"
                        width="28px"
                        height="28px"
                        className="rounded-full"
                      />
                      <span className="text-xs font-medium text-gray-600">
                        10:00
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          {showUserInfo && (
            <div className="w-full h-full  flex justify-center items-center">
              <div className="w-full h-[90%] max-w-xl max-h-[90%] overflow-y-auto">
                <div className="w-full border">
                  <div className="flex flex-col py-1 items-center border">
                    <img src={student} alt="student" className="w-20 h-20" />
                    <p className="text-sm font-medium">Mrunal</p>
                    <p className="text-xs font-medium text-[#7C7C7C]">
                      Student
                    </p>
                  </div>
                  <div className="border py-2">
                    <div className="flex justify-between px-2 py-1">
                      <p className="font-semibold text-[#7C7C7C] text-xs ">
                        INFORMATION
                      </p>
                      <button>
                        <DownArrow />
                      </button>
                    </div>
                    <div>
                      <div className="flex gap-1 items-center px-2 py-1">
                        <MobileIcon />
                        <p className="text-xs text-[#7C7C7C]">+91 9876543210</p>
                      </div>
                      <div className="flex gap-1 items-center px-2 py-1">
                        <MessageIcon />
                        <p className="text-xs text-[#7C7C7C]">
                          Mrunal.cse@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-center items-center gap-3 py-2 ">
                      <p className="text-xs font-semibold text-primary border-b border-primary">
                        Certificates
                      </p>
                      <p className="text-xs font-semibold border-b border-[#D7D7D7]">
                        Links
                      </p>
                    </div>
                    <div className="w-full h-[30vh] overflow-y-auto">
                      <div className="flex items-center gap-2 py-2 px-2 ">
                        <DocumentIcon />
                        <div>
                          <p
                            style={{ fontSize: "9px" }}
                            className="font-medium"
                          >
                            Participation Certificate.Pdf
                          </p>
                          <p
                            style={{ fontSize: "8px" }}
                            className="font-medium text-xs text-[#8F8F8F]"
                          >
                            12 Jan 2024 23:12
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 py-2 px-2 ">
                        <DocumentIcon />
                        <div>
                          <p
                            style={{ fontSize: "9px" }}
                            className="font-medium"
                          >
                            Participation Certificate.Pdf
                          </p>
                          <p
                            style={{ fontSize: "8px" }}
                            className="font-medium text-xs text-[#8F8F8F]"
                          >
                            12 Jan 2024 23:12
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 py-2 px-2 ">
                        <DocumentIcon />
                        <div>
                          <p
                            style={{ fontSize: "9px" }}
                            className="font-medium"
                          >
                            Participation Certificate.Pdf
                          </p>
                          <p
                            style={{ fontSize: "8px" }}
                            className="font-medium text-xs text-[#8F8F8F]"
                          >
                            12 Jan 2024 23:12
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 py-2 px-2 ">
                        <DocumentIcon />
                        <div>
                          <p
                            style={{ fontSize: "9px" }}
                            className="font-medium"
                          >
                            Participation Certificate.Pdf
                          </p>
                          <p
                            style={{ fontSize: "8px" }}
                            className="font-medium text-xs text-[#8F8F8F]"
                          >
                            12 Jan 2024 23:12
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 py-2 px-2 ">
                        <DocumentIcon />
                        <div>
                          <p
                            style={{ fontSize: "9px" }}
                            className="font-medium"
                          >
                            Participation Certificate.Pdf
                          </p>
                          <p
                            style={{ fontSize: "8px" }}
                            className="font-medium text-xs text-[#8F8F8F]"
                          >
                            12 Jan 2024 23:12
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 py-2 px-2 ">
                        <DocumentIcon />
                        <div>
                          <p
                            style={{ fontSize: "9px" }}
                            className="font-medium"
                          >
                            Participation Certificate.Pdf
                          </p>
                          <p
                            style={{ fontSize: "8px" }}
                            className="font-medium text-xs text-[#8F8F8F]"
                          >
                            12 Jan 2024 23:12
                          </p>
                        </div>
                      </div>
                      {/* Additional certificate items */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Chat input */}
        <div className={`${currentChat ? "block" : "hidden"}`}>
          <div className="flex items-center justify-between px-2 py-2 w-[95%] cursor-pointer border-t absolute bottom-0 z-50 bg-white">
            <div className="flex items-center gap-3">
              <GalleryIcon className="h-6 w-6 text-gray-500 cursor-pointer" />
              <HeroIcon className="h-6 w-6 text-gray-500 cursor-pointer" />
              <VoiceIcon className="h-6 w-6 text-gray-500 cursor-pointer" />
            </div>
            <input
              type="text"
              placeholder="Enter Texte here"
              className="outline-none"
            />
            <div className="border-l pl-3">
              <SendIcon className="h-6 w-6 text-primary cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatScreenMobile;
