// // import { Link } from "react-router-dom";

// // const Navbar = () => {

// //   return (

// //     <nav className="w-full bg-gray-800 p-5 flex justify-between items-center">

// //       <h1 className="text-3xl font-bold text-green-400">
// //         AgroAI 🌱
// //       </h1>

// //       <div className="flex gap-6 text-lg">

// //         <Link
// //           to="/"
// //           className="hover:text-green-400"
// //         >
// //           Home
// //         </Link>

// //         <Link
// //           to="/crop"
// //           className="hover:text-green-400"
// //         >
// //           Crop Recommendation
// //         </Link>

// //         <Link
// //           to="/disease"
// //           className="hover:text-green-400"
// //         >
// //           Disease Detection
// //         </Link>

// //       </div>

// //     </nav>

// //   );

// // };

// // export default Navbar;
// import { Link } from "react-router-dom";

// import { useContext } from "react";

// import {
//   LanguageContext
// } from "../context/LanguageContext";


// const Navbar = () => {

//   const {
//     toggleLanguage,
//     text
//   } = useContext(LanguageContext);


//   return (

//     <nav className="
//       bg-gray-800
//       text-white
//       px-8
//       py-5
//       flex
//       justify-between
//       items-center
//     ">

//       <h1 className="
//         text-3xl
//         font-bold
//         text-green-400
//       ">

//         AgroAI 🌱

//       </h1>


//       <div className="
//         flex
//         gap-8
//         items-center
//       ">

//         <Link to="/">

//           {text.home}

//         </Link>

//         <Link to="/crop-recommendation">

//           {text.crop}

//         </Link>

//         <Link to="/disease-detection">

//           {text.disease}

//         </Link>


//         <button
//           onClick={toggleLanguage}
//           className="
//             bg-yellow-400
//             text-black
//             px-4
//             py-2
//             rounded-lg
//             font-bold
//           "
//         >

//           हिंदी / EN

//         </button>

//       </div>

//     </nav>

//   );

// };

// export default Navbar;
import { Link } from "react-router-dom";

import { useContext } from "react";

import {
  LanguageContext
} from "../context/LanguageContext";

const Navbar = () => {

  const {
    toggleLanguage,
    text
  } = useContext(LanguageContext);

  return (

    <nav className="
      bg-gray-800
      text-white
      px-8
      py-5
      flex
      justify-between
      items-center
    ">

      <h1 className="
        text-3xl
        font-bold
        text-green-400
      ">
        AgroAI 🌱
      </h1>

      <div className="
        flex
        gap-8
        items-center
      ">

        <Link to="/">
          {text.home}
        </Link>

        <Link to="/crop-recommendation">
          {text.crop}
        </Link>

        <Link to="/disease-detection">
          {text.disease}
        </Link>

        <button
          onClick={toggleLanguage}
          className="
            bg-yellow-400
            text-black
            px-4
            py-2
            rounded-lg
            font-bold
          "
        >
          हिंदी / EN
        </button>

      </div>

    </nav>

  );

};

export default Navbar;