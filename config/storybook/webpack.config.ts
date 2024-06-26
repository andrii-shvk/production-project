import webpack from 'webpack';
import { BuildPaths } from '../build/types/config';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoaders';

export default ({config}: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    };
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');

    if (config.module?.rules) {
        config.module.rules = config.module?.rules?.map((rule: webpack.RuleSetRule | "...") => {
            if (rule !== "..." && /svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        });
    }

    config.module?.rules?.push({
        test: /\.svg$/,
        enforce: 'pre',
        loader: require.resolve('@svgr/webpack'),
      });

    config.module?.rules?.push(buildCssLoader(true));

    return config;
}








// import webpack from 'webpack';
// import { BuildPaths } from '../build/types/config';
// import path from 'path';
// import { buildCssLoader } from '../build/loaders/buildCssLoaders';

// export default ({config}: {config: webpack.Configuration}) => {
//     const paths: BuildPaths = {
//         build: '',
//         html: '',
//         entry: '',
//         src: path.resolve(__dirname, '..', '..', 'src')
//     };
//     config.resolve?.modules?.push(paths.src);
//     config.resolve?.extensions?.push('.ts', '.tsx');

//     // config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
//     //     if (/svg/.test(rule.test as string)) {
//     //         return { ...rule, exclude: /\.svg$/i };
//     //     }
        

//     //     return rule;
//     // });

//     config.module?.rules?.push(buildCssLoader(true));

//     return config;
// }