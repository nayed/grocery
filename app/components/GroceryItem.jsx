import React from 'react'

export class GroceryItem extends React.Component {
    render() {
        return (
            <div>{this.props.item.name}</div>
        )
    }
}