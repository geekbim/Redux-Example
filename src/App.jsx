import React, { Component, Fragment } from 'react'
import Blog from './Component/Blog/Blog'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import DetailPost from './Component/Blog/DetailPost/DetailPost'
import Card from './Component/Card/Card'
import Product from './Component/Product/Product'
import Lifecycle from './Component/Lifecycle/Lifecycle'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>

          <nav className="nav justify-content-center nav-pills bg-primary py-2">
            <Link className="nav-item nav-link text-dark bg-warning mx-3" to="/">Blog Post</Link>
            <Link className="nav-item nav-link text-dark bg-warning mx-3" to="/product">Product</Link>
            <Link className="nav-item nav-link text-dark bg-warning mx-3" to="/lifecycle">Lifecycle</Link>
            <Link className="nav-item nav-link text-dark bg-warning mx-3" to="/card">Card</Link>
          </nav>

          <Route path="/" exact component={Blog}/>
          <Route path="/detail-post/:postID" component={DetailPost}/>
          <Route path="/card" component={Card}/>
          <Route path="/product" component={Product}/>
          <Route path="/lifecycle" component={Lifecycle} />

        </Fragment>
      </Router>
    )
  }
}

export default App
