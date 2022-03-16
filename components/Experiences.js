import ExperienceService from '../services/experience.service';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { urlFor } from '../services/img.service';

const Experience = () => {
  const { t, i18n } = useTranslation();
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    ExperienceService.getExperiences().then((data) => {
      setExperiences(data);
    });
  }, []);

  return (
    <>
   {experiences.map(({ job, company, from, to, functions, logo }, i) => (
     <div className="py-3" key={i}>
       <div className=" d-md-flex flex-row align-items-start">
         <div className="text-center flex-auto m-auto m-md-3">
         <img className="rounded-circle" src={urlFor(logo).width(150).url()} />
         </div>

         <div className="ms-3 pt-2">
           <h2> {job[i18n.language]}</h2>

           <p className='text-justify small'>
             {company} ( {from} - {to} )
           </p>
           <ul>
             {functions.map((fun, index) => (
               <li key={index}>
                 <p>{fun[i18n.language]}</p>
               </li>
             ))}
           </ul>
          </div>
       </div>
     </div>
   ))}
 </>


  );
};

export default Experience;