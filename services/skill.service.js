import client from '../client'

const getSkills = async () => {
  const skills = await client.fetch(`*[_type == "skill"] | order(order asc)`);
  return skills;
};

  export default {
    getSkills
  }