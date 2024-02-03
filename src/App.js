import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import HomePage from './screens/Home'
import Loadable from "react-loadable";
import Preloader from './loader/Preloader'

import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Merchandise from './screens/Merchandise';


const HomePage = Loadable({
  loader: () => import("./screens/Home"),
  loading: Preloader,
});



const App = () => {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/merchandise" element={<Merchandise />} exact />
       
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
};

export default App;
