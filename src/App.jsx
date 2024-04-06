import "./App.css";
import Home from "./Pages/Home";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useMatch,
} from "react-router-dom";
import SignUpPage from "./Pages/SignUppage";
import Login from "./Pages/Login";
import DashboardPage from "./Pages/DashboardPage";
import Credentials from "./Pages/Credentials";
import MarkSheet from "./Pages/MarkSheeets";
import EditCertificate from "./Pages/EditCertificate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DuplicateCertificate from "./Pages/DuplicateCertificate";
import { useState } from "react";
import StudentManagement from "./Pages/StudentManagement";
import SubGroup from "./Pages/SubGroup";
import { Provider } from "react-redux";
import UploadOrCreate from "./Pages/UploadOrCreate";
import Upload from "./Pages/UploadFile";
import StudentDetails from "./Pages/StudentDetails";
import MessageScreen from "./Pages/MessageScreeen";
import store from "./Redux/Store";
import ExploreNavbar from "./Components/ExploreNavbar";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  const [count, setCount] = useState();

  const handleChange = (e) => {
    setCount(e.target.value);
  };
  return (
    <>
      <Provider store={store}>
        <Router>
          <ExploreNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/credential" element={<Credentials />} />
            <Route path="/marksheets" element={<MarkSheet />} />
            <Route
              path="/editCertificate"
              element={
                <EditCertificate
                  count={count}
                  setCount={setCount}
                  handleChange={handleChange}
                />
              }
            />
            <Route
              path="/duplicate"
              element={
                <DuplicateCertificate
                  count={count}
                  setCount={setCount}
                  handleChange={handleChange}
                />
              }
            />
            <Route path="/studentpage" element={<StudentManagement />} />
            <Route path="/subgroup" element={<SubGroup />} />
            <Route path="/uploadOrCreate" element={<UploadOrCreate />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/studentdetails" element={<StudentDetails />} />
            <Route path="/messagescreen" element={<MessageScreen />} />
            <Route path="*" component={<NotFoundPage />} />
          </Routes>
        </Router>

        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Provider>
    </>
  );
}

export default App;
