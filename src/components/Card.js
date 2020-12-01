

function Card({id, name, image, trophy, deleteTeam}) {
    return (
        <div className="card mb-1 border-secondary">
          <img className="mx-auto" width="180" height="120"
               alt={name}
               src={image} /> 
           <div className="card-body">
             <h4>name: {name}</h4>
             <h4>trophy: {trophy}</h4>
            <div className="d-flex flex-row-reverse bd-highlight">
              <button onClick={deleteTeam.bind(this, id)}
                       className="btn btn-danger">
                <i className="fas fa-trash text-white"></i>
              </button>
            </div>

          </div>
       </div>
    );
  }
 export default Card;