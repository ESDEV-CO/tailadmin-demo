import React from "react";
import "./Table.css";

const Table = () => {
  return (
    <table className="table">
      <tbody>
        <tr className="first_row">
          <th scope="col">Source</th>
          <th scope="col">visitors</th>
          <th scope="col">revenues</th>
          <th scope="col">sales</th>
          <th scope="col">conversion</th>
        </tr>
        <tr className="second_row">
          <td className="user_info_data">
            <img src={require("../../assets/google.png")} alt="google" />
            <p>Google</p>
          </td>
          <td>3.5K</td>
          <td>$5,768</td>
          <td>590</td>
          <td>4.8%</td>
        </tr>
        <tr className="third_row">
          <td className="user_info_data">
            <img src={require("../../assets/twitter.png")} alt="twitter" />
            <p>Twitter</p>
          </td>
          <td>2.2K</td>
          <td>$4,635</td>
          <td>467</td>
          <td>4.3%</td>
        </tr>
        <tr className="fourth_row">
          <td className="user_info_data">
            <img src={require("../../assets/github.png")} alt="github" />
            <p>Github</p>
          </td>
          <td>2.1K</td>
          <td>$4,290</td>
          <td>420</td>
          <td>3.7%</td>
        </tr>
        <tr className="fifth_row">
          <td className="user_info_data">
            <img src={require("../../assets/vimeo.png")} alt="Vimeo" />
            <p>Vimeo</p>
          </td>
          <td>1.5K</td>
          <td>$3,580</td>
          <td>389</td>
          <td>2.5%</td>
        </tr>
        <tr className="sixth_row">
          <td className="user_info_data">
            <img src={require("../../assets/fb.png")} alt="FB" />
            <p>Facebook</p>
          </td>
          <td>1.2K</td>
          <td>$2,740</td>
          <td>230</td>
          <td>1.9%</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
