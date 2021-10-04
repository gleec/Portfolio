import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  const skills = t('skills_array', { returnObjects: true });
  const experiences = t('experiences_array', { returnObjects: true });

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 px-0">
          <div className="px-2 card h-100">
            <div className="card-body">
              <h1 className="fw-light pb-3">{t('skills')}</h1>
              {skills.map(({ skill, percentage, logo }, i) => (
                <div className="py-4" key={i}>
                  <div className="d-lg-flex flex-row align-items-center align-content-center">
                    <div className="w-md-50">
                      <Image
                        src={logo}
                        alt="logo skill"
                        width={50}
                        height={50}
                        objectFit="contain"
                        overflow="hidden"
                      />
                      <h5 className="fw-bold">{skill}</h5>
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
            </div>
          </div>
        </div>
        <div className="col-md-8 px-0">
          <div className="h-100 card">
            <div className="card-body d-inline-block">
              <h1 className="px-3 fw-light pb-3">{t('experience')}</h1>
              <div className="px-2">
                <>
                  {experiences.map(({ job, company, from, to, functions, logo }, index) => (
                    <div className="py-md-5 py-3" key={index}>
                      <div className=" d-md-flex flex-row align-items-start">
                        <div className="text-center flex-auto m-auto m-md-3">
                          <Image
                            className="rounded-circle"
                            src={logo}
                            alt="logo Company"
                            width={150}
                            height={150}
                            objectFit="cover"
                            overflow="hidden"
                          />
                        </div>

                        <div className="ms-3 pt-2">
                          <h2> {job}</h2>

                          <p>
                            {company} ( {from} - {to} )
                          </p>
                          <ul>
                            {functions.map((fun, index) => (
                              <li key={index}>
                                <p>{fun}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
