import React, { useState, useCallback } from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import { Form, Input, Checkbox, Button } from "antd";
import useInput from '../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { SIGN_UP_REQUEST } from '../reducers/user';


// 회원 가입 컴퍼넌트
const Signup = () => {
    const dispatch = useDispatch();
    // 상태값 정의
    const [email, onChangeEmail] = useInput("");
    const [nickname, onChangeNickname] = useInput("");
    const [password, onChangePassword] = useInput("");
    const [passwordCheck, , setPasswordCheck] = useInput("");
    const [passwordError, ,setPasswordError] = useInput(false);
    const { signUpLoading } = useSelector((state) => state.user);


    // 비밀번호 유효성 검사(비밀번호 확인 인풋과 연계)
    const onChangePasswordCheck = useCallback(
        (e) => {
            setPasswordError(e.target.value !== password);
            setPasswordCheck(e.target.value);
        },
        [password]
    );

    const [term, setTerm] = useState(false);
    const [termError, setTermError] = useState(false);

    const onSubmit = useCallback(() => {
        if (password !== passwordCheck) {
            return setPasswordError(true);
        }
        if (!term) {
            return setTermError(true);
        }
        // console.log("회원 가입 정보1 : id, nick : ", id, nick);
        console.log("회원 가입 정보1 : id, nick : ", email, nickname);
        console.log("회원 가입 정보2 : password, passwordcheck", password, passwordCheck);

        return dispatch({
            type: SIGN_UP_REQUEST,
            data: {
                email,
                password,
                nickname,
            },
        });

    }, [password, passwordCheck, term]);

    const onChangeTerm = useCallback((e) => {
        setTermError(false);
        setTerm(e.target.checked);
    }, []);


    return (
        // AppLayout 상속
        <AppLayout>
            <Head>
                <title>회원 가입 | NodeBird</title>
            </Head>

            {/* 회원 가입 폼 만들기 */}
            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor="user-id">이메일</label>
                    <br />
                    <Input
                        name="user-id"
                        value={email}
                        required
                        onChange={onChangeEmail}
                    />
                </div>
                <div>
                    <label htmlFor="user-nick">닉네임</label>
                    <br />
                    <Input
                        name="user-nick"
                        value={nickname}
                        required
                        onChange={onChangeNickname}
                    />
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br />
                    <Input
                        name="user-password"
                        type="password"
                        value={password}
                        required
                        onChange={onChangePassword}
                    />
                </div>
                <div>
                    <label htmlFor="user-password-check">비밀번호체크</label>
                    <br />
                    <Input
                        name="user-password-check"
                        type="password"
                        value={passwordCheck}
                        required
                        onChange={onChangePasswordCheck}
                    />

                    {/* 비밀 번호 에러 존재시에 비밀 번호가 틀렸다고 메세지로 출력 */}
                    {passwordError && (
                        <div style={{ color: "red" }}>
                            비밀번호가 일치하지 않습니다.
                        </div>
                    )}
                </div>

                <div>
                    <Checkbox
                        name="user-term"
                        checked={term}
                        onChange={onChangeTerm}
                    >
                        제로초 말을 잘 들을 것을 동의합니다.
                    </Checkbox>
                    {termError && (
                        <div style={{ color: "red" }}>
                            약관에 동의하셔야 합니다.
                        </div>
                    )}
                </div>

                <div style={{ marginTop: 10 }}>
                    <Button type="primary" htmlType="submit" loading={signUpLoading}>가입하기</Button>

                </div>

            </Form>
        </AppLayout>
    );
};


export default Signup;
