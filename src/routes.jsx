import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Refund from "./pages/Refund";
import About from "./pages/AboutUs.jsx";
import ContactPage from "./pages/ContactPage";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/privacy", element: <Privacy /> },
  { path: "/terms", element: <Terms /> },
  { path: "/refund", element: <Refund /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <ContactPage /> },
];

export default routes;
