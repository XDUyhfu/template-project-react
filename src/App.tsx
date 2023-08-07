import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import tsIcon from '/typescript.svg';
import { routes } from '@/routes';
import { Outlet, useNavigate } from 'react-router-dom';

const { Header, Content, Sider, Footer } = Layout;

const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();

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
                        defaultSelectedKeys={routes?.[0]?.children[0].key}
                        className="h-full border-r-0 overflow-y-auto"
                        items={routes?.[0]?.children}
                        onClick={({ keyPath }) => {
                            const path = keyPath.reverse().join('');
                            navigate(path);
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
