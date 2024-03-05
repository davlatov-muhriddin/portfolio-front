import axios from "axios";
import React, { useEffect, useState } from "react";

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const getSkillsData = async () => {
      try {
        const { data } = await axios.get(
          "https://portfolio-api-drab.vercel.app/api/skills"
        );
        setSkills(data.skills);
      } catch (error) {
        console.log(error);
      }
    };
    getSkillsData();
  }, []);

  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills__list">
        {skills &&
          skills.map((skill) => (
            <div key={skill._id} className="skills__item">
              <div className="skills__title">{skill.title}</div>
              <img src={skill.image} alt={skill.title} />
            </div>
          ))}
      </div>
    </section>
  );
}

export default Skills;
