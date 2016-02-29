import dispatcher from './../dispatcher'

export class GroceryItemStore {
    constructor() {
        this.items = [
            {name: "Ice Cream"}, 
            {name: "Waffles"},
            {name: "Candy", purchased: true},
            {name: "Snarks"}
        ]
        this.listeners = []
    }

    getItems() {
        return this.items
    }

    addGroceryItem(item) {
        this.items.push(item)
        triggerListeners()
    }

    onChange(listener) {
        this.listeners.push(listener)
    }

    triggerListeners() {
        this.listeners.forEach(listener => {
            listener(items)
        })
    }

    dispatching() {
        dispatcher.dispatch(event => {
            let split = event.type.split(':')
            if (split[0] === 'grocery-item') {
                switch(split[1]) {
                    case "add":
                        console.log("eeeeeeeeeeeeeeeeee")
                        addGroceryItem(event.payload)
                        break
                }
            }
        })
    }
}