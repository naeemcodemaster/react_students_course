
import { useState } from 'react';
import './datatable.css';
function OldForm() {

    const [name,setName] = useState("");
    const [course,setCourse] = useState("");
    const [fee,setFee] = useState("");

    const handleName = (e) => {
        
        setName(e.target.value);
    }

    const handleCourse = (e) => {
        setCourse(e.target.value);
    }

    const handleFee = (e) => {
        setFee(e.target.value);
    }
    

    const handleAddData = () => {
        console.log("name is ", name , " course is ", course , "fee is ",fee);
    }

    return (
        <div className="container">
            <div className='leftside_form'>
                <h2>Form</h2>
                <div className='formInputs'>
                    <input type='text' value={name} onChange={handleName} placeholder="Enter Name" />
                    <input type='text' value={course} onChange={handleCourse}  placeholder="Enter Course" />
                    <input type='text' value={fee} onChange={handleFee} placeholder="Enter Fee" />
                    <button onClick={handleAddData}>Save</button>
                </div>
            </div>
            <div className='rightside_datatable'>
                <h2>Data Table</h2>
                <input type='text' placeholder="Search by Name" />

                <table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Course</th>
                            <th>Fee</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>khan</td>
                            <td>Java</td>
                            <td>25000</td>
                            <td><button>update</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                    </tbody>
                </table>
                <div className='pagination'>

                </div>
            </div>
        </div>
    )
}

export default OldForm