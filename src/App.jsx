import { useState, useRef } from "react";
import Proposal from "./components/Proposal";
import NextPage from "./components/NextPage";
import NextPage1 from "./components/NextPage1";
import NextPage2 from "./components/NextPage2";
import NextPage3 from "./components/NextPage3";
import NextPage4 from "./components/NextPage4";
import NextPage5 from "./components/NextPage5";
import NextPage6 from "./components/NextPage6";
import NextPage7 from "./components/NextPage7";
import NextPage8 from "./components/NextPage8";
import NextPage9 from "./components/NextPage9";
import NextPage10 from "./components/NextPage10";
import NextPage11 from "./components/NextPage11";
import NextPage12 from "./components/NextPage12";
import Success from "./components/Success";

import music from "./assets/audio/music.mp3";
import "./App.css";

export default function App() {
  const [step, setStep] = useState(1);
  const audioRef = useRef(null);

  const startMusic = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2; // lower romantic volume
      audioRef.current
        .play()
        .catch((err) => console.log("Audio play failed:", err));
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Proposal
            onYes={() => {
              startMusic(); // ✅ start music on first Yes click
              setStep(2);
            }}
          />
        );

      case 2:
        return <NextPage onNext={() => setStep(3)} onBack={() => setStep(1)} />;

      case 3:
        return <NextPage1 onNext={() => setStep(4)} onBack={() => setStep(2)} />;

      case 4:
        return <NextPage2 onNext={() => setStep(5)} onBack={() => setStep(3)} />;

      case 5:
        return <NextPage3 onNext={() => setStep(6)} onBack={() => setStep(4)} />;

      case 6:
        return <NextPage4 onNext={() => setStep(7)} onBack={() => setStep(5)} />;

      case 7:
        return <NextPage5 onNext={() => setStep(8)} onBack={() => setStep(6)} />;

      case 8:
        return <NextPage6 onNext={() => setStep(9)} onBack={() => setStep(7)} />;

      case 9:
        return <NextPage7 onNext={() => setStep(10)} onBack={() => setStep(8)} />;

      case 10:
        return <NextPage8 onNext={() => setStep(11)} onBack={() => setStep(9)} />;

      case 11:
        return <NextPage9 onNext={() => setStep(12)} onBack={() => setStep(10)} />;

      case 12:
        return <NextPage10 onNext={() => setStep(13)} onBack={() => setStep(11)} />;

      case 13:
        return <NextPage11 onNext={() => setStep(14)} onBack={() => setStep(12)} />;

      case 14:
        return <NextPage12 onNext={() => setStep(15)} onBack={() => setStep(13)} />;

      default:
        return null;
    }
  };

  return (
    <div className="app">
      <audio ref={audioRef} loop>
        <source src={music} type="audio/mpeg" />
      </audio>

      {renderStep()}
    </div>
  );
}
