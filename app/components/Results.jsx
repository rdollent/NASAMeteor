const React = require('react');

class Results extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.listReducer;
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Results);


module.exports = Container;