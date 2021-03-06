import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Header from "./components/Header"
import Wrapper from "./components/Wrapper"
// import Footer from "./components/Footer"


function EmployeeDir() {
  return (
    <Router>
      <div>
          <Wrapper>
            <Route exact path="/" component={Home} />
          </Wrapper>
      </div>
    </Router>
  );
}

export default EmployeeDir;