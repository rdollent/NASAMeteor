const React = require('react');
// need connect function to be able to connect to store from Provider
const {connect} = require('react-redux');

const actions = require('actions');

class Search extends React.Component {
    constructor(props) {
        super(props);
        
        this.submitInput = this.submitInput.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        this.props.submitNewInput(event.target.value);
    }

    submitInput(e) {
        e.preventDefault();
        console.log(this.state);
        // fetch
        fetch('https://data.nasa.gov/resource/gh4g-9sfh.json', {
            method: 'GET'
            })
            .then(res => res.json())
            .then((data) => {
                this.props.storeList(data);
            })
            .catch(err => {
                throw new Error(err);
            });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitInput}>
                    <input type="text" name="search" id="searchBar" onChange={this.handleInput}/>
                    <button>Submit</button>
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.inputReducer;
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        submitNewInput: (input) => {
            dispatch(actions.addInput(input))
        },
        storeList: (data) => {
            dispatch(actions.storeList(data))
        }
    }
};
  

const Container = connect(mapStateToProps, mapDispatchToProps)(Search);


module.exports = Container;