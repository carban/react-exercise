import React, { Component } from "react";
import { render } from "react-dom";
import Leform from "./leform";

class Lelist extends Component {
    constructor() {
        super();
        this.state = {
            products:
                [
                    { title: "Tame", price: 2 },
                    { title: "Impala", price: 3 },
                    { title: "Radio", price: 4 },
                    { title: "Head", price: 5 }
                ]
        };
    }

    plusEle = i => {
        var newProds = this.state.products.slice();
        newProds[i].price += 1;
        this.setState({
            products: newProds
        })
    }

    removeEle = i => {
        var newProds = this.state.products.slice();
        newProds.splice(i, 1);
        this.setState({
            products: newProds
        })
    }

    createEle = item => {
        this.setState({
            products: [...this.state.products, item]
        })
    }

    render() {
        var n_items = this.state.products.length;
        const products = this.state.products.map((ele, i) => (<li>{ele.title}: {ele.price} <button onClick={() => this.removeEle(i)}>X</button></li>))
        const plusProducts = this.state.products.map((ele, i) => (<button onClick={() => this.plusEle(i)}>{ele.title} +1</button>))
        return (
            <div>
                <h2>Products: {n_items}</h2>
                <ul>
                    {products}
                </ul>
                <div>
                    {plusProducts}
                </div>
                <div>
                    <Leform createItem={this.createEle} />
                </div>
            </div>
        )
    }
}

export default Lelist;