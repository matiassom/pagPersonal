import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import './index.css'
import ProjectPage from './projectPage.jsx'

const router = createBrowserRouter ([
  {
    path:"/",
    element: <App/>,
  },
  {
    path: "project/:id",
    element: <ProjectPage/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/*   <App />     */}
  </React.StrictMode>,
)
