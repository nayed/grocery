import guid from 'guid'

let listeners = {}

export let dispatcher = {
    register: function(cb) {
        let id = guid.raw()
        listeners[id] = cb
        return id
    },
    dispatch: function(payload) {
        console.info("Dispatching...", payload)
        for (let id in listeners) {
            let listener = listeners[id]
            listener(payload)
        }
    }
}