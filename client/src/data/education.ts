
export type EducationData = {
    id: number;
    title: string;
    date: string;
    result?: string;
    school:string;
    imageUrl: string;
  };
  export const education: EducationData[] = [
    {
      id: 1,
      title: "O Level",
      date:
        "I gave my IGCSE O levels within two sittings, one at May 2018, other at January 2019. 5 subjects in May 2018- Biology, Chemistry, Physics, Human Biology and Bangla. 4 more subjects in January 2019- English B, Math A, Math B and Further Pure Maths",
      result: "7A*s, 2As",
      school:'Academia',
      imageUrl:'academia.jpeg'
    },
      {
        id: 2,
        title: "A Level",
        date:
          "I gave my IAS or the first part of A levels, International Advanced Subsidiary in January 2020 and the second part of A levels IA2 in January 2021 with 3 subjects- Physics, Chemistry and Maths.",
        result: "3 As",
        school:'Academia',
        imageUrl:'academia.jpeg'
      },
      {
        id: 3,
        title: "University",
        date:
          "I am currently doing my undergraduate from August 2022, BSc in Software Engineering (SWE) under the department of Computer Science Engineering (CSE) at Islamic University of Technology (IUT).",
        school:'Islamic University of Technology',
        imageUrl:'iut.png'
      },
  ];
  