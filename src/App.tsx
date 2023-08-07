import React from 'react';
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

const { Header, Content, Sider } = Layout;

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
    return (
        <Layout style={{ height: '100%' }}>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <img src={tsIcon} alt="" />
            </Header>
            <Layout>
                <Sider width={200}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{
                            height: '100%',
                            borderRight: 0,
                            overflowY: 'auto'
                        }}
                        items={items}
                    />
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content>Content</Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default App;
