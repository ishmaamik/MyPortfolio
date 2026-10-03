
export type ProjectsData = {
    id: number;
    title: string;
    description: string;
    image: string;
    githubUrl:string;
    deployUrl?:string
  };
  export const projects: ProjectsData[] = [
    {
      id: 1,
      title: "Calculatrix",
      description:
        "Calculatrix is a small full-stack calculator that I used to practise taking an application from local development to a real cloud deployment.\n\nThe frontend is built with Next.js and React. The API is an Express service. Both parts run in Docker containers and Kubernetes. For the Azure deployment, Terraform creates the AKS cluster and Azure Container Registry, while Kubernetes manages the application workloads.",
      image: "/calculatrix.png",
      githubUrl:'https://github.com/ishmaamik/HowsLife',
      deployUrl:'https://calculatrix-gjkw.vercel.app/'
    },
    {
      id: 2,
      title: "WasteZeroBD",
      description:
        "Created a waste management project based on waste collection and waste report functionalities which brought us Champion at MIST Inventious 4.1 Project Showcase, 4th Runners up at UIU CSE Fest Project Showcase and Honorable Mention in KUET Bitfest Project Showcase",
      image: "/wzbd.png",
      githubUrl:'https://github.com/Siyam-Bhuiyan/WasteZeroBD'
    },
    {
      id: 3,
      title: "CodeEra",
      description:
        "A coding platform with a 'All-in-one' mindset, teaching, practicing problems, mock interviews, articles, blogs and videos to help developers keep up with today's competition",
      image: "/codeera.png",
      githubUrl:'https://github.com/N4M154/Design_Project-I-SWE-4506',
      deployUrl:'https://codeera-j7tv.onrender.com/'
    },

  ];