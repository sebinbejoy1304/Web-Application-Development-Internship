import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';
import Navbar from '../Navbar/navbar';
import "../Template/fonts/stylesheet.css";
import "../Template/css/style.css";


import { createPost } from '../../actions/posts.js';

const Addblog = () => {

    const [postData, setPostData] = useState({ creator: '', title: '', message: '', selectedFile: '' });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const usrnm = localStorage.getItem('username');
        postData.creator = usrnm;
        dispatch(createPost(postData));
        navigate('/');
    }
    return (
        <div >
            <Navbar />
            <div className='template-widget'>
                <div className='container'>
                    <div className='template-title'>
                        <h2>Add Blog/Post</h2>
                    </div>
                    <div className='template-body'>
                        <div className='grid'>
                            <div className='g-col-12'>
                                <div class="input-row">
                                    <label>Title</label>
                                    <div class="input-group">
                                        <input type="text" class="input-ctrl" required value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                                    </div>
                                </div>
                            </div>
                            <div class="g-col-12">
                                <div class="input-row mb-15">
                                    <label>Description</label>
                                    <div class="input-group">
                                        <textarea name="textarea" class="text-ctrl" required value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className='g-col-12'>
                                <div class="input-row">
                                    <label>Image upload</label>
                                    <div class="input-group">
                                        <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                                    </div>
                                </div>
                            </div>
                            <div class="g-col-12 text-right">
                                <div class="button-row">
                                    <button class="primary-btn submit-btn" onClick={handleSubmit}>Submit</button>
                                    <a href="/" class="secondary-btn submit-btn">Cancel</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addblog;