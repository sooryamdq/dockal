import { useState } from "react";
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
import ChatScreenMobile from "../Components/ChatScreenMobile";
import StudentInfo from "../Components/StudentInfo";
import FileSelection from "../assets/FileSelection";
import SearchIcon from "../assets/Searchicon";

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
    {
      id: 3,
      text: "How are you?DSFDSFVSDFDVFSDFVDFSGSDGfdgadfgfdgfgfdgfdgdfgfdgdfgdfgdfgfgdfgzdfgzdfgHow are you?DSFDSFVSDFDVFSDFVDFSGSDGfdgadfgfdgfgfdgfdgdfgfdgdfgdfgdfgfgdfgzdfgzdfg",
      sender: "partner",
    },
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
      name: "Alice",
      message: "I received it",
      time: "11:12",
      icon: student,
      isMuted: false,
    },
    {
      name: "Bob",
      message: "I received it",
      time: "11:12",
      icon: student,
      isMuted: false,
    },
    {
      name: "Emma",
      message: "I received it",
      time: "11:12",
      icon: student,
      isMuted: false,
    },
    {
      name: "David",
      message: "I received it",
      time: "11:12",
      icon: student,
      isMuted: false,
    },
    {
      name: "Ella",
      message: "I received it",
      time: "11:12",
      icon: student,
      isMuted: false,
    },
    {
      name: "Frank",
      message: "I received it",
      time: "11:12",
      icon: student,
      isMuted: false,
    },
    {
      name: "Grace",
      message: "I received it",
      time: "11:12",
      icon: student,
      isMuted: false,
    },
    {
      name: "Henry",
      message: "I received it",
      time: "11:12",
      icon: student,
      isMuted: false,
    },
    {
      name: "Ivy",
      message: "I received it",
      time: "11:12",
      icon: student,
      isMuted: false,
    },
    {
      name: "Jack",
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
      name: "Kate",
      message: "I received it",
      time: "11:12",
      icon: student,
      isMuted: false,
    },
    {
      name: "Liam",
      message: "I received it",
      time: "11:12",
      icon: student,
      isMuted: false,
    },
    // Add more chat objects as needed
  ];

  const [currentChat, setCurrentChat] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [chartStart, setChartStart] = useState(true);

  const handleAllChatsClick = () => {
    setCurrentChat(messages);
  };

  const handleUserInfo = () => {
    setShowUserInfo(true);
  };

  const handleChartStart = () => {
    setChartStart(false);
  };

  return (
    <>
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
              <SearchIcon />
              <input
                type="text"
                className="bg-transparent w-full py-1 px-4 outline-none"
                placeholder="Search here..."
              />
            </div>
          </div>

          <div className="overflow-y-auto h-[60vh]">
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
        </div>
        {chartStart ? (
          <ChatStartPage handleChartStart={handleChartStart} />
        ) : (
          <div className="w-[70%] border md:block hidden ">
            <div className="w-full  p-2 py-4 border-b border">
              <div className="flex items-center gap-2">
                <img src={student} alt="student" width="50px" height="50px" />
                <div className="flex flex-col gap-1">
                  <p className="font-medium text-xs">Reena</p>
                  <p className="font-medium text-xs text-[#7C7C7C]">
                    Active Now
                  </p>
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
                          <div className="max-w-xs">
                            <div className="p-4 rounded-lg  bg-[#CBCBCB]">
                              Good morning, Professor! I hope you're doing well.
                              I wanted to follow up on the certificates for the
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
              <StudentInfo />
            </div>

            <div className="flex items-center justify-around gap-3 px-2 py-1 cursor-pointer z-50 bg-white">
              <FileSelection />

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
          </div>
        )}
      </div>
     {/*Mobile view */}
      <ChatScreenMobile
        handleAllChatsClick={handleAllChatsClick}
        handleUserInfo={handleUserInfo}
        messages={messages}
        currentChat={currentChat}
        showUserInfo={showUserInfo}
      />
    </>
  );
};

export default MessageScreen;
