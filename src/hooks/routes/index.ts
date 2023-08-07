import type { ReRoute } from '@/routes/interface';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRef } from 'react';

const addKeyProp = (routes: ReRoute[], path = '/') => {
    routes.forEach((route) => {
        const key = `${path}/${removeStartSlash(route.path)}`.replace(
            /^\/\//,
            '/'
        );
        route.key = key;
        if (Array.isArray(route.children)) {
            // 如果有 children 的话，element 不能包含其他元素
            route.element = null;
            addKeyProp(route.children, key);
        }
    });
    return routes;
};

/**
 * 删除字符串中开头的Slash /
 * @param path
 */
const removeStartSlash = (path: string) => path.replace(/^\//, '');

export const useRoutes = (routes: ReRoute[]) => {
    const refRoutes = useRef(routes);
    const location = useLocation();
    const navigate = useNavigate();
    const keys = location.pathname.split('/');
    keys.pop();
    let key = '';
    const openKeys = keys.map((item) => {
        key = `${key}/${item}`;
        return key;
    });
    return {
        openKeys: ['/', ...openKeys],
        menu: addKeyProp(refRoutes.current),
        defaultSelectedKey: refRoutes.current?.[0]?.path ?? '',
        navigate,
        selectedKeys: [location.pathname]
    };
};
