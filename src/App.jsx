import { useState, useEffect, useRef } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import CountdownTimer from "./components/CountdownTimer";
import NomineeCard from "./components/NomineeCard";
import NomineeSection from "./components/NomineeSection";
import AwardeeCarousel from "./components/AwardeeCarousel";
import "./App.css";

function App() {
  ////////////////////YYYY-MM-DD-HH-MM-SS
  const targetDate = "2026-09-25T09:00:00";
  // const targetDate = "2026-09-16T17:00:00";

  const nomineeSections = [
    {
      title: "MGA NOMINADO MULA SA JOB ORDER",
      subtitle: "6 Nominees from Job Order",
      nominees: [
        {
          image: "/NOMINEES/JOB ORDER/ESCOLANO.png",
          name: "ESCOLANO, JOHN CHRISTOPHER D.",
          department: "City Assesor's Office",
        },
        {
          image: "/NOMINEES/JOB ORDER/GESMUNDO.png",
          name: "GESMUNDO, SERGE JOSHUA B.",
          department: "City Mayor’s Office",
        },
        {
          image: "/NOMINEES/JOB ORDER/HERNANDEZ.png",
          name: "HERNANDEZ, KIM OLIVER C.",
          department: "City Health Office",
        },
        {
          image: "/NOMINEES/JOB ORDER/MEDINA.png",
          name: "MEDINA, CHRISTIAN M.",
          department: "City Population Office",
        },
        {
          image: "/NOMINEES/JOB ORDER/MIRAL.png",
          name: "MIRAL, MAYBELL B.",
          department: "City Mayor’s Office",
        },
        {
          image: "/NOMINEES/JOB ORDER/VENTURA.png",
          name: "VENTURA, JENNIELYN A.",
          department: "City Treasurer’s Office",
        },
      ],
    },

    {
      title: "MGA NOMINADO MULA SA 1ST LEVEL",
      subtitle: "Nominees from 1st Level",
      nominees: [
        {
          image: "/NOMINEES/1ST LEVEL/BALITA.png",
          name: "BALITA, CELESTE V.",
          department: "CMO-MISO",
        },
        {
          image: "/NOMINEES/1ST LEVEL/BAREZA.png",
          name: "BAREZA, ALVIN A.",
          department: "City Social Welfare & Development Office",
        },
        {
          image: "/NOMINEES/1ST LEVEL/BUNDALIAN,-IRISH-SANDRA-C..png",
          name: "BUNDALIAN, IRISH SANDRA C.",
          department: "City Assessor’s Office",
        },
        {
          image: "/NOMINEES/1ST LEVEL/ECO.png",
          name: "ECO, JEANNELYN M.",
          department: "City Tourism Office",
        },
        {
          image: "/NOMINEES/1ST LEVEL/EXCONDE.png",
          name: "EXCONDE, BRIANN M.",
          department: "City Cooperative Office",
        },
        {
          image: "/NOMINEES/1ST LEVEL/FORNILOZA.png",
          name: "FORNILOZA, FERDINAND D.",
          department: "City Treasurer’s Office",
        },
        {
          image: "/NOMINEES/1ST LEVEL/LAGUNA.png",
          name: "LAGUNA, MARIA LUISA J.",
          department: "City Treasurer’s Office-Market Division",
        },
        {
          image: "/NOMINEES/1ST LEVEL/RETUERTO.png",
          name: "RETUERTO, NELSON C.",
          department: "City Agriculturist’s Office",
        },
      ],
    },

    {
      title: "MGA NOMINADO MULA SA 2ND LEVEL",
      subtitle: "Nominees from 2nd Level",
      nominees: [
        {
          image: "/NOMINEES/2ND LEVEL/BUNDALIAN, GILLIAN CLARISSE A..png",
          name: "BUNDALIAN, GILLIAN CLARISSE A.",
          department: "City Health Office",
        },
        {
          image: "/NOMINEES/2ND LEVEL/MALIJAN.JPG",
          name: "MALIJAN, MARITES S.",
          department: "City Agriculturist’s Office",
        },
        {
          image: "/NOMINEES/2ND LEVEL/PASCO.png",
          name: "PASCO, LOIDA V.",
          department: "City Assessor’s Office",
        },
        {
          image: "/NOMINEES/2ND LEVEL/TUBIGAN.JPG",
          name: "TUBIGAN, NANCY C.",
          department: "City Treasurer’s Office",
        },
      ],
    },

    {
      title: "DLSP AWARDEES",
      subtitle: "Awardees from DLSP",
      nominees: [
        {
          image: "/NOMINEES/PLSP/BELEN.png",
          name: "BELEN, ARNOLD E.",
          department: "Dalubhasaan ng Lunsod ng San Pablo ",
        },
        {
          image: "/NOMINEES/PLSP/CARMONA.png",
          name: "CARMONA, EVANGELINE",
          department: "Dalubhasaan ng Lunsod ng San Pablo ",
        },
        {
          image: "/NOMINEES/PLSP/JESUSCO.png",
          name: "JESUSCO, EVAN",
          department: "Dalubhasaan ng Lunsod ng San Pablo ",
        },
        {
          image: "/NOMINEES/PLSP/MATEOS.png",
          name: "MATEOS, FRANCISCO",
          department: "Dalubhasaan ng Lunsod ng San Pablo ",
        },
        {
          image: "/NOMINEES/PLSP/TOLENTINO.png",
          name: "TOLENTINO, DARIA A.",
          department: "Dalubhasaan ng Lunsod ng San Pablo ",
        },
      ],
    },
  ];

  const loyalty25 = [
    {
      image: "./LOYALTY/25 YEARS/ABNER G. MANALO.png",
      alt: "ABNER G. MANALO",
    },
    {
      image: "./LOYALTY/25 YEARS/ARLENE B. BUNQUIN.png",
      alt: "ARLENE B. BUNQUIN",
    },
    {
      image: "./LOYALTY/25 YEARS/ROMMEL A. AUSTRIA.png",
      alt: "ROMMEL A. AUSTRIA",
    },
    {
      image: "./LOYALTY/25 YEARS/ARNOLD E. BELEN.png",
      alt: "ARNOLD E. BELEN",
    },
    {
      image: "./LOYALTY/25 YEARS/ARVIN S. PASCO.png",
      alt: "ARVIN S. PASCO",
    },
    {
      image: "./LOYALTY/25 YEARS/BERNARD D. MONFERO.png",
      alt: "BERNARD D. MONFERO",
    },
    {
      image: "./LOYALTY/25 YEARS/CHANITA L. VILLONES.png",
      alt: "CHANITA L. VILLONES",
    },
    {
      image: "./LOYALTY/25 YEARS/DENNIS H. BECINA.png",
      alt: "DENNIS H. BECINA",
    },
    {
      image: "./LOYALTY/25 YEARS/EDNA A. DANGUE.png",
      alt: "EDNA A. DANGUE",
    },
    {
      image: "./LOYALTY/25 YEARS/ELVIN A. EMPEMANO.png",
      alt: "ELVIN A. EMPEMANO",
    },
    {
      image: "./LOYALTY/25 YEARS/ERIC C. DE GUZMAN.png",
      alt: "ERIC C. DE GUZMAN",
    },
    {
      image: "./LOYALTY/25 YEARS/HILARIO N. BELEN.png",
      alt: "HILARIO N. BELEN",
    },
    {
      image: "./LOYALTY/25 YEARS/JENET G. LLEGO.png",
      alt: "JENET G. LLEGO",
    },
    {
      image: "./LOYALTY/25 YEARS/JONATHAN D. PAPA.png",
      alt: "JONATHAN D. PAPA",
    },
    {
      image: "./LOYALTY/25 YEARS/JUDELYN D. GUTIERREZ.png",
      alt: "JUDELYN D. GUTIERREZ",
    },
    {
      image: "./LOYALTY/25 YEARS/JOSELITO S. REYES.png",
      alt: "JOSELITO S. REYES",
    },
    {
      image: "./LOYALTY/25 YEARS/KRISTOFFER JOHN A. SUI.png",
      alt: "KRISTOFFER JOHN A. SUI",
    },
    {
      image: "./LOYALTY/25 YEARS/LOIDA U. ENRIQUEZ.png",
      alt: "LOIDA U. ENRIQUEZ",
    },
    {
      image: "./LOYALTY/25 YEARS/LUCAS OMAR E. COSICO.png",
      alt: "LUCAS OMAR E. COSICO",
    },
    {
      image: "./LOYALTY/25 YEARS/LUZVIMINDA B. BANDIAN.png",
      alt: "LUZVIMINDA B. BANDIAN",
    },
    {
      image: "./LOYALTY/25 YEARS/MA. CORAZON MARYQUEEN O. GUERRERO.png",
      alt: "MA. CORAZON MARYQUEEN O. GUERRERO",
    },
    {
      image: "./LOYALTY/25 YEARS/MAIDA A. BONDAD.png",
      alt: "MAIDA A. BONDAD",
    },
    {
      image: "./LOYALTY/25 YEARS/MARIA LINDA B. RIVERA.png",
      alt: "MARIA LINDA B. RIVERA",
    },
    {
      image: "./LOYALTY/25 YEARS/MARIA SOLEDAD G. DIANGKINAY.png",
      alt: "MARIA SOLEDAD G. DIANGKINAY",
    },
    {
      image: "./LOYALTY/25 YEARS/MARIANNE D. ESCALONA.png",
      alt: "MARIANNE D. ESCALONA",
    },
    {
      image: "./LOYALTY/25 YEARS/MARIVETH R. BRION.png",
      alt: "MARIVETH R. BRION",
    },
    {
      image: "./LOYALTY/25 YEARS/MARLON R. MAGNO.png",
      alt: "MARLON R. MAGNO",
    },
    {
      image: "./LOYALTY/25 YEARS/MELVIN A. MAGNO.png",
      alt: "MELVIN A. MAGNO",
    },
    {
      image: "./LOYALTY/25 YEARS/MYLENE B. LANGIT.png",
      alt: "MYLENE B. LANGIT",
    },
    {
      image: "./LOYALTY/25 YEARS/NEDILEN D. BELTIJAR.png",
      alt: "NEDILEN D. BETIJAR",
    },
    {
      image: "./LOYALTY/25 YEARS/NORA A. DEVANADERA.png",
      alt: "NORA A. DEVANADERA",
    },
    {
      image: "./LOYALTY/25 YEARS/NAZARIA A. MARASIGAN.png",
      alt: "NAZARIA A. MARASIGAN",
    },
    {
      image: "./LOYALTY/25 YEARS/PLACIDO E. ATIENZA.png",
      alt: "PLACIDO E. ATIENZA",
    },
    {
      image: "./LOYALTY/25 YEARS/ROBERTO G. BACAY.png",
      alt: "ROBERTO G. BACAY",
    },
    {
      image: "./LOYALTY/25 YEARS/ROMEO O. MIRANDA.png",
      alt: "ROMEO O. MIRANDA",
    },
    {
      image: "./LOYALTY/25 YEARS/RONALDO A. PUHAWAN.png",
      alt: "RONALDO A. PUHAWAN",
    },
    {
      image: "./LOYALTY/25 YEARS/RONALDO E. CAPISTRANO.png",
      alt: "RONALDO E. CAPISTRANO",
    },
    {
      image: "./LOYALTY/25 YEARS/VIVIAN C. DE GUZMAN.png",
      alt: "VIVIAN C. DE GUZMAN",
    },
    {
      image: "./LOYALTY/25 YEARS/VICTORIA G. MALOLES.png",
      alt: "VICTORIA G. MALOLES",
    },
    {
      image: "./LOYALTY/25 YEARS/XENIA D. DEOMANO - ADAJAR.png",
      alt: "XENIA D. DEOMANO - ADAJAR",
    },
    {
      image: "./LOYALTY/25 YEARS/GERALD C. MANALO.png",
      alt: "GERALD C. MANALO",
    },
    {
      image: "./LOYALTY/25 YEARS/LEOVINO R. EXCONDE.png",
      alt: "LEOVINO R. EXCONDE",
    },
  ];

  const loyalty30 = [
    {
      image: "./LOYALTY/30 YEARS/BERT A. DELA PENA.png",
      alt: "BERT A. DELA PENA",
    },
    {
      image: "./LOYALTY/30 YEARS/CHARITO C. PANOL.png",
      alt: "CHARITO C. PANOL",
    },
    { image: "./LOYALTY/30 YEARS/DENNIS A. RAMOS.png", alt: "DENNIS A. RAMOS" },
    {
      image: "./LOYALTY/30 YEARS/EDGAR C. VIBANDOR.png",
      alt: "EDGAR C. VIBANDOR",
    },
    {
      image: "./LOYALTY/30 YEARS/ELIZER B. ALIMON.png",
      alt: "ELIZER B. ALIMON",
    },
    {
      image: "./LOYALTY/30 YEARS/ENRIQUE B. DUNGO.png",
      alt: "ENRIQUE B. DUNGO",
    },
    {
      image: "./LOYALTY/30 YEARS/EPIFANIO R. BAGONA.png",
      alt: "EPIFANIO R. BAGONA",
    },
    {
      image: "./LOYALTY/30 YEARS/MARIA REYLINDA Q. SY.png",
      alt: "MARIA REYLINDA Q. SY",
    },
    {
      image: "./LOYALTY/30 YEARS/MARY MAY A. VILLANUEVA.png",
      alt: "MARY MAY A. VILLANUEVA",
    },
    {
      image: "./LOYALTY/30 YEARS/NANCY Q. VIDAL.png",
      alt: "NANCY Q. VIDAL",
    },
    {
      image: "./LOYALTY/30 YEARS/NESTOR R. BAGONA.png",
      alt: "NESTOR R. BAGONA",
    },
    {
      image: "./LOYALTY/30 YEARS/OSCAR B. EMRALINO.png",
      alt: "OSCAR B. EMRALINO",
    },
    {
      image: "./LOYALTY/30 YEARS/SUSANA B. BELARMINO.png",
      alt: "SUSANA B. BELARMINO",
    },
  ];

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [wasPlayingBeforeVideo, setWasPlayingBeforeVideo] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

const MUSIC_START_TIME = 4;

const toggleMusic = () => {
  const audio = audioRef.current;
  if (!audio) return;

  if (isPlaying) {
    audio.pause();
  } else {
    if (audio.currentTime === 0) {
      audio.currentTime = MUSIC_START_TIME;
    }
    audio.play().catch((err) => {
      console.error("Playback failed:", err);
    });
  }
  setIsPlaying(!isPlaying);
};

  // PLAY video
  const duckForVideo = () => {
    const audio = audioRef.current;
    if (audio && isPlaying) {
      audio.pause();
      setIsPlaying(false);
      setWasPlayingBeforeVideo(true);
    } else {
      setWasPlayingBeforeVideo(false);
    }
  };

  // PAUSE or video ended
  const restoreAfterVideo = () => {
    const audio = audioRef.current;
    if (audio && wasPlayingBeforeVideo) {
      audio.play().catch((err) => console.error("Resume failed:", err));
      setIsPlaying(true);
      setWasPlayingBeforeVideo(false);
    }
  };

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 5000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* HERO - BANNER */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-neutral-950 via-black to-neutral-900 flex flex-col">
        {/* Ambient gold glows */}
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />

        {/* Subtle radial spotlight behind title */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(210,170,13,0.08)_0%,_transparent_60%)]" />

        {/* Vortex flourish */}
        {/* <img
          src="vortex gold.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute -left-20 md:-right-15 top-0 h-[70vh] md:h-screen
               opacity-[0.5] object-contain hidden sm:block"
        />
        <img
          src="vortex gold.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute -right-20 md:-right-15 top-0 h-[70vh] md:h-screen
               opacity-[0.5] object-contain hidden sm:block"
        /> */}

        {/* Coconut/leaf pattern */}
        <img
          src="COCONUT GOLD.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute left-4 md:left-10 top-1/2 -translate-y-1/2
               h-[55vh] md:h-[68vh] opacity-[0.20] object-contain hidden lg:block"
        />
        <img
          src="COCONUT GOLD.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute right-4 md:right-10 top-1/2 -translate-y-1/2
               h-[55vh] md:h-[68vh] opacity-[0.20] object-contain hidden lg:block -scale-x-100"
        />

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
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />

        {/* SPC Logo and Bagong PH */}
        <div className="relative z-10 flex items-center justify-between px-6 py-4 md:px-10 md:py-6">
          <img
            src="spclogo.png"
            alt="San Pablo City Logo"
            className="bg-white filter drop-shadow-[0_0_0.25rem_#D2AA0D] rounded-full w-12 h-12 md:w-16 md:h-16
                 transition-transform duration-300 hover:scale-110"
          />
          <img
            src="Bagong-PH.png"
            alt="Bagong Pilipinas Logo"
            className="filter drop-shadow-[0_0_0.25rem_#D2AA0D] w-14 h-14 md:w-20 md:h-20
                 transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* Main content — centered, fills remaining space */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">
          <p className="text-white text-[8px] md:text-sm font-semibold tracking-[0.3em] mb-3">
            {/* <p className="text-amber-400/80 text-[8px] md:text-sm font-semibold tracking-[0.3em] mb-3"> */}
            CITY GOVERNMENT OF SAN PABLO PRESENTS
          </p>

          <h1 className="text-4xl md:text-8xl font-bold pb-4 bg-gradient-to-b from-amber-300 via-amber-400 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(210,170,13,0.35)]">
            Gawad Parangal 2026
          </h1>

          <div className="mx-auto mt-1 mb-6 flex items-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400" />
            <span className="h-1.5 w-1.5 rotate-45 bg-amber-400" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400" />
          </div>

          <CountdownTimer targetDate={targetDate} />

          <p className="text-gray-200 text-md md:text-3xl text-center pt-6 font-light tracking-wide">
            Live on{" "}
            <span className="text-amber-400 font-semibold">
              September 25, 2026
            </span>
          </p>

          {/* Music toggle button — lower left */}
          <div className="absolute bottom-5 left-5 md:bottom-8 md:left-8 z-20 flex flex-col items-center gap-1.5">
            <button
              onClick={toggleMusic}
              aria-label={isPlaying ? "Pause music" : "Play music"}
              className="w-11 h-11 md:w-12 md:h-12 rounded-full
               bg-white/10 backdrop-blur-sm border border-amber-400/40
               flex items-center justify-center
               text-amber-400 hover:bg-amber-400 hover:text-black
               transition-colors duration-300"
            >
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 md:w-5 md:h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 md:w-5 md:h-5 ml-0.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6 4l14 8-14 8V4z" />
                </svg>
              )}
            </button>

            <p className="text-[10px] md:text-xs text-white/70 text-center max-w-[80px] leading-tight">
              {isPlaying ? "Pause music" : "Play music"}
            </p>
          </div>
        </div>
      </section>

      {/* VIDEO TRAILER SECTION */}
      <section className="bg-amber-50 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-center text-amber-700 text-xl md:text-3xl font-bold uppercase tracking-wide mb-2">
            Gawad Parangal 2026
          </h2>
          <p className="text-center text-gray-800 text-sm md:text-base mb-8">
            Official Event Trailer
          </p>

          <div className="rounded-2xl overflow-hidden border border-amber-400/20 shadow-[0_0_60px_rgba(234,179,8,0.1)]">
            <video
              src="Video.mp4"
              controls
              playsInline
              className="w-full aspect-video bg-black"
              onPlay={duckForVideo}
              onPause={restoreAfterVideo}
              onEnded={restoreAfterVideo}
            />
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main>
        {/* ABOUT - DESCRIPTION SECTION */}
        <section className="flex flex-col min-h-svh md:min-h-dvh items-center justify-center">
          {/* Hidden audio element */}
          <audio
            ref={audioRef}
            src="Awit ng Serbisyo Sibil Instrumental with Lyrics.mp3"
            loop
            preload="none"
          />

          <div className="mb-4">
            {/* ROUND BTN STYLE DATE */}
            <div className="grid justify-center mb-4">
              <span className="inline-block px-5 py-1 rounded-full text-base text-gray-700 transition bg-white shadow-md border border-gray-100 font-mono font-semibold">
                September 2026
              </span>
            </div>

            {/* TITLE & TEXT */}
            <div className="mb-4">
              <h3 className="font-medium text-3xl md:text-5xl text-center uppercase">
                Gawad Parangal
              </h3>
              <h5 className="text-sm md:text-xl text-center">
                Pamahalaang Lungsod ng San Pablo
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

        {/* Program Flow */}
        <section className="lg:min-h-screen bg-amber-50 flex justify-center items-center pb-6 md:pb-0">
          <div className=" flex flex-col-reverse md:grid md:grid-cols-3 gap-4 p-3 max-w-6xl mx-auto">
            {/* LEFT SIDE */}
            <div className="flex flex-col items-center gap-3">
              <img
                src="prog-flow.png"
                alt="Program Flow"
                className="w-[380px] md:w-full backdrop-blur-lg bg-white border border-gray-200 rounded-2xl shadow-md md:col-span-1 object-fill"
              />

              <a
                href="prog-flow.png"
                download="Gawad-Parangal-2026-Program-Flow.png"
                className="md:hidden inline-flex items-center gap-2 px-4 py-2 rounded-full
               bg-white text-black text-sm font-semibold border-2
               shadow-md hover:bg-amber-300 active:scale-95
               transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3v12" />
                  <path d="M7 10l5 5 5-5" />
                  <path d="M5 21h14" />
                </svg>
                Download Program Flow
              </a>
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

              <button className="hidden md:block">
                <a
                  href="prog-flow.png"
                  download="Gawad-Parangal-2026-Program-Flow.png"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full
               bg-white text-amber-500 text-xl font-semibold border-2
               shadow-md hover:bg-amber-300 hover:text-gray-800 active:scale-95
               transition-all duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3v12" />
                    <path d="M7 10l5 5 5-5" />
                    <path d="M5 21h14" />
                  </svg>
                  Download Program Flow
                </a>
              </button>
            </div>
          </div>
        </section>

        {/* NOMINEES SECTION*/}
        <section className="flex flex-col min-h-svh md:min-h-dvh items-center justify-center m-6 md:py-6 md:mb-6">
          <div>
            {/* img - assest */}
            <div className="flex justify-center items-center md:gap-3">
              <img
                src="NKPLSP.png"
                className="filter drop-shadow-[0_0_0.25rem_#2b2b2b] rounded-full w-22 md:w-32"
              />
              <img
                src="Trophy.png"
                className="filter drop-shadow-[0_0_0.25rem_#2b2b2b] rounded-full w-25 md:w-40"
              />
              <img
                src="126th PCSA logo (alternate 1).png"
                className="filter drop-shadow-[0_0_0.25rem_#2b2b2b] rounded-full w-29 md:w-45"
              />
            </div>

            {/* TITLE & TEXT DESCRIPTION */}
            <div className="mb-8">
              <h5 className="text-xs capitalize md:text-xl text-center px-3">
                natatanging kawani ng pamahalaang panglungsod ng san pablo
              </h5>
              <h3 className="font-medium text-2xl md:text-4xl text-center">
                MGA NOMINADO PARA SA MGA NATATANGING KAWANI 2025
              </h3>
            </div>

            {/* Cards */}
            <div className="flex flex-col items-center justify-center gap-5">
              {nomineeSections.map((section, index) => (
                <NomineeSection
                  key={index}
                  title={section.title}
                  subtitle={section.subtitle}
                  nominees={section.nominees}
                />
              ))}
            </div>
          </div>
        </section>

        {/* TEASER SECTION FOR WINNERS */}
        <section className="lg:min-h-screen bg-amber-50 flex justify-center items-center py-12 lg:py-0">
          <div className="w-full max-w-6xl mx-auto px-4">
            {/* Trophy image */}
            {/* <div className="flex justify-center items-center mb-2">
              <img
                src="Trophy.png"
                alt="Trophy"
                className="filter drop-shadow-[0_0_0.25rem_#2b2b2b] w-12 md:w-24"
              />
            </div> */}

            {/* TITLE & TEXT DESCRIPTION */}
            <div className="mb-8">
              <h5 className="text-xs uppercase md:text-xl text-center px-3 text-amber-700 font-semibold">
                Natatanging Kawani ng Pamahalaang Panglungsod ng San Pablo
              </h5>

              <h3 className="font-medium text-2xl md:text-4xl text-center mt-1 text-gray-950 drop-shadow-sm">
                Mga Nagwagi: Natatanging Kawani 2025
              </h3>
            </div>

            {/* CARDS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {/* CARD - JOB ORDER */}
              <div
                className="group relative w-full h-56 md:h-85 overflow-hidden rounded-3xl border border-yellow-500/30
                   bg-gradient-to-br from-neutral-900 via-black to-neutral-950 p-6 md:p-8
                   shadow-[0_0_60px_rgba(234,179,8,0.15)]
                   transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/60
                   flex flex-col justify-between"
              >
                {/* Gold glow */}
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-yellow-500/10 blur-3xl transition-all duration-300 group-hover:bg-yellow-500/20" />

                {/* Header */}
                <header className="relative flex items-center justify-between">
                  <span className="text-xs md:text-sm font-semibold tracking-[0.2em] md:tracking-[0.3em] text-yellow-400 uppercase leading-tight max-w-[70%]">
                    Job Order
                  </span>
                </header>

                {/* Placeholder icon/img */}
                <div className="relative flex-1 flex items-center justify-center my-3">
                  {/* <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-dashed border-yellow-500/30 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 md:w-7 md:h-7 text-yellow-500/40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2l2.4 7.2H22l-6 4.4 2.3 7.1L12 16.3l-6.3 4.4 2.3-7.1-6-4.4h7.6z" />
                    </svg>
                  </div> */}
                  <img
                    src="NKPLSP.png"
                    className="filter drop-shadow-[0_0_0.25rem_#2b2b2b] rounded-full w-22 md:w-32"
                  />
                </div>

                {/* Footer */}
                <p className="relative text-xs md:text-sm text-yellow-500/50 uppercase tracking-widest font-medium">
                  To be revealed
                </p>
              </div>

              {/* CARD - 1st Level */}
              <div
                className="group relative w-full h-56 md:h-85 overflow-hidden rounded-3xl border border-yellow-500/30
                   bg-gradient-to-br from-neutral-900 via-black to-neutral-950 p-6 md:p-8
                   shadow-[0_0_60px_rgba(234,179,8,0.15)]
                   transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/60
                   flex flex-col justify-between"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-yellow-500/10 blur-3xl transition-all duration-300 group-hover:bg-yellow-500/20" />

                <header className="relative flex items-center justify-between">
                  <span className="text-xs md:text-sm font-semibold tracking-[0.2em] md:tracking-[0.3em] text-yellow-400 uppercase leading-tight max-w-[70%]">
                    1st Level
                  </span>
                </header>

                {/* Placeholder icon/img */}
                <div className="relative flex-1 flex items-center justify-center my-3">
                  {/* <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-dashed border-yellow-500/30 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 md:w-7 md:h-7 text-yellow-500/40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2l2.4 7.2H22l-6 4.4 2.3 7.1L12 16.3l-6.3 4.4 2.3-7.1-6-4.4h7.6z" />
                    </svg>
                  </div> */}
                  <img
                    src="NKPLSP.png"
                    className="filter drop-shadow-[0_0_0.25rem_#2b2b2b] rounded-full w-22 md:w-32"
                  />
                </div>

                <p className="relative text-xs md:text-sm text-yellow-500/50 uppercase tracking-widest font-medium">
                  To be revealed
                </p>
              </div>

              {/* CARD - 2nd Level */}
              <div
                className="group relative w-full h-56 md:h-85 overflow-hidden rounded-3xl border border-yellow-500/30
                   bg-gradient-to-br from-neutral-900 via-black to-neutral-950 p-6 md:p-8
                   shadow-[0_0_60px_rgba(234,179,8,0.15)]
                   transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/60
                   flex flex-col justify-between"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-yellow-500/10 blur-3xl transition-all duration-300 group-hover:bg-yellow-500/20" />

                <header className="relative flex items-center justify-between">
                  <span className="text-xs md:text-sm font-semibold tracking-[0.2em] md:tracking-[0.3em] text-yellow-400 uppercase leading-tight max-w-[70%]">
                    2nd Level
                  </span>
                </header>

                {/* Placeholder icon/img */}
                <div className="relative flex-1 flex items-center justify-center my-3">
                  {/* <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-dashed border-yellow-500/30 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 md:w-7 md:h-7 text-yellow-500/40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2l2.4 7.2H22l-6 4.4 2.3 7.1L12 16.3l-6.3 4.4 2.3-7.1-6-4.4h7.6z" />
                    </svg>
                  </div> */}
                  <img
                    src="NKPLSP.png"
                    className="filter drop-shadow-[0_0_0.25rem_#2b2b2b] rounded-full w-22 md:w-32"
                  />
                </div>

                <p className="relative text-xs md:text-sm text-yellow-500/50 uppercase tracking-widest font-medium">
                  To be revealed
                </p>
              </div>

              {/* CARD - PLSP */}
              {/* <div
                className="group relative w-full h-56 md:h-85 overflow-hidden rounded-3xl border border-yellow-500/30
                   bg-gradient-to-br from-neutral-900 via-black to-neutral-950 p-6 md:p-8
                   shadow-[0_0_60px_rgba(234,179,8,0.15)]
                   transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/60
                   flex flex-col justify-between"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-yellow-500/10 blur-3xl transition-all duration-300 group-hover:bg-yellow-500/20" />

                <header className="relative flex items-center justify-between">
                  <span className="text-xs md:text-sm font-semibold tracking-[0.2em] md:tracking-[0.3em] text-yellow-400 uppercase leading-tight max-w-[70%]">
                    DLSP
                  </span>
                </header>

  
                <div className="relative flex-1 flex items-center justify-center my-3">
                  <img
                    src="NKPLSP.png"
                    className="filter drop-shadow-[0_0_0.25rem_#2b2b2b] rounded-full w-22 md:w-32"
                  />
                </div>

                <p className="relative text-xs md:text-sm text-yellow-500/50 uppercase tracking-widest font-medium">
                  To be revealed
                </p>
              </div> */}
            </div>
          </div>
        </section>

        {/* CARD - LOYALTY AWARDEES */}
        <section className="bg-gradient-to-tr from-yellow-300 via-amber-400 to-yellow-700 py-6 rounded-lg shadow-lg m-6 md:m-20">
          {/* <section className="bg-[#e1b503] py-6 rounded-lg shadow-lg m-6 md:m-20"> */}
          <div className="flex flex-col items-center space-x-4">
            <div className="text-center mb-6">
              <h1 className="text-2xl md:text-3xl font-bold mb-2 text-gray-100 text-center">
                LOYALTY AWARDEES 2026
              </h1>
              <span className="text-gray-200 text-center text-sm">
                Recognizing Decades of Service Excellence
              </span>
            </div>

            {/* Years logo + Num of Awardee */}
            <div className="grid grid-cols-2 md:flex gap-6 text-white">
              <div className="flex flex-col items-center justify-evenly px-6 py-3">
                <img
                  src="25-logo.png"
                  className="filter drop-shadow-[0_0_0.25rem_#2b2b2b] rounded-full w-25 md:w-40"
                />

                <span className=" text-center capitalize text-xs md:text-lg mt-2">
                  42 Employees awardee
                </span>
              </div>
              <div className="flex flex-col items-center justify-evenly px-6 py-3">
                <img
                  src="30-logo.png"
                  className="filter drop-shadow-[0_0_0.25rem_#2b2b2b] rounded-full w-25 md:w-40"
                />

                <span className=" text-center capitalize text-xs md:text-lg mt-2">
                  13 Employees awardee
                </span>
              </div>
              <div className="flex flex-col items-center justify-evenly px-6 py-3">
                <img
                  src="35-logo.png"
                  className="filter drop-shadow-[0_0_0.25rem_#2b2b2b] rounded-full w-25 md:w-40"
                />

                <span className=" text-center capitalize text-xs md:text-lg mt-2">
                  4 Employees awardee
                </span>
              </div>
              <div className="flex flex-col items-center justify-evenly px-6 py-3">
                <img
                  src="40-logo.png"
                  className="filter drop-shadow-[0_0_0.25rem_#2b2b2b] rounded-full w-25 md:w-40"
                />

                <span className=" text-center capitalize text-xs md:text-lg mt-2">
                  4 Employees awardee
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* LOYALTY SECTION*/}
        <section className="flex flex-col min-h-svh md:min-h-dvh items-center justify-center md:py-6">
          <div>
            {/* img - assest */}
            <div className="flex justify-center items-center md:gap-3">
              <img
                src="25-logo.png"
                className="filter drop-shadow-[0_0_0.25rem_#2b2b2b] rounded-full w-12 md:w-32"
              />
              <img
                src="30-logo.png"
                className="filter drop-shadow-[0_0_0.25rem_#2b2b2b] rounded-full w-12 md:w-32"
              />
              <img
                src="Trophy.png"
                className="filter drop-shadow-[0_0_0.25rem_#2b2b2b] rounded-full w-18 md:w-40"
              />
              <img
                src="35-logo.png"
                className="filter drop-shadow-[0_0_0.25rem_#2b2b2b] rounded-full w-12 md:w-32"
              />
              <img
                src="40-logo.png"
                className="filter drop-shadow-[0_0_0.25rem_#2b2b2b] rounded-full w-12 md:w-32"
              />
            </div>

            {/* TITLE & TEXT */}
            <div className="mb-8">
              <h3 className="font-medium capitalize text-2xl md:text-4xl text-center px-3">
                gawad parangal sa katapatan para sa paglilikuran 2025
              </h3>
              <h5 className="text-xs md:text-xl text-center px-3">
                LOYALTY AWARDEES
              </h5>
            </div>

            {/* FRAME OF CARDS PER YEARS */}
            <div className="w-full max-w-6xl mx-auto p-4 md:p-6 space-y-8">
              {/* 25 Years Awardee — carousel for 42 items */}
              <div className="backdrop-blur-xl bg-white/80 border border-amber-200/60 rounded-3xl p-6 md:p-8 shadow-xl shadow-amber-500/5">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-amber-100">
                  <h3 className="text-lg md:text-2xl font-extrabold tracking-wide text-amber-600 uppercase">
                    25 Years Loyalty Awardees
                  </h3>
                </div>
                <AwardeeCarousel items={loyalty25} intervalMs={3000} />
              </div>

              {/* 30 Years Awardee — carousel for 13 items */}
              <div className="backdrop-blur-xl bg-white/80 border border-amber-200/60 rounded-3xl p-6 md:p-8 shadow-xl shadow-amber-500/5">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-amber-100">
                  <h3 className="text-lg md:text-2xl font-extrabold tracking-wide text-amber-600 uppercase">
                    30 Years Loyalty Awardees
                  </h3>
                </div>
                <AwardeeCarousel items={loyalty30} intervalMs={3000} />
              </div>

              {/* 35 Years Awardee Category Section */}
              <div className="backdrop-blur-xl bg-white/80 border border-amber-200/60 rounded-3xl p-6 md:p-8 shadow-xl shadow-amber-500/5">
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-amber-100">
                  <h3 className="text-lg md:text-2xl font-extrabold tracking-wide text-amber-600 uppercase">
                    35 Years Loyalty Awardees
                  </h3>
                </div>

                {/* Responsive Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="group relative overflow-hidden rounded-xl border border-amber-100/80 bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-amber-300">
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src="./LOYALTY/35 YEARS/JORCEL C. SAN PEDRO.png"
                        alt="JORCEL C. SAN PEDRO"
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="group relative overflow-hidden rounded-xl border border-amber-100/80 bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-amber-300">
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src="./LOYALTY/35 YEARS/NANCY C. TUBIGAN.png"
                        alt="NANCY C. TUBIGAN"
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="group relative overflow-hidden rounded-xl border border-amber-100/80 bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-amber-300">
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src="./LOYALTY/35 YEARS/ALEXANDER M. BAUTISTA.png"
                        alt="ALEXANDER M. BAUTISTA"
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="group relative overflow-hidden rounded-xl border border-amber-100/80 bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-amber-300">
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src="./LOYALTY/35 YEARS/RONALD D. OBNIAL.png"
                        alt="RONALD D. OBNIAL"
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 40 Years Awardee Category Section */}
              <div className="backdrop-blur-xl bg-white/80 border border-amber-200/60 rounded-3xl p-6 md:p-8 shadow-xl shadow-amber-500/5">
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-amber-100">
                  <h3 className="text-lg md:text-2xl font-extrabold tracking-wide text-amber-600 uppercase">
                    40 Years Loyalty Awardees
                  </h3>
                </div>

                {/* Responsive Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="group relative overflow-hidden rounded-xl border border-amber-100/80 bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-amber-300">
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src="./LOYALTY/40 YEARS/LUCIO GERALDO G. CIOLO.png"
                        alt="LUCIO GERALDO G. CIOLO"
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="group relative overflow-hidden rounded-xl border border-amber-100/80 bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-amber-300">
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src="./LOYALTY/40 YEARS/GENELYN B. CIOLO.png"
                        alt="GENELYN B. CIOLO"
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="group relative overflow-hidden rounded-xl border border-amber-100/80 bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-amber-300">
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src="./LOYALTY/40 YEARS/ELENA P. IGNACIO.png"
                        alt="ELENA P. IGNACIO"
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="group relative overflow-hidden rounded-xl border border-amber-100/80 bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-amber-300">
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src="./LOYALTY/40 YEARS/CORAZON T. CAPUNO.png"
                        alt="CORAZON T. CAPUNO"
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Praise Comittee SECTION */}
        <section className="flex flex-col min-h-svh items-center justify-center">
          {/* TITLE & TEXT */}
          <div className="mb-4">
            <h3 className="font-medium text-3xl md:text-5xl text-center uppercase text-gray-800 filter drop-shadow-[0_0_0.25rem_#FFE28A] tracking-widest">
              {/* <h3 className="font-medium text-3xl md:text-5xl text-center uppercase text-amber-500 filter drop-shadow-[0_0_0.25rem_#FFE28A] tracking-widest"> */}
              Praise Comittee
            </h3>
            <h5 className="text-sm md:text-xl text-center font-medium">
              Pamahalaang Lungsod ng San Pablo
            </h5>
          </div>

          {/* BANNER FROM CSC */}
          <div className="flex justify-center">
            <img
              src="PRAISE COMMITTEE.png"
              className="w-[345px] md:w-[700px] backdrop-blur-lg bg-white border border-gray-200 rounded-2xl shadow-md md:col-span-1 object-fill"
            />
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-gradient-to-b from-black to-slate-800 text-white">
        <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-3 px-2 py-6 md:px-6 md:py-4">
          <img
            src="spclogo.png"
            alt="San Pablo City Logo"
            className="bg-white filter drop-shadow-[0_0_0.25rem_#D2AA0D] rounded-full w-10 md:w-12 transition-transform duration-300 hover:scale-110"
          />

          <p className="text-center text-[10px] md:text-sm  leading-relaxed">
            <span>
              © 2026{" "}
              <a
                href="https://www.sanpablocity.gov.ph/"
                className="hover:underline hover:text-amber-400"
              >
                City Government of San Pablo.
              </a>{" "}
              All rights reserved.
            </span>
            <br />
            <span className="hidden md:block">
              Develop by:{" "}
              <a
                href="https://www.facebook.com/spc.mis"
                className="hover:underline hover:text-amber-400 font-semibold"
              >
                San Pablo City LGU – Management Information System Office.
              </a>
            </span>
            <span className="md:hidden">
              Develop by:{" "}
              <a
                href="https://www.facebook.com/spc.mis"
                className="hover:underline hover:text-amber-400 font-semibold"
              >
                San Pablo City LGU – MIS Office.
              </a>
            </span>
          </p>

          <img
            src="Bagong-PH.png"
            alt="Bagong Pilipinas Logo"
            className="filter drop-shadow-[0_0_0.25rem_#D2AA0D] w-12 md:w-14 transition-transform duration-300 hover:scale-110"
          />
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-5 right-5 md:bottom-8 md:right-8 z-30
                   w-11 h-11 md:w-12 md:h-12 rounded-full
                   bg-amber-500 text-black
                   shadow-lg shadow-amber-500/30
                   flex items-center justify-center
                   transition-all duration-300
                   hover:bg-amber-400 active:scale-95
                   ${
                     showScrollTop
                       ? "opacity-100 translate-y-0 pointer-events-auto"
                       : "opacity-0 translate-y-4 pointer-events-none"
                   }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 md:w-6 md:h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="M5 12l7-7 7 7" />
        </svg>
      </button>
    </>
  );
}

export default App;
