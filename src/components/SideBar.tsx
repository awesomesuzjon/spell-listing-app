// Not going to use the sidebar component for now

import React, { useState } from 'react';
import { Menu, Button } from 'antd';
import {
    HomeOutlined,
    RadarChartOutlined,
    UnorderedListOutlined,
    BarsOutlined,
    ThunderboltOutlined
} from '@ant-design/icons';
import { MenuItem } from './commonInterfaces/MenuItem';
import { Link } from 'react-router-dom';

const SideBar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(true);

    const menuItems: MenuItem[] = [
        {
            label: 'HOME',
            icon: <HomeOutlined />,
            key: '/',
        },
        {
            label: 'Spells',
            icon: <ThunderboltOutlined />,
            key: '/spells',
        },
        {
            label: 'Powers',
            icon: <RadarChartOutlined />,
            key: '/powers',
        },
    ];

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div style={{display:"flex",flexDirection:"column"}}>
            <Button
                onClick={toggleSidebar}
                style={{ marginBottom: 16,justifyContent:"center" }}
            >
                <BarsOutlined />
            </Button>
            <Menu mode={collapsed ? 'vertical' : 'inline'} inlineCollapsed={collapsed}>
                {menuItems.map((item) => (
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.key}>{item.label}</Link>
                    </Menu.Item>
                ))}
            </Menu>
        </div>
    );
};

export default SideBar;
