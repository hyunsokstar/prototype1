import React, { useCallback, useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import useInput from '../hooks/useInput';
// import { useSelector } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_COMMENT_REQUEST } from '../reducers/post';



const CommentForm = ({ post }) => {
    console.log("post.id(CommentForm) :", post.id);
    const dispatch = useDispatch();


    const id = useSelector((state) => state.user.me?.id);
    const { addCommentDone, addCommentLoading } = useSelector((state) => state.post);

    const [commentText, onChangeCommentText, setCommentText] = useInput('');

    const onSubmitComment = useCallback(() => {
        console.log("submit post.id : ", post.id); // 본문글
        console.log("userId : ", id);  // 댓글 작성자, 로그인 유저
        console.log("commentText  : ", commentText); // 댓글내용

        dispatch({
            type: ADD_COMMENT_REQUEST,
            data: { content: commentText, userId: id, postId: post.id },
        });

    }, [commentText, id]);

    useEffect(() => {
        if (addCommentDone) {
            setCommentText('');
        }
    }, [addCommentDone]);

    return (
        <Form onFinish={onSubmitComment}>
            <Form.Item style={{ position: 'relative', marginTop: "2px" }}>
                <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText} />
                <Button
                    style={{ position: 'absolute', right: 0, bottom: -40 }}
                    type="primary"
                    htmlType="submit"
                    loading={addCommentLoading}
                >
                    삐약
                </Button>
            </Form.Item>
        </Form>
    );
};


CommentForm.propTypes = {
};


export default CommentForm;
