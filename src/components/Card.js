
function Card(props) {
    return (
        <div className="card mb-1 border-secondary">
          <img className="mx-auto" width="180" height="120"
               alt={props.name}
               src={props.image} /> 
           <div className="card-body">
             <h4>name: {props.name}</h4>
             <h4>trophy: {props.trophy}</h4>
          </div>
       </div>
    );
  }
  
  export default Card;