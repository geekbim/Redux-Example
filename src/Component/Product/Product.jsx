import React, { Component, Fragment } from 'react'
import cart from '../../img/cart.png'
import {connect} from 'react-redux'
import Content from './Content'

class Product extends Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <p className="mt-5">Product Page</p>
                    <hr/>
                    <div className="row">
                        <div className="col-md-5 mid mx-auto my-3">
                            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link font-weight-bold" href="#">Abim</a>
                                    </li>
                                </ul>
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <img src={cart} height="30" width="30" alt="cart"/>
                                        <span className="badge badge-success">{this.props.order}</span>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <Content />
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

export default connect(mapStateToProps) (Product)
