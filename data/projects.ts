const projects = [
  {
    name: "Transport Controller",
    description:
      "A large-scale application that controls thousands of machines transporting products in a semiconductor factory. It finds optimal transport routes, efficiently dispatches tasks, and manages transportation status.",
    link: "https://www.muratec.net/cfa/products/",
    linkLabel: "Detail",
    repo: "",
    image: "semiconapp.jpg",
    skills: ["C", "C++", "Vue.js"],
  },
  // {
  //   name: "Citation Generator",
  //   description: "A single-page web application that displays information related to article or paper citations. Users can resize the card, choose its design, add a QR code or customize other things before exporting the information as an image.",
  //   link: "https://cite-so.vercel.app/",
  //   linkLabel: "",
  //   repo: "",
  //   image: "cite.png",
  //   skills: ["HTML", "CSS", "TypeScript", "React", "Next.js"]
  // },
  {
    name: "Corporate Website",
    description:
      "A responsive corporate website consisting of multiple pages. Features include news feeds, subscriptions, and stock price information display.",
    link: "https://planetventuresinc.com/index.php",
    linkLabel: "Live Site",
    repo: "",
    image: "planet.png",
    skills: ["HTML", "CSS", "Sass", "JavaScript", "PHP", "Joomla!"],
  },
  {
    name: "PDF Chat",
    description:
      "A single page web application that you can chat with AI and ask questions about a PDF file you uploaded",
    link: "https://pdf-chat.seisuke.info/",
    linkLabel: "Live Site",
    repo: "https://github.com/seihello/pdf-chat",
    image: "pdf_chat.png",
    skills: ["Next.js", "TypeScript", "Tailwind", "Supabase", "LangChain"],
  },
  {
    name: "Designglish",
    description:
      "An iOS application where web designers/developers can learn English technical vocabulary by testing the words in flashcards. Check it out on the iOS App Store!",
    link: "https://apps.apple.com/jp/app/designglish/id6476836989?l=en-US",
    linkLabel: "Published App",
    repo: "https://github.com/seihello/designglish",
    image: "designglish.png",
    skills: ["React Native", "TypeScript", "Supabase"],
  },
  {
    name: "Issue Manager",
    description:
      "A multi-page application that enables you to efficiently manage the status and schedule of tasks for your projects.",
    link: "https://fridgefy.seisuke.info/",
    linkLabel: "Live Site",
    repo: "https://github.com/seihello/fridgefy",
    image: "fridgefy.png",
    skills: ["HTML", "CSS", "TypeScript", "React", "Next.js", "Firebase"],
  },
  // {
  //   name: "Compass Card",
  //   description: "A multi-page web application that allows you to manage your fare card.",
  //   link: "https://compass-card.vercel.app/",
  //   linkLabel: "",
  //   repo: "https://github.com/seihello/compass-card",
  //   image: "compass.png",
  //   skills: ["HTML", "CSS", "Tailwind", "TypeScript", "React", "Next.js"],
  // },
  // {
  //   name: "English Learning",
  //   description:
  //     "An English vocabulary learning web application that features word-meaning-example sets, category-based filtering, and user-friendly word bookmarking for focused learning.",
  //   link: "https://english.seisuke.info/",
  //   linkLabel: "",
  //   repo: "https://github.com/seihello/EverydayEnglish-on-Browser",
  //   image: "everydayenglish-browser.png",
  //   skills: ["HTML", "CSS", "Sass", "JavaScript", "JQuery"],
  // },
  // {
  //   name: "English Learning(iOS)",
  //   description: "An English vocabulary learning application for iOS",
  //   link: "",
  //   linkLabel: "",
  //   repo: "https://github.com/seihello/EverydayEnglish",
  //   image: "everydayenglish.png",
  //   skills: ["Python", "Kivy"]
  // },
  {
    name: "Weather App",
    description:
      "A single-page website that displays weather information. It provides current weather, a 5-day forecast, and 3-hourly forecasts. Users can not only check the weather at their current location but also bookmark their favorite cities.",
    link: "https://weather.seisuke.info/",
    linkLabel: "Live Site",
    repo: "https://github.com/seihello/weather-app",
    image: "weatherapp.png",
    skills: ["HTML", "CSS", "Sass", "JavaScript", "JQuery"],
  },
  // {
  //   name: "Tiny Links",
  //   description:
  //     "A malti-page web application for shortening long URLs. Users can add as many URLs as they like, and they can refer back to them even after leaving the page. The application has user registration and login features and manages cookies to maintain the login state.",
  //   link: "https://tiny-links.onrender.com/",
  //   linkLabel: "",
  //   repo: "https://github.com/seihello/tiny-links",
  //   image: "tinylinks.png",
  //   skills: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "EJS"],
  // },
  // {
  //   name: "Chat Bot",
  //   description: "A chatbot running on the social media that automatically talks to users by recognizing their voices and generating natural responses using ChatGPT.",
  //   link: "",
  //   linkLabel: "",
  //   repo: "https://github.com/seihello/robovity",
  //   image: "default.png",
  //   skills: ["Python", "ChatGPT"]
  // },
  // {
  //   name: "Comment Bot",
  //   description: "An app for automatically posting relevant comments during live streams. Users can schedule comments to be posted at specified intervals.",
  //   link: "",
  //   linkLabel: "",
  //   repo: "https://github.com/seihello/LIVIT-Bot",
  //   image: "chatbot.png",
  //   skills: ["Python", "Selenium"]
  // },
  {
    name: "Strategy Game",
    description:
      "A two-player chess-like strategy game where the objective is to infiltrate your opponent's territory for victory. Users can implement their own coding strategies for gameplay.",
    link: "",
    linkLabel: "",
    repo: "https://github.com/seihello/AnimalMaster",
    image: "animalmaster.png",
    skills: ["Python", "TKinter"],
  },
  {
    name: "Reversi",
    description:
      "This Reversi game allows you to play against a computer opponent, engage in two-player matches, and even observe computer vs. computer battles.",
    link: "",
    linkLabel: "",
    repo: "https://github.com/seihello/Reversi",
    image: "reversi.png",
    skills: ["Python", "TKinter"],
  },
  // {
  //   name: "CSS Gallery",
  //   description: "A web page showcasing the designed CSS modules.",
  //   link: "https://css-gallery.seisuke.info/",
  //   linkLabel: "",
  //   repo: "https://github.com/seihello/css-gallery",
  //   image: "cssgallery.png",
  //   skills: ["HTML", "CSS", "Sass", "JavaScript"]
  // },
  // {
  //   name: "Portfolio",
  //   description: "A responsive website showcasing my projects and professional background.",
  //   link: "https://www.seisuke.info/",
  //   linkLabel: "",
  //   repo: "https://github.com/seihello/van-portfolio",
  //   image: "portfolio.png",
  //   skills: ["HTML", "CSS", "Sass", "JavaScript", "React"],
  // },
];

export default projects;
