import { useHelloQuery } from "./apis/UserApi";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // useLocation,
} from "react-router-dom";
import Loader from "./components/Loader";
// import useProgressTracker from "./progress";
// import LocomotiveScroll from "locomotive-scroll";
import "./styles/app.scss";
import { lazy, Suspense } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
// import Preloader from "./components/Preloader";

const Login = lazy(() => import("./pages/Login"));
const UserProfile = lazy(() => import("./pages/UserProfile"));

const App = () => {
  // const locomotiveScroll = new LocomotiveScroll();
  // console.log(locomotiveScroll);
  // const progress = useProgressTracker();
  const { data, isLoading } = useHelloQuery({});
  if (isLoading) return <Loader />;
  console.log(data);

  return (
    <Suspense fallback={<Loader />}>
      <div className="App">
        {/* <Preloader progress={progress} /> */}
        <div className="pages">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </div>
      </div>
    </Suspense>
  );
};

const AppRouter = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppRouter;
