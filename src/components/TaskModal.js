import React, { useState } from 'react'

function TaskModal({ showModal, setShowModal, addTask }) {

    const [task, setTask] = useState({
        title: "",
        description: "",
        dueDate: "",
        priority: "Low",
      });

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(task);
        setShowModal(false);
        setTask({ title: "", description: "", dueDate: "", priority: "Low" });
    }

    if (!showModal) return null;

    return (
    <>
    <div className={`modal ${showModal ? "show" : ""}`} style={{ display: showModal ? "block" : "none" }} tabindex="-1">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Add New Task</h5>
                    <button type="button" className="btn-close" onClick={() => setShowModal(false)} data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                
                <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label className='form-label'>Title</label>
                            <input type="text" name='title' className='form-control' value={task.title} onChange={handleChange} required/>
                        </div>
                        
                        <div className='mb-3'>
                            <label className='form-label'>Description</label>
                            <textarea name='description' className='form-control' rows="4" value={task.description} onChange={handleChange}required/>
                        </div>
                        
                        <div className='mb-3'>
                            <label className='form-label'>Due Date</label>
                            <input type="date" name='dueDate' className='form-control' value={task.dueDate} onChange={handleChange} required/>
                        </div>
                        
                        <div className='mb-3'>
                            <label className='form-label'>Priority</label>
                            <select name="priority" className='form-select' value={task.priority} onChange={handleChange}>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>
                        </div>
                        
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary">Add Task</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div className="modal-backdrop fade show"></div>
    </>
  )
}

export default TaskModal