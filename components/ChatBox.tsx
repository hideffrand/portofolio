import { IoSend } from "react-icons/io5";
import Icon from "./Icon";

export default function ChatBox() {
  return (
    <div
      className="absolute flex flex-col justify-between w-[320px] h-[50vh] bg-[rgb(12,12,12)] top-0 right-0 -translate-y-[105%] rounded-[10px] overflow-hidden"
      style={{
        backgroundImage: "url('/chat_bg.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      Chat
      <button>Login</button>
      <div className="flex justify-between gap-2 bg-[rgb(10,10,10)] p-4">
        <input
          type="text"
          className="w-full px-4 py-2 bg-transparent border border-[rgb(80,80,80)] rounded-[10px]"
          placeholder="Start chatting..."
        />
        <button className="p-2 flex items-center justify-center bg-[rgb(25,25,25)] rounded-[10px]">
          <IoSend size={24} />
        </button>
      </div>
    </div>
  );
}
