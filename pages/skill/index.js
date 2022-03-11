import { useEffect } from 'react';
import client from '../../client';

const Skill = ({ skill }) => {
  useEffect(async () => {
    const skills = await client.fetch(`*[_type == "skill"]`);

    client.fetch(`*[_type == "skill"][0]`).then((skill) => {
      console.log(skill);
    });

    client.getDocument(skills[0]._id).then((bike) => {
      console.log(bike)
    })

    console.log(skills);
  });

  return (
    <article>
      <h1>{skill?.title?.current}</h1>
    </article>
  );
};


export default Skill;
