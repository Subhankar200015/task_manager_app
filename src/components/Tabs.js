import React from "react";

function Tabs() {
  return (
    <div>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button className="nav-link active" id="nav-upcoming-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Upcoming</button>
            <button className="nav-link" id="nav-overdue-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Overdue</button>
            <button className="nav-link" id="nav-completed-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Completed</button>
        </div></nav>
        
        <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-upcoming" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">...</div>
            <div className="tab-pane fade" id="nav-overdue" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">...</div>
            <div className="tab-pane fade" id="nav-completed" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">...</div>
        </div>
    </div>
  );
}

export default Tabs;
