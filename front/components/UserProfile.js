import { Avatar, Card, Button } from "antd";
import React, { useCallback } from "react";
// import { useDispatch } from "react-redux";
// import { logoutAction } from "../reducers/user";
import { useDispatch, useSelector } from 'react-redux';
import { LOG_OUT_REQUEST } from '../reducers/user';


// const dummy = {
//     nickname: "terecal",
//     Post: [],
//     Followings: [],
//     Followers: [],
//     isLoggedIn: false,
// };


const UserProfile = ({ setIsLoggedIn }) => {

    const dispatch = useDispatch();
    const { me, logOutLoading } = useSelector((state) => state.user);


    const onLogOut = useCallback(() => {
        // setIsLoggedIn(false);
        // dispatch(logoutAction());
        dispatch({
            type: LOG_OUT_REQUEST,
        });
    }, []);

    return (
        <Card
            actions={[
                <div key="twit">
                    짹짹
                    <br />
                    {me.Posts.length}
                </div>,
                <div key="following">
                    팔로잉
                    <br />
                    {me.Followings.length}
                </div>,
                <div key="follower">
                    팔로워
                    <br />
                    {me.Followers.length}
                </div>,
            ]}
        >
            <Card.Meta
                // avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
                // title={dummy.nickname}
                avatar={<Avatar>{me.nickname[0]}</Avatar>}
                title={me.nickname}
            />
            {/* <Button onClick={onLogOut}>로그아웃</Button> */}
            <Button onClick={onLogOut} loading={logOutLoading}>로그아웃</Button>
        </Card>
    );
};


export default UserProfile;

