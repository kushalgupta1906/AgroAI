// // // // import { Link } from "react-router-dom";

// // // // const Navbar = () => {

// // // //   return (

// // // //     <nav className="w-full bg-gray-800 p-5 flex justify-between items-center">

// // // //       <h1 className="text-3xl font-bold text-green-400">
// // // //         AgroAI 🌱
// // // //       </h1>

// // // //       <div className="flex gap-6 text-lg">

// // // //         <Link
// // // //           to="/"
// // // //           className="hover:text-green-400"
// // // //         >
// // // //           Home
// // // //         </Link>

// // // //         <Link
// // // //           to="/crop"
// // // //           className="hover:text-green-400"
// // // //         >
// // // //           Crop Recommendation
// // // //         </Link>

// // // //         <Link
// // // //           to="/disease"
// // // //           className="hover:text-green-400"
// // // //         >
// // // //           Disease Detection
// // // //         </Link>

// // // //       </div>

// // // //     </nav>

// // // //   );

// // // // };

// // // // export default Navbar;
// // // import { Link } from "react-router-dom";

// // // import { useContext } from "react";

// // // import {
// // //   LanguageContext
// // // } from "../context/LanguageContext";


// // // const Navbar = () => {

// // //   const {
// // //     toggleLanguage,
// // //     text
// // //   } = useContext(LanguageContext);


// // //   return (

// // //     <nav className="
// // //       bg-gray-800
// // //       text-white
// // //       px-8
// // //       py-5
// // //       flex
// // //       justify-between
// // //       items-center
// // //     ">

// // //       <h1 className="
// // //         text-3xl
// // //         font-bold
// // //         text-green-400
// // //       ">

// // //         AgroAI 🌱

// // //       </h1>


// // //       <div className="
// // //         flex
// // //         gap-8
// // //         items-center
// // //       ">

// // //         <Link to="/">

// // //           {text.home}

// // //         </Link>

// // //         <Link to="/crop-recommendation">

// // //           {text.crop}

// // //         </Link>

// // //         <Link to="/disease-detection">

// // //           {text.disease}

// // //         </Link>


// // //         <button
// // //           onClick={toggleLanguage}
// // //           className="
// // //             bg-yellow-400
// // //             text-black
// // //             px-4
// // //             py-2
// // //             rounded-lg
// // //             font-bold
// // //           "
// // //         >

// // //           हिंदी / EN

// // //         </button>

// // //       </div>

// // //     </nav>

// // //   );

// // // };

// // // export default Navbar;
// // import { Link } from "react-router-dom";

// // import { useContext } from "react";

// // import {
// //   LanguageContext
// // } from "../context/LanguageContext";

// // const Navbar = () => {

// //   const {
// //     toggleLanguage,
// //     text
// //   } = useContext(LanguageContext);

// //   return (

// //     <nav className="
// //       bg-gray-800
// //       text-white
// //       px-8
// //       py-5
// //       flex
// //       justify-between
// //       items-center
// //     ">

// //       <h1 className="
// //         text-3xl
// //         font-bold
// //         text-green-400
// //       ">
// //         AgroAI 🌱
// //       </h1>

// //       <div className="
// //         flex
// //         gap-8
// //         items-center
// //       ">

// //         <Link to="/">
// //           {text.home}
// //         </Link>

// //         <Link to="/crop-recommendation">
// //           {text.crop}
// //         </Link>

// //         <Link to="/disease-detection">
// //           {text.disease}
// //         </Link>

// //         <button
// //           onClick={toggleLanguage}
// //           className="
// //             bg-yellow-400
// //             text-black
// //             px-4
// //             py-2
// //             rounded-lg
// //             font-bold
// //           "
// //         >
// //           हिंदी / EN
// //         </button>

// //       </div>

// //     </nav>

// //   );

// // };

// // export default Navbar;
// import { Link, useNavigate } from "react-router-dom";
// import { useContext, useState } from "react";
// import { LanguageContext } from "../context/LanguageContext";

// const Navbar = () => {

//   const { toggleLanguage, text } = useContext(LanguageContext);

//   const [crop, setCrop] = useState("");

//   const navigate = useNavigate();

//   const handleSearch = (e) => {

//     e.preventDefault();

//     if (!crop.trim()) return;

//     navigate(`/schemes/${crop.toLowerCase()}`);

//     setCrop("");
//   };

//   return (

//     <nav
//       className="
//       bg-gray-800
//       text-white
//       px-8
//       py-5
//       flex
//       justify-between
//       items-center
//     "
//     >

//       <h1
//         className="
//         text-3xl
//         font-bold
//         text-green-400
//       "
//       >
//         AgroAI 🌱
//       </h1>

//       {/* Search Bar */}

//       <form
//         onSubmit={handleSearch}
//         className="flex items-center gap-2"
//       >

//         <input
//           type="text"
//           placeholder="Search Crop..."
//           value={crop}
//           onChange={(e) => setCrop(e.target.value)}
//           className="
//             px-4
//             py-2
//             rounded-lg
//             text-black
//             outline-none
//             w-56
//           "
//         />

//         <button
//           type="submit"
//           className="
//             bg-green-500
//             px-4
//             py-2
//             rounded-lg
//             hover:bg-green-600
//           "
//         >
//           Search
//         </button>

//       </form>

//       <div
//         className="
//         flex
//         gap-8
//         items-center
//       "
//       >

//         <Link
//           to="/"
//           className="hover:text-green-400"
//         >
//           {text.home}
//         </Link>

//         <Link
//           to="/crop-recommendation"
//           className="hover:text-green-400"
//         >
//           {text.crop}
//         </Link>

//         <Link
//           to="/disease-detection"
//           className="hover:text-green-400"
//         >
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

import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Navbar = () => {

  const { toggleLanguage, text } = useContext(LanguageContext);

  const [crop, setCrop] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e) => {

    e.preventDefault();

    if (!crop.trim()) return;

    navigate(`/schemes/${crop.toLowerCase()}`);

    setCrop("");

  };

  return (

    <nav
      className="
        bg-gray-800
        text-white
        px-8
        py-4
        flex
        items-center
        justify-between
      "
    >

      {/* Logo */}

      <Link
        to="/"
        className="
          text-3xl
          font-bold
          text-green-400
        "
      >
        AgroAI 🌱
      </Link>

      {/* Search */}

      <form
        onSubmit={handleSearch}
        className="
          flex
          items-center
          gap-3
        "
      >

        <input
          type="text"
          placeholder="Search Crop..."
          value={crop}
          onChange={(e) => setCrop(e.target.value)}
          className="
            w-64
            px-4
            py-2
            rounded-lg
            border
            border-gray-500
            bg-white
            text-black
            outline-none
            focus:ring-2
            focus:ring-green-400
          "
        />

        <button
          type="submit"
          className="
            bg-green-500
            hover:bg-green-600
            px-5
            py-2
            rounded-lg
            font-semibold
            transition
          "
        >
          Search
        </button>

      </form>

      {/* Navigation Links */}

      <div
        className="
          flex
          items-center
          gap-6
        "
      >

        <Link
          to="/"
          className="hover:text-green-400 transition"
        >
          {text.home}
        </Link>

        <Link
          to="/crop-recommendation"
          className="hover:text-green-400 transition"
        >
          {text.crop}
        </Link>

        <Link
          to="/disease-detection"
          className="hover:text-green-400 transition"
        >
          {text.disease}
        </Link>

        <button
          onClick={toggleLanguage}
          className="
            bg-yellow-400
            hover:bg-yellow-300
            text-black
            px-4
            py-2
            rounded-lg
            font-bold
            transition
          "
        >
          हिंदी / EN
        </button>

      </div>

    </nav>

  );

};

export default Navbar;