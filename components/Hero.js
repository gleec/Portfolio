import { useTranslation } from 'react-i18next';
import Skills from './Skills';
import Experiences from './Experiences';

const Hero = () => {
  const { t} = useTranslation();

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 px-0">
          <div className="px-2 card h-100">
            <div className="card-body">
              <h1 className="fw-light pb-3">{t('skills')}</h1>
               <Skills/>
            </div>
          </div>
        </div>
        <div className="col-md-8 px-0">
          <div className="h-100 card">
            <div className="card-body d-inline-block">
              <h1 className="px-3 fw-light pb-3">{t('experience')}</h1>
              <div className="px-2">
               <Experiences/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
