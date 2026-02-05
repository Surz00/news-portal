// // import { BrowserRouter, Routes, Route } from 'react-router-dom'
// // import Navbar from './components/Navbar'
// // import Footer from './components/Footer'
// // import Home from './pages/Home'
// // import Category from './pages/Category'
// // import Article from './pages/Article'
// // import BreakingNews from './components/BreakingNews'

// // function App() {
// //   return (
    
// //     <BrowserRouter>
// //       <BreakingNews />
// //   <Navbar />

// //   <Routes>
// //     <Route path="/" element={<Home />} />
// //     <Route path="/category/:slug" element={<Category />} />
// //     <Route path="/news/:slug" element={<Article />} />
// //   </Routes>

// //   <Footer />


// //       <Navbar />

// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/category/:slug" element={<Category />} />
// //         <Route path="/news/:slug" element={<Article />} />
// //       </Routes>

// //       <Footer />
// //     </BrowserRouter>
// //   )
// // }

// // export default App

// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import BreakingNews from './components/BreakingNews'
// import Home from './pages/Home'
// import Category from './pages/Category'
// import Article from './pages/Article'
// import ErrorBoundary from './components/ErrorBoundary'
// import ScrollToTopButton from "./components/ScrollToTopButton";


// function App() {
//   return (
 
//     <BrowserRouter>
//        <ErrorBoundary>
//        {/* <div className="app-wrapper"></div> */}

//       <div className="app-wrapper">
//         <BreakingNews />
//         <Navbar />

//         {/* MAIN CONTENT */}
//         <main className="main-content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/category/:slug" element={<Category />} />
//             <Route path="/news/:slug" element={<Article />} />
//           </Routes>
//         </main>
//         < ScrollToTopButton />

//         <Footer />
//       </div>
//     </ErrorBoundary>
//     </BrowserRouter>
    
//   )<div
//   className="mobile-sticky-ad"
//   onClick={() => window.open(AD_LINK, "_blank")}
// >
//   🔥 Tap for Today’s Trending News
// </div>
  
// }

// export default App

 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Article from "./pages/Article";
import ErrorBoundary from "./components/ErrorBoundary";

const AD_LINK = "https://otieu.com/4/10572072";

function App() {
  return (
    <>
      <BrowserRouter>
        <ErrorBoundary>
          <div className="app-wrapper">
            <Navbar />

            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:slug" element={<Category />} />
                <Route path="/news/:slug" element={<Article />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </ErrorBoundary>
      </BrowserRouter>

      {/* ✅ MOBILE STICKY AD (NOW VALID JSX) */}
      <div
        className="mobile-sticky-ad"
        onClick={() => window.open(AD_LINK, "_blank")}
      >
        🔥 Tap for Today’s Trending News
      </div>
    </>
  );
}

export default App;
