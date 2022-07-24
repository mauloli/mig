import React from "react";
import styles from "./Api.module.css";
import axios from "../../utils/axios";
function RestApi() {
  const form = {
    email: "akun6@mig.id",
    password: "FDE13EA7",
  };
  const login = async () => {
    const result = await axios.post(`auth/login`, form);
    console.log(result);
  };
  const getData = async () => {
    const result = await axios.get(`customers`);
  };
  return (
    <div className={styles.body + " container mt-3"}>
      <div className=" d-flex justify-content-between">
        <span className=" fs-3">Data movie</span>
        <div>
          <select
            style={{
              width: "150px",
              height: "40px",
              borderRadius: "10px",
              paddingLeft: "10px",
            }}
            className=" me-4"
            name=""
            id=""
          >
            <option value="">sort</option>
            <option value="">name</option>
          </select>
          <input
            style={{
              width: "150px",
              height: "40px",
              borderRadius: "10px",
              paddingLeft: "10px",
              border: "0.5px solid",
            }}
            placeholder="search movie"
            type="text"
          />
        </div>
        {/* <button onClick={() => login()}>Login</button>
        <button onClick={() => getData()}>Get data</button> */}
      </div>
    </div>
  );
}

export default RestApi;
