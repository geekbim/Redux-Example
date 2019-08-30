import React, { Component, Fragment } from 'react'
import './Blog.css'
import Axios from 'axios'
import Content from './Content'

class Blog extends Component {

    state = {
        konten: [],
        formBlogPost: {
            id: 1,
            userId: 1,
            title: '',
            body: ''
        },
        isUpdate: false
    }

    // GET DATA
    getPostAPI = () => {
        Axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        .then((res) => {
            this.setState({
                konten: res.data
            })
        })
    }

    // POST DATA
    postDataToAPI = () => {
        Axios.post('http://localhost:3004/posts', this.state.formBlogPost)
        .then(() => {
            this.getPostAPI()
            this.setState({
                formBlogPost: {
                    id: 1,
                    userId: 1,
                    title: '',
                    body: ''
                }
            })
        }, (err) => {
            console.log('error: ', err)
        })
        if (true) {
            window.alert('Data Berhasil Ditambahkan')
        }
    }

    // PUT DATA
    putDataToAPI = () => {
        let id = this.state.formBlogPost.id
        Axios.put(`http://localhost:3004/posts/${id}`, this.state.formBlogPost)
        .then(() => {
            this.getPostAPI()
            this.setState({
		isUpdate: false,
                formBlogPost: {
                    id: 1,
                    userId: 1,
                    title: '',
                    body: ''
                }
            })
        }, (err) => {
            console.log('error: ', err)
        })
        if (true) {
            window.alert('Data Berhasil Diupdate')
        }
    }

    // INPUT DATA
    handleFormChange = (e) => {
        let formBlogPostNew = {...this.state.formBlogPost}
        let timestamp = new Date().getTime()
        if (!this.state.isUpdate) {
            formBlogPostNew['id'] = timestamp
        }
        formBlogPostNew[e.target.name] = e.target.value
        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    // REMOVE DATA
    handleRemove = (data) => {
        if (window.confirm('Yakin Ingin Menghapus Data?')) {
            Axios.delete(`http://localhost:3004/posts/${data}`)
            .then(() => {
                this.getPostAPI()
            })
        }
    }

    // UPDATE DATA
    handleUpdate = (data) => {
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }

    // SUBMIT
    handleSubmit = () => {
        if (this.state.isUpdate) {
            this.putDataToAPI()
        } else {
            this.postDataToAPI()
        }
    }

    // DETAIL POST
    handleDetail = (postID) => {
        // untuk pindah halaman
        this.props.history.push(`/detail-post/${postID}`)
    }

    componentDidMount() {
        this.getPostAPI()
    }

    render() {
        return (
            <Fragment>
                <center>
                    <p className="mt-5">BLOG POST</p>
                    <hr/>
                    <div className="card mb3 blog my-5">
                        <form>
                            <div className="form-group">
                                <label htmlFor="title" className="float-left mt-3 px-3">Title</label>
                                <input type="text" className="form-control" name="title" id="title" placeholder="Add Title" value={this.state.formBlogPost.title} autoComplete="off" onChange={this.handleFormChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="body" className="float-left px-3">Blog Content</label>
                                <textarea type="text" className="form-control" name="body" id="body" rows="5" placeholder="Add Blog Content" value={this.state.formBlogPost.body} onChange={this.handleFormChange}></textarea>
                            </div>
                            <button type="button" className="btn btn-outline-primary float-left mb-3 mx-3" onClick={this.handleSubmit}>Simpan</button>
                        </form>
                    </div>
                    {
                        this.state.konten.map((konten) => {
                            return (
                                <Content key={konten.id} data={konten} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail} />
                            )
                        })
                    }
                </center>
            </Fragment>
        )
    }
}

export default Blog
