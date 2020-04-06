import  React, { Component,Fragment } from 'react';
import './App.css';
import Search from './componet/Search'
import Filmlist from "./componet/Films"
import Starrating from './componet/Starrating';
import Modals from "./componet/Modals";
import {connect} from "react-redux"
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Discription from "./componet/Discription "





export const filmlist =[
  {
   image : "https://fr.web.img3.acsta.net/pictures/19/11/12/12/39/4173422.jpg",
   film: "Scooby2020",
   rating:"2",
  id:1,
  discription:"After an acrimonious break up, the Mystery Inc. gang are individually brought to an island resort to investigate strange goings on.",
   

   
  },
  {image: "https://i0.wp.com/www.ccop.fr/wp-content/uploads/affiche-docteur.jpg?fit=1158%2C1558&ssl=1",
  film :"Docteur?-2018",
  rating:"4",
  id:2,
  discription:"After an acrimonious break up, the Mystery Inc. gang are individually brought to an island resort to investigate strange goings on.",

},
  {image: "https://aws1.vdkimg.com/film/1/3/8/8/1388853_poster_scale_480x640.jpg",
  film:"Black Widow-2020",
  rating:"3",
  id:3,
  discription:"At birth the Black Widow (aka Natasha Romanova) is given to the KGB, which grooms her to become its ultimate operative. When the U.S.S.R. breaks up, the government tries to kill her as the action moves to present-day New York, where she is a freelance operative.",
},
  {image: "https://drraa3ej68s2c.cloudfront.net/wp-content/uploads/2020/01/06153531/a5ed00d12054b19c1708af0cfc7a054fd68ccf9de8474bd2d3dc8e19bd56433f-370x492.jpg",
  film: "Little Women-2019",
  rating:"1",
  id:4,
  discription:"In the years after the Civil War, Jo March lives in New York and makes her living as a writer, while her sister Amy studies painting in Paris. Amy has a chance encounter with Theodore, a childhood crush who proposed to Jo but was ultimately rejected. Their oldest sibling, Meg, is married to a schoolteacher, while shy sister Beth develops a devastating illness that brings the family back together.",

},
  {image: "https://cdn.mamamia.com.au/wp/wp-content/uploads/2019/10/23111212/17-600x1091.jpg",
  film: "The Dry-2010",
  rating:"6",
  id:5,
  discription:"A small town hides big secrets in The Dry,.After getting a note demanding his presence,Luke.Twenty years ago when Falk was accused of murder, Luke was his alibi. Falk and his father fled under a cloud of suspicion, saved from prosecution only because of Luke’s steadfast claim that the boys had been together at the time of the crime. But now more than one person knows they didn’t tell the truth back then, and Luke is dead.",
},
  {image: "https://media.senscritique.com/media/000019176495/source_big/Radioactive.jpg",
  film: "Radioactive-2020",
  rating:"2",
  id:6,
  discription:"The scientific and romantic passions of Marie Sklodowska-Curie and her husband Pierre Curie, and the reverberations of their discoveries throughout the 20th century.",
}]
class App extends Component {
  state={
  search:"",
  rate:1,

  }
  handlesearch=(e)=>{this.setState({search:e.target.value})}
  handlestar=(ele)=>{this.setState({rate:ele})}
  

 
render(){


  return (
    <div>
      <header>

        <img className='hello' src='data:image/jpeg;base64,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'/>
     <h1 className='moviee'>Movies</h1>
     <div className="rating-filter">
        <span className="rating">Minimum rating</span>
        <span><Starrating   starsrate={this.state.rate} handlestar={this.handlestar}/></span>
     
      </div>
     </header>
      

      
      <Search  handlesearch={this.handlesearch} handlestar={this.handlestar}/>
     
      <Router>
            
            <Switch>
                
                <Route exact path="/" render={()=><Fragment>
                 <Filmlist x={this.props.filmlist.filter(el=>el.rating>=this.state.rate && el.film.toLowerCase().includes(this.state.search.trim().toLowerCase()))}/>
                 <Modals />

                 </Fragment>} />
                    
               
                <Route path="/Discription/:id" exact component={Discription}/>


            </Switch>


        </Router>
      
      
      
    </div>
  );
}}
const mapStateProps=state=>{
  return {filmlist:state.filmlist}
}

export default connect(mapStateProps) (App);
