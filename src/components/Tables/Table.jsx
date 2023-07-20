import React from "react";
import "./Table.css";

const Table = () => {
  return (
    <table className="table">
      <tbody>
        <tr>
          <th scope="col">Sr. No.</th>
          <th scope="col">Name</th>
          <th scope="col">Course</th>
          <th scope="col">Fees</th>
          <th scope="col">Due date</th>
        </tr>
        <tr>
          <td>192</td>
          <td className="user_info_data">
            <div className="user_info">
              <img src={require("../../assets/8.jpg")} alt="8" />
              <p>John Doe</p>
            </div>
          </td>
          <td>Bsc.</td>
          <td>$3999</td>
          <td>03/16/2019</td>
        </tr>
        <tr>
          <td>204</td>
          <td className="user_info_data">
            <div className="user_info">
              <img src={require("../../assets/7.jpg")} alt="7" />
              <p>Katty Johnson</p>
            </div>
          </td>
          <td>Comm.</td>
          <td>$1599</td>
          <td>03/22/2019</td>
        </tr>
        <tr>
          <td>356</td>
          <td className="user_info_data">
            <div className="user_info">
              <img src={require("../../assets/9.jpg")} alt="9" />
              <p>Matt Parker</p>
            </div>
          </td>
          <td>Scien.</td>
          <td>$10999</td>
          <td>04/04/2019</td>
        </tr>
        <tr>
          <td>1007</td>
          <td className="user_info_data">
            <div className="user_info">
              <img src={require("../../assets/6.jpg")} alt="6" />
              <p>Nicol John</p>
            </div>
          </td>
          <td>Comm.</td>
          <td>$1599</td>
          <td>04/15/2019</td>
        </tr>
        <tr>
          <td>1008</td>
          <td className="user_info_data">
            <div className="user_info">
              <img src={require("../../assets/5.jpg")} alt="5" />
              <p>Jackline Peter</p>
            </div>
          </td>
          <td>Comm.</td>
          <td>$1599</td>
          <td>04/29/2019</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
