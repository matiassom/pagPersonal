import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root.jsx'
import ProjectPage from './routes/projectPage.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import './index.css'
import ErrorPage from "./error-page";


const router = createBrowserRouter ([
  
    {
    path:"/",
    element: <Root/>,
    errorElement: <ErrorPage />,
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
