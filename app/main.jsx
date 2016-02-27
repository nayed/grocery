import './style.css'
import {serv} from './../server/main'
import {GroceryItemList} from './components/GroceryItemList'

console.log(serv)

let initial = [
    {name: "Ice Cream"}, 
    {name: "Waffles"},
    {name: "Candy", purchased: true},
    {name: "Snarks"}
]

ReactDOM.render(<GroceryItemList items={initial} />, app)
