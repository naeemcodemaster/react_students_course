
import { useEffect, useState } from 'react';
import './datatable.css';
function DataTable() {

    const [allData, setAllData] = useState([]);

    const [formData, setFormData] = useState({
        name: "",
        course: "",
        fee: ""
    })

    { name: "khan" }

    const handleInputData = (e) => {

        setFormData({ ...formData, [e.target.name]: e.target.value });

        // {name:"khan",course:"java1",fee:2000}

    }
    // console.log(formData);


    const handleAddData = () => {
        if (formData.name && formData.course && formData.fee) {
            const newData = {
                id: Date.now(),
                name: formData.name,
                course: formData.course,
                fee: formData.fee
            }
            setAllData([...allData, newData]);
            setFormData({ name: "", course: "", fee: "" })

        }


        // console.table(allData);

    }


    // ===== DELETE HANDLE =====================
    const handleDelete = (id) => {
        const updatedData = allData.filter((record) => record.id !== id);
        setAllData(updatedData);
    }


    // ============== EDIT HANDLE ========================
    const [editId, setEditId] = useState(false);


    useEffect(() => {
        if (!editId) return;
        let selectedRecord = document.querySelectorAll(`[id='${editId}']`);
        // console.log(selectedRecord);
        selectedRecord[0].focus();

    }, [editId])


    const handleEdit = (id, field) => {
        if (!editId || editId !== id) {
            return;
        }
        const updateData = allData.map((record) => record.id == id ? { ...record, ...field } : record);
        setAllData(updateData);
    }


    return (
        <div className="container">
            <div className='leftside_form'>
                <h2>Form</h2>
                <div className='formInputs'>
                    <input type='text' name='name' value={formData.name} onChange={handleInputData} placeholder="Enter Name" />
                    <input type='text' name='course' value={formData.course} onChange={handleInputData} placeholder="Enter Course" />
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

                        {
                            allData.map((record, index) => (
                                <tr key={index}>
                                    <td id={record.id} contentEditable={editId == record.id} onBlur={(e) => handleEdit(record.id, { name: e.target.innerText })}>{record.name}</td>
                                    <td id={record.id} contentEditable={editId == record.id} onBlur={(e) => handleEdit(record.id, { course: e.target.innerText })}>{record.course}</td>
                                    <td id={record.id} contentEditable={editId == record.id} onBlur={(e) => handleEdit(record.id, { fee: e.target.innerText })}>{record.fee}</td>
                                    <td><button onClick={() => setEditId(record.id)}>Update</button></td>
                                    <td><button onClick={() => handleDelete(record.id)}>Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div className='pagination'>

                </div>
            </div>
        </div>
    )
}

export default DataTable