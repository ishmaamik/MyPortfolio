
export type AchievementsData = {
    id: number;
    title: string;
    description: string;
    contest?:string;
    image: string;
  };
  export const achievements: AchievementsData[] = [
    {
      id: 1,
      title: "Honorable Mention",
      contest:"KUET CSE BitFest Project Showcase",
      description:
        "On 3rd of January 2025, our team IUT_ACCESS_DENIED participated in KUET BITFEST Project Showcase where we demonstrated our Waste Zero BD and we achieved the honorable mention!",
      image: "honorable_kuet.jpg",
    },
    {
      id: 2,
      title: "4th Runners Up",
      contest:"UIU CSE Fest Project Showcase",
      description:
        "On 17th of January, 2025, With our Waste Zero BD we participated in UIU CSE Fest Project Showcase and achieved 4th Runners Up out of 41 teams",
      image:'uiu_4th.jpg'
    },
    {
      id: 3,
      title: "Champion",
      contest:"MIST Inventious 4.1 Hackathon",
      description:
        "On 7th of March, 2025, competing against 44 teams, our team IUT_ACCESS_DENIED had secured Champion where my role was to create the Event Management, Club Management, real time messaging system between the faculties and students",
      image: "mist_champ_hacka.jpeg",
    },
    {
        id: 4,
        title: "Champion",
        contest:"MIST Inventious 4.1 Project Showcase",
        description:
          "On 8th of March, 2025, competing against 36 teams, our team IUT_ACCESS_DENIED had secured Champion in the MIST Inventious 4.1 Project Showcase",
        image: "mist_champ_project.jpeg",
      },
  ];
  