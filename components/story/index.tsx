"use client";

import PageHeader from "../ui/PageHeader";

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
      date: "2012-2023",
      title: "English After-School Classes",
      content:
        "Started English after-school lessons at 5 years old and continued until 16 years old, developing strong language skills from an early age.",
      icon: "📚",
    },
    {
      date: "2013-2015",
      title: "Triathlon Journey Begins",
      content:
        "Started doing triathlon at around 6-8 years old. I wasn't particularly good at it, but I had a lot of fun and it marked the beginning of my athletic journey.",
      icon: "🏊‍♂️",
    },
    {
      date: "2018",
      title: "Triathlon Pause",
      content:
        "Had to stop triathlon due to an injury, marking a temporary end to my competitive athletic pursuits.",
      icon: "🩹",
    },
    {
      date: "2018-2021",
      title: "Music Band Experience",
      content:
        "Joined a music band and stayed for a few years, playing drums for Easter performances and also learning xylophone and timbales (Cuban percussion instruments).",
      icon: "🥁",
    },
    {
      date: "2017",
      title: "First Windsurf Experience",
      content:
        "Tried windsurfing for the first time, discovering a new passion for water sports and adventure.",
      icon: "🏄‍♂️",
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
      date: "2021",
      title: "First Design Studio",
      content:
        "Founded kldesigns, a design studio, and earned my first internet money through selling designs and animations made with cracked Photoshop and After Effects.",
      icon: "🎨",
    },
    {
      date: "September 2021",
      title: "First SaaS Launch",
      content:
        "Launched my first real SaaS project in collaboration with a streamers community where they could grow together easily. Got 20M visits in 3 hours due to an attack but achieved 0 downtime. The site was poorly developed but I'm proud of how I handled the situation.",
      icon: "🚀",
    },
    {
      date: "End of 2021",
      title: "Loick.team",
      content:
        "Created Loick.team with the idea of developing tech products together as a team led by me. Got 10 developers to join and work on a variety of products, though none of them launched.",
      icon: "👥",
    },
    {
      date: "2022",
      title: "Cybersecurity Experience",
      content:
        "Collaborated with a high-traffic website (100k visitors per month) that suffered consistent attacks. Successfully defended against these attacks, improving my skills in developing secure websites.",
      icon: "🛡️",
    },
    {
      date: "2020-2023",
      title: "Various Projects",
      content:
        "Started various projects including <a href='https://wolfgg.live' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>wolfgg</a>. Learned Next.js and expanded programming skills.",
      icon: "💻",
    },
    {
      date: "2023",
      title: "Cycling Return",
      content:
        "Started cycling again every week, reconnecting with my passion for endurance sports and outdoor activities.",
      icon: "🚴‍♂️",
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
      date: "Summer 2024",
      title: "Windsurf in Brazil",
      content:
        "Went back to windsurfing after some years, enjoying the water sport again during my time in Brazil.",
      icon: "🏄‍♂️",
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
      title: "European Adventure with Friends",
      content:
        "Embarked on an exciting trip through Europe with hometown friends, visiting Prague, Vienna, Budapest, and Rome. It was a really fun adventure exploring different cultures and creating lasting memories.",
      icon: "🌍",
    },
    {
      date: "July 2025",
      title: "Joined Delphi.ai as a Software Engineer",
      content:
        "Left Wildfire (my first job) after almost 2 years and started working at Delphi.ai, contributing to AI development and innovation.",
      icon: "🤖",
    },
  ];
  console.log(timelineItems);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <PageHeader title="My Story" />

      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-pulse">🚧</div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Coming Soon
          </h2>
          <p className="text-gray-600">My story is being written...</p>
        </div>
      </div>
    </div>
  );
}
