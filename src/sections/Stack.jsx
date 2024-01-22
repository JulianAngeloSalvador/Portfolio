import React, { useState, useEffect } from "react"
import Cube from "../components/Cube"
import Desktop from "../components/Desktop"
import Laptop from "../components/Laptop"

export default function Stack() {
  const [screen, setScreen] = useState("")
  useEffect(() => {
    const handleResize = () => {
      setScreen(window.innerWidth)
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const stacks = [
    "HTML",
    "CSS",
    "JavaScript",
    "MongoDB",
    "Express",
    "React",
    "Node",
    "API Integration",
  ]

  const tools = [
    "Bootstrap",
    "Tailwind",
    "Framer",
    "GSAP",
    "Figma",
    "Illustrator",
    "Blender",
  ]

  const content = stacks.concat(tools).map(tech => (
    <div
      key={tech}
      className="py-3 px-4 rounded-md text-fade bg-tertiary font-semibold sm_max:flex-grow text-center less-fs"
    >
      {tech}
    </div>
  ))

  return (
    <section className="stack w-full flex flex-col  px-2 ">
      <h1 className="article-headline text-secondary text-center py-2">
        Stack and Tools
      </h1>
      <main className="w-fluid_xl flex flex-wrap gap-2 mx-auto justify-center py-4 pb-6">
        {content}
      </main>
    </section>
    // <section
    //   id="stack"
    //   className="parallax-grid min-h-dvh relative isolate overflow-hidden flex flex-col items-center"
    // >
    //   {/* Objects */}
    //   {/* <div className="absolute w-32 aspect-square top-1/2 -translate-y-1/2 right-32 cube-container hover:scale-150 transition duration-150 ease-in-out">
    //     <Cube />
    //   </div> */}

    //   {/********/}

    //   <div className="absolute inset-0 bg-primary_transparent -z-[1]" />
    //   <section className="w-full sm_less:flex-grow-0 flex-grow flex flex-col justify-center">
    //     <h1 className="article-headline text-center text-secondary py-4">
    //       Stack and Tools
    //     </h1>

    //     <main className="w-full sm_mid:w-fluid_xl ipad_lg:w-fluid flex flex-wrap justify-center gap-4 mx-auto px-6">
    //       {content}
    //     </main>
    //   </section>
    //   {screen > 220 && (
    //     <section className="relative bottom-0 left-0 w-fluid_90 flex-grow">
    //       <div className="mug-container">
    //         <div className="mug">
    //           <div
    //             className={`mug-handle ${
    //               screen > 380 ? "-left-2" : "-right-2"
    //             }`}
    //           />
    //         </div>
    //       </div>
    //       {screen > 350 && (
    //         <div className="desktop-container">
    //           <Desktop />
    //         </div>
    //       )}

    //       <div
    //         className={`laptop-container ${
    //           screen > 350 ? "right-0" : "left-1/2 -translate-x-1/2"
    //         }`}
    //       >
    //         <Laptop />
    //       </div>
    //     </section>
    //   )}
    // </section>
  )
}
