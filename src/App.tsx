import React, { useState } from 'react';
import {
    LaptopOutlined,
    NotificationOutlined,
    UserOutlined
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import tsIcon from '/typescript.svg';

const { Header, Content, Sider, Footer } = Layout;

const items: MenuProps['items'] = [
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined
].map((icon, index) => {
    const key = String(index + 1);

    return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,

        children: new Array(4).fill(null).map((_, j) => {
            const subKey = index * 4 + j + 1;
            return {
                key: subKey,
                label: `option${subKey}`,
                icon: React.createElement(icon),

                children: new Array(3).fill(null).map((_, index) => {
                    return {
                        key: subKey + index,
                        label: subKey + index
                    };
                })
            };
        })
    };
});

const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
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
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        className="h-full border-r-0 overflow-y-auto"
                        items={items}
                    />
                </Sider>
                <Layout className="p-6 pb-0">
                    <Breadcrumb className="pb-4">
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content>Content</Content>
                    <Footer className="text-center">
                        admin ©2023 Created by yhfu@stu.xidian.edu.cn
                    </Footer>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default App;
