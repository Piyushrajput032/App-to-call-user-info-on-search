import { useEffect, useState } from "react";
import "./App.css";

function DynamicSearch() {
  const [data, setData] = useState([]);
  const [searchData,setSearchData]=useState([])
 

  useEffect(() => {
    const url =
      "https://dummyjson.com/users";
    fetch(url)
      .then((resp) => resp.json())
      .then((res) => setData(res.users));


      console.log(data)
      setSearchData(data)
      console.log(searchData)
  }, []);

  function searchName(item){
    console.log(item)
    if(item>''){
        setSearchData(data.filter((i)=>(i.firstName.toLowerCase()).includes(item.toLowerCase())))
    }
    else{
        setSearchData(data)
    }
  }
 

  return (
    <div className="App">
      <h1>Hello! Enter the Name to get the info</h1>
      <input type="text" onChange={(e)=>searchName(e.target.value)} />
        <ul style={{textAlign:'center',listStyleType:'none'}}>
          {searchData.map((item, i) => (
            <li key={i}>{item.firstName}</li>
          ))}
        </ul>

    </div>
  );
}

export default DynamicSearch