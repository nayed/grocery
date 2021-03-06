import './style.css'
import {GroceryItemList} from './components/GroceryItemList'
import {GroceryItemStore} from './stores/GroceryItemStore'

let groceryItemStore = new GroceryItemStore()

let initial = groceryItemStore.getItems()

function render() {
    ReactDOM.render(<GroceryItemList items={initial} />, app)
}

groceryItemStore.onChange(items => {
    initial = items
    render()
})

render()