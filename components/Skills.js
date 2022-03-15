import SkillService from '../services/skill.service';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { urlFor } from '../services/img.service';

const Skills = () => {
  const { t, i18n } = useTranslation();
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    SkillService.getSkills().then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      {skills.map(({ name, percentage, logo }, i) => (
        <div className="py-4" key={i}>
          <div className="d-lg-flex flex-row align-items-center align-content-center">
            <div className="w-md-50">
              <img src={urlFor(logo).width(50).url()} />
              <h5 className="fw-bold ">{name}</h5>
            </div>
            <div className="progress w-100 ">
              <div
                className="progress-bar bg-fucsia"
                role="progressbar"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
