import { useState } from "react";
import ExploreNavbar from "../Components/ExploreNavbar";
import Menubar from "../assets/Menubar";
import MuteIcon from "../assets/MuteIcon";
import PinIcon from "../assets/PinIcon";
import student from "../assets/student.png";
import DownArrow from "../assets/DownArrow";
import MobileIcon from "../assets/MobileIcon";
import MessageIcon from "../assets/MessageIcon";
import DocumentIcon from "../assets/DocumentIcon";
import GalleryIcon from "../assets/GalleryIcon";
import HeroIcon from "../assets/HeroIcon";
import VoiceIcon from "../assets/VoiceIcon";
import SendIcon from "../assets/SendIcon";
import ChatItem from "../Components/ChatItem";
import ChatStartPage from "../Components/ChatStartPage";
import CertificateList from "../Components/CertificateList";
import ChatScreenMobile from "../Components/ChatScreenMobile";

const MessageScreen = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello!", sender: "user" },
    { id: 2, text: "Hi there!", sender: "partner" },
    { id: 3, text: "How are you?", sender: "partner" },
    { id: 1, text: "Hello!", sender: "user" },
    { id: 2, text: "Hi there!", sender: "partner" },
    { id: 3, text: "How are you?", sender: "partner" },
    { id: 1, text: "Hello!", sender: "user" },
    { id: 2, text: "Hi there!", sender: "partner" },
    { id: 3, text: "How are you?", sender: "partner" },
    { id: 1, text: "Hello!", sender: "user" },
    { id: 2, text: "Hi there!", sender: "partner" },
    { id: 3, text: "How are you?DSFDSFVSDFDVFSDFVDFSGSDGfdgadfgfdgfgfdgfdgdfgfdgdfgdfgdfgfgdfgzdfgzdfgHow are you?DSFDSFVSDFDVFSDFVDFSGSDGfdgadfgfdgfgfdgfdgdfgfdgdfgdfgdfgfgdfgzdfgzdfg", sender: "partner" },
  ]);

  const chats = [
    {
      name: "Reena",
      message: "I received it",
      time: "11:12",
      icon: student,
      isMuted: false,
    },
    {
      name: "Reena",
      message: "I received it",
      time: "11:12",
      icon: student,
      isMuted: false,
    },
    {
      name: "Reena",
      message: "I received it",
      time: "11:12",
      icon: student,
      isMuted: false,
    },
    {
      name: "Reena",
      message: "I received it",
      time: "11:12",
      icon: student,
      isMuted: false,
    },
    {
      name: "Reena",
      message: "I received it",
      time: "11:12",
      icon: student,
      isMuted: false,
    },
    {
      name: "Reena",
      message: "I received it",
      time: "11:12",
      icon: student,
      isMuted: false,
    },
    {
      name: "Reena",
      message: "I received it",
      time: "11:12",
      icon: student,
      isMuted: false,
    },
    {
      name: "Reena",
      message: "I received it",
      time: "11:12",
      icon: student,
      isMuted: false,
    },
    {
      name: "Reena",
      message: "I received it",
      time: "11:12",
      icon: student,
      isMuted: false,
    },
    {
      name: "Reena",
      message: "I received it",
      time: "11:12",
      icon: student,
      isMuted: false,
    },
    {
      name: "Reena",
      message: "I received it",
      time: "11:12",
      icon: student,
      isMuted: false,
    },
    {
      name: "Reena",
      message: "I received it",
      time: "11:12",
      icon: student,
      isMuted: false,
    },
    {
      name: "Reena",
      message: "I received it",
      time: "11:12",
      icon: student,
      isMuted: false,
    },
    {
      name: "Reena",
      message: "I received it",
      time: "11:12",
      icon: student,
      isMuted: false,
    },
    // Add more chat objects as needed
  ];

  const [currentChat, setCurrentChat] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false);
  const  [chartStart,setChartStart] = useState(true)

  const handleAllChatsClick = () => {
    setCurrentChat(messages);
  };

  const handleUserInfo = () => {
    setShowUserInfo(true);
  };

  const handleChartStart = () => {
    setChartStart(false)
  }

  return (
    <>
      <ExploreNavbar />
      {/**Desktop View */}
      <div className="w-full px-8 flex">
        <div className="w-[30%]  md:block hidden border">
          <div className="flex justify-around items-center mt-10">
            <p className="font-semibold text-xs text-primary">All chats</p>
            <p className="font-semibold text-xs text-primary">Requests</p>
            <Menubar />
          </div>
          <div className="flex justify-center my-4">
            <div className="w-[80%] px-2 border flex justify-between items-center">
              <svg
                width="24"
                height="24"
                className="cursor-pointer"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.5003 2C9.14485 2.00012 7.80912 2.32436 6.60451 2.94569C5.3999 3.56702 4.36135 4.46742 3.57549 5.57175C2.78963 6.67609 2.27926 7.95235 2.08696 9.29404C1.89466 10.6357 2.026 12.004 2.47003 13.2846C2.91406 14.5652 3.6579 15.7211 4.63949 16.6557C5.62108 17.5904 6.81196 18.2768 8.11277 18.6576C9.41358 19.0384 10.7866 19.1026 12.1173 18.8449C13.448 18.5872 14.6977 18.015 15.7623 17.176L19.4143 20.828C19.6029 21.0102 19.8555 21.111 20.1177 21.1087C20.3799 21.1064 20.6307 21.0012 20.8161 20.8158C21.0015 20.6304 21.1066 20.3796 21.1089 20.1174C21.1112 19.8552 21.0104 19.6026 20.8283 19.414L17.1763 15.762C18.1642 14.5086 18.7794 13.0024 18.9514 11.4157C19.1233 9.82905 18.8451 8.22602 18.1485 6.79009C17.4519 5.35417 16.3651 4.14336 15.0126 3.29623C13.66 2.44911 12.0962 1.99989 10.5003 2ZM4.00025 10.5C4.00025 8.77609 4.68507 7.12279 5.90406 5.90381C7.12305 4.68482 8.77635 4 10.5003 4C12.2242 4 13.8775 4.68482 15.0964 5.90381C16.3154 7.12279 17.0003 8.77609 17.0003 10.5C17.0003 12.2239 16.3154 13.8772 15.0964 15.0962C13.8775 16.3152 12.2242 17 10.5003 17C8.77635 17 7.12305 16.3152 5.90406 15.0962C4.68507 13.8772 4.00025 12.2239 4.00025 10.5Z"
                  fill="#0A8F8C"
                />
              </svg>
              <input
                type="text"
                className="bg-transparent w-full py-1 px-4 outline-none"
                placeholder="Search here..."
              />
            </div>
          </div>

          <div className="overflow-y-auto h-[60vh]" >
            {chats.map((chat, index) => (
              <ChatItem
                key={index}
                name={chat.name}
                message={chat.message}
                time={chat.time}
                icon={chat.icon}
                isMuted={chat.isMuted}
                handleAllChatsClick={handleAllChatsClick}
                handleChartStart={handleChartStart}
              />
            ))}
          </div>
        </div>{
          chartStart ? (<ChatStartPage  handleChartStart={handleChartStart}/>) : ( <div className="w-[70%] border md:block hidden ">
          <div className="w-full lg:h-[15vh] md:h-[8vh] p-2 py-4 border-b border">
            <div className="flex items-center gap-2">
              <img src={student} alt="student" width="50px" height="50px" />
              <div className="flex flex-col gap-1">
                <p className="font-medium text-xs">Reena</p>
                <p className="font-medium text-xs text-[#7C7C7C]">Active Now</p>
              </div>
            </div>
          </div>
          <div className="w-full flex">
            <div className="w-[70%] h-[60vh] border overflow-y-auto">
              <div className="flex justify-center items-center py-2  ">
                <p className="bg-[#80CBC9] text-white px-2 py-1 text-center text-xs rounded-sm">
                  Today
                </p>
              </div>
              <div>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex  ${
                        message.sender === "user"
                          ? "justify-end"
                          : "justify-start"
                      }  mb-2`}
                    >
                      <div
                        className={`text-xs p-2 rounded-sm ${
                          message.sender === "user" ? "mr-2" : "ml-2"
                        }`}
                      >
                        <div class="max-w-xs">
                          <div class="p-4 rounded-lg  bg-[#CBCBCB]">
                            Good morning, Professor! I hope you're doing well. I
                            wanted to follow up on the certificates for the
                            seminar we attended last month.
                          </div>
                          {message.sender === "partner" && (
                            <div className="px-4 flex gap-2 py-2 items-center">
                              <img
                                src={student}
                                alt="student"
                                width="28px"
                                height="28px"
                              />
                              <span className="text-xs font-medium text-[#8F8F8F]">
                                10:00
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-[30%]  border">
              <div className="flex flex-col py-1 items-center border">
                <img src={student} alt="student" className="w-20 h-20" />
                <p className="text-sm font-medium">Mrunal</p>
                <p className="text-xs font-medium text-[#7C7C7C]">Student</p>
              </div>
              <div className="border py-2">
                <div className="flex justify-between px-2 py-1">
                  <p className="font-semibold text-[#7C7C7C] text-xs text-wrap">
                    INFORMATION
                  </p>
                  <p>
                    <DownArrow />
                  </p>
                </div>
                <div>
                  <div className="flex gap-1  items-center flex-wrap px-2 py-1">
                    <MobileIcon />
                    <p className="text-xs text-[#7C7C7C] text-wrap">+91 9876543210</p>
                  </div>
                  <div className="flex flex-wrap gap-1 items-center px-2 py-1">
                    <MessageIcon />
                    <p className="text-xs text-[#7C7C7C] text-wrap">
                      Mrunal.cse@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:h-[13vh] md:h-[30vh] overflow-y-auto">
                <CertificateList/>
                <CertificateList/>
                <CertificateList/>
                <CertificateList/>
                <CertificateList/>
                <CertificateList/>
                <CertificateList/>
                <CertificateList/>
                <CertificateList/>
                <CertificateList/>
                <CertificateList/>
                <CertificateList/>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-around gap-3 px-2 py-1 cursor-pointer z-50 bg-white">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 20.1 3.9 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V8.5L15.5 3Z"
                stroke="#7C7C7C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 3V7C14 7.53043 14.2107 8.03914 14.5858 8.41421C14.9609 8.78929 15.4696 9 16 9H20M10 16C10 16 10.8 17 12 17C13.3 17 14 16 14 16"
                stroke="#7C7C7C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <input
              type="text"
              placeholder="Type a message..."
              className="w-[70%] py-1 outline-none bg-white"
            />
            <GalleryIcon />
            <HeroIcon />
            <VoiceIcon />
            <div className="border-l">
              <SendIcon />
            </div>
          </div>
        </div>)
        }
       
      </div>

      {/* Mobile view */}
      {
        chartStart ? (<chartStart handleChartStart={handleChartStart}/>) :( <ChatScreenMobile handleAllChatsClick={handleAllChatsClick} handleUserInfo={handleUserInfo} messages={messages} currentChat={currentChat} showUserInfo={showUserInfo}/>)
      }
     
    </>
  );
};

export default MessageScreen;
