import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shimmer } from 'react-shimmer';
import { toast } from 'react-toastify';
import './style1.css'
function Create() {
    const [newNote, setNewNote] = useState({
        title: '',
        desc: '',
    });
    const [loading, setLoading] = useState(true);
    const [notes, setNotes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Load notes from local storage on component mount
        const savedNotes = localStorage.getItem('notes');
        if (savedNotes) {
            setNotes(JSON.parse(savedNotes));
        }
        setLoading(false);
    }, []);

    const changeInput = (e) => {
        const { name, value } = e.target;
        setNewNote({
            ...newNote,
            [name]: value
        });
    };

    const saveHandler = () => {
        if (!newNote.title || !newNote.desc) {
            toast.error('Please enter all the mandatory details');
            return;
        }

        const updatedNotes = [...notes, newNote];
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
        setNotes(updatedNotes); // Update the local state

        toast.success('Note saved successfully');
    };

    return (
        <div>
            <div className='bannerImage'>
               <h1 className='display-1 fw-bold'> CREATE NOTES APP</h1>
            </div>
            {loading ? (
                <div className='container d-flex justify-content-around align-items-center'>
                    <div className='border-4'>
                        <Shimmer width={400} height={40} className='mt-3 mb-4' />
                        <Shimmer width={400} height={40} />
                        <Shimmer width={100} height={40} className='rounded-pill mt-3' />
                    </div>
                    <div className='col-md-4'>
                        <Shimmer width={500} height={500} />
                    </div>
                </div>
            ) : (
                <div className='mt-5 d-flex align-items-start container gap-5'>
                    <div className='p-3 w-50 border-4 rounded-3' style={{ border: '2px solid brown' }}>
                        <form className='form-group'>
                            <h1 className='' style={{ color: 'brown' }}>Create Notes</h1>
                            <div className='mt-5'>
                                <label className='form-label fw-bold'>Title</label>
                                <input className='form-control' type='text' placeholder='Enter title' name='title' value={newNote.title} onChange={changeInput} />
                            </div>
                            <div className='mt-3'>
                                <label className='form-label fw-bold'>Description</label>
                                <input className='form-control' type='text' placeholder='Enter description' name='desc' value={newNote.desc} onChange={changeInput} />
                            </div>
                           <Link to='/notes/view'> <button
                                className='border-0 text-light p-2 px-4 rounded-2 mt-4 px-5 text-success'
                                style={{ background: 'brown', color: 'white' }}
                                onClick={saveHandler}
                            >
                                Save
                            </button></Link>
                        </form>
                    </div>
                    <div className='w-25' style={{maxHeight:'100px !important'}}>
                        <img src="https://img.freepik.com/premium-vector/yellow-sticky-note-with-pin-isolated-background-vector-illustration_230920-630.jpg?uid=R137116910&ga=GA1.1.132014876.1707307712&semt=ais_hybrid" alt="Sticky Note" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Create;
