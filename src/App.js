import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

///////////////components ////////////////
import Read from "./Component/Read";
import Add from "./Component/Add";
function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header />
      <Routes>
        <Route exact path="/" element={<Read />} />
        <Route path="/Add" element={<Add />} />
      </Routes>
    </>
  );
}

export default App;
