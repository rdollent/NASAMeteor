const React = require('react');
// need connect function to be able to connect to store from Provider
const {connect} = require('react-redux');

const actions = require('actions');

class Err extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div>
                    {this.props.err}
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {err} = state;
};

const mapDispatchToProps = {};

const Container = connect(mapStateToProps)(Err);
//, mapDispatchToProps


module.exports = Container;