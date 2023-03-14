import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <motion.section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="m-32 pb-20 text-center md:pb-16">
            <motion.h1
              className="mb-4 text-4xl font-extrabold leading-tighter tracking-tighter md:text-6xl"
              data-aos="zoom-y-out"
            >
              <span className="bg-co ml-4 animate-text bg-gradient-to-r from-blue-500 from-teal-400 via-purple-500 via-blue-600 to-indigo-500 bg-clip-text text-transparent">
                掌八风消息
                <br />
                通五运之气候
              </span>
            </motion.h1>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default HeroHome;
