import React, { Component } from 'react'
import img from '../../img/1.jpg'
import Counter from './Counter'

class Content extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mid mx-auto text-center shadow p-2 rounded">
                        <div className="card">
                            <img src={img} width="500" height="350" className="card-img-top" alt="Images"/>
                            <div className="card-body">
                                <h5 className="card-title text-left font-weight-bold">Daging Ayam Dengan Bumbu Original</h5>
                                <p className="card-text text-left text-warning font-weight-bold">Rp. 100.000</p>
                                <Counter />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content
