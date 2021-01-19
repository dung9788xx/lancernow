import React, {useEffect, useState} from 'react';
import {connect, useDispatch} from "react-redux";
import PropTypes from 'prop-types';

 function Test(props) {
  return(
      <div>
          aaa {props.username}
          <button onClick={props.setName}>
              button
          </button>
      </div>
  )
}
Test.propTypes = {
     username: PropTypes.string.isRequired
}
Test.defaultProps = {
     username: "ABC",
}
const mapStateToProps = state => (
    {  username: state.user.username}
)
const mapDispatchToProps = dispatch=>{
     return {
         setName:()=> dispatch({type:"USER_FETCH_REQUESTED"})
     }
}
export default connect(mapStateToProps,mapDispatchToProps)(Test);
