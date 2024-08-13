import React, { useEffect, useState } from 'react';
import { Shimmer } from 'react-shimmer';

function ViewNotes() {
    const [notes, setNotes] = useState([]);
     const [loading,setLoading]=useState(true)
    useEffect(() => {
        setLoading(false)
        setNotes(localStorage.getItem('notes') ? (JSON.parse(localStorage.getItem('notes'))): []);
        
    }, []);

    return (
        <div className='d-flex gap-3 flex-wrap mt-3 mx-3'>
            {
                loading ? (
                    <div className='container '>
                        <Shimmer width={700} height={150} className='container mt-4' />
                        <Shimmer width={700} height={150} className='container mt-4' />
                        <Shimmer width={700} height={150} className='container mt-4'/>
                </div>
                )
                    :
                    (notes.map((item, index) => (
                        <div className='text-white bg-black p-3 rounded-3'>
                            <h1>{item.title}</h1>
                            <p>{item.desc}</p>

                        </div>
                    )))
            }
       </div>
    );
}

export default ViewNotes;
