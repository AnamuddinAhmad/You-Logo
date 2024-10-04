import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//Importing Files for Routing.
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Github from "./components/Github/Github.jsx";
import User from "./components/User/User.jsx";

//Its not a efficent Way to do Routing.
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:<App/>,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },{
//         path:"/contact",
//         element:<Contact/>
//       },{
//         path:"/github",
//         element:<Github/>
//       }
//     ],
//   },
// ]);

//Its best way to Do the routing
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact/>}/>
      <Route path="github" element={<Github/>}/>
      <Route path="user/:userid" element={<User/>}/>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode suppressHydrationWarning={true}>
    <RouterProvider router={router} />
  </StrictMode>
);
