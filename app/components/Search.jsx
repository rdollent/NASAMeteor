const React = require('react');
// need connect function to be able to connect to store from Provider
const {connect} = require('react-redux');

const actions = require('actions');

class Search extends React.Component {
    constructor(props) {
        super(props);
        
        this.submitInput = this.submitInput.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.initialLoad = this.initialLoad.bind(this);
    }
    
    handleInput(event) {
        this.props.submitNewInput(event.target.value);
    }

    initialLoad() {
        // fetch
        fetch('https://data.nasa.gov/resource/gh4g-9sfh.json', {
            method: 'GET'
            })
            .then(res => res.json())
            .then((data) => {
                this.props.setPage(1);
                this.props.storeList(data);
                
            })
            .catch(err => {
                throw new Error(err);
            });
    }

    componentDidMount() {
        this.initialLoad();
    }

    submitInput(e) {
        e.preventDefault();
        console.log(this.myText.value);
        // fetch
        fetch('https://data.nasa.gov/resource/gh4g-9sfh.json?$q=' + this.myText.value, {
            method: 'GET'
            })
            .then(res => res.json())
            .then((data) => {
                this.props.setPage(1);
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
                    <input type="text" name="search" id="searchBar" ref={ref => this.myText = ref} onChange={this.handleInput}/>
                    <button>Submit</button>
                </form>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.inputReducer;
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        submitNewInput: (input) => {
            dispatch(actions.addInput(input));
        },
        storeList: (data) => {
            dispatch(actions.storeList(data));
        },
        setPage: (num) => {
            dispatch(actions.setPage(num));
        }
    };
};
  

const Container = connect(mapStateToProps, mapDispatchToProps)(Search);


module.exports = Container;