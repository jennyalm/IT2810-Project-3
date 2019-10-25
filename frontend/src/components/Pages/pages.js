import React, { useEffect } from "react";
import { Button } from 'reactstrap'
import { connect } from 'react-redux';

import { nextPage, prevPage } from '../../actions'
import './pages.css'


const Pages = (props) => {

    // sender inn en increment, siden state ikke oppdateres raskt nok.
    const callpageFunction = (action, increment) => {
        if(props.page === 1 && action === props.prevPage){
            props.changePage(props.page)
        }
        else{
            action()
            props.changePage(props.page + increment)
        }
        
    }


    return(
        <div className="buttons">
            <p>Page: {props.page}</p>
            <Button size="lg" color="success" onClick={() => callpageFunction(props.prevPage, -1)} type="submit" value="PREV">PREV</Button>
            <Button size="lg" color="success" onClick={() => callpageFunction(props.nextPage, 1)} type="submit" value="PREV">NEXT</Button>
        </div>
    )


}


const mapStateToProps = state => ({
    page: state.PageReducer.page
})

const mapDispatchToProps = dispatch => {
    return {
        nextPage: () => dispatch(nextPage()),
        prevPage: () => dispatch(prevPage())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Pages);

