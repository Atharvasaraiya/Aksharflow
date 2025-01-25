import React, { useState, useEffect } from "react";
import GeneratedWords from "./components/GeneratedWords";
import RestartButton from "./components/RestartButton";
import Results from "./components/Results";
import UserTypings from "./components/UserTypings";
import useEngine from "./hooks/useEngine";
import { calculateAccuracyPercentage } from "./utils/helpers";
import ThemeToggle from "./ThemeToggle"; 

const App = () => {
  const { words, typed, timeLeft, errors, state, restart, totalTyped } = useEngine();

  // Manage theme state
  const [theme, setTheme] = useState("light");

  // Toggle the theme between light and dark
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.classList.remove(theme);
    document.body.classList.add(newTheme);
  };

  // Apply theme on component mount
  useEffect(() => {
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <div>
      {/* Logo */}
      <div className="flex justify-center my-5">
        <img src="/logoo.png" alt="" className="w-32 h-auto" /> 
      </div>

      {/* Title */}
      <h1 className="text-center text-3xl font-bold my-5">Fastest Finger First</h1>

      {/* Theme Toggle */}
      <ThemeToggle toggleTheme={toggleTheme} />

      {/* Main Content */}
      <CountdownTimer timeLeft={timeLeft} />
      <WordsContainer>
        <GeneratedWords key={words} words={words} />
        <UserTypings className="absolute inset-0" words={words} userInput={typed} />
      </WordsContainer>
      <RestartButton className={"mx-auto mt-10 text-slate-500"} onRestart={restart} />
      <Results
        className="mt-10"
        state={state}
        errors={errors}
        accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
        total={totalTyped}
      />
    </div>
  );
};

const WordsContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative text-3xl max-w-xl leading-relaxed break-all mt-3">{children}</div>;
};

const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="text-primary-400 font-medium">Time: {timeLeft}</h2>;
};

export default App;
