import ChatBanner from "../assets/ChatBanner";
import MessagePopup from "../assets/MessagePopup";

const ChatStartPage = ({ handleChartStart }) => {
  console.log(handleChartStart);
  return (
    <div
      className="lg:w-[70%] md:w-[70%] w-[100%] h-[80vh] bg-primary relative lg:block hidden"
      onClick={() => handleChartStart()}
    >
      <div className="absolute lg:-bottom-8 bottom-14   lg:w-[500px] lg:h-[500px]">
        <ChatBanner />
      </div>

      <div className="absolute lg:top-40 top-72 lg:right-80 right-16">
        <MessagePopup />
      </div>
      <div className="py-4 px-2  bg-white text-sm font-normal absolute lg:top-4 top-16 right-14 rounded-md">
        Welcome Hooshiya..!
      </div>
      <div className="w-[271px] h-[82px] flex justify-center items-center text-center rounded-md bg-white text-sm font-normal absolute lg:top-20 top-44 lg:right-20 right-8">
        Tap on any chat to start the conversation
      </div>
    </div>
  );
};

export default ChatStartPage;
