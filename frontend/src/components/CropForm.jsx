// // import { useState } from "react";
// // import axios from "axios";
// // import ResultCard from "./ResultCard";
// // import GovtSchemes from "./GovtSchemes";

// // const CropForm = () => {

// //   const [formData, setFormData] = useState({
// //     N: "",
// //     P: "",
// //     K: "",
// //     temperature: "",
// //     humidity: "",
// //     ph: "",
// //     rainfall: ""
// //   });

// //   const [result, setResult] = useState("");
// //   const [loading, setLoading] = useState(false);

// //   const handleChange = (e) => {

// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value
// //     });

// //   };

// //   const handleSubmit = async (e) => {

// //     e.preventDefault();

// //     setLoading(true);

// //     try {

// //       const response = await axios.post(
// //         "http://127.0.0.1:5000/predict",
// //         {
// //           N: Number(formData.N),
// //           P: Number(formData.P),
// //           K: Number(formData.K),
// //           temperature: Number(formData.temperature),
// //           humidity: Number(formData.humidity),
// //           ph: Number(formData.ph),
// //           rainfall: Number(formData.rainfall)
// //         }
// //       );

// //       setResult(response.data.recommended_crop);

// //     } catch (error) {

// //       console.log(error);

// //     } finally {

// //       setLoading(false);

// //     }

// //   };

// //   return (

// //     <div className="bg-gray-800 p-8 rounded-2xl w-[420px] shadow-lg">

// //       <h2 className="text-3xl font-bold mb-6 text-green-400">
// //         Crop Recommendation
// //       </h2>

// //       <form
// //         onSubmit={handleSubmit}
// //         className="flex flex-col gap-4"
// //       >

// //         <input
// //           type="number"
// //           name="N"
// //           placeholder="Nitrogen (N)"
// //           onChange={handleChange}
// //           className="p-3 rounded-lg bg-gray-700 outline-none"
// //         />

// //         <input
// //           type="number"
// //           name="P"
// //           placeholder="Phosphorus (P)"
// //           onChange={handleChange}
// //           className="p-3 rounded-lg bg-gray-700 outline-none"
// //         />

// //         <input
// //           type="number"
// //           name="K"
// //           placeholder="Potassium (K)"
// //           onChange={handleChange}
// //           className="p-3 rounded-lg bg-gray-700 outline-none"
// //         />

// //         <input
// //           type="number"
// //           step="0.1"
// //           name="temperature"
// //           placeholder="Temperature"
// //           onChange={handleChange}
// //           className="p-3 rounded-lg bg-gray-700 outline-none"
// //         />

// //         <input
// //           type="number"
// //           step="0.1"
// //           name="humidity"
// //           placeholder="Humidity"
// //           onChange={handleChange}
// //           className="p-3 rounded-lg bg-gray-700 outline-none"
// //         />

// //         <input
// //           type="number"
// //           step="0.1"
// //           name="ph"
// //           placeholder="pH Value"
// //           onChange={handleChange}
// //           className="p-3 rounded-lg bg-gray-700 outline-none"
// //         />

// //         <input
// //           type="number"
// //           step="0.1"
// //           name="rainfall"
// //           placeholder="Rainfall"
// //           onChange={handleChange}
// //           className="p-3 rounded-lg bg-gray-700 outline-none"
// //         />

// //         <button
// //           type="submit"
// //           className="bg-green-600 hover:bg-green-700 transition-all p-3 rounded-lg font-bold text-lg"
// //         >
// //           {
// //             loading
// //             ? "Predicting..."
// //             : "Predict Crop"
// //           }
// //         </button>

// //       </form>

// //       {
// //         result && (
// //           <ResultCard crop={result} />
// //         )
// //       }

// //       <GovtSchemes crop={result} />

// //     </div>

// //   );

// // };

// // export default CropForm;
// import { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const CropForm = () => {

//   const [formData, setFormData] = useState({

//     N: "",
//     P: "",
//     K: "",

//     temperature: "",
//     humidity: "",

//     ph: "",
//     rainfall: ""

//   });

//   const [result, setResult] = useState("");

//   const [loading, setLoading] = useState(false);


//   const handleChange = (e) => {

//     setFormData({

//       ...formData,

//       [e.target.name]: e.target.value

//     });

//   };


//   const handleSubmit = async (e) => {

//     e.preventDefault();

//     try {

//       setLoading(true);

//       const response = await axios.post(

//         "http://127.0.0.1:5000/predict",

//         {

//           N: Number(formData.N),
//           P: Number(formData.P),
//           K: Number(formData.K),

//           temperature: Number(formData.temperature),
//           humidity: Number(formData.humidity),

//           ph: Number(formData.ph),
//           rainfall: Number(formData.rainfall)

//         }

//       );

//       setResult(
//         response.data.recommended_crop
//       );

//     } catch (error) {

//       console.log(error);

//     } finally {

//       setLoading(false);

//     }

//   };


//   return (

//     <div className="
//       min-h-screen
//       bg-gray-900
//       flex
//       justify-center
//       items-center
//       px-5
//       py-10
//     ">

//       <div className="
//         bg-gray-800
//         w-full
//         max-w-2xl
//         p-8
//         rounded-3xl
//         shadow-2xl
//       ">

//         <h1 className="
//           text-4xl
//           font-bold
//           text-center
//           text-green-400
//           mb-10
//         ">

//           🌾 Crop Recommendation System

//         </h1>


//         <form
//           onSubmit={handleSubmit}
//           className="
//             grid
//             md:grid-cols-2
//             gap-5
//           "
//         >

//           <input
//             type="number"
//             name="N"
//             placeholder="Nitrogen (N)"
//             value={formData.N}
//             onChange={handleChange}
//             className="
//               bg-gray-700
//               p-4
//               rounded-xl
//               outline-none
//               text-white
//             "
//           />

//           <input
//             type="number"
//             name="P"
//             placeholder="Phosphorus (P)"
//             value={formData.P}
//             onChange={handleChange}
//             className="
//               bg-gray-700
//               p-4
//               rounded-xl
//               outline-none
//               text-white
//             "
//           />

//           <input
//             type="number"
//             name="K"
//             placeholder="Potassium (K)"
//             value={formData.K}
//             onChange={handleChange}
//             className="
//               bg-gray-700
//               p-4
//               rounded-xl
//               outline-none
//               text-white
//             "
//           />

//           <input
//             type="number"
//             name="temperature"
//             placeholder="Temperature"
//             value={formData.temperature}
//             onChange={handleChange}
//             className="
//               bg-gray-700
//               p-4
//               rounded-xl
//               outline-none
//               text-white
//             "
//           />

//           <input
//             type="number"
//             name="humidity"
//             placeholder="Humidity"
//             value={formData.humidity}
//             onChange={handleChange}
//             className="
//               bg-gray-700
//               p-4
//               rounded-xl
//               outline-none
//               text-white
//             "
//           />

//           <input
//             type="number"
//             step="0.1"
//             name="ph"
//             placeholder="pH Value"
//             value={formData.ph}
//             onChange={handleChange}
//             className="
//               bg-gray-700
//               p-4
//               rounded-xl
//               outline-none
//               text-white
//             "
//           />

//           <input
//             type="number"
//             name="rainfall"
//             placeholder="Rainfall"
//             value={formData.rainfall}
//             onChange={handleChange}
//             className="
//               bg-gray-700
//               p-4
//               rounded-xl
//               outline-none
//               text-white
//               md:col-span-2
//             "
//           />


//           <button
//             type="submit"
//             className="
//               bg-green-500
//               hover:bg-green-600
//               transition-all
//               p-4
//               rounded-xl
//               font-bold
//               text-lg
//               md:col-span-2
//             "
//           >

//             {
//               loading
//               ? "Predicting..."
//               : "Predict Crop"
//             }

//           </button>

//         </form>


//         {
//           result && (

//             <div className="
//               bg-gray-700
//               mt-8
//               p-6
//               rounded-2xl
//               text-center
//             ">

//               <h2 className="
//                 text-2xl
//                 font-bold
//                 text-yellow-400
//               ">

//                 Recommended Crop

//               </h2>

//               <p className="
//                 text-4xl
//                 font-extrabold
//                 text-green-400
//                 mt-4
//                 capitalize
//               ">

//                 {result}

//               </p>


//               <Link
//                 to={`/schemes/${result}`}
//                 className="
//                   inline-block
//                   mt-6
//                   bg-yellow-500
//                   hover:bg-yellow-600
//                   transition-all
//                   text-black
//                   px-6
//                   py-3
//                   rounded-xl
//                   font-bold
//                 "
//               >

//                 Latest News & Schemes →

//               </Link>

//             </div>

//           )
//         }

//       </div>

//     </div>

//   );

// };

// export default CropForm;
import { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import {
  LanguageContext
} from "../context/LanguageContext";

const CropForm = () => {

  const { text } = useContext(
    LanguageContext
  );

  const [formData, setFormData] = useState({

    N: "",
    P: "",
    K: "",

    temperature: "",
    humidity: "",

    ph: "",
    rainfall: ""

  });

  const [result, setResult] = useState("");

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
      e.target.value

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const response = await axios.post(

        "https://agroai-production-a2fc.up.railway.app/predict",

        {

          N: Number(formData.N),
          P: Number(formData.P),
          K: Number(formData.K),

          temperature:
          Number(formData.temperature),

          humidity:
          Number(formData.humidity),

          ph:
          Number(formData.ph),

          rainfall:
          Number(formData.rainfall)

        }

      );

      setResult(
        response.data.recommended_crop
      );

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  return (

    <div
      className="
      min-h-screen
      bg-gray-900
      flex
      justify-center
      items-center
      px-5
      py-10
    "
    >

      <div
        className="
        bg-gray-800
        w-full
        max-w-2xl
        p-8
        rounded-3xl
        shadow-2xl
      "
      >

        <h1
          className="
          text-4xl
          font-bold
          text-center
          text-green-400
          mb-10
        "
        >

          🌾 {text.cropRecommendationTitle}

        </h1>

        <form
          onSubmit={handleSubmit}
          className="
            grid
            md:grid-cols-2
            gap-5
          "
        >

          <input
            type="number"
            name="N"
            placeholder={text.nitrogen}
            value={formData.N}
            onChange={handleChange}
            className="
              bg-gray-700
              p-4
              rounded-xl
              outline-none
              text-white
            "
          />

          <input
            type="number"
            name="P"
            placeholder={text.phosphorus}
            value={formData.P}
            onChange={handleChange}
            className="
              bg-gray-700
              p-4
              rounded-xl
              outline-none
              text-white
            "
          />

          <input
            type="number"
            name="K"
            placeholder={text.potassium}
            value={formData.K}
            onChange={handleChange}
            className="
              bg-gray-700
              p-4
              rounded-xl
              outline-none
              text-white
            "
          />

          <input
            type="number"
            name="temperature"
            placeholder={text.temperature}
            value={formData.temperature}
            onChange={handleChange}
            className="
              bg-gray-700
              p-4
              rounded-xl
              outline-none
              text-white
            "
          />

          <input
            type="number"
            name="humidity"
            placeholder={text.humidity}
            value={formData.humidity}
            onChange={handleChange}
            className="
              bg-gray-700
              p-4
              rounded-xl
              outline-none
              text-white
            "
          />

          <input
            type="number"
            step="0.1"
            name="ph"
            placeholder={text.ph}
            value={formData.ph}
            onChange={handleChange}
            className="
              bg-gray-700
              p-4
              rounded-xl
              outline-none
              text-white
            "
          />

          <input
            type="number"
            name="rainfall"
            placeholder={text.rainfall}
            value={formData.rainfall}
            onChange={handleChange}
            className="
              bg-gray-700
              p-4
              rounded-xl
              outline-none
              text-white
              md:col-span-2
            "
          />

          <button
            type="submit"
            className="
              bg-green-500
              hover:bg-green-600
              transition-all
              p-4
              rounded-xl
              font-bold
              text-lg
              md:col-span-2
            "
          >

            {
              loading
              ? text.predicting
              : text.predictCrop
            }

          </button>

        </form>

        {
          result && (

            <div
              className="
              bg-gray-700
              mt-8
              p-6
              rounded-2xl
              text-center
            "
            >

              <h2
                className="
                text-2xl
                font-bold
                text-yellow-400
              "
              >

                {text.recommendedCrop}

              </h2>

              <p
                className="
                text-4xl
                font-extrabold
                text-green-400
                mt-4
                capitalize
              "
              >

                {result}

              </p>

              <Link
                to={`/schemes/${result}`}
                className="
                  inline-block
                  mt-6
                  bg-yellow-500
                  hover:bg-yellow-600
                  transition-all
                  text-black
                  px-6
                  py-3
                  rounded-xl
                  font-bold
                "
              >

                {text.newsSchemes} →

              </Link>

            </div>

          )
        }

      </div>

    </div>

  );

};

export default CropForm;