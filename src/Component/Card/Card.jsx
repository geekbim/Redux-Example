import React, { Component, Fragment } from 'react'
import img1 from '../../img/2.jpg'
import img2 from '../../img/3.jpg'
import img3 from '../../img/4.jpg'
import img4 from '../../img/5.jpg'
import Content from './Content'
import {connect} from 'react-redux'

class Card extends Component {

    constructor(props) {
        super(props)
        this.state = {
            "card": [
                {
                    img: img1,
                    title: 'Indonesia 1',
                    desc: 'Ini Indonesia 1'
                },
                {
                    img: img2,
                    title: 'Indonesia 2',
                    desc: 'Ini Indonesia 2'
                },
                {
                    img: img3,
                    title: 'Indonesia 3',
                    desc: 'Ini Indonesia 3'
                },
                {
                    img: img4,
                    title: 'Indonesia 4',
                    desc: 'Ini Indonesia 4'
                }
            ]
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row my-5">
                    {
                        this.state.card.map((item, index) => {
                            return (
                                <Fragment>
                                    <Content img={item.img} title={item.title} desc={item.desc}/>
                                </Fragment>
                            )
                        })
                    }
                    <p>Total Order: {this.props.order}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

export default connect(mapStateToProps) (Card)
