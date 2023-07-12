import React, { useState } from "react";
import FollowersCard from "../Components/FollowersCard";
import FolllowersData from "../Components/Data/FollowersData.json";
import OverviewCard from "../Components/OverviewCard";
import OverviewData from "../Components/Data/OverviewData.json";
import Footer from "../Components/Footer";

const Home = () => {
  const [Theme, setTheme] = useState("dark");
  const ToggleTheme = () => {
    setTheme(Theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      <main
        className={`background_box relative min-h-screen z-10 transition-colors ${
          Theme === "dark"
            ? "background_box_dark bg-[#1D2029]"
            : "background_box_light bg-[#FFFFFF]"
        }`}
      >
        <div className="container mx-auto">
          <div className="xl:mx-[5em] lg:mx-[3em] mx-[2em] py-10">
            <div className="md:flex md:justify-between md:items-center mb-10">
              <div>
                <h1
                  className={`lg:text-3xl font-bold text-2xl transition-colors ${
                    Theme === "dark" ? "text-[#fff]" : "text-[#000]"
                  }`}
                >
                  Social Media Dashboard
                </h1>
                <p
                  className={`font-bold transition-colors ${
                    Theme === "dark" ? "text-[#8b97c6]" : "text-[#63687e]"
                  }`}
                >
                  Total Followers: 23,004
                </p>
              </div>
              <hr
                className={`lg:hidden my-5 transition-colors ${
                  Theme === "dark" ? "border-[#373A4D]" : "border-[#898C9B]"
                }`}
              />
              <div className="flex justify-between gap-3">
                <span
                  className={`font-bold transition-colors ${
                    Theme === "dark" ? "text-[#fff]" : "text-[#000]"
                  }`}
                >
                  Dark Mode
                </span>
                <button
                  type="button"
                  aria-label="ToggleTheme"
                  onClick={ToggleTheme}
                  className={`button_circle relative rounded-xl px-6 py-3 ${
                    Theme === "light"
                      ? "button_circle_light button_theme_light"
                      : ""
                  }button_theme_dark`}
                ></button>
              </div>
            </div>
            <div className="grid_auto_fit grid gap-8">
              {FolllowersData.map((followers, index) => {
                return (
                  <FollowersCard
                    key={index}
                    number={index}
                    Theme={Theme}
                    {...followers}
                  />
                );
              })}
            </div>

            <h2
              className={`mb-6 mt-10 font-bold text-2xl transition-colors ${
                Theme === "dark" ? "text-[#fff]" : "text-[#000]"
              }`}
            >
              Overview - Today
            </h2>

            <div className="grid_auto_fit_overview 2xl:grid_auto_fit_overview_large grid gap-8">
              {OverviewData.map((overviews, index) => {
                return (
                  <OverviewCard
                    key={index}
                    number={index}
                    Theme={Theme}
                    {...overviews}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer Theme={Theme}/>
    </>
  );
};
export default Home;
