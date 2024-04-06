import React from "react";
import PinIcon from "../assets/PinIcon";
import MuteIcon from "../assets/MuteIcon";

function ChatItem({
  name,
  message,
  time,
  icon,
  isMuted,
  handleAllChatsClick,
  handleChartStart,
}) {
  return (
    <div
      className="px-4 my-2 cursor-pointer"
      onClick={() => handleChartStart()}
    >
      <div className="flex gap-4">
        <div>
          <img src={icon} alt="student" width="50px" height="50px" />
        </div>

        <div
          className="flex items-center w-full justify-between"
          onClick={handleAllChatsClick}
        >
          <div className="flex flex-col">
            <p className="font-medium text-xs">{name}</p>
            <p className="font-medium text-xs text-[#7C7C7C]">{message}</p>
          </div>

          <div>
            <p className="font-medium text-[#7C7C7C] text-xs">{time}</p>
            <div className="flex justify-around gap-2 items-center mt-2">
              {isMuted ? <MuteIcon /> : <PinIcon />}
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatItem;
