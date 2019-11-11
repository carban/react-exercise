import React, { Component } from "react";
import { render } from "react-dom";

class Leform extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            price: ''
        }
    }

    handleInput = e => {
        var name = e.target.name;
        var value = e.target.value;

        // if (name == "price") {
        //     value = parseInt(value);
        //     console.log(name);
        // }

        (name === "price") ? value = parseInt(value) : console.log(name) ;

        this.setState({
            [name]: value
        });
    }

    hanldeSubmit = e => {
        e.preventDefault();
        this.props.createItem(this.state);
        this.setState({ title: '', price: ''});
    }

    render() {
        return (
            <div className="leform">
                <h1>Form</h1>
                <form onSubmit={this.hanldeSubmit}>
                    Title: <input onChange={this.handleInput} value={this.state.title} name="title" type="text" required></input>
                    price: <input onChange={this.handleInput} value={this.state.price} name="price" type="number" required></input>
                    <br></br>
                    <button>CREATE</button>
                </form>
            </div>
        )
    }
}

export default Leform;