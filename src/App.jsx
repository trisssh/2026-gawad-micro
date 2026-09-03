import { useState, useEffect } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import CountdownTimer from "./components/CountdownTimer";
import "./App.css";

function App() {
  ////////////////////YYYY-MM-DD-HH-MM-SS
  const targetDate = "2026-09-25T09:00:00";
  // const targetDate = "2026-09-03T17:00:00";

  return (
    <>
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

      {/* MAIN CONTENT */}
      <main>
        {/* ABOUT - DESCRIPTION SECTION */}
        <section className="flex flex-col min-h-svh md:min-h-dyh items-center justify-center md:pt-6">
          <div>
            {/* ROUND BTN STYLE DATE */}
            <div className="grid justify-center mb-4">
              <span className="inline-block px-5 py-1 rounded-full text-base text-gray-700 transition bg-white shadow-md border border-gray-100 font-mono font-semibold">
                September 2026
              </span>
            </div>

            {/* TITLE & TEXT */}
            <div className="mb-8">
              <h3 className="font-medium text-2xl md:text-4xl text-center">
                Lorem ipsum dolor sit amet
              </h3>
              <h5 className="text-sm md:text-xl text-center">
                Lorem ipsum dolor sit amet consectetur
              </h5>
            </div>

            {/* <p className="text-justify text-md max-w-md px-8 md:px-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p> */}

            {/* BANNER FROM CSC */}
            <div className="flex justify-center">
              <img
                src="gawad-sample-banner.png"
                className="w-[315px] md:w-[500px] backdrop-blur-lg bg-white border border-gray-200 rounded-2xl shadow-md md:col-span-1 object-fill"
              />
            </div>
          </div>

          {/* Circle Logo */}
          <div className="flex flex-row items-center justify-center py-6">
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

        {/* Program Flow */}
        <section className="lg:min-h-screen bg-amber-50 py-6  justify-center items-center ">
          {/* <h2 className="text-center uppercase font-mono text-2xl px-3 md:text-3xl font-semibold pt-8 pb-6">
            San Pablo City of Lakes Festival
          </h2> */}

          <div className=" flex flex-col-reverse md:grid md:grid-cols-3 gap-4 p-3 max-w-6xl mx-auto bg-re">
            {/* LEFT SIDE */}
            <div className="flex justify-center">
              <img
                src="prog-flow.png"
                className="w-[380px] md:w-full backdrop-blur-lg bg-white border border-gray-200 rounded-2xl shadow-md md:col-span-1 object-fill"
              />
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col md:col-span-2 justify-center">
              <div className="flex justify-center">
                <img
                  src="G A W A D - 2026.png"
                  // src="126th PCSA logo (alternate 1).png"
                  className="w-50 md:w-75 lg:w-120 "
                />
              </div>

              <h2 className="text-center uppercase font-mono text-xl px-3  md:text-3xl font-semibold py-2">
                PROGRAM FLOW OF <br /> GAWAD PARANGAL 2026
              </h2>

              {/* <p className="text-xs md:text-base text-center md:px-20">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </p> */}
            </div>
          </div>
        </section>

        {/* CARD - LOYALTY AWARDEES */}
        <section className="bg-amber-100 p-6 rounded-lg shadow-lg m-12 md:m-20">
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
      </main>

      {/* FOOTER */}
      <footer className="bg-gradient-to-b from-black to-slate-800 text-white">
        <div className="max-w-5xl mx-auto flex flex-row items-center justify-between gap-3 px-6 py-4">
          <img
            src="spclogo.png"
            alt="San Pablo City Logo"
            className="bg-white filter drop-shadow-[0_0_0.25rem_#D2AA0D] rounded-full w-10 md:w-12 transition-transform duration-300 hover:scale-110"
          />

          <p className="text-center text-xs md:text-sm font-semibold leading-snug">
            © 2026{" "}
            <a
              href="https://www.facebook.com/spc.mis"
              className="hover:underline hover:text-amber-400"
            >
              Management Information System Office.
            </a>
            <br />
            All rights reserved.
          </p>

          <img
            src="Bagong-PH.png"
            alt="Bagong Pilipinas Logo"
            className="filter drop-shadow-[0_0_0.25rem_#D2AA0D] w-12 md:w-14 transition-transform duration-300 hover:scale-110"
          />
        </div>
      </footer>
    </>
  );
}

export default App;
