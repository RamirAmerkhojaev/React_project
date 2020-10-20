import React, { Component } from 'react'
import { Route, useRouteMatch } from 'react-router'
import Categories from './Categories'
import Home from './Home'
import ProductDetail from './ProductDetail'
import Products from './Products'
import "../index.css"
import ListOfCategories from './ListOfCategories'

interface Props {
    
}
interface State {
    
}

export default class Section extends Component<Props, State> {
    state = {}
    

    render() {
        return (
            <section>
                <Route path = "/" exact component = {Home}/>
                <Route path = "/categories" exact component = {Categories} />
                <Route path = "/categories/:id/products" exact component = {Products} />
                <Route path = "/categories/:catId/products/:prodId" component = {ProductDetail} />
            </section>
        )
    }
}
