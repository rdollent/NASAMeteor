const React = require('react');
// need connect function to be able to connect to store from Provider
const {connect} = require('react-redux');

const actions = require('actions');

class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <div>
                <div>
                    {this.props.name}
                </div>
            </div>
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