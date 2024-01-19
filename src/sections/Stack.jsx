import React from "react"
import Cube from "../components/Cube"

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
      className="outline outline-secondary outline-2 rounded-full py-2 px-4 text-secondary bg-primary font-semibold min-w-18 xs_max:flex-grow  text-center"
    >
      {tech}
    </div>
  ))

  return (
    <section
      id="stack"
      className="parallax-grid min-h-dvh p-8 relative isolate overflow-hidden"
    >
      <div className="absolute w-32 aspect-square top-1/2 -translate-y-1/2 right-32 cube-container hover:scale-150 transition duration-150 ease-in-out">
        <Cube />
      </div>
      <div className="absolute inset-0 bg-primary_transparent -z-[1]" />
      <h1 className="article-headline text-secondary text-center">
        Stack and Tools
      </h1>
      <main className=" w-full sm_mid:w-fluid flex flex-wrap justify-center gap-4 mx-auto py-4">
        {content}
      </main>
    </section>
  )
}
