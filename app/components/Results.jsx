const React = require('react');
// need connect function to be able to connect to store from Provider
const {connect} = require('react-redux');

const actions = require('actions');

const Item = require('Item');

class Results extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // need to store in variable

        const renderList = () => {
            const list = this.props.list;


        }
        
        return (
            <div>
                {renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {list} = state;
};

const mapDispatchToProps = {};

const Container = connect(mapStateToProps)(Results);
//, mapDispatchToProps


module.exports = Container;