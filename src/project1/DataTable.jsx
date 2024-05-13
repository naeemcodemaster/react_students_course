
import { useState } from 'react';
import './datatable.css';
function DataTable() {
    const [allData,setAllData] = useState([]);


    const [formData,setFormData] = useState({
        name:"",
        course:"",
        fee:""
    })

    const handleInputData = (e) =>{
    
        setFormData({...formData,[e.target.name]:e.target.value});
        
        
    }
    console.log(formData);

    const handleAddData = (e) => {
        
    }

    return (
        <div className="container">
            <div className='leftside_form'>
                <h2>Form</h2>
                <div className='formInputs'>
                    <input type='text' name='name' value={formData.name} onChange={handleInputData} placeholder="Enter Name" />
                    <input type='text' name='course' value={formData.course} onChange={handleInputData}  placeholder="Enter Course" />
                    <input type='text' name='fee' value={formData.fee} onChange={handleInputData} placeholder="Enter Fee" />
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

export default DataTable