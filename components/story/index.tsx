"use client";

import BackButton from "../ui/BackButton";
import { motion, AnimatePresence } from "framer-motion";

export default function Story() {
  const timelineItems = [
    {
      date: "March 14, 2007",
      title: "The Beginning",
      content:
        "Born in Spain to a Brazilian mother and Spanish father, growing up bilingual in Spanish and Portuguese.",
      icon: "👶",
    },
    {
      date: "2013-2015",
      title: "Robotics Club",
      content:
        "Found my first tech community by joining a robotics club, marking the beginning of my journey in technology and forming friendships with other tech enthusiasts.",
      icon: "🤖",
    },
    {
      date: "2020",
      title: "High School",
      content:
        "Started high school when COVID-19 hit. Discovered programming through Minecraft and began coding with Java and Discord bots.",
      icon: "🎓",
    },
    {
      date: "2020-2023",
      title: "Various Projects",
      content:
        "Started various projects including <a href='https://wolfgg.live' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>wolfgg</a>. Learned Next.js and expanded programming skills.",
      icon: "💻",
    },
    {
      date: "December 2022 - 2023",
      title: "ChatGPT Discord Bot",
      content:
        "Created a ChatGPT Discord bot that grew to 100k servers. Later merged with <a href='https://github.com/f1nniboy/ampere' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>Ampere</a>, reaching nearly 200k servers and 400k users.",
      icon: "🤖",
    },
    {
      date: "February 2024",
      title: "Developer at Wildfire",
      content:
        "Started working as a developer at <a href='https://getwildfire.gg' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>Wildfire</a>.",
      icon: "🔥",
    },
    {
      date: "March 2024",
      title: "Aditus Programme",
      content: "Joined Aditus programme for USA universities.",
      icon: "🎓",
    },
    {
      date: "May 2024",
      title: "Sold the Discord Bot",
      content: "Sold the Discord bot to shapes, who continued its growth.",
      icon: "🤖",
    },
    {
      date: "June 2024",
      title: "First Semi-Independent Trip",
      content:
        "First semi-independent trip to Madrid with Aditus programme students.",
      icon: "🌍",
    },
    {
      date: "2024",
      title: "SAT Score",
      content: "Achieved SAT score of 1450 after three attempts.",
      icon: "📚",
    },
    {
      date: "January 2025",
      title: "University Applications",
      content: "Submitted applications to top US universities.",
      icon: "🎓",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <BackButton className="w-fit" />

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent"
        >
          My Story
        </motion.h1>

        <div className="relative max-w-5xl mx-auto px-2 sm:px-4 lg:px-6">
          <motion.div
            className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-none"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1 }}
          >
            <div className="h-full w-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full blur-[1px]" />
          </motion.div>

          <AnimatePresence>
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center select-none cursor-default
                  ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} 
                  mb-10 md:mb-16 pl-16 md:pl-0`}
              >
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-white p-4 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-3 select-none cursor-default">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="px-3 py-0.5 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full">
                        {item.date}
                      </span>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                      {item.title}
                    </h3>

                    <div
                      className="text-gray-600 leading-relaxed prose prose-sm 
                        prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                        prose-strong:text-gray-900 prose-strong:font-semibold
                        max-w-none text-sm"
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                  </motion.div>
                </div>

                <motion.div
                  className="absolute left-5 md:left-1/2 top-4 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div
                    className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full 
                    flex items-center justify-center shadow-lg border-2 border-white
                    transition-transform duration-300 ease-in-out hover:rotate-45"
                  ></div>
                </motion.div>

                <div className="hidden md:block md:w-5/12" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 max-w-2xl mx-auto text-center px-4"
        >
          <div className="relative p-4 md:p-6 bg-white rounded-xl shadow-sm">
            <svg
              className="absolute -top-3 -left-3 md:-top-6 md:-left-6 h-10 w-10 md:h-12 md:w-12 text-gray-200 transform -rotate-12"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="text-lg md:text-xl italic font-medium text-gray-700 leading-relaxed">
              Throughout these years, I've traveled, had fun, learned, made
              friends, and coded. I'm grateful for all these experiences and
              looking forward to what the future holds.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
