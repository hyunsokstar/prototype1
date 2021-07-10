import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import AppLayout from "../components/AppLayout";
import PostForm from "../components/PostForm";
import Head from "next/head";
import PostCard from "../components/PostCard";

import { LOAD_POSTS_REQUEST } from '../reducers/post';


const Home = () => {
    const dispatch = useDispatch();

    const { me } = useSelector((state) => state.user);
    // const { mainPosts } = useSelector(state => state.post);
    const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector((state) => state.post);


    useEffect(() => {

        function onScroll() {
            // console.log(window.scrollY + document.documentElement.clientHeight, document.documentElement.scrollHeight);
            if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 300) {
                console.log("화면이 바닥에 도달했습니다.");
                if (hasMorePosts && !loadPostsLoading) {
                    console.log("화면이 바닥에 도달 + 포스팅 추가!!");
                    dispatch({
                        type: LOAD_POSTS_REQUEST,
                        data: mainPosts[mainPosts.length - 1].id,
                    });
                } else {
                    console.log("추가 포스팅 안가져옴 !");
                }
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, [mainPosts, hasMorePosts, loadPostsLoading]);

    return (
        <AppLayout>
            <Head>
                <title>Home</title>
            </Head>
            {/* <PostForm /> */}
            {me && <PostForm />}
            {mainPosts.map((c) => {
                return (
                    <PostCard key={c.id} post={c} />
                );
            })}
            
        </AppLayout>
    );
};


export default Home;

