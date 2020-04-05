import React, { Component } from "react";
import {Button, Modal, FormControl} from 'react-bootstrap';
import{connect}from 'react-redux';
import {addMovie,editMovie}from "../Actions/Action function"




class Modals extends Component{
state={film:this.props.movie?this.props.movie.film:"",
rating:this.props.movie?this.props.movie.rating:"",
image:this.props.movie?this.props.movie.image:"",
discription:this.props.movie?this.props.movie.discription:"",



show:false}
filmName=(e)=>{this.setState({film:e.target.value})};
filmRate=(e)=>{this.setState({rating:e.target.value})};
filmImage=(e)=>{this.setState({image:e.target.value})};
filmdisciption=(e)=>{this.setState({discription:e.target.value})};


handleshow=()=>{this.setState({show:!this.state.show})};
handleInput=()=>{this.props.movie?
  this.props.editMovie({film:this.state.film,image:this.state.image,rating:this.state.rating,discription:this.state.discription,id:this.props.movie.id

  })
  && this.setState({show:false}) 
  :
  this.props.addMovie({film:this.state.film,image:this.state.image,rating:this.state.rating,discription:this.state.discription
  })

  && this.setState({show:false}) 
}





render()
{
    return(<div>
        <Button variant="secondary" className={this.props.movie?"Modal-cont" :"Modal-add"} onClick={this.handleshow}>
        <img className={this.props.movie?"Modal-img":"Modal-pluus"} src="https://cdn3.iconfinder.com/data/icons/glyph/227/Button-Add-1-512.png"/>
         
        </Button>
        <Modal className="Modal-content" show={this.state.show} onHide={this.handleshow} animation={false}>
          <Modal.Header style={{background: "#D8DEDE"}} closeButton>
            <Modal.Title style={{marginLeft: "25%"}}>Insert New Movie</Modal.Title>
          </Modal.Header>

          <Modal.Body className="Modal-input" >
            
            <form 
             onSubmit={e => {
              e.preventDefault();
            
              this.setState({ show: false,
                newfilm:"",
                newrate:"0",newimage:"", show:false} );


            }}
          >
              <label className="MN fname">Enter a movie name:</label>
              <input className="title-input input"  placeholder="Movie's Name" name='title' type='text' onChange={this.filmName}value={this.state.film}/>
              <label className="MI fname">Enter an image for your movie</label>
              <input className="img-input input" placeholder="Your image's movie" name='image' type='text' onChange={this.filmImage}value={this.state.image}/>
              <label className="MR fname">Give a rate to your movie:</label>
              <input className="rating-input input" placeholder="Rate" name='rating' type='text'  onChange={this.filmRate} value={this.state.rating}/>
              
              <label className="MN fname">Enter a description:</label>
              <input className="discription-input input" placeholder="description" name='discription' type='text'  onChange={this.filmdisciption} value={this.state.discription}/>

                  
                  
              
              </form >
          </Modal.Body>
          <Modal.Footer>
          <button className="bou" variant="primary" onClick={()=>this.handleInput()}>Save Changes</button>

            <Button className="bou" variant="secondary" onClick={this.handleshow}>
              Close
            </Button>
          
          </Modal.Footer>
        </Modal>

    </div>);
}}

export default connect(null,{addMovie,editMovie}) (Modals)