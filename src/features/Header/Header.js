import { Col, Row, Menu, Divider, Image, Avatar } from 'antd';
import React, { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import logo from '../../assets/LogoBK.jpg';
import './Header.scss';

const Header = () => {
    const [selectedTab, setSelectedTab] = useState('translation');

    const handleClick = (e) => {
        console.log(e.key)
        setSelectedTab(e.key)
    }

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
                    onClick={handleClick} 
                    selectedKeys={[selectedTab]}
                    expandIcon={<MenuOutlined />}
                    >
                        <Menu.Item key='translation'>
                            Translation
                        </Menu.Item>
                        <Menu.Item key='about'>
                            About
                        </Menu.Item>
                        <Menu.Item key='contact'>
                            Contact
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    );
}

export default Header;