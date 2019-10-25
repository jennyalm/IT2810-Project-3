import React, { useEffect } from "react";
import { Button } from 'reactstrap'
import { connect } from 'react-redux';

import { nextPage, prevPage } from '../../actions'



const Pages = (props) => {

    const callpageFunction = (action) => {
        if(props.page === 1 && action === props.prevPage){
            props.changePage()
        }
        else{
            action()
            props.changePage()
        }
        
    }


    return(
        <div>
            <Button size="lg" block color="success" onClick={() => callpageFunction(props.prevPage)} type="submit" value="PREV">PREV</Button>
            <Button size="lg" block color="success" onClick={() => callpageFunction(props.nextPage)} type="submit" value="PREV">NEXT</Button>
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

