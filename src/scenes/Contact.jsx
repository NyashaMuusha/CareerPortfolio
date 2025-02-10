import { useState } from "react";
import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setStatusMessage(null);

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then((response) => {
        console.log("✅ Email sent successfully!", response);
        setStatusMessage({ type: "success", text: "Email sent successfully!" });
        reset();
      })
      .catch((error) => {
        console.error("❌ Error sending email:", error);
        setStatusMessage({ type: "error", text: "Failed to send email. Try again!" });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="contact py-48">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-end w-full"
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-yellow">CONTACT ME</span> TO GET STARTED
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 flex justify-center"
        >
          <img src="assets/contact-me.jpg" className="h-[350px]" alt="contact" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 mt-10 md:mt-0"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* NAME INPUT */}
            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3"
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: "This field is required.",
                maxLength: { value: 100, message: "Max length is 100 characters." },
              })}
            />
            {errors.name && <p className="text-red mt-1">{errors.name.message}</p>}

            {/* EMAIL INPUT */}
            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: "This field is required.",
                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address." },
              })}
            />
            {errors.email && <p className="text-red mt-1">{errors.email.message}</p>}

            {/* MESSAGE INPUT */}
            <textarea
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              placeholder="MESSAGE"
              rows="4"
              {...register("message", {
                required: "This field is required.",
                maxLength: { value: 2000, message: "Max length is 2000 characters." },
              })}
            />
            {errors.message && <p className="text-red mt-1">{errors.message.message}</p>}

            {/* LOADING INDICATOR */}
            {loading && <p className="text-blue mt-3">Sending...</p>}

            {/* STATUS MESSAGE */}
            {statusMessage && (
              <p className={`mt-3 ${statusMessage.type === "success" ? "text-green" : "text-red"}`}>
                {statusMessage.text}
              </p>
            )}

            {/* SUBMIT BUTTON */}
            <button
              className={`p-5 bg-yellow font-semibold text-deep-blue mt-5 transition duration-500 ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-red hover:text-white"
                }`}
              type="submit"
              disabled={loading}
            >
              {loading ? "SENDING..." : "SEND ME A MESSAGE"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
