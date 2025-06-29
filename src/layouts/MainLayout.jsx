import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({layoutType, headerProps, children }) => {
  // layoutType puede ser: 'no-header', 'header-only', 'header-footer'

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}


//Como usarlos:

{/* Sin header:
  <MainLayout layoutType="no-header">
  <ContenidoDeLaPag />
</MainLayout>

// Con header solamente
<MainLayout
  layoutType="header-only"
  headerProps={{ variant: 'comprador', title: 'Registro' }}
>
  <ContenidoDeLaPag />
</MainLayout>

// Con header y footer
<MainLayout
  layoutType="header-footer"
  headerProps={{ variant: 'vendedor', title: 'Mi Tienda', credits: 2500 }}
>
  <ContenidoDeLaPag />
</MainLayout> */}