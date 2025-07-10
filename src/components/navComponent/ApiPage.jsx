import React, { useEffect, useState } from "react";
import axios from "axios";
import JokeCard from "../apiWork/JokeCard";
import CatCard from "../apiWork/CatCard";
import AdviceCard from "../apiWork/AdviceCard";

const ApiPage = () => {
  const [joke, setJoke] = useState(null);
  const [jokeLoading, setJokeLoading] = useState(false);

  const [catImage, setCatImage] = useState("");
  const [catLoading, setCatLoading] = useState(false);

  const [advice, setAdvice] = useState("");
  const [adviceLoading, setAdviceLoading] = useState(false);

  const fetchJoke = async () => {
    setJokeLoading(true);
    try {
      const res = await axios.get(
        "https://v2.jokeapi.dev/joke/Any?type=single,twopart"
      );
      setJoke(res.data);
    } catch (err) {
      console.error("Error fetching joke:", err);
    } finally {
      setJokeLoading(false);
    }
  };

  const fetchCat = async () => {
    setCatLoading(true);
    try {
      const res = await axios.get("https://api.thecatapi.com/v1/images/search");
      setCatImage(res.data[0].url);
    } catch (err) {
      console.error("Error fetching cat:", err);
    } finally {
      setCatLoading(false);
    }
  };

  const fetchAdvice = async () => {
    setAdviceLoading(true);
    try {
      const res = await axios.get("https://api.adviceslip.com/advice");
      setAdvice(res.data.slip.advice);
    } catch (err) {
      console.error("Error fetching advice:", err);
    } finally {
      setAdviceLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
    fetchCat();
    fetchAdvice();
  }, []);

  return (
    <section className="pt-20">
      {/* Joke Section */}
      <div className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
          🤣 Random Joke Generator
        </h2>
        <div className="min-h-[250px] flex items-center justify-center">
          {joke && <JokeCard joke={joke} />}
        </div>
        <div className="text-center mt-6">
          <button
            onClick={fetchJoke}
            className="bg-gray-500 rounded-md px-6 py-3 text-white hover:bg-gray-700 transition"
            disabled={jokeLoading}
          >
            {jokeLoading ? "Loading..." : "Get Another Joke"}
          </button>
        </div>
      </div>

      {/* Cat Section */}
      <div className="bg-blue-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
          😺 Random Cat Image
        </h2>
        <div className="min-h-[250px] flex items-center justify-center">
          {catImage && <CatCard imageUrl={catImage} />}
        </div>
        <div className="text-center mt-6">
          <button
            onClick={fetchCat}
            className="bg-gray-500 rounded-md px-6 py-3 text-white hover:bg-gray-700 transition"
            disabled={catLoading}
          >
            {catLoading ? "Loading..." : "Get Another Cat"}
          </button>
        </div>
      </div>

      {/* Advice Section */}
      <div className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
          💡 Advice of the Day
        </h2>
        <div className="min-h-[250px] flex items-center justify-center">
          {advice && <AdviceCard advice={advice} />}
        </div>
        <div className="text-center mt-6">
          <button
            onClick={fetchAdvice}
            className="bg-gray-500 rounded-md px-6 py-3 text-white hover:bg-gray-700 transition"
            disabled={adviceLoading}
          >
            {adviceLoading ? "Loading..." : "Give Me Advice"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ApiPage;
