const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            'primary-color': '#7FC8A9',
                            'link-color': '#1DA57A',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};