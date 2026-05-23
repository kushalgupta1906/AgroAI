// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";
// import SchemesPage from "./pages/SchemesPage";

// import Navbar from "./components/Navbar";

// import Home from "./pages/Home";

// import CropRecommendation from "./pages/CropRecommendation";

// import DiseaseDetectionPage from "./pages/DiseaseDetectionPage";


// function App() {

//   return (

//     <BrowserRouter>

//       <div className="min-h-screen bg-gray-900 text-white">

//         <Navbar />

//         <Routes>

//           <Route
//             path="/"
//             element={<Home />}
//           />

//           <Route
//             path="/crop"
//             element={<CropRecommendation />}
//           />

//           <Route
//             path="/disease"
//             element={<DiseaseDetectionPage />}
//           />

//           <Route
//             path="/schemes/:crop"
//             element={<SchemesPage />}
//           />

//         </Routes>

//       </div>

//     </BrowserRouter>

//   );

// }

// export default App;
import {
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";

import CropForm from "./components/CropForm";

import DiseaseDetection from "./components/DiseaseDetection";

import SchemesPage from "./pages/SchemesPage";


function App() {

  return (

    <div>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/crop-recommendation"
          element={<CropForm />}
        />

        <Route
          path="/disease-detection"
          element={<DiseaseDetection />}
        />

        <Route
          path="/schemes/:crop"
          element={<SchemesPage />}
        />

      </Routes>

    </div>

  );

}

export default App;