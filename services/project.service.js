import client from '../client'

const getProjects= async () => {
  const projects = await client.fetch(`*[_type == "project"] | order(order asc)`);
  return projects;
};

  export default {
    getProjects
  }