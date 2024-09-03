import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import Navbar from '../Navbar/navbar';
import "../Template/fonts/stylesheet.css";
import "../Template/css/style.css";
import "./bugbounty.css";


import { createBug } from '../../actions/bugs.js';

const Bugbounty = () => {
    const [bugData, setBugData] = useState({ name: '', email: '', app: '', selectedFile: '', description: '' });
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createBug(bugData));
    }

    return (
        <div>
            <Navbar />
            <div className='template-widget'>
                <div className='container'>
                    <div className='template-title'>
                        <h2>Bug Bounty Program</h2>
                    </div>
                    <div className='template-body'>
                        <div className='card'>
                            <h3>About The Program</h3>
                            <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at libero ipsum. Cras mollis mi quis purus dapibus, vitae pellentesque dui consequat. Ut laoreet neque vitae mauris ultricies efficitur. Duis blandit libero interdum luctus eleifend. Vestibulum congue tempus sapien eu sollicitudin. Nullam feugiat, odio eu facilisis fringilla, massa ante consequat magna, at hendrerit neque sapien nec arcu. Integer volutpat accumsan massa eget sodales. Nam vestibulum elit in ante iaculis efficitur. Aenean accumsan accumsan dolor, sed accumsan felis semper eget. Aliquam a finibus lorem, et eleifend magna. In faucibus efficitur arcu, eu porta ex tincidunt ut. Integer bibendum, justo nec facilisis porttitor, velit metus placerat lacus, eu dictum felis lacus eu diam. Nam rutrum, purus ac ultricies auctor, tortor tellus fringilla lacus, quis vehicula dui magna id erat. Curabitur risus elit, mattis vel lacinia in, gravida vel diam. Aliquam ipsum magna, consectetur nec mattis ut, tincidunt in augue. Quisque faucibus ante ac ante rutrum faucibus.</strong>
                        </div>
                    </div>
                    <div className='template-body'>
                        <div className='grid'>
                            <div class="g-col-6">
                                <div class="input-row">
                                    <label>Name</label>
                                    <div class="input-group">
                                        <input type="text" class="input-ctrl" />
                                    </div>
                                </div>
                            </div>
                            <div class="g-col-6">
                                <div class="input-row">
                                    <label>Email</label>
                                    <div class="input-group">
                                        <input type="text" class="input-ctrl" />
                                    </div>
                                </div>
                            </div>
                            <div class="g-col-6">
                                <div class="input-row">
                                    <label>App</label>
                                    <div class="input-group">
                                        <select name="combobox" class="select-ctrl">
                                            <option value="Fednet">Fednet</option>
                                            <option value="FedMobile">FedMobile</option>
                                            <option value="FedCorp">FedCorp</option>
                                            <option value="Cards">Cards</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='g-col-6'>
                                <div class="input-row">
                                    <label>Please upload screenshot here</label>
                                    <div class="input-group">
                                        <FileBase type="file" multiple={false} onDone={({ base64 }) => setBugData({ ...bugData, selectedFile: base64 })} />
                                    </div>
                                </div>
                            </div>
                            <div class="g-col-12">
                                <div class="input-row mb-15">
                                    <label>Description</label>
                                    <div class="input-group">
                                        <textarea name="textarea" class="text-ctrl" required value={bugData.description} onChange={(e) => setBugData({ ...bugData, description: e.target.value })}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="g-col-12 text-right">
                                <div class="button-row">
                                    <button class="primary-btn submit-btn" onClick={handleSubmit}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div className='page_bug'>
            <Navbar />
            <div className='top_bug'>
                <h2>Bug Bounty Program</h2>
                <br /><br />
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at libero ipsum. Cras mollis mi quis purus dapibus, vitae pellentesque dui consequat. Ut laoreet neque vitae mauris ultricies efficitur. Duis blandit libero interdum luctus eleifend. Vestibulum congue tempus sapien eu sollicitudin. Nullam feugiat, odio eu facilisis fringilla, massa ante consequat magna, at hendrerit neque sapien nec arcu. Integer volutpat accumsan massa eget sodales. Nam vestibulum elit in ante iaculis efficitur. Aenean accumsan accumsan dolor, sed accumsan felis semper eget. Aliquam a finibus lorem, et eleifend magna. In faucibus efficitur arcu, eu porta ex tincidunt ut. Integer bibendum, justo nec facilisis porttitor, velit metus placerat lacus, eu dictum felis lacus eu diam. Nam rutrum, purus ac ultricies auctor, tortor tellus fringilla lacus, quis vehicula dui magna id erat. Curabitur risus elit, mattis vel lacinia in, gravida vel diam. Aliquam ipsum magna, consectetur nec mattis ut, tincidunt in augue. Quisque faucibus ante ac ante rutrum faucibus.</h4>
            </div>
            <form className='cover_bug' onSubmit={handleSubmit}>
                <span>
                    <label>Name </label>
                    <input type="text" value={bugData.name} onChange={(e) => setBugData({ ...bugData, name: e.target.value })} />
                </span>
                <span>
                    <label>Email </label>
                    <input type="text" value={bugData.email} onChange={(e) => setBugData({ ...bugData, email: e.target.value })} />
                </span>
                <span>
                    <label>App </label>
                    <select onChange={(e) => setBugData({ ...bugData, app: e.target.value })}>
                        <option value="Fednet">Fednet</option>
                        <option value="FedMobile">FedMobile</option>
                        <option value="FedCorp">FedCorp</option>
                        <option value="Cards">Cards</option>
                    </select>
                </span>

                <label>Please upload screenshot here </label>
                <FileBase type="file" multiple={false} onDone={({ base64 }) => setBugData({ ...bugData, selectedFile: base64 })} />

                <span>
                    <label>Description </label>
                    <textarea value={bugData.description} onChange={(e) => setBugData({ ...bugData, description: e.target.value })} />
                </span>
                <input type='submit' value='Submit' />
            </form>
        </div>
    )
}

export default Bugbounty;