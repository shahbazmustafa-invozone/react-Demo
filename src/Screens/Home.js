import React,{useState} from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
    const [name,setName]=useState("Shahbaz")
  let history = useHistory();
  function handleClick() {
    history.push("/profile",{data:"Shahbaz"});
  }
  return (
    <div>
      <button type="button" onClick={handleClick}>
        Go home
      </button>
      <h2>{"Home",name}</h2>
    </div>
  );
};
export default Home;