import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import RouteTest from '../components/RouteTest';
import "../index.css";


const TestPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Header/>
      <HomePage/>
      <RouteTest />
    </div>
  );
};

export default TestPage;