import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button'

import './Details.css';




class Details extends Component  {


    ////NEED TO ADD GENRE IN GET: SQL JOINS (SERVER SIDE)


    handleBack = () => {
        this.props.history.push('/')
    }

    handleEdit = () => {
        this.props.history.push('/edit')
    }


    render () {


        return (

            <div>
                {this.props.reduxStore.movieToGet.map(info => {
                    return (
                        <div className="detailsDiv">
                            <h1>{info.title}</h1> <br/>
                            <img src={info.poster} alt={info.title}/><br/>
                            <p>{info.description}</p><br/>
                        </div>
                    )
                })}

                <Button variant="outlined" color="primary" onClick={this.handleBack}>Back to List</Button>
                <Button variant="outlined" color="secondary" onClick={this.handleEdit}>Edit Details</Button>

                {/* {JSON.stringify(this.props.reduxStore.movieToGet)} */}
            </div>
        )
    }
}



const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}


export default connect (mapStateToProps) (Details);