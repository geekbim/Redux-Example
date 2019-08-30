import React, { Component } from 'react'
import {connect} from 'react-redux'

class Lifecycle extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        console.log('constructor')
    }

    static getDrivedStateFromProps(prop, state) {
        console.log('getDrivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.group('shoulComponentUpdate')
        console.log('this state: ', this.state)
        console.log('nextState: ', this.nextState)
        console.groupEnd()
        if (nextState.count > 4) {
            return false
        }
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapShotBeforeUpdate')
        return null
    }

    componentDidUpdate(prevProps, prevState, snapShot) {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        console.log('render')
        return (
            <div className="container">
                <p className="mt-5">Lifecycle Page</p>
                <hr/>
                <button type="button" className="btn btn-primary btn-block" onClick={this.changeCount}>Block Level Button {this.state.count}</button>
                <hr/>
                <p>Total Order: {this.props.order}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

export default connect(mapStateToProps) (Lifecycle)
