"use client";

import BackButton from "../ui/BackButton";
import { motion, AnimatePresence } from "framer-motion";
import DiagonalBackground from "../BackgroundContainer";

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
      date: "December 2024",
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

    {
      date: "May 2025",
      title: "University Acceptance",
      content:
        "Received acceptances to the University of Groningen, Maastricht University, and Radboud University.",
      icon: "🎓",
    },
    {
      date: "May 2025",
      title: "High School Graduation",
      content:
        "Graduated from high school, marking the end of an important chapter in my life. Even though I was top of my class with a 9.4/10 average in all of upper secondary education (Bachillerato) and a 12.39/14 in the Spanish university entrance exam (Selectividad), I did not receive the prize that was rightfully mine.",
      icon: "🎓",
    },
    {
      date: "May 2025",
      title: "Erasmus in Turkey",
      content:
        "Participated in an Erasmus program in Turkey, experiencing a new culture and making international connections while my classmates were at the graduation ceremony.",
      icon: "🌍",
    },
    {
      date: "June 2025",
      title: "YC AI Startup School",
      content:
        "Attended YC AI Startup School in San Francisco, learning from industry leaders and connecting with fellow AI entrepreneurs.",
      icon: "🚀",
    },
    {
      date: "July 2025",
      title: "Joined Delphi.ai as a Software Engineer",
      content:
        "Started working at Delphi.ai, contributing to AI development and innovation.",
      icon: "🤖",
    },
  ];

  return (
    <DiagonalBackground>
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <BackButton className="w-fit" />

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-center mb-14 text-gray-900"
        >
          My Story
        </motion.h1>

        <div className="relative max-w-5xl mx-auto px-2 sm:px-4 lg:px-6">
          <motion.div
            className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 h-full w-1"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1 }}
          >
            <div className="h-full w-full bg-gray-300/50 rounded-full" />
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
                    index % 2 === 0 ? "md:pr-10" : "md:pl-10"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-white/80 backdrop-blur-sm p-5 rounded-xl border border-gray-200/50 shadow-sm transition duration-300 hover:shadow-md"
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-3 select-none cursor-default">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="px-3 py-0.5 text-sm font-semibold text-gray-700 bg-gray-100/80 rounded-full">
                        {item.date}
                      </span>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">
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
                  className="absolute left-[1.25rem] md:left-1/2 top-5 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 z-10"
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div
                    className="w-7 h-7 bg-white/80 backdrop-blur-sm rounded-full 
                    flex items-center justify-center shadow-sm border-2 border-gray-200/50
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
          className="mt-16 md:mt-20 max-w-2xl mx-auto text-center px-4"
        >
          <div className="relative p-6 md:p-8 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-sm">
            <svg
              className="absolute -top-3 -left-3 md:-top-6 md:-left-6 h-10 w-10 md:h-12 md:w-12 text-gray-300 transform -rotate-12"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="text-lg md:text-xl italic font-medium text-gray-700 leading-relaxed">
              Throughout these years, I&apos;ve traveled, had fun, learned, made
              friends, and coded. I&apos;m grateful for all these experiences
              and looking forward to what the future holds.
            </p>
          </div>
        </motion.div>
      </div>
    </DiagonalBackground>
  );
}
