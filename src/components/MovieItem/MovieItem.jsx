import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { TableCell } from '@material-ui/core';




class MovieItem extends Component {

    //ON CLICK OF POSTER ROUTE TO DETAILS PAGE DISPLAY OF MOVIE INFORMATION
    //SEND ID
    handleClick = (id) => {
        console.log('movie poster clicked', id);
        //DISPATCH TO SAGA AND GET MOVIE DETAILS OF ID
        this.props.dispatch({
            type: 'GET_MOVIE_GENRES',
            payload: id
        })
        this.props.dispatch({
            type: 'GET_MOVIE_DETAILS',
            payload: id
        })
        //PUSH HISTORY TO DETAILS LINK(DISPLAYS DETAILS ABOUT MOVIE OF POSTER CLICKED)
        this.props.history.push('/details');
    }

    render () {

       
        return (
        
            <>
                <TableCell>{this.props.title}</TableCell>
                <TableCell >
                    <img src={this.props.poster} alt={this.props.alt} onClick={() => this.handleClick(this.props.id)}/>
                </TableCell>
            </>
            
        )

            
    }
    
}





export default withRouter(connect() (MovieItem));