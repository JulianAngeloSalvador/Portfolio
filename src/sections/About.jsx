import React, { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Stack from "../sections/Stack"

export default function About() {
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
  return (
    <section
      className={`flex justify-center min-h-dvh items-center ${
        screen > 1390 ? "bg-primary" : "parallax-grid"
      } relative isolate sm_max:mt-16`}
      id="about"
    >
      <div className="absolute inset-0 bg-primary_transparent -z-[1]" />
      <main className="about-wrapper bg-tertiary w-fluid_2xl xl:w-[1400px]">
        <section className={`about bg-primary`}>
          <article className="normal-fs bg-primary text-fade flex flex-col gap-y-4 h-full relative justify-center -translate-y-12 md:translate-y-0 z-30 py-4 px-6 sm:px-14">
            <h1 className="article-headline text-secondary py-2">About Me</h1>
            <p className="">
              Hey there! <span className="inline-block">👋</span> I'm Julian, a
              Web Developer based in the Philippines, dedicated to crafting
              aesthetically pleasing, functional, and user-centric digital
              experiences.
            </p>
            <p>
              My journey in web development began with the foundational trio of
              HTML, CSS, and JavaScript. Subsequently, I further honed my skills
              through an intensive 3-month Full-Stack Development program at{" "}
              <a
                href="https://zuitt.co/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Zuitt Coding Bootcamp"
                title="Visit Zuitt Coding Bootcamp"
                className="highlighted"
              >
                Zuitt Coding Bootcamp
              </a>
              , where I received multiple awards.
            </p>

            <p className="">
              In every project I take on, I'm all about achieving design
              excellence. As a Web Developer, my journey is fueled by my passion
              for constant learning and keeping up with the latest trends and
              tech. This way, I can create visually captivating, user-friendly
              solutions that adapt to ever-changing user demands.
            </p>
          </article>
        </section>
        <section className={` bg-primary shadowed md:filter-none w-full`}>
          <div className="w-full h-full flex justify-center items-center py-4">
            <div className="rounded-full flex justify-center items-center w-fluid_60 aspect-square md:neumorph-outer relative -translate-y-16 md:translate-y-0 bg-primary ">
              <div className="w-[92.5%] aspect-square rounded-full  overflow-hidden md:neumorph-inner bg-tertiary ">
                <StaticImage
                  src="../images/temp_photo.png"
                  alt="Julian Salvador"
                  layout="constrained"
                  formats={["auto", "avif", "webp"]}
                  loading="eager"
                  placeholder="dominantColor"
                  style={{ bottom: "-.325rem", left: ".425rem" }}
                  class="image-shadow"
                />
              </div>
            </div>
          </div>
        </section>
        <Stack />
      </main>
    </section>
  )
}
