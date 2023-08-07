import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import tsIcon from '/typescript.svg';
import { routes } from '@/routes';
import { Outlet } from 'react-router-dom';

import { useRoutes } from '@/hooks/routes';

const { Header, Content, Sider, Footer } = Layout;

const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const { navigate, defaultSelectedKey, menu, openKeys, selectedKeys } =
        useRoutes(routes);

    return (
        <Layout className="h-full">
            <Header className="flex items-center">
                <img src={tsIcon} alt="" />
            </Header>
            <Layout>
                <Sider
                    width={200}
                    collapsible
                    collapsed={collapsed}
                    onCollapse={(value) => setCollapsed(value)}
                >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={defaultSelectedKey}
                        selectedKeys={selectedKeys}
                        openKeys={openKeys}
                        className="h-full border-r-0 overflow-y-auto"
                        items={menu}
                        onClick={({ keyPath }) => {
                            navigate(keyPath?.[0]);
                        }}
                    />
                </Sider>
                <Layout className="p-6 pb-0">
                    <Breadcrumb className="pb-4">
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content>
                        <Outlet />
                    </Content>
                    <Footer className="text-center">
                        admin ©2023 Created by yhfu@stu.xidian.edu.cn
                    </Footer>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default App;
