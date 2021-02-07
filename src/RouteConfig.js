import TagListForm from "./components/TagList/TagListForm";
import Help from "./components/Help/Help";

export default class RouteConfig {
    static config = [
        {
            path: '/tag-list',
            component: TagListForm,
            name: 'Taglist',
            default: true,
        },
        {
            path: '/help',
            component: Help,
            name: 'Help',
            default: false
        }
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
