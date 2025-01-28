import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'm7yypgr0', // Replace with your project ID
  dataset: 'production', // Replace with your dataset name
  apiVersion: '2024-12-24', // Use the correct API version
  token: 'skvntWduoP8nUWSNbvHz6LUxrOzRxCNAWZp4ld67MR2ntmDV7TZXJrqJzC1qbqvxKmXU4MduZRSzbGEKB2rFEYxhGTVTJ9Pijl5YfPXFAuK9xjkSDodAMDdPMh5cADBJej5YODDjBWbIMa2zhanaT83K5NgwSD97XB1KWdUttLubvdQIMKTm', // Replace with your Sanity API token
  useCdn: false, // `false` if you want to ensure fresh data
});

export default client;
