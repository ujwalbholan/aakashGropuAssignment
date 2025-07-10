// src/components/navComponent/AdviceCard.jsx
const AdviceCard = ({ advice }) => {
  return (
    <div className="max-w-xl mx-auto bg-white shadow p-6 rounded-lg text-center">
      <p className="text-xl font-medium text-gray-700 italic">“{advice}”</p>
    </div>
  );
};

export default AdviceCard;
