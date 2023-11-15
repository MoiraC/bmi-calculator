/*
project name: BMI Calculator
project author: Ayşenur Can
project date: 16.11.2023
project version: v1.0.0 
*/
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./components/Login";
import './index.css';
import Register from "./components/Register";
import store from './app/store'
import { Provider } from 'react-redux'
import CalculationPage from "./pages/CalculationPage";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="calculator" element={<CalculationPage />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);