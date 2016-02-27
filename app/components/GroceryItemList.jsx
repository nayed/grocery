import React from 'react'
import {GroceryItem} from './GroceryItem'

export class GroceryItemList extends React.Component {
    render() {
        return (
            <div>
                <h1>Grocery Listify</h1>
                <div>
                    {this.props.items.map((item, index) => {
                        return (
                            <GroceryItem item={item} key={`item${index}`} />
                        )
                    })}
                </div>
            </div>
        )
    }
}