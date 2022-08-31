import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    /**API 호출 코드*/
    const getData = async () => {
      const todos = await axios({
        url: "http://localhost:8083/todos",
        method: "GET",
      });
      console.log("todos", todos);
      setTodos(todos.data);
    };

    getData();
  }, []);
  const nextId = useRef(4);

  return (
    <div className="max-w-4xl mx-auto">
      <Header/>
      <div className="max-w-4xl mx-auto my-4">
      <HomePage/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
