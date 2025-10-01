
function StudentCard(props) {
    return (
      <div className="student-card">
        <h3>{props.name}</h3>
        <p>ID: {props.id}</p>
        <p>Department: {props.department}</p>
      </div>
    )
  }
  
  export default StudentCard
  