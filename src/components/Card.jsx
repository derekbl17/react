import React from "react";

const Card=({id,email,first_name,last_name,avatar})=>{
    return (
        <div className="card" key={id+Date.now()}>
            <img src={avatar} alt={`${first_name} ${last_name}`} className="card-image" />
            <div className="card-conent">
                <h3>{first_name} {last_name}</h3>
                <p>{email}</p>
            </div>
        </div>
    )
}
export default Card