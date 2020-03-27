import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// Root Actions Object
import Actions from './redux/actions'
import type { State } from './types';
import MainContainer from './components/MainContainer/index'

//import { withRouter } from 'react-router-dom'

// STATE map to app PROP
const mapStateToProps = (state: State) => {
	return { 
		demo_state: state.demo_state,
	}
}

// DISPATCH ACTION map to app PROP
const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(Actions, dispatch)
	}
} 

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MainContainer)

// export default withRouter(connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(MainContainer))


