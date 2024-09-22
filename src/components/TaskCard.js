import React from 'react';
import './TaskCard.css';

const TaskCard = ({ ticket, showRadio, showUser }) => {
  // Function to determine which icon to display based on the ticket's status
  const getStatusIcon = (status) => {
    switch (status) {
      case 'Done':
        return <img src="/Untitled/icons_FEtask/Done.svg" alt="Done Icon" />;
      case 'In progress':
        return <img src="/Untitled/icons_FEtask/in-progress.svg" alt="In Progress Icon" />;
      case 'Todo':
        return <img src="/Untitled/icons_FEtask/To-do.svg" alt="Todo Icon" />;
      case 'Cancelled':
        return <img src="/Untitled/icons_FEtask/Cancelled.svg" alt="Cancelled" />;
      case 'Backlog':
        return <img src="/Untitled/icons_FEtask/Backlog.svg" alt="Backlog Icon" />;
      case 'No priority':
        return <img src="/Untitled/icons_FEtask/3 dot menu.svg" alt="No Priority Icon" />;
      case 'Urgent':
        return <img src="/Untitled/icons_FEtask/exclamation_5584481.png" alt="Urgent Icon" />;
      case 'High':
        return <img src="/Untitled/icons_FEtask/Img - High Priority.svg" alt="High Priority Icon" />;
      case 'Medium':
        return <img src="/Untitled/icons_FEtask/Img - Medium Priority.svg" alt="Medium Priority Icon" />;
      case 'Low':
        return <img src="/Untitled/icons_FEtask/Img - Low Priority.svg" alt="Low Priority Icon" />;
      default:
        return null; // No icon for undefined or other statuses
    }
  };

  return (
    <div className="task-card">
      {/* User icon positioned at the top right */}
      {/* {showUser && (
        <div className="user-icon">
          <img src="/Untitled/icons_FEtask/user.svg" alt="User Icon" />
        </div>
      )} */}

      <p className="ticket-id">{ticket.id}</p>
      <div className="task-content">
        <div className="icon-title">
          {showRadio && getStatusIcon(ticket.status)}
          <h5 className="task-title">{ticket.title}</h5>
        </div>
        {showUser && (
        <div className="user-icon">
          <img src="/Untitled/icons_FEtask/user.svg" alt="User Icon" />
        </div>
      )}
        
        <div className="ticket-details">
          <img src="/Untitled/icons_FEtask/3 dot menu.svg" alt="Menu Icon" />
          <p className="tags">{ticket.tag.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
