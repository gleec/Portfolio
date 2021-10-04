import { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { MdLink } from 'react-icons/md';
import Modal from '../components/Modal';

const Portfolio = () => {
  const [isShown, setIsShown] = useState(false);
  const [currentAchievements, setCurrentAchievements] = useState([]);
  const [currentSkills, setCurrentSkills] = useState([]);
  const handleShow = (achievements, skills) => {
    setIsShown(true);
    setCurrentAchievements(achievements);
    setCurrentSkills(skills);
  };
  const { t } = useTranslation();
  const projects = t('projects_array', { returnObjects: true });

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 px-0">
          <div className="card card-body bg-dark py-0">
            <div className="row">
              <div className="col-md-12 pb-2 pt-3">
                <h1 className="text-center text-light m-auto">{t('portfolio')}</h1>
              </div>
              <Modal onClose={() => setIsShown(false)} show={isShown}>
                <ul>
                  {currentAchievements.map((currentAchievement, index) => (
                    <li key={index}>
                      <p className="mw-50">{currentAchievement}</p>
                    </li>
                  ))}
                </ul>
                {currentSkills.map((currentSkill, index) => (
                  <div key={index} className="d-inline p-3">
                    <Image
                      src={currentSkill}
                      alt="logo skill"
                      width={40}
                      height={40}
                      objectFit="fill"
                      overflow="hidden"
                    />
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
                    spaceBetween: 20
                  },

                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 40
                  }
                }}
              >
                {projects.map(
                  ({ name, urlProject, description, achievements, skills, image }, index) => (
                    <SwiperSlide key={index}>
                      <div className="card h-100 px-4 py-1 pt-4">
                        <Image
                          src={image}
                          alt="logo project"
                          width={400}
                          height={350}
                          objectFit="cover"
                          overflow="hidden"
                        />

                        <div className="align-items-start card-body d-flex flex-column">
                          <a
                            className="text-decoration-none"
                            aria-current="page"
                            href={urlProject}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <h3 className="d-inline-block me-3 text-dark ">{name}</h3>
                            <MdLink size="32px" color="#f66ade" />
                          </a>
                          <p className=" mh-100">{description}</p>

                          <button
                            type="button"
                            className="btn btn-primary mt-auto btn-fucsia"
                            onClick={() => handleShow(achievements, skills)}
                          >
                            {t('achievements')}
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
