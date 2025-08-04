import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./Components/Navbar";
import "./Components/Tradingcoin";
import App from "./App";
import Tradingcoin from "./Components/Tradingcoin";
import Dextan from "./Components/Dextan";
import Marketcap from "./Components/Marketcap";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Navbar />
    <p>
      {" "}
      crypto exchange <span className=" text-green-400 ">
        {" "}
        1.25${" "}
      </span> Dextan <span className=" text-green-400 "> 1.25$ </span> IPO{" "}
      <span className=" text-green-400 "> 1.25$ </span> Fear&greed{" "}
      <span className=" text-green-400 "> 80/15 </span>
    </p>

    <Tradingcoin />
    <Dextan />
    <Tradingcoin />
    <Marketcap />
    <table>
      <li className="flex flex-row gap-8 ml-10">
        {" "}
        <p>
          {" "}
          Bitcoin <span className="text-blue-500 border-1 "> Buy </span>{" "}
          <span className="text-blue-500 m-5">$114,386 </span>{" "}
          <span className="text-red-300"> 0.08%</span>{" "}
          <span className="text-blue-500"> $114,386 </span>{" "}
          <span className="text-red-300">0.68%</span>{" "}
        </p>{" "}
      </li>
    </table>
  </StrictMode>
);
