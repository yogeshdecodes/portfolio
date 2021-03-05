const getSkills = () => {
  return [
    {
      id: 1,
      icon: "code",
      title: "Front End",
      text:
        "For front end development I like to use ReactJS with Styled Components to create beautiful, responsive websites.",
    },
    {
      id: 2,
      icon: "cog",
      title: "Back End",
      text:
        "My favourite technologies for developing APIs and back end code is NodeJS using Express Framework and Hasura for GraphQL API.",
    },
    {
      id: 3,
      icon: "database",
      title: "Database",
      text:
        "I use  PostgreSQL for relational database, MongoDB for document database, and Firebase for cloud database.",
    },
    {
      id: 4,
      icon: "wrench",
      title: "Devops",
      text:
        "I am familiar with building & configuring web infrastructure in AWS and setting up continuous integration pipelines in CircleCI.",
    },
    {
      id: 5,
      icon: "check",
      title: "Clean Code",
      text:
        "I am passionate about delivering high quality code using design patterns(MVC, MVP), design principles(YAGNI, KISS, DRY), and test driven development(TDD).",
    },
    {
      id: 6,
      icon: "palette",
      title: "Design",
      text:
        "My favourite tool to streamline my UI/UX workflow is Figma. I use it for low fidelity Wireframes to high fidelity Prototyping.",
    },
  ];
};

export default getSkills;
