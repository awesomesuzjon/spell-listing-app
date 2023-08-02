import React from 'react';
import {Menu} from 'antd';
import {HomeOutlined, RadarChartOutlined, UnorderedListOutlined,OrderedListOutlined, UserOutlined} from '@ant-design/icons';
import {MenuItem} from './commonInterfaces/MenuItem';
import {Link} from 'react-router-dom';

const SideBar: React.FC = () => {
    const menuItems: MenuItem[] = [
        {
            label: 'HOME',
            icon: <HomeOutlined/>,
            key: '/',
        },
        {
            label: 'Spells',
            icon: <UnorderedListOutlined/>,
            key: '/spells',
        }, {
            label: 'Monsters',
            icon: <OrderedListOutlined/>,
            key: '/monsters',
        },
        {
            label: 'Characters',
            icon: <UserOutlined/>,
            key: '/characters',
        },
        {
            label: 'Powers',
            icon: <RadarChartOutlined/>,
            key: '/powers',
        },
    ];

    return (
        <Menu>
            {menuItems.map((item) => (
                <Menu.Item key={item.key} icon={item.icon}>
                    <Link to={item.key}>{item.label}</Link>
                </Menu.Item>
            ))}
        </Menu>
    );
};

export default SideBar;
