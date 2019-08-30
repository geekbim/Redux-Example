import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import ActionType from  '../../Redux/Reducer/globalActionType'

class Counter extends Component {
    render() {
        return (
            <Fragment>
                <a className="btn btn-primary text-left mr-3" onClick={this.props.handleMinus}>-</a>

                <input className="text-center" type="text" value={this.props.order}/>
                
                <a className="btn btn-primary text-left ml-3" onClick={this.props.handlePlus}>+</a>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus: () => {dispatch({type: ActionType.PLUS_ORDER})},
        handleMinus: () => {dispatch({type: ActionType.MINUS_ORDER})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Counter)
