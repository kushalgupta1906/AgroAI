const ResultCard = ({ crop }) => {

  return (

    <div className="bg-gray-800 mt-8 p-6 rounded-2xl w-full">

      <h2 className="text-3xl font-bold text-green-400 capitalize mb-4">
        {crop}
      </h2>

      <p className="text-gray-300 text-lg">
        Recommended crop based on the given soil
        and environmental conditions.
      </p>

    </div>

  );

};

export default ResultCard;