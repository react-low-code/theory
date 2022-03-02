const CSS_MODULE_LOCAL_IDENT_NAME = "[path]___[name]__[local]";

module.exports = {
    style: {
        modules: {
            localIdentName: CSS_MODULE_LOCAL_IDENT_NAME
        }
    },
    babel: {
        plugins: [
            ["react-css-modules", { 
                filetypes: {
                    '.scss': {
                        syntax: 'postcss-scss'
                    },
                },
                generateScopedName: CSS_MODULE_LOCAL_IDENT_NAME 
            }]
        ]
    },
    webpack: {
        configure: (webpackConfig) => {
            let oneOf = webpackConfig.module.rules[1].oneOf
            const sassRegex = /\.(scss|sass)$/;
            const sassModuleRegex = /\.module\.(scss|sass)$/;
            // 删除 /\.(scss|sass)$/
            oneOf = oneOf.filter(item => (!item.test || item.test.toString() !== sassRegex.toString()))
            
            const sassModuleRule = oneOf.find(item => item.test.toString() === sassModuleRegex.toString())
            // 将 /\.module\.(scss|sass)$/改成 /\.(scss|sass)$/，使所有的 .scss 和 sass 都支持 CSS module
            if (sassModuleRule) {
                sassModuleRule.test = sassRegex
            }

            webpackConfig.module.rules[1].oneOf = oneOf
            return webpackConfig
        }
    }
};