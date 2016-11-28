import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="data-list">

      {props.members.map(member => {

        return (
          <div key={member.id} className="data-list-item">
            <div className="details">
              <Link to={'/members/' + member.id}>{member.name}</Link>
            </div>
            <div className="controls">
              <button onClick={props.deleteMember.bind(null, member.id)} className="delete">Delete</button>
            </div>
          </div>
        );

      })}

    </div>
  );
}
