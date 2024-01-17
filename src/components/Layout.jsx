import * as React from "react"
import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <div className="app">
      <Navbar />
      <main className="main-wrapper">{children}</main>
    </div>
  )
}
