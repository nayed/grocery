import React from 'react'
import {serv} from './../../server/main'

export default class GroceryItemList extends React.Component {
    render() {
        console.log(serv)
        return (
            <div>
                <h1>Grocery Listify</h1>
            </div>
        )
    }
}