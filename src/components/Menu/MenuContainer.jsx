import React from "react";
import {connect} from "react-redux";
import * as axios from 'axios';
import {setMenu} from "../../redux/menu-reducer"
import Menu from "./Menu";


class MenuContainer extends React.Component {
    componentDidMount() {
        axios.get(`http://localhost:3001/menu`)
            .then(response => {
                this.props.setMenu(response.data.items);
                console.log(response.data.items);
            });
    }

    render() {
        return (
            <div>
                <Menu {...this.props} pizzaItems={this.props.pizzaItems} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        pizzaItems: state.menuPage.pizzaItems
    }
}

export default connect(mapStateToProps, {setMenu}) (MenuContainer);