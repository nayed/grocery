import React from 'react'
import ReactDOM from 'react-dom'

export class GroceryListAddItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            input: ""
        }
    }

    handleInputName(e) {
        this.setState({input: ReactDOM.findDOMNode(this.refs.addItem).value})
        console.log(this.state.input)
    }

    addItem(e) {
        e.preventDefault()
        console.log("Adding item!", this.state.input)
    }

    render() {
        return (
            <div className="grocery-addItem">
                <form>
                    <input ref="addItem" value={this.state.input} onChange={this.handleInputName.bind(this)}/>
                    <button onClick={this.addItem.bind(this)}>Add Item</button>
                </form>
            </div>
        )
    }
}