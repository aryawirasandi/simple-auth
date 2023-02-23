import { Outlet } from "react-router-dom"
export default function Homepage() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
