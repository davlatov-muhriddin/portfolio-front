import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LinkImage from "../assets/link.png";

function ProjectDetail() {
  const [project, setProject] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getProject = async () => {
      try {
        const { data } = await axios.get(
          `https://portfolio-api-drab.vercel.app/api/projects/${id}`
        );
        setProject(data.project);
      } catch (error) {
        console.log(error);
      }
    };
    getProject();
  }, []);

  return (
    <section className="project__detail">
      <div className="project__detail__img">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project__detail__info">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="project__detail__technology">
          {project.technology &&
            project.technology.map((item) => (
              <button key={item}>{item}</button>
            ))}
        </div>
        <a href={project.google} target="_blank">
          <img src={LinkImage} alt="link" />
        </a>
      </div>
    </section>
  );
}

export default ProjectDetail;
