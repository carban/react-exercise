import React, { Component } from "react";
import { render } from "react-dom";

class Posts extends Component {

    state = {
        posts: []
    }

    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then((res) => {
    //             console.log(res);
    //         })
    // }

    async componentDidMount() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        // console.log(res);
        const data = await res.json();
        // console.log(data);
        this.setState({ posts: data });
    }

    render() {
        return (
            <div>
                <h1>POSTS</h1>
                {this.state.posts.map((post, i) => //Pueden ir o no los parentesis para retornar algo.
                    <div key={post.id}>
                        <h3 className="postTitle smallP">{i}: {post.title}</h3>
                        <p className="smallP">{post.body}</p>
                    </div>

                )}
            </div>
        )
    }
}

export default Posts;