import React from "react"
import { Navigate } from "react-router-dom"

const Home = React.lazy(() => import("@/views/home"))
const Entire = React.lazy(() => import("@/views/entire"))
const Detail = React.lazy(() => import("@/views/detail"))
const routes = [
  {
    path:"/",
    element:<Navigate to="/home"></Navigate>
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/Detail",
    element: <Detail/>
  },
  {
    path: "/Entire",
    element: <Entire/>
  },
]

export default routes