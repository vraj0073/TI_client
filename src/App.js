import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Recycle from "./Components/Recycle";
import RestaurantFood from "./Components/RestaurantFood";
import Ngo from "./Components/Ngo";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Donate from "./Components/Donate";
import RestaurantOTP from "./Components/RestaurantOTP";
import Testhomeback from "./Components/Testhomeback";
import NgoFeature from "./Components/NgoFeature";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/recycle" element={<Recycle />} />
        <Route exact path="/checkOtp" element={<RestaurantOTP />} />

        <Route exact path="/restaurantfood" element={<RestaurantFood />} />
        <Route exact path="/ngo" element={<NgoFeature />} />

        <Route exact path="/register" element={<Registration />} />
        <Route path="/" element={<Testhomeback />} />
        
        <Route exact path="/login" element={<Login />} />

        
        <Route exact path="/donate" element={<Donate />} />


      </Routes>
      {/* <Routes>
        <Route path="/" element={<Testhomeback />} />
      </Routes> */}
      {/* <Routes>
        <Route exact path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route exact path="/donate" element={<Donate />} />
      </Routes> */}
    </div>
  );
}

export default App;
