import {dispatcher} from './../dispatcher'

export function GroceryItemStore() {
    let items = [
        { name:"Ice Cream" },
        { name:"Waffles" },
        { name:"Candy", purchased:true },
        { name:"Snarks" }
    ]
    let listeners = []
    
    function getItems() {
        return items
    }
    
    function addGroceryItem(item) {
        items.push(item)
        triggerListeners()
    }

    function deleteGroceryItem(item) {
        let index = items.findIndex(_item => {
            return _item.name == item.name
        })

        items.splice(index, 1)
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
                case "delete":
                    deleteGroceryItem(event.payload)
                    break
            }
        }
    })
    
    return { getItems, onChange }
}
