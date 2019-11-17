import TagList from "./components/TagList/TagList";

export default class RouteConfig {
    static config = [
        {
            'path': '/',
            'component': TagList,
            'name': 'Taglist',
            'default': true,
        },
    ];

    static getAll() {
        return RouteConfig.config;
    }

    static getDefaultPath() {
        const defaultConfig = RouteConfig.config.filter(d => {return d.default});
        if (defaultConfig !== undefined && defaultConfig.length === 1) {
            return defaultConfig[0].path;
        }
        return '/';
    }
}
