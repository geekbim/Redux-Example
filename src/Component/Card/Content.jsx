import React, { Component, Fragment } from 'react'

class Content extends Component {

    render() {
        const {title, desc, img} = this.props
        return (
            <Fragment>
                <div className="col-md-3">
                    <div className="card my-3">
                        <img src={img} className="card-img.top" alt="card-img"/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{desc}</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Content
