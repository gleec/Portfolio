import client from '../client'

const getExperiences= async () => {
  const experiences = await client.fetch(`*[_type == "experience"]`);
  return experiences;
};

  export default {
    getExperiences
  }