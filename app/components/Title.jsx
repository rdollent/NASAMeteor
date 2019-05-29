const React = require('react');
// need connect function to be able to connect to store from Provider
// const {connect} = require('react-redux');

// const actions = require('actions');

class Title extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div id='title'>
                    <span>NASA Meteor Directory</span>
                </div>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {err} = state;
// };

// const mapDispatchToProps = {};

// const Container = connect(mapStateToProps)(Title);
//, mapDispatchToProps


module.exports = Title;