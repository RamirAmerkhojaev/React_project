import React, { Component } from 'react'
import { RouteChildrenProps, useRouteMatch } from 'react-router';
import { DataContext } from '../databases/DataProvider';
import "../styles/Categories.css"

export default class ListOfCategories extends Component<RouteChildrenProps> {

    static contextType = DataContext;
    
    render() {
        const {categories} = this.context;
        const match = this.props.match?.url
        return (
            <div>
                <div className = "topCategories">
                    <nav>
                        { categories.map((cat: { cat_id: number; cat_name: string; cat_image: string; cat_image2: string}) =>  (
                           <ul className = 'topCategoriesList'>
                                <a href={`${match}/${cat.cat_id}/products`}><li>{cat.cat_name}</li></a>
                            </ul>
                        ))
                        }    
                    </nav>    
                </div>
            </div>
        )
    }
}
