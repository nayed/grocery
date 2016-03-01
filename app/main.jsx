import './style.css'
import {serv} from './../server/main'
import {GroceryItemList} from './components/GroceryItemList'
import * as GroceryItemStore from './stores/GroceryItemStore'

let initial = GroceryItemStore.getItems()

function render() {
    ReactDOM.render(<GroceryItemList items={initial} />, app)
}

GroceryItemStore.onChange(items => {
    initial = items
    render()
})

render()