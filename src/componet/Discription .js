import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Discription extends Component {
    render() {
        if (!this.props.filmlist){
            return <h4>There is no movie !!!</h4>
        }
       const [movies]=this.props.filmlist.filter(el=>el.id==this.props.match.params.id)


        return (
            <div>
                <h3>Discription page</h3>
                <h5>{movies.discription}</h5>
                <h5>{movies.film}</h5>
            </div>
        )
    }
}
const mapReducerProps=state=>{
    return { filmlist:state.filmlist}
}
export default connect(mapReducerProps)(Discription)