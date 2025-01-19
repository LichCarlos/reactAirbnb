import React, { memo, useEffect} from "react";
import { useRoutes } from 'react-router-dom';
import routes from "./router";
import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";
import { useLocale } from "antd/es/locale";


const App = memo (() =>{
  const location = useLocale()

  useEffect(() =>{
    window.scrollTo(0,0)
  },[location.pathname])


  return (
    <div className="app">
      <div className="header">
        <AppHeader />
      </div>
      <div className="page">
        {useRoutes(routes)}
      </div>
      <div className="foot">
        <AppFooter/>
      </div>
    </div>
  )
})

export default App