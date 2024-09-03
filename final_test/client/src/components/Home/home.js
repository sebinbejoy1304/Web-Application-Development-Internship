import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../actions/posts';
import Navbar from '../Navbar/navbar';
import "../Template/fonts/stylesheet.css";
import "../Template/css/style.css";

const Home = () => {
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <div>
            <Navbar />
            <div className="template-widget">
                <div className="container">
                    <div className="template-title">
                        <h2>Home Page</h2>
                    </div>
                    <div className='template-body'>
                        <div className='template-title'>
                            <h3>Announcements</h3>
                        </div>
                        <div className='card'>
                            <img src='https://img.freepik.com/premium-vector/megaphone-with-important-announcement-flat_149152-517.jpg?w=2000' alt='announcement' width={'100%'} />
                        </div>
                    </div>
                    <hr />
                    <div className='template-body'>
                        <div className='template-title'>
                            <h2>Blogs</h2>
                        </div>
                        <div className='grid'>
                            {
                                posts.filter(allposts => allposts.approved === true).map(post => {
                                    return (
                                        <div className='g-col-6'>
                                            <div className='card'>
                                            <h4>{post.creator}</h4>
                                            <img src={post.selectedFile} width="90%" alt=''/>
                                            <h3>{post.title}</h3>
                                            <p>{post.message}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Home;