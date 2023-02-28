import { Outlet } from "react-router-dom"
export default function Main() {
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
