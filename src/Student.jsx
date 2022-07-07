import Score from "./Score";

function Student(props) {

  return (
    <div>
      <h1>{props.student.name}</h1>
      <h1>{props.student.bio}</h1>
      {props.student.scores.map((score, idx) => 
        <Score key={idx} score={score}/>
      )}
    </div>
  );
}

// Must export the component's function (or class)
export default Student;