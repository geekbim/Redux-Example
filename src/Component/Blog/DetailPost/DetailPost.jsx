import React, { Component } from 'react'
import Axios from 'axios';

class DetailPost extends Component {

    state = {
        post: {
            title: '',
            body: ''
        }
    }

    componentDidMount() {
        console.log(this.props)
        let postID = this.props.match.params.postID
        Axios.get(`http://localhost:3004/posts/${postID}`)
        .then((res) => {
            console.log(res)
            let post = res.data
            this.setState({
                post: {
                    title: post.title,
                    body: post.body
                }
            })
        })
    }

    render() {
        return (
            <div className="container mt-5">
                <h5 className="text-primary">{this.state.post.title}</h5>
                <p>{this.state.post.body}</p>
            </div>
        )
    }
}

export default DetailPost
