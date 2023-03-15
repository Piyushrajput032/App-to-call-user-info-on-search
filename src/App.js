import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const btn = {
    border: "5px solid black"
  };

  useEffect(() => {
    const url =
      "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001";
    fetch(url)
      .then((resp) => resp.json())
      .then((res) => setData(res));
  }, []);
  console.log(data);
  const getInfos = () => {
    const employee = data.find((item) => item.firstName === name);
    if (employee) {
      setLastName(employee.lastName);
      setAge(employee.age);
    } else {
      setLastName("");
      setAge(0);
    }
    console.log(employee);
  };

  return (
    <div className="App">
      <h1>Hello! Enter the Name to get the info</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />

      <button style={btn} type="submit" onClick={getInfos}>
        Submit
      </button>
      <table>
        <ul>
          {data.map((item, i) => (
            <li key={i}>{item.firstName}</li>
          ))}
        </ul>
      </table>
      <p
        style={{
          display: "grid",
          justifyContent: "flex-start",
          backgroundColor: "blue",
          alignItems: "left"
        }}>
      
        <h2>Last Name: {lastName}</h2>
        <h2>age: {age}</h2>
      </p>
    </div>
  );
}

export default App