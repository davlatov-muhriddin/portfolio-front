import axios from "axios";
import React, { useEffect, useState } from "react";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaChrome } from "react-icons/fa";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const { data } = await axios.get(
          "https://portfolio-api-drab.vercel.app/api/projects"
        );

        setProjects(data.projects);
      } catch (error) {
        console.log(error);
      }
    };

    getProjects();
  });

  return (
    <section className="portfolio">
      {projects &&
        projects.map((project) => (
          <div className="portfolio__card" key={project._id}>
            <div className="portfolio__card__front portfolio__card__side">
              <img src={project.image} alt={project.title} />
              <div className="portfolio__card__body">
                <h4>{project.title}</h4>
                <p>{project.description.slice(0, 70)}...</p>
              </div>
            </div>
            <div className="portfolio__card__back portfolio__card__side">
              <h4>{project.title}</h4>
              <ul>
                <li>
                  <a href={project.github} target="_blank">
                    <PiGithubLogoFill className="icon" />
                  </a>
                </li>
                <li>
                  <a href={project.google} target="_blank">
                    <FaChrome className="icon" />
                  </a>
                </li>
                <li>
                  <a href={project.youtube} target="_blank">
                    <TbBrandYoutubeFilled className="icon" />
                  </a>
                </li>
              </ul>
              <Link to={`/detail/${project._id}`}>
                <button>Show More</button>
              </Link>
            </div>
          </div>
        ))}
    </section>
  );
}

export default Portfolio;
