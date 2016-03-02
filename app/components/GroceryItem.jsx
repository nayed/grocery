import action from './../actions/GroceryItemActionCreator'

export class GroceryItem extends React.Component {
    delete(e) {
        e.preventDefault()  // prevent the page from refreshing
        action.delete(this.props.item)
    }
    render() {
        return (
            <div>
                <div>
                    <h4 className={this.props.item.purchased ? "strikethrough" : ""}>{this.props.item.name}</h4>
                </div>
                <form className="three columns" onSubmit={this.delete.bind(this)}>
                    <button>&times;</button>
                </form>
            </div>
        )
    }
}