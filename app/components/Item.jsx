const React = require('react');
// need connect function to be able to connect to store from Provider
const {connect} = require('react-redux');

const actions = require('actions');

class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const fullDate = new Date(this.props.year);
        const year = fullDate.getFullYear();
        return (
                <tr>
                    <td>{this.props.name}</td>
                    <td>{this.props.id}</td>
                    <td>{this.props.mass}</td>
                    <td>{this.props.class}</td>
                    <td>{this.props.lat}</td>
                    <td>{this.props.long}</td>
                    <td>{year}</td>
                </tr>
        )
    }
}

const mapStateToProps = (state) => {
    return {list} = state;
};

const mapDispatchToProps = {};

const Container = connect(mapStateToProps)(Item);
//, mapDispatchToProps


module.exports = Container;