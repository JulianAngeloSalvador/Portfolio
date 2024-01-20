import React from "react"
import Cube from "../components/Cube"
import Desktop from "../components/Desktop"
import Laptop from "../components/Laptop"

export default function Stack() {
  const stacks = [
    "HTML",
    "CSS",
    "JavaScript",
    "MongoDB",
    "Express",
    "React",
    "Node",
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
      className="outline outline-secondary outline-2 rounded-full py-2 px-4 text-secondary bg-primary font-semibold sm_less:flex-grow  text-center xs_max:text-base text-lg ipad_lg:text-2xl 2xl:text-2xl 2xl:py-4 2xl:px-6"
    >
      {tech}
    </div>
  ))

  return (
    <section
      id="stack"
      className="parallax-grid min-h-dvh px-8 relative isolate overflow-hidden flex flex-col items-center"
    >
      {/* Objects */}
      {/* <div className="absolute w-32 aspect-square top-1/2 -translate-y-1/2 right-32 cube-container hover:scale-150 transition duration-150 ease-in-out">
        <Cube />
      </div> */}

      {/********/}

      <div className="absolute inset-0 bg-primary_transparent -z-[1]" />
      <section className="w-full sm_less:flex-grow-0 sm_less:py-8 flex-grow flex flex-col justify-center">
        <h1 className="section-headline text-center text-secondary xl:text-8xl">
          Stack and Tools
        </h1>

        <main className=" w-full sm_mid:w-fluid_xl ipad_lg:w-fluid flex flex-wrap justify-center gap-4 mx-auto py-6">
          {content}
        </main>
      </section>
      <section className="relative bottom-0 left-0 w-full flex-grow">
        <div className="desktop-container">
          <Desktop />
        </div>
        <div className="laptop-container">
          <Laptop />
        </div>
      </section>
    </section>
  )
}
