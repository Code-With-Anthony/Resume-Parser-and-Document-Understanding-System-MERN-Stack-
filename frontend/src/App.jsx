import { useState } from "react";
import viteLogo from "/vite.svg";
import gatewaylogo from "./assets/gatewayLogo.png";
import axios from "axios";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  console.log("file: ", file);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("resume", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/post",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={gatewaylogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Resume Parser</h1>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleFileChange} />
          <button type="submit">Upload Resume</button>
        </form>
      </div>
      <p className="read-the-docs">
        Click on the Gateway and Vite logos to learn more
      </p>
    </>
  );
}

export default App;
