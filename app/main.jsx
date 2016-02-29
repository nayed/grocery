import './style.css'
import {serv} from './../server/main'
import {GroceryItemList} from './components/GroceryItemList'
import {GroceryItemStore} from './stores/GroceryItemStore'

console.log(serv)

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