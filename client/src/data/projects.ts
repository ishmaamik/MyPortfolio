
export type ProjectsData = {
    id: number;
    title: string;
    description: string;
    image: string;
    githubUrl:string
  };
  export const projects: ProjectsData[] = [
    {
      id: 1,
      title: "WasteZeroBD",
      description:
        "Created a waste management project based on waste collection and waste report functionalities which brought us Champion at MIST Inventious 4.1 Project Showcase, 4th Runners up at UIU CSE Fest Project Showcase and Honorable Mention in KUET Bitfest Project Showcase",
      image: "/wzbd.png",
      githubUrl:'https://github.com/Siyam-Bhuiyan/WasteZeroBD'
    },
    {
      id: 2,
      title: "CodeEra",
      description:
        "A coding platform with a 'All-in-one' mindset, teaching, practicing problems, mock interviews, articles, blogs and videos to help developers keep up with today's competition",
      image: "/codeera.png",
      githubUrl:'https://github.com/N4M154/Design_Project-I-SWE-4506'
    },
    {
      id: 3,
      title: "HowsLife",
      description:
        "A real time chat application where users can share images and files, created using MongoDB, ExpressJS, ReactJS, NodeJS and real time chat done by Socket.io",
      image: "/howslife.png",
      githubUrl:'https://github.com/ishmaamik/HowsLife'
    },
  ];
  