import {dispatcher} from './../dispatcher'

function GroceryItemStore() {
    let items = [
        { name:"Ice Cream"},
        { name:"Waffles"},
        { name:"Candy", purchased:true},
        { name:"Snarks"}
    ]
    let listeners = []
    
    function getItems() {
        return items
    }
    
    function addGroceryItem(item) {
        items.push(item)
        triggerListeners()
    }
    
    function onChange(listener) {
        listeners.push(listener)
    }
    
    function triggerListeners() {
        listeners.forEach(function(listener){
            listener(items)
        })
    }
    
    dispatcher.register(function(event) {
        let split = event.type.split(':')
        if (split[0]==='grocery-item'){
            switch(split[1]){
                case "add":
                    addGroceryItem(event.payload);
                    break
            }
        }
    })
    
    return { getItems, onChange }
}

module.exports = new GroceryItemStore()