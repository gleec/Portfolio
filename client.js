// client.js
import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: '14vzka3t',
  dataset: 'production',
  useCdn: true, // `false` if you want to ensure fresh data
});
