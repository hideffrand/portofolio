import { words } from "@/data";
import Headline from "./Headline";
import ColorPallete from "./ColorPallete";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full h-screen px-4 py-10 flex flex-col-reverse md:flex-row gap-10 justify-between"
    >
      <div className="font-poppins px-2 py-4 w-full h-screen bg-secondary-black rounded-xl flex flex-col justify-between text-white">
        <p>Chat</p>
        <div className="w-full flex gap-6 justify-around">
          <input
            type="text"
            placeholder="Write a message..."
            className="w-full px-4 py-2 rounded-xl border border-gray-600 bg-transparent focus:outline-none"
          />
          <button className="px-4">Send</button>
        </div>
      </div>
      <div>
        <Headline text={words.lets} />
        <Headline text={words.talk} />
      </div>
      <ColorPallete />
    </footer>
  );
}
