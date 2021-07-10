// import React, { useCallback } from 'react'
import React, { useCallback, useEffect } from "react";
import useInput from '../hooks/useInput';
import { Form, Input, Button } from 'antd';
import { TweetButtonWrapper, PostingButton } from "./style/PostFormStyle.js";
// import { useDispatch } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
// import { addPost } from '../reducers/post';
import { ADD_POST_REQUEST } from '../reducers/post';


function PostForm() {
    const dispatch = useDispatch();
    const [text, onChangeText, setText] = useInput("");
    const { addPostLoading, addPostDone } = useSelector((state) => state.post);

    useEffect(() => {
        if (addPostDone) {
            setText('');
        }
    }, [addPostDone]);

    const onSubmit = useCallback(() => {
        console.log("입력 text : " + text);
        // dispatch(addPost);
        // setText("");
        dispatch({
            type: ADD_POST_REQUEST,
            data: {
                text,
            },
        });
    }, [text]);

    return (
        <Form onFinish={onSubmit}>
            <Input.TextArea
                onFinish={onSubmit}
                value={text}
                onChange={onChangeText}
                placeholder="어떤 신기한 일이 있었나요?"
            />
            <input type="file" multiple hidden />
            <TweetButtonWrapper>
                <PostingButton type="dashed">이미지 업로드</PostingButton>
                {/* <PostingButton type="dashed" htmlType="submit">짹짹</PostingButton> */}
                <Button type="primary" style={{ float: 'right' }} htmlType="submit" loading={addPostLoading}>짹짹</Button>
            </TweetButtonWrapper>
        </Form>
    )
}

export default PostForm
