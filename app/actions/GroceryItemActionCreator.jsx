import dispatcher from './../dispatcher'

export default {
    add: function(item) {
        dispatcher.dispatch({
            payload: item,
            type: "grocery-item: add"
        })
    }
}