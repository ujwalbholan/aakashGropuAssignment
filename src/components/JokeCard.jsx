// src/components/navComponent/JokeCard.jsx
const JokeCard = ({ joke }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 max-w-xl mx-auto text-center">
      {joke.type === "single" ? (
        <p className="text-lg">{joke.joke}</p>
      ) : (
        <>
          <p className="text-lg font-semibold mb-2">{joke.setup}</p>
          <p className="text-gray-700">{joke.delivery}</p>
        </>
      )}
    </div>
  );
};

export default JokeCard;
