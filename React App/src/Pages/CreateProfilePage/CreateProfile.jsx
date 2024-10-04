import React from 'react';
import './createProfile.css';

const CreateProfile = () => {
    return (
        <div className="container rounded bg-white mt-5 mb-5">
            <div className="row">
                <div className="col-md-3 border-right d-flex flex-column align-items-center text-center p-3 py-5">
                    <img 
                        className="rounded-circle mt-5 profile-picture" 
                        src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" 
                        alt="Profile"
                    />
                </div>
                <div className="col-md-9">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="text-right">Profile Settings</h4>
                        </div>
                        <form>
                            <div className="row mt-2">
                                <div className="col-md-6">
                                    <label className="labels">Name</label>
                                    <input type="text" className="form-control" placeholder="First Name" />
                                </div>
                                <div className="col-md-6">
                                    <label className="labels">Surname</label>
                                    <input type="text" className="form-control" placeholder="Surname" />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <label className="labels">Mobile Number</label>
                                    <input type="tel" className="form-control" placeholder="Enter phone number" />
                                </div>
                                <div className="col-md-6">
                                    <label className="labels">Email ID</label>
                                    <input type="email" className="form-control" placeholder="Enter email ID" />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <label className="labels">Address Line 1</label>
                                    <input type="text" className="form-control" placeholder="Enter address line 1" />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Address Line 2</label>
                                    <input type="text" className="form-control" placeholder="Enter address line 2" />
                                </div>
                                <div className="col-md-6 mt-3">
                                    <label className="labels">Postcode</label>
                                    <input type="text" className="form-control" placeholder="Enter postcode" />
                                </div>
                                <div className="col-md-6 mt-3">
                                    <label className="labels">State</label>
                                    <input type="text" className="form-control" placeholder="Enter state" />
                                </div>
                                <div className="col-md-6 mt-3">
                                    <label className="labels">Area</label>
                                    <input type="text" className="form-control" placeholder="Enter area" />
                                </div>
                                <div className="col-md-6 mt-3">
                                    <label className="labels">Country</label>
                                    <input type="text" className="form-control" placeholder="Country" />
                                </div>
                                <div className="col-md-6 mt-3">
                                    <label className="labels">State/Region</label>
                                    <input type="text" className="form-control" placeholder="State" />
                                </div>
                                <div className="col-md-6 mt-3">
                                    <label className="labels">Education</label>
                                    <input type="text" className="form-control" placeholder="Education" />
                                </div>
                            </div>
                            <div className="mt-5 text-center">
                                <button className="btn btn-primary profile-button" type="submit">Save Profile</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateProfile;
