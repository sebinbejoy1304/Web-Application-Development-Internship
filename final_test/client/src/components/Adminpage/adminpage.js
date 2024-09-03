import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, approvePost } from '../../actions/posts';
import { getBugs } from '../../actions/bugs';
import Navbar_adm from "../navbar_adm";

const AdminPage = () => {
    const posts = useSelector((state) => state.posts);
    const bugs = useSelector((state) => state.bugs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
        //dispatch(getBugs());
    }, [dispatch]);

    return (
        <div>
            <Navbar_adm />
            <div className="template-widget">
                <div className="container">
                    <div className="template-title">
                        <h2>Admin Page</h2>
                    </div>
                    <div className="template-body">
                        <div className="template-title">
                            <strong>Pending Requests</strong>
                        </div>
                        <div className='grid'>
                            {
                                posts.filter(allposts => allposts.approved === false).map(post => {
                                    return (
                                        <div className='g-col-3'>
                                            <div className='card'>
                                                <h4>{post.creator}</h4>
                                                <img src={post.selectedFile} width="90%" alt='' />
                                                <h3>{post.title}</h3>
                                                <p>{post.message}</p>
                                                <div class="button-row">
                                                    <button class="primary-btn submit-btn" onClick={() => dispatch(approvePost(post._id))}>Approve</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <hr />
                    <div className="template-body">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPage;