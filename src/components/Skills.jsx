const Skills = () => {
  const professionalSkills = [
    'Communication',
    'Collaborative Leadership',
    'Agile Methodologies',
    'Attention to Detail',
    'Pair Programming',
    'Problem Solving',
    'Mentoring',
    'Git/GitHub',
    'Time Management',
    'Teamwork',
  ];

  const frontEndSkills = [
    'HTML/CSS',
    'React',
    'Swagger API',
    'API Documentation',
    'API Integration',
    'Leadership',
    'Jest',
    'Redux',
    'JavaScript'
  ];

  const backEndTools = [
    'Rspec Testing',
    'Ruby on Rails',
    'PostgreSQL',
    'Laravel',
    'Python',
    'Ruby',
    'PHP',
    'MySQL'
  ];

  return (
    <div className="bg-[#110F17]">
      <h1 className="text-center text-white text-2xl py-4 font-semibold underline decoration-[#5933d3] underline-offset-[12px] mb-5 my-2">Skills</h1>
      <div className="px-2 mx-auto flex flex-wrap lg:flex-nowrap justify-center items-center gap-2">
        <div className="text-white bg-[#1E1D26] px-4 py-2 rounded-lg m-2">
          <h2 className="text-lg font-bold mb-2">Professional Skills</h2>
          <div className="flex flex-wrap gap-2">
            {professionalSkills.map((skill, index) => (
              <div key={index} className="text-md font-semibold bg-white text-black p-2 cursor-pointer rounded-xl hover:scale-[95%] duration-300">{skill}</div>
            ))}

          </div>
        </div>

        <div className="text-white bg-[#1E1D26] px-4 py-2 rounded-lg m-2">
          <h2 className="text-lg font-bold mb-2">Front-End Skills</h2>
          <div className="flex flex-wrap gap-2">
            {frontEndSkills.map((skill, index) => (
              <div key={index} className="text-md font-semibold bg-white text-black p-2 cursor-pointer rounded-xl hover:scale-[95%] duration-300">{skill}</div>
            ))}
          </div>
        </div>

        <div className="text-white bg-[#1E1D26] px-4 py-2 rounded-lg m-2">
          <h2 className="text-lg font-bold mb-2">Back-End Tools</h2>
          <div className="flex flex-wrap gap-2">
            {backEndTools.map((tool, index) => (
              <div key={index} className="text-md font-semibold bg-white text-black p-2 cursor-pointer rounded-xl hover:scale-[95%] duration-300">{tool}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;