// // import { useState } from "react";
// // import axios from "axios";

// // const DiseaseDetection = () => {

// //   const [selectedImage, setSelectedImage] = useState(null);

// //   const [result, setResult] = useState("");

// //   const [solution, setSolution] = useState("");

// //   const [loading, setLoading] = useState(false);


// //   const handleImageChange = (e) => {

// //     setSelectedImage(
// //       e.target.files[0]
// //     );

// //   };


// //   const handleSubmit = async (e) => {

// //     e.preventDefault();

// //     if (!selectedImage) return;

// //     setLoading(true);

// //     const formData = new FormData();

// //     formData.append(
// //       "image",
// //       selectedImage
// //     );

// //     try {

// //       const response = await axios.post(
// //         "http://127.0.0.1:5000/predict-disease",
// //         formData
// //       );

// //       setResult(
// //         response.data.disease
// //       );

// //       setSolution(
// //         response.data.solution
// //       );

// //     } catch (error) {

// //       console.log(error);

// //     } finally {

// //       setLoading(false);

// //     }

// //   };


// //   return (

// //     <div className="bg-gray-800 p-8 rounded-2xl w-[420px] mt-10">

// //       <h2 className="text-3xl font-bold text-green-400 mb-6">

// //         Disease Detection

// //       </h2>


// //       <form
// //         onSubmit={handleSubmit}
// //         className="flex flex-col gap-4"
// //       >

// //         <input
// //           type="file"
// //           accept="image/*"
// //           onChange={handleImageChange}
// //           className="bg-gray-700 p-3 rounded-lg"
// //         />

// //         <button
// //           type="submit"
// //           className="bg-green-600 hover:bg-green-700 p-3 rounded-lg font-bold"
// //         >

// //           {
// //             loading
// //             ? "Detecting..."
// //             : "Detect Disease"
// //           }

// //         </button>

// //       </form>


// //       {
// //         result && (

// //           <div className="bg-gray-700 mt-6 p-5 rounded-xl">

// //             <h3 className="text-2xl font-bold text-yellow-400">

// //               Prediction

// //             </h3>

// //             <p className="mt-3 text-lg font-semibold">

// //               {result}

// //             </p>

// //             <div className="mt-5">

// //               <h4 className="text-xl font-bold text-green-400">

// //                 Treatment

// //               </h4>

// //               <p className="mt-2 text-gray-300 leading-relaxed">

// //                 {solution}

// //               </p>

// //             </div>

// //           </div>

// //         )
// //       }

// //     </div>

// //   );

// // };

// // export default DiseaseDetection;
// import { useState } from "react";
// import axios from "axios";

// const DiseaseDetection = () => {

//   const [selectedImage, setSelectedImage] = useState(null);

//   const [result, setResult] = useState("");

//   const [solution, setSolution] = useState("");

//   const [confidence, setConfidence] = useState("");

//   const [loading, setLoading] = useState(false);


//   const handleImageChange = (e) => {

//     setSelectedImage(
//       e.target.files[0]
//     );

//   };


//   const handleSubmit = async (e) => {

//     e.preventDefault();

//     if (!selectedImage) return;

//     try {

//       setLoading(true);

//       const formData = new FormData();

//       formData.append(
//         "image",
//         selectedImage
//       );

//       const response = await axios.post(

//         "http://127.0.0.1:5000/predict-disease",

//         formData

//       );

//       setResult(
//         response.data.disease
//       );

//       setSolution(
//         response.data.solution
//       );

//       setConfidence(
//         response.data.confidence
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
//     ">

//       <div className="
//         bg-gray-800
//         p-8
//         rounded-3xl
//         w-full
//         max-w-md
//         shadow-2xl
//       ">

//         <h1 className="
//           text-4xl
//           font-bold
//           text-green-400
//           mb-8
//           text-center
//         ">

//           Disease Detection

//         </h1>


//         <form
//           onSubmit={handleSubmit}
//           className="flex flex-col gap-5"
//         >

//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageChange}
//             className="
//               bg-gray-700
//               p-4
//               rounded-xl
//               text-white
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
//             "
//           >

//             {
//               loading
//               ? "Detecting..."
//               : "Detect Disease"
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
//             ">

//               <h2 className="
//                 text-2xl
//                 font-bold
//                 text-yellow-400
//                 mb-4
//               ">

//                 Prediction Result

//               </h2>


//               <p className="
//                 text-2xl
//                 font-extrabold
//                 text-green-400
//                 leading-relaxed
//               ">

//                 {result}

//               </p>


//               <p className="
//                 text-gray-300
//                 mt-4
//               ">

//                 Confidence:
//                 {" "}
//                 <span className="font-bold">

//                   {confidence}%

//                 </span>

//               </p>


//               <div className="mt-6">

//                 <h3 className="
//                   text-xl
//                   font-bold
//                   text-yellow-300
//                 ">

//                   Treatment

//                 </h3>

//                 <p className="
//                   text-gray-300
//                   mt-3
//                   leading-relaxed
//                 ">

//                   {solution}

//                 </p>

//               </div>

//             </div>

//           )
//         }

//       </div>

//     </div>

//   );

// };

// export default DiseaseDetection;
import { useState, useContext } from "react";
import axios from "axios";

import {
  LanguageContext
} from "../context/LanguageContext";

const DiseaseDetection = () => {

  const { text, language } = useContext(
    LanguageContext
  );

  const [selectedImage, setSelectedImage] = useState(null);

  const [result, setResult] = useState("");

  const [solution, setSolution] = useState("");

  const [confidence, setConfidence] = useState("");

  const [loading, setLoading] = useState(false);


  const handleImageChange = (e) => {

    setSelectedImage(
      e.target.files[0]
    );

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!selectedImage) return;

    try {

      setLoading(true);

      const formData = new FormData();

      formData.append(
        "image",
        selectedImage
      );

      const response = await axios.post(

        "http://127.0.0.1:5000/predict-disease",

        formData

      );

      setResult(
        response.data.disease
      );

      setSolution(
        response.data.solution
      );

      setConfidence(
        response.data.confidence
      );

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };


  const diseaseNamesHindi = {

    Pepper__bell___Bacterial_spot:
      "शिमला मिर्च - बैक्टीरियल स्पॉट",

    Pepper__bell___healthy:
      "शिमला मिर्च - स्वस्थ",

    Potato___Early_blight:
      "आलू - अर्ली ब्लाइट",

    Potato___Late_blight:
      "आलू - लेट ब्लाइट",

    Potato___healthy:
      "आलू - स्वस्थ",

    Tomato_Bacterial_spot:
      "टमाटर - बैक्टीरियल स्पॉट",

    Tomato_Early_blight:
      "टमाटर - अर्ली ब्लाइट",

    Tomato_Late_blight:
      "टमाटर - लेट ब्लाइट",

    Tomato_Leaf_Mold:
      "टमाटर - लीफ मोल्ड",

    Tomato_Septoria_leaf_spot:
      "टमाटर - सेप्टोरिया लीफ स्पॉट",

    Tomato_Spider_mites_Two_spotted_spider_mite:
      "टमाटर - स्पाइडर माइट्स",

    Tomato__Target_Spot:
      "टमाटर - टारगेट स्पॉट",

    Tomato__Tomato_YellowLeaf__Curl_Virus:
      "टमाटर - येलो लीफ कर्ल वायरस",

    Tomato__Tomato_mosaic_virus:
      "टमाटर - मोज़ेक वायरस",

    Tomato_healthy:
      "टमाटर - स्वस्थ"

  };


  return (

    <div className="
      min-h-screen
      bg-gray-900
      flex
      justify-center
      items-center
      px-5
    ">

      <div className="
        bg-gray-800
        p-8
        rounded-3xl
        w-full
        max-w-md
        shadow-2xl
      ">

        <h1 className="
          text-4xl
          font-bold
          text-green-400
          mb-8
          text-center
        ">

          {text.diseaseDetectionTitle}

        </h1>


        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="
              bg-gray-700
              p-4
              rounded-xl
              text-white
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
            "
          >

            {
              loading
              ? text.detecting
              : text.detectDisease
            }

          </button>

        </form>


        {
          result && (

            <div className="
              bg-gray-700
              mt-8
              p-6
              rounded-2xl
            ">

              <h2 className="
                text-2xl
                font-bold
                text-yellow-400
                mb-4
              ">

                {text.predictionResult}

              </h2>


              <p className="
                text-2xl
                font-extrabold
                text-green-400
                leading-relaxed
              ">

                {
                  language === "hi"
                  ? (
                      diseaseNamesHindi[result]
                      || result
                    )
                  : result
                }

              </p>


              <p className="
                text-gray-300
                mt-4
              ">

                {text.confidence}
                :
                {" "}

                <span className="font-bold">

                  {confidence}%

                </span>

              </p>


              <div className="mt-6">

                <h3 className="
                  text-xl
                  font-bold
                  text-yellow-300
                ">

                  {text.treatment}

                </h3>

                <p className="
                  text-gray-300
                  mt-3
                  leading-relaxed
                ">

                  {solution}

                </p>

              </div>

            </div>

          )
        }

      </div>

    </div>

  );

};

export default DiseaseDetection;