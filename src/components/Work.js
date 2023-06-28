import React from "react"
// motion
import { motion } from "framer-motion"
// variants
import { fadeIn } from "../variants"
// img
import Img1 from "../assets/portfolio-img1.png"
import Img2 from "../assets/portfolio-img2.png"
import Img3 from "../assets/portfolio-img3.png"

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br /> Work.
              </h2>
              <p className="max-w-sm mb-16">
                Here are some of my latest works. A one-page landing page, a
                shop for dog products, as well as a craft brewery website with
                its own merch.
              </p>
              <form
                action="https://github.com/Muklyxa13?tab=repositories"
                target="_blank"
              >
                <button type="submit" className="btn btn-sm">
                  View all projects
                </button>
              </form>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt="img1"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-8 transition-all duration-500 z-50">
                <a
                  href="https://github.com/Muklyxa13/dog-shop"
                  target="_blank"
                  className="text-gradient h3"
                  rel="noreferrer"
                >
                  Dog Shop "Doberman"
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt="img2"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-8 transition-all duration-500 z-50">
                <a
                  href="https://github.com/Muklyxa13/green-corp-landing"
                  target="_blank"
                  className="text-gradient h3"
                  rel="noreferrer"
                >
                  Green Corp Landing
                </a>
              </div>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt="img3"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-8 transition-all duration-500 z-50">
                <a
                  href="https://github.com/Muklyxa13/breweryCommand"
                  target="_blank"
                  className="text-gradient h3"
                  rel="noreferrer"
                >
                  Brewery "Mountain"
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Work
