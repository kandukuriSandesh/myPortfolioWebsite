import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, Outlet, Route, RouterProvider, Routes} from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import './index.css'
import Portfolio from './components/Portfolio/Portfolio';
import { AboutMe } from './components/AboutMe/AboutMe';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/aboutme", element: <AboutMe /> },

    ],
  }
]);

function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex justify-center items-center bg">
        <Outlet />
      </div>
      
    </div>
  );
}

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
