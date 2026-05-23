import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SchemesPage = () => {

  const { crop } = useParams();

  const [schemes, setSchemes] = useState([]);

  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const fetchSchemes = async () => {

      try {

        const response = await axios.get(
          `http://127.0.0.1:5000/govt-schemes/${crop}`
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

    <div className="
      min-h-screen
      bg-gray-900
      text-white
      p-10
    ">

      <h1 className="
        text-4xl
        font-bold
        text-yellow-400
        mb-10
      ">

        📰 Latest News & Schemes for {crop}

      </h1>


      {
        loading && (

          <p className="text-gray-400">

            Fetching updates...

          </p>

        )
      }


      <div className="
        grid
        md:grid-cols-2
        gap-6
      ">

        {
          schemes.map((item, index) => (

            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="
                bg-gray-800
                p-6
                rounded-2xl
                border
                border-gray-700
                hover:bg-gray-700
                transition-all
              "
            >

              <h2 className="
                text-xl
                font-bold
                text-green-400
                leading-relaxed
              ">

                {item.title}

              </h2>

              <p className="
                text-gray-400
                mt-4
              ">

                Click to read full article →

              </p>

            </a>

          ))
        }

      </div>

    </div>

  );

};

export default SchemesPage;