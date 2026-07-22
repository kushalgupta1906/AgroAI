import { useEffect, useState } from "react";
import axios from "axios";

const GovtSchemes = ({ crop }) => {

  const [schemes, setSchemes] = useState([]);

  const [loading, setLoading] = useState(false);


  useEffect(() => {

    if (!crop) return;

    const fetchSchemes = async () => {

      try {

        setLoading(true);

        const response = await axios.get(
  `https://agroai-production-a2fc.up.railway.app/govt-schemes/${crop}`
);

        setSchemes(
          response.data.schemes
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    };

    fetchSchemes();

  }, [crop]);


  return (

    <div className="bg-gray-800 mt-8 p-6 rounded-2xl w-full">

      <h2 className="
        text-3xl
        font-bold
        text-yellow-400
        mb-6
      ">

        📰 Latest Agriculture Updates

      </h2>


      {
        loading && (

          <p className="text-gray-400">

            Fetching latest updates...

          </p>

        )
      }


      <div className="flex flex-col gap-5">

        {
          schemes.map((item, index) => (

            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="
                bg-gray-700
                p-5
                rounded-xl
                hover:bg-gray-600
                transition-all
                border
                border-gray-600
              "
            >

              <h3 className="
                text-lg
                font-bold
                text-green-400
                leading-relaxed
              ">

                {item.title}

              </h3>

              <p className="
                text-sm
                text-gray-400
                mt-3
              ">

                Click to read more →

              </p>

            </a>

          ))
        }

      </div>

    </div>

  );

};

export default GovtSchemes;