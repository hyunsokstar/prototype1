import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Input, Menu, Row, Col } from "antd";
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
import { useSelector } from "react-redux";



const AppLayout = ({ children }) => {
    const { me } = useSelector((state) => state.user);

    const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
    console.log("isLoggedIn : ", isLoggedIn);


    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/">노드버드</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile">프로필</Link>
                </Menu.Item>
                <Menu.Item>
                    <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
                </Menu.Item>

                <Menu.Item>
                    <Link href="/signup">회원 가입</Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={4}>

                    {/* {isLoggedIn ? <UserProfile /> : <LoginForm />} */}
                    {me
                        ? <UserProfile />
                        : <LoginForm />}
                
                </Col>
                <Col xs={24} md={16}>
                    {children}
                </Col>
                <Col xs={24} md={4}>
                    <a href="https://www.zerocho.com" target="_blank" rel="noreferrer noopenner">Made by ZeroCho</a>
                </Col>
            </Row>
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;

