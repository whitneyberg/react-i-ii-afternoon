import React from 'react';
import '../App.css'


function UpdateState(props){
    const {employees} = props 
return( 
    <div className = 'Main'>
    <h4 className='number'>{`${employees.id}`}/25</h4>
     <h1 className = 'name'>{`${employees.name.first} ${employees.name.last}`}</h1>
    <div className = 'info'>
            <div><strong>From: </strong> {`${employees.city}, ${employees.country}`}</div>
            <div><strong>Job Title: </strong>{employees.title}</div>
            <div><strong>Employer: </strong>{employees.employer}</div>
            
            </div>
                
    <ol className = 'movie-list'> <strong>Favorite Movies:</strong>{employees.favoriteMovies.map((element) => {
                return <li className = 'movie-title'>{element}</li>
            })}</ol>

            


</div>
)}

export default UpdateState