const projects = [
  {
    en: {
      name: "Transport Controller",
      description:
        "A large-scale application that controls thousands of machines transporting products in a semiconductor factory. It finds optimal transport routes, efficiently dispatches tasks, and manages transportation status.",
    },
    jp: {
      name: "半導体工場向け 搬送制御アプリケーション",
      description:
        "工場の中を走行する幾千もの搬送装置を制御するソフトウェア。最適な装置の剪定や搬送経路の探索を行い、可能な限り短時間で搬送することで、工場全体の生産効率を向上させる。",
    },
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
    en: {
      name: "Corporate Website",
      description:
        "A responsive corporate website consisting of multiple pages. Features include news feeds, subscriptions, and stock price information display.",
    },
    jp: {
      name: "コーポレートサイト",
      description:
        "複数のページから構成される企業紹介サイト。購読機能やRSSの配信、株式情報の表示などの機能を持つ。レスポンシブ表示に対応。",
    },
    link: "https://planetventuresinc.com/index.php",
    linkLabel: "Live Site",
    repo: "",
    image: "planet.png",
    skills: ["HTML", "CSS", "Sass", "JavaScript", "PHP", "Joomla!"],
  },
  {
    en: {
      name: "Learning Management System",
      description:
        "A web application designed to enhance learning for university professors and students. It includes features such as research paper search, assignment submission, and lecture material creation support powered by AI.",
    },
    jp: {
      name: "教育機関向け学習管理システム",
      description:
        "主に大学の教授や生徒らの学習や情報共有を効率化させるWebアプリケーション。論文の検索や課題の提出、AIを活用した講義資料の作成支援などの機能を備えている。",
    },
    link: "https://www.summations.com/",
    linkLabel: "LP",
    repo: "",
    image: "summations_lp.png",
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "PostgreSQL",
      "Supabase",
      "LangChain",
    ],
  },
  {
    en: {
      name: "PDF Chat",
      description:
        "A single page web application that you can chat with AI and ask questions about a PDF file you uploaded",
    },
    jp: {
      name: "PDFチャット",
      description:
        "PDFをアップロードし、そのファイルの内容に関してAIに尋ねることができるアプリケーション。",
    },
    link: "https://pdf-chat.seisuke.info/",
    linkLabel: "Live Site",
    repo: "https://github.com/seihello/pdf-chat",
    image: "pdf_chat.png",
    skills: ["Next.js", "TypeScript", "Tailwind", "Supabase", "LangChain"],
  },
  {
    en: {
      name: "Issue Manager",
      description:
        "A multi-page web application that enables you to efficiently manage the status and schedule of tasks for your projects.",
    },
    jp: {
      name: "タスク管理サイト",
      description:
        "プロジェクトに紐づくタスクの進捗状況やスケジュールを管理することができるWebアプリケーション。ユーザが操作ができるUI/UXを目指している。",
    },
    link: "https://app.montabase.com",
    linkLabel: "Live Site",
    repo: "https://github.com/seihello/montabase-issue-manager",
    image: "montabase.png",
    skills: ["Next.js", "TypeScript", "Tailwind", "Supabase", "LangChain"],
  },
  {
    en: {
      name: "Vocabulary Learning",
      description:
        "An iOS application where web designers/developers can learn English technical vocabulary by testing the words in flashcards. Check it out on the iOS App Store!",
    },
    jp: {
      name: "技術者向け語学学習アプリ",
      description:
        "デザイナーやプログラマのが、英語の専門用語を学習することができるiOSアプリ。フラッシュカード形式で表示され、例文や類語なども同時に確認できる。App Storeにて公開中。",
    },
    link: "https://apps.apple.com/jp/app/designglish/id6476836989?l=en-US&platform=iphone",
    linkLabel: "Published App",
    repo: "https://github.com/seihello/designglish",
    image: "designglish.png",
    skills: ["React Native", "TypeScript", "Supabase"],
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
  // {
  //   name: "Weather App",
  //   description:
  //     "A single-page website that displays weather information. It provides current weather, a 5-day forecast, and 3-hourly forecasts. Users can not only check the weather at their current location but also bookmark their favorite cities.",
  //   link: "https://weather.seisuke.info/",
  //   linkLabel: "Live Site",
  //   repo: "https://github.com/seihello/weather-app",
  //   image: "weatherapp.png",
  //   skills: ["HTML", "CSS", "Sass", "JavaScript", "JQuery"],
  // },
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
  // {
  //   name: "Strategy Game",
  //   description:
  //     "A two-player chess-like strategy game where the objective is to infiltrate your opponent's territory for victory. Users can implement their own coding strategies for gameplay.",
  //   link: "",
  //   linkLabel: "",
  //   repo: "https://github.com/seihello/AnimalMaster",
  //   image: "animalmaster.png",
  //   skills: ["Python", "TKinter"],
  // },
  // {
  //   name: "Reversi",
  //   description:
  //     "This Reversi game allows you to play against a computer opponent, engage in two-player matches, and even observe computer vs. computer battles.",
  //   link: "",
  //   linkLabel: "",
  //   repo: "https://github.com/seihello/Reversi",
  //   image: "reversi.png",
  //   skills: ["Python", "TKinter"],
  // },
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
