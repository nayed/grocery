import action from './../actions/GroceryItemActionCreator'

export class GroceryListAddItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            input: ""
        }
    }

    handleInputName(e) {
        this.setState({input: ReactDOM.findDOMNode(this.refs.addItem).value})
    }

    addItem(e) {
        e.preventDefault()
        console.log("Adding item!", this.state.input)
        action.add({
            name: this.state.input
        })

        this.setState({input: ''}) // when item submit, reset input state
    }

    render() {
        return (
            <div className="grocery-addItem">
                <form onSubmit={this.addItem.bind(this)}>
                    <input ref="addItem" value={this.state.input} onChange={this.handleInputName.bind(this)}/>
                    <button>Add Item</button>
                </form>
            </div>
        )
    }
}