import React, {Component} from "react";

class MyButton extends Component<{ count: string, onClick: any }> {
    render() {
        let {count, onClick} = this.props;
        return (
            <button className="Button" onClick={onClick}>Count {count}</button>
        );
    }
}

export default MyButton
