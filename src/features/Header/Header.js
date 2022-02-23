import { Col, Row, Menu, Image } from 'antd';
import React, { useEffect, useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import logo from '../../assets/LogoBK.jpg';
import './Header.scss';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const [selectedTab, setSelectedTab] = useState('translation');

    useEffect(() => {
        let endIndex = location.pathname.indexOf('/', 1);
        endIndex = endIndex < 0 ? location.pathname.length : endIndex;
        const newSelectedTab = location.pathname.substring(1, endIndex);
        setSelectedTab(newSelectedTab);
    }, [location.pathname])

    return (
        <div className='header'>
            <Row justify={'space-between'} align={'middle'}>
                <Col span={12} style={{minWidth: '400px'}}>
                    <Row justify={'start'}>
                        <Col span={4} style={{minWidth: '80px'}}>
                            <Row justify={'center'}>
                                <Col>
                                    <Image width={60} src={logo} />
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12} offset={0} style={{textAlign: 'start', minWidth: '300px'}}>
                            <div className='header--title'>
                                <div>Vietnamese - Bahnaric</div>
                                <div>neural machine translation</div>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col span={6}>
                    <Menu
                    mode='horizontal' 
                    selectedKeys={[selectedTab]}
                    expandIcon={<MenuOutlined />}
                    >
                        <Menu.Item key='translation'>
                            <Link to='/translation'>Translation</Link>
                        </Menu.Item>
                        <Menu.Item key='about'>
                            <Link to='/about'>About</Link>
                        </Menu.Item>
                        <Menu.Item key='contact'>
                            <Link to='/contact'>Contact</Link>
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    );
}

export default Header;