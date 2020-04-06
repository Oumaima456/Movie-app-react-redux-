import React, { Component } from 'react'
import Starsrating from './Starrating'
import Modals from "./Modals"
import { connect } from 'react-redux'
import {deleteMovie}from '../Actions/Action function'
import {Link}from "react-router-dom"




  
class Filmlist extends Component {
   render(){
    return (
        <div className="film">
            {this.props.x.map(el=>
                
                <div className='div'  >
                    <img className='img' src={el.image}/>

                    <h5>{el.film}</h5>

                    <p className='starrr'><Starsrating starsrate={el.rating} /></p>
                    <p className="description"> {el.discription}</p>
                    <Link to={`/Discription/${el.id}`} className="link">Description Link</Link>
                    <button onClick={()=>this.props.deleteMovie (el.id)} className="btn btn-danger">DELETE</button>
                    <Modals movie={el}/>
                    </div>
                )}
        </div>
    )
}}
export default connect(null,{deleteMovie}) (Filmlist)
