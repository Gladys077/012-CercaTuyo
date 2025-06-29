import {Routes, Route } from "react-router-dom"
import Login from "../pages/Login/Login.jsx"
import Home from "../pages/Home/Home.jsx"
import Registro from "../pages/Registro/Registro.jsx"

export const AppRouter = () => {
  return (
        <>
  
        <Routes>
            {/* Layout sin header ni footer */}
            <Route element={<AuthLayout />}>
              <Route path="/" element={<Login />} />
            </Route>

            {/* Layout solo con header */}
            <Route element={<SimpleLayout />}>
              <Route path="/registro" element={<Registro />} />
            </Route>

            {/* Layout con header y footer */}
            <Route element={<MainLayout />}>
              <Route path="/home" element={<Home />} />
            </Route>
        </Routes>
    </>
  )
}

export default AppRouter


