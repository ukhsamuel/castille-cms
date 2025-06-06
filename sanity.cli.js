import { defineCliConfig } from 'sanity/cli';
export default defineCliConfig({
    api: {
        projectId: 'm7yypgr0',
        dataset: 'production'
    },
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,

    // Define the hostname configuration
    server: {
        // hostname: 'castille',
        hostname: 'localhost', // Replace with your desired hostname
    },
});
