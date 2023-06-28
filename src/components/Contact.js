/* eslint-disable no-useless-escape */
import React, { useRef } from "react"
// motion
import { motion } from "framer-motion"
// variants
import { fadeIn } from "../variants"
import emailjs from "@emailjs/browser"
import { Toaster, toast } from "react-hot-toast"
import ReCAPTCHA from "react-google-recaptcha"

const Contact = () => {
  const form = useRef()
  const captchaRef = useRef(null)
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_svbf61q",
        "template_otgwguj",
        form.current,
        "Ycnjb5BXquDvHvi6l"
      )
      .then(
        (result) => {
          toast.success("Отправлено успешно!", {
            duration: 2000,
          })
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <>
      <section className="py-16 lg:section" id="contact">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row">
            {/* text */}
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 flex justify-start items-center"
            >
              <div>
                <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                  Get in touch
                </h4>
                <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                  Let's work <br /> together!
                </h2>
              </div>
            </motion.div>
            {/* form */}
            <motion.form
              ref={form}
              onSubmit={sendEmail}
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
            >
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                type="email"
                placeholder="Your email"
                name="email"
              />
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                type="text"
                placeholder="Your name"
                name="name"
              />
              <textarea
                className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
                placeholder="Your message"
                name="message"
              ></textarea>
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_SITE_KEY}
                ref={captchaRef}
                theme="dark"
              />
              <button className="btn btn-lg" type="submit" value="Send">
                Send message
              </button>
            </motion.form>
          </div>
        </div>
      </section>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  )
}

export default Contact
