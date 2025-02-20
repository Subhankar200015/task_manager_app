import React, { useState } from "react";
import TaskModal from "./TaskModal";

function Sidebar({ addTask }) {
  
  const[showModal, setShowModal] = useState(false);

  return (
    <div className="d-flex flex-column p-3 bg-light" style={{ width: "250px", height: "100vh" }}>
      <button type="button" className="btn btn-outline-secondary mb-4" onClick={() => setShowModal(true)}>+ Add Task
      </button>

      <nav className="nav flex-column nav-pills">
        <button className="nav-link active" id="nav-all-tab" data-bs-toggle="tab" data-bs-target="#nav-all" type="button" role="tab" aria-controls="nav-all" aria-selected="true">All</button>
        <button className="nav-link" id="nav-high-tab" data-bs-toggle="tab" data-bs-target="#nav-high" type="button" role="tab" aria-controls="nav-high" aria-selected="false">High</button>
        <button className="nav-link" id="nav-medium-tab" data-bs-toggle="tab" data-bs-target="#nav-medium" type="button" role="tab" aria-controls="nav-medium" aria-selected="false">Medium</button>
        <button className="nav-link" id="nav-low-tab" data-bs-toggle="tab" data-bs-target="#nav-low" type="button" role="tab" aria-controls="nav-low" aria-selected="false">Low</button>
      </nav>

      {/* Tab Content */}
      <div className="tab-content mt-3" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab"><p></p></div>
        <div className="tab-pane fade" id="nav-high" role="tabpanel" aria-labelledby="nav-high-tab"><p></p></div>
        <div className="tab-pane fade" id="nav-medium" role="tabpanel" aria-labelledby="nav-medium-tab"><p></p></div>
        <div className="tab-pane fade" id="nav-low" role="tabpanel" aria-labelledby="nav-low-tab"><p></p></div>
      </div>

      <TaskModal showModal={showModal} setShowModal={setShowModal} addTask={addTask} />
    </div>
  );
}

export default Sidebar;