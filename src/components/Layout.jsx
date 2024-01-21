import * as React from "react"
import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <div className="app">
      <Navbar />
      <main className="main-wrapper relative isolate parallax-grid">
        <div className="absolute inset-0 bg-primary_transparent -z-[1]" />
        {children}
      </main>
    </div>
  )
}
