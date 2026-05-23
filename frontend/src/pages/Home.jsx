// // import { Link } from "react-router-dom";

// // const Home = () => {

// //   return (

// //     <div className="min-h-[90vh] flex flex-col items-center justify-center px-6">

// //       <div className="text-center max-w-4xl">

// //         <h1 className="text-6xl md:text-7xl font-extrabold text-green-400 leading-tight">

// //           Smart Agriculture
// //           <br />

// //           Assistant 🌱

// //         </h1>

// //         <p className="text-gray-400 text-xl mt-8 leading-relaxed">

// //           AI-powered platform for crop recommendation
// //           and plant disease detection using Machine Learning
// //           and Deep Learning.

// //         </p>


// //         {/* BUTTONS */}

// //         <div className="flex gap-6 justify-center mt-10 flex-wrap">

// //           <Link to="/crop">

// //             <button className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl text-lg font-bold transition-all">

// //               Crop Recommendation

// //             </button>

// //           </Link>

// //           <Link to="/disease">

// //             <button className="bg-yellow-500 hover:bg-yellow-600 px-8 py-4 rounded-xl text-lg font-bold transition-all">

// //               Disease Detection

// //             </button>

// //           </Link>

// //         </div>

// //       </div>


// //       {/* FEATURE CARDS */}

// //       <div className="grid md:grid-cols-3 gap-8 mt-20 w-full max-w-6xl">

// //         <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">

// //           <h2 className="text-2xl font-bold text-green-400 mb-4">

// //             🌾 Crop Recommendation

// //           </h2>

// //           <p className="text-gray-300 leading-relaxed">

// //             Predict the best crop based on soil nutrients,
// //             rainfall, humidity, temperature, and pH values.

// //           </p>

// //         </div>


// //         <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">

// //           <h2 className="text-2xl font-bold text-yellow-400 mb-4">

// //             🍃 Disease Detection

// //           </h2>

// //           <p className="text-gray-300 leading-relaxed">

// //             Upload plant leaf images and detect diseases
// //             using Deep Learning with MobileNetV2.

// //           </p>

// //         </div>


// //         <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">

// //           <h2 className="text-2xl font-bold text-blue-400 mb-4">

// //             🤖 AI Powered

// //           </h2>

// //           <p className="text-gray-300 leading-relaxed">

// //             Built using Flask, React, Random Forest,
// //             TensorFlow, and Transfer Learning.

// //           </p>

// //         </div>

// //       </div>

// //     </div>

// //   );

// // };

// // export default Home;
// import { Link } from "react-router-dom";

// const Home = () => {

//   return (

//     <div className="
//       min-h-screen
//       bg-gray-900
//       text-white
//       px-6
//       py-16
//     ">

//       {/* HERO SECTION */}

//       <div className="
//         max-w-6xl
//         mx-auto
//         flex
//         flex-col
//         items-center
//         text-center
//       ">

//         <h1 className="
//           text-6xl
//           font-extrabold
//           text-green-400
//           leading-tight
//         ">

//           Smart Farming <br />

//           <span className="text-yellow-400">

//             with AgroAI 🌾

//           </span>

//         </h1>


//         <p className="
//           text-gray-300
//           text-xl
//           mt-8
//           max-w-3xl
//           leading-relaxed
//         ">

//           AgroAI helps farmers make smarter decisions using
//           Machine Learning and Deep Learning.

//           Get crop recommendations, detect plant diseases,
//           and explore the latest agriculture news and
//           government schemes — all in one platform.

//         </p>


//         <div className="
//           flex
//           gap-5
//           mt-10
//           flex-wrap
//           justify-center
//         ">

//           <Link
//             to="/crop"
//             className="
//               bg-green-500
//               hover:bg-green-600
//               transition-all
//               px-8
//               py-4
//               rounded-2xl
//               font-bold
//               text-lg
//             "
//           >

//             🌱 Crop Recommendation

//           </Link>


//           <Link
//             to="/disease"
//             className="
//               bg-yellow-500
//               hover:bg-yellow-600
//               transition-all
//               text-black
//               px-8
//               py-4
//               rounded-2xl
//               font-bold
//               text-lg
//             "
//           >

//             🦠 Disease Detection

//           </Link>

//         </div>

//       </div>


//       {/* FEATURES SECTION */}

//       <div className="
//         max-w-6xl
//         mx-auto
//         mt-24
//         grid
//         md:grid-cols-3
//         gap-8
//       ">

//         {/* CARD 1 */}

//         <div className="
//           bg-gray-800
//           p-8
//           rounded-3xl
//           border
//           border-gray-700
//           hover:border-green-500
//           transition-all
//         ">

//           <div className="text-5xl">

//             🌾

//           </div>

//           <h2 className="
//             text-2xl
//             font-bold
//             text-green-400
//             mt-6
//           ">

//             Smart Crop Prediction

//           </h2>

//           <p className="
//             text-gray-300
//             mt-4
//             leading-relaxed
//           ">

//             Predict the most suitable crop based on
//             soil nutrients, rainfall, humidity,
//             temperature, and pH values.

//           </p>

//         </div>


//         {/* CARD 2 */}

//         <div className="
//           bg-gray-800
//           p-8
//           rounded-3xl
//           border
//           border-gray-700
//           hover:border-yellow-400
//           transition-all
//         ">

//           <div className="text-5xl">

//             🦠

//           </div>

//           <h2 className="
//             text-2xl
//             font-bold
//             text-yellow-400
//             mt-6
//           ">

//             Plant Disease Detection

//           </h2>

//           <p className="
//             text-gray-300
//             mt-4
//             leading-relaxed
//           ">

//             Upload plant leaf images and detect diseases
//             using Deep Learning powered image classification.

//           </p>

//         </div>


//         {/* CARD 3 */}

//         <div className="
//           bg-gray-800
//           p-8
//           rounded-3xl
//           border
//           border-gray-700
//           hover:border-blue-400
//           transition-all
//         ">

//           <div className="text-5xl">

//             📰

//           </div>

//           <h2 className="
//             text-2xl
//             font-bold
//             text-blue-400
//             mt-6
//           ">

//             Agriculture News & Schemes

//           </h2>

//           <p className="
//             text-gray-300
//             mt-4
//             leading-relaxed
//           ">

//             Stay updated with the latest agriculture news,
//             farming updates, and government schemes related
//             to your crops.

//           </p>

//         </div>

//       </div>


//       {/* FOOTER SECTION */}

//       <div className="
//         text-center
//         mt-24
//         text-gray-500
//       ">

//         Built with ❤️ using React, Flask,
//         Machine Learning & Deep Learning

//       </div>

//     </div>

//   );

// };

// export default Home;
import { Link } from "react-router-dom";

import { useContext } from "react";

import {
  LanguageContext
} from "../context/LanguageContext";


const Home = () => {

  const { text } = useContext(
    LanguageContext
  );


  return (

    <div className="
      min-h-screen
      bg-gray-900
      text-white
      px-6
      py-16
    ">

      {/* HERO SECTION */}

      <div className="
        max-w-6xl
        mx-auto
        flex
        flex-col
        items-center
        text-center
      ">

        <h1 className="
          text-6xl
          font-extrabold
          text-green-400
          leading-tight
        ">

          {text.heroTitle}

        </h1>


        <p className="
          text-gray-300
          text-xl
          mt-8
          max-w-3xl
          leading-relaxed
        ">

          {text.heroDesc}

        </p>


        {/* BUTTONS */}

        <div className="
          flex
          gap-5
          mt-10
          flex-wrap
          justify-center
        ">

          <Link
            to="/crop-recommendation"
            className="
              bg-green-500
              hover:bg-green-600
              transition-all
              px-8
              py-4
              rounded-2xl
              font-bold
              text-lg
            "
          >

            🌱 {text.cropBtn}

          </Link>


          <Link
            to="/disease-detection"
            className="
              bg-yellow-500
              hover:bg-yellow-600
              transition-all
              text-black
              px-8
              py-4
              rounded-2xl
              font-bold
              text-lg
            "
          >

            🦠 {text.diseaseBtn}

          </Link>

        </div>

      </div>


      {/* FEATURES SECTION */}

      <div className="
        max-w-6xl
        mx-auto
        mt-24
        grid
        md:grid-cols-3
        gap-8
      ">

        {/* CARD 1 */}

        <div className="
          bg-gray-800
          p-8
          rounded-3xl
          border
          border-gray-700
          hover:border-green-500
          transition-all
        ">

          <div className="text-5xl">

            🌾

          </div>

          <h2 className="
            text-2xl
            font-bold
            text-green-400
            mt-6
          ">

            {text.crop}

          </h2>

          <p className="
            text-gray-300
            mt-4
            leading-relaxed
          ">

            Predict the most suitable crop
            based on soil nutrients,
            rainfall, humidity,
            temperature and pH values.

          </p>

        </div>


        {/* CARD 2 */}

        <div className="
          bg-gray-800
          p-8
          rounded-3xl
          border
          border-gray-700
          hover:border-yellow-400
          transition-all
        ">

          <div className="text-5xl">

            🦠

          </div>

          <h2 className="
            text-2xl
            font-bold
            text-yellow-400
            mt-6
          ">

            {text.disease}

          </h2>

          <p className="
            text-gray-300
            mt-4
            leading-relaxed
          ">

            Upload plant leaf images
            and detect diseases using
            Deep Learning powered
            image classification.

          </p>

        </div>


        {/* CARD 3 */}

        <div className="
          bg-gray-800
          p-8
          rounded-3xl
          border
          border-gray-700
          hover:border-blue-400
          transition-all
        ">

          <div className="text-5xl">

            📰

          </div>

          <h2 className="
            text-2xl
            font-bold
            text-blue-400
            mt-6
          ">

            Agriculture News & Schemes

          </h2>

          <p className="
            text-gray-300
            mt-4
            leading-relaxed
          ">

            Stay updated with the latest
            agriculture news, farming updates
            and government schemes related
            to your crops.

          </p>

        </div>

      </div>


      {/* FOOTER */}

      <div className="
        text-center
        mt-24
        text-gray-500
      ">

        Built with ❤️ using React,
        Flask, Machine Learning &
        Deep Learning

      </div>

    </div>

  );

};

export default Home;