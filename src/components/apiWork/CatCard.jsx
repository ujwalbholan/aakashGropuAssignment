// src/components/navComponent/CatCard.jsx
const CatCard = ({ imageUrl }) => {
  return (
    <div className="max-w-lg mx-auto rounded overflow-hidden shadow-lg bg-white">
      <img
        src={imageUrl}
        alt="Random Cat"
        className="w-full h-[300px] object-cover"
      />
    </div>
  );
};

export default CatCard;
