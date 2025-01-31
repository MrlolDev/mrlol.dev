import Link from "next/link";

export default function Story() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-6xl items-center  justify-start md:justify-center px-4 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="self-start mb-4 px-3 py-1.5 sm:px-4 sm:py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
      >
        ← Back
      </Link>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal text-center">
        My Story
      </h1>
      <p className="text-base sm:text-lg font-normal max-w-prose max-h-[70vh] overflow-y-auto">
        I am going to try to be brief and concise and tell you a little about
        me. I am <strong>born and raised in Spain</strong>. My mom is from
        Brazil and my dad is from the town. Because of this, I am bilingual and
        I can speak both <strong>Spanish and Portuguese fluently</strong>. I
        also have been learning english in a private academy for{" "}
        <strong>12 years</strong> and got my
        <strong> C1 certificate</strong>. I have always been a
        <strong> passionate builder</strong>, when I was a small kid I wanted to
        build rockets. Then while I was at elementary school I got interested in{" "}
        <strong>robotics</strong> and joined a club. Then I started high school
        and the same year Covid-19 hit. At home and with a new laptop I started
        playing minecraft and joining servers until I found many online friends.
        I started <strong>coding with Java</strong> and discord bots but I
        quickly moved to coding webpages and different things. For 3 years I
        started projects like one called{" "}
        <a
          href="https://wolfgg.live"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          wolfgg
        </a>{" "}
        on a streamer community. After this one I{" "}
        <strong>learned Next.js</strong> and started coding with it. In december
        2022 I coded a small chatgpt discord bot. On April of 2023 the bot
        already was in <strong>100k servers</strong>. Managing a huge project
        was hard and I learned a lot of things from it. We merged this bot (
        <a
          href="https://dsc.gg/turing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Turing AI
        </a>
        ) with another one called{" "}
        <a
          href="https://github.com/f1nniboy/ampere"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Ampere
        </a>{" "}
        and we were able to quickly grew to almost{" "}
        <strong>200k servers and ≈ 400k users</strong>. Then since discord.js
        was not working well with the bot, we had to do a migration but the new
        developer from Ampere lied and made us lose money, users and a potential
        seed investment (sorry Finn). I had a OpenAI debt and now income since
        the bot didn&apos;t work and I abandoned the project. At this time I
        started working at{" "}
        <a
          href="https://getwildfire.gg"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Wildfire
        </a>{" "}
        (thanks Logan for the opportunity). On <strong>February 2024</strong> I
        started <strong>working as a developer at Wildfire</strong>. On March
        2024 I joined <strong>Aditus programme for USA universities</strong>. On
        May 2024 I sold my bot as it kept having users and I was not able to
        manage it. I sold the bot to shapes and they managed to keep growing it
        (thanks for keeping my baby alive). On June 2024 I did my first trip
        &quot;alone&quot; to Madrid with other students from the programme
        Aditus and had one of the best times of my life(thanks guys). I wrote my
        essays, achieved a<strong> SAT score of 1450</strong> at the third
        attempt and now
        <strong> pursuing admission to top US universities</strong>. On January
        2025 I send all my applications and now I am waiting for decisions.{" "}
        <br />
        <br />
        This is my story very briefly, during this last years I travelled, had
        fun, learned, made friends and coded. I am happy for all of this and I
        am looking forward to the future.
      </p>
    </div>
  );
}
