import { useState, useEffect } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import CountdownTimer from "./components/CountdownTimer";
import "./App.css";

function App() {
  ////////////////////YYYY-MM-DD-HH-MM-SS
  // const targetDate = "2026-09-25T09:00:00";
  const targetDate = "2026-09-02T17:00:00";

  return (
    <>
      {/* TOP IMAGE SECTION */}
      {/* <section id="home" className="w-full">
        <img
          src="BANNER.png"
          alt="Top banner"
          className="w-full h-auto object-contain"
        />
      </section> */}

      {/* HERO - BANNER */}
      {/* <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-neutral-950 via-black to-neutral-900"> */}
      <section className="relative h-[60vh] md:h-[82vh] overflow-hidden bg-gradient-to-b from-neutral-950 via-black to-neutral-900">
        {/* Ambient gold glows */}
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />

        {/* Subtle radial spotlight behind title */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(210,170,13,0.08)_0%,_transparent_60%)]" />

        {/* SPC Logo and Bagong PH */}
        <div className="flex items-center justify-between px-6 py-3">
          <img
            src="spclogo.png"
            className="bg-white mx-1 filter drop-shadow-[0_0_0.25rem_#D2AA0D] rounded-full w-12 h-12 md:w-17 md:h-17 zoom"
          />
          <img
            src="Bagong-PH.png"
            className=" mx-1 filter drop-shadow-[0_0_0.25rem_#D2AA0D] w-14 h-14 md:w-20 md:h-20 zoom"
          />
        </div>

        {/* Faint grid/texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Bottom fade to blend into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />

        {/* Title */}
        <div className="relative z-10 px-8 pt-12 md:pt-16 text-center">
          <p className="text-amber-400/80 text-[8px] md:text-sm font-semibold tracking-[0.3em] mb-3">
            CITY GOVERNMENT OF SAN PABLO PRESENTS
          </p>
          <h1 className="text-4xl md:text-8xl font-bold pb-4 bg-gradient-to-b from-amber-300 via-amber-400 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(210,170,13,0.35)]">
            Gawad Parangal 2026
          </h1>
          <div className="mx-auto mt-3 mb-4 h-px w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
        </div>

        {/* Countdown */}
        <div className="relative z-10 mt-8 md:mt-10">
          <CountdownTimer targetDate={targetDate} />
          <p className="text-gray-200 text-md md:text-3xl text-center py-4 font-light tracking-wide">
            Live on{" "}
            <span className="text-amber-400 font-semibold">
              September 25, 2026
            </span>
          </p>
        </div>
      </section>

      {/* ABOUT - DESCRIPTION SECTION */}
      <section className="grid min-h-screen items-center justify-center grid-cols-1">
        <div className="grid justify-center">
          <div className="grid justify-center mb-4">
            <span className="inline-block px-5 py-1 rounded-full text-base text-gray-700 transition bg-white shadow-md border border-gray-100 font-mono font-semibold">
              September 2026
            </span>
          </div>

          <div className="mb-8">
            <h3 className="font-medium text-2xl md:text-4xl text-center">
              Lorem ipsum dolor sit amet
            </h3>
            <h5 className="text-sm md:text-xl text-center">
              Lorem ipsum dolor sit amet consectetur
            </h5>
          </div>

          <p className="text-justify text-md max-w-md px-8 md:px-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Circle Logo */}
        <div className="flex flex-row items-center justify-center py-4">
          <span>
            <hr className="w-30 md:w-50 lg:w-110 text-[#D2AA0D]  filter drop-shadow-[0_0_0.25rem_#D2AA0D]"></hr>
          </span>
          <img
            src="spclogo.png"
            className="bg-white p-0.5 mx-1 filter  border-2 drop-shadow-[0_0_0.25rem_#D2AA0D]  border-yellow-400 rounded-full w-20 h-20 zoom"
          />
          <span>
            <hr className="w-30 md:w-50 lg:w-110 text-[#D2AA0D] filter drop-shadow-[0_0_0.25rem_#D2AA0D]"></hr>
          </span>
        </div>
      </section>

      {/* CARD - LOYALTY AWARDEES */}
      <section className="bg-amber-100 p-6 mb-6 rounded-lg shadow-lg mx-10 md:mx-20">
        <div className="flex flex-col items-center space-x-4">
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800 text-center">
              LOYALTY AWARDEES 2026
            </h1>
            <span className="text-gray-600 text-center text-sm">
              Recognizing Decades of Service Excellence
            </span>
          </div>

          {/* Years logo + Num of Awardee */}
          <div className="grid grid-cols-2 md:flex gap-6">
            <div className="flex flex-col items-center justify-evenly px-6 py-3">
              <img
                src="25-logo.png"
                className="filter drop-shadow-[0_0_0.25rem_#2b2b2b] rounded-full w-25 md:w-40"
              />

              <span className="text-gray-600 text-center capitalize text-xs md:text-lg mt-2">
                42 Employees awardee
              </span>
            </div>
            <div className="flex flex-col items-center justify-evenly px-6 py-3">
              <img
                src="30-logo.png"
                className="filter drop-shadow-[0_0_0.25rem_#2b2b2b] rounded-full w-25 md:w-40"
              />

              <span className="text-gray-600 text-center capitalize text-xs md:text-lg mt-2">
                13 Employees awardee
              </span>
            </div>
            <div className="flex flex-col items-center justify-evenly px-6 py-3">
              <img
                src="35-logo.png"
                className="filter drop-shadow-[0_0_0.25rem_#2b2b2b] rounded-full w-25 md:w-40"
              />

              <span className="text-gray-600 text-center capitalize text-xs md:text-lg mt-2">
                4 Employees awardee
              </span>
            </div>
            <div className="flex flex-col items-center justify-evenly px-6 py-3">
              <img
                src="40-logo.png"
                className="filter drop-shadow-[0_0_0.25rem_#2b2b2b] rounded-full w-25 md:w-40"
              />

              <span className="text-gray-600 text-center capitalize text-xs md:text-lg mt-2">
                4 Employees awardee
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-b from-black to-slate-800 text-amber-400 ">
        <div className="flex flex-col items-center justify-center text-sm p-1.5 font-semibold">
          <span className="text-center text-sm">
            © 2026
            <a href="#" className="pl-1 hover:underline">
              Management Information System Office. <br /> All rights reserved.
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}

export default App;
