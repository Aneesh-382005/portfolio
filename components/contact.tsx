"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [isPending, setIsPending] = useState(false);
  const [formKey, setFormKey] = useState(0);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setIsPending(true);

    const { data, error } = await sendEmail(formData);
    setIsPending(false);

    if (error) {
      if (error.includes("A component suspended while responding to synchronous input")) {
        toast.error("Please try again.");
      } else {
        toast.error(error);
      }
      return;
    }

    toast.success("Email sent successfully!");
    setFormKey((prevKey) => prevKey + 1); // Reset the form
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p>
        Please contact me{" "}
        <a className="underline" href="mailto:aneesh.grover03@gmail.com">
          directly
        </a>
        , through this form, or{" "}
        <a className="underline" href="https://cal.com/aneesh-grover" target="_blank" rel="noopener noreferrer">
          schedule a meeting
        </a>
        .
      </p>

      <form
        key={formKey}
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={handleSubmit}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn pending={isPending} />
      </form>
    </motion.section>
  );
}