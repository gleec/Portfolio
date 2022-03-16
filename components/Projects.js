import { useState, useEffect } from 'react';
import Image from 'next/image';
import ProjectService from '../services/project.service';
import { useTranslation } from 'react-i18next';
import { urlFor } from '../services/img.service';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { MdLink } from 'react-icons/md';
import Modal from './Modal';

const Projects = () => {
  const { t, i18n } = useTranslation();

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    ProjectService.getProjects().then((data) => {
      setProjects(data);
    });
  }, []);

  const [isShown, setIsShown] = useState(false);
  const [currentAchievements, setCurrentAchievements] = useState([]);
  const [currentSkills, setCurrentSkills] = useState([]);
  const handleShow = (achievements, skills) => {
    setIsShown(true);
    setCurrentAchievements(achievements);
    setCurrentSkills(skills);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 px-0">
          <div className="card card-body bg-dark py-0">
            <div className="row">
              <div className="col-md-12 pb-2 pt-3">
                <h1 className="text-center text-light m-auto">{t('projects')}</h1>
              </div>
              <Modal onClose={() => setIsShown(false)} show={isShown}>
                <ul>
                  {currentAchievements.map((currentAchievement, index) => (
                    <li key={index}>
                      <p className="mw-50">{currentAchievement[i18n.language]}</p>
                    </li>
                  ))}
                </ul>
                {currentSkills.map((currentSkill, index) => (
                  <div key={index} className="d-inline p-3">
                    <img src={urlFor(currentSkill).width(40).url()} />
                  </div>
                ))}
              </Modal>
              <Swiper
                className="ps-lg-5 ps-3 pe-5 pb-5 pt-3"
                modules={[Navigation, Pagination, Scrollbar]}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                freeMode={true}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },

                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },

                  1440: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                }}
              >
                {projects.map(({ name, url, description, achievements, skills, image }, index) => (
                  <SwiperSlide key={index}>
                    <div className="card h-100 px-4 py-1 pt-4">
                      <img src={urlFor(image).width(350).height(250).url()} />

                      <div className="align-items-start card-body d-flex flex-column">
                        {!url ? (
                          <h3 className="d-inline-block me-3 text-dark ">{name}</h3>
                        ) : (
                          <a
                            className="text-decoration-none"
                            aria-current="page"
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="d-flex align-items-center">
                              <h3 className="d-inline-block me-3 text-dark mb-0">{name}</h3>
                              <MdLink size="33px" color="#f66ade" />
                            </div>
                          </a>
                        )}
                        <p className="mh-100 w-100 mt-3">{description[i18n.language]}</p>

                        <button
                          type="button"
                          className="btn-fucsia mt-auto "
                          onClick={() => handleShow(achievements, skills)}
                        >
                          {t('achievements')}
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
