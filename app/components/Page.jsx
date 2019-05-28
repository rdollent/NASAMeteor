const React = require('react');
// need connect function to be able to connect to store from Provider
const {connect} = require('react-redux');

const actions = require('actions');

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.prevPage = this.prevPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
    }
    
    prevPage() {
        this.props.setPage(this.props.page - 1);
    }
    
    nextPage() {
        this.props.setPage(this.props.page + 1);
    }
    
    

    render() {
        
        const renderPrev = () => {
            const num = this.props.page;
            const list = this.props.list;
            if(num > 1 && list && list.length > 50) {
                return (
                    <button onClick={this.prevPage}> Prev </button>
                    );
            } else {
                return (
                    <button disabled> Prev </button>
                    );
            }
            
        };
        
        const renderNext = () => {
            const num = this.props.page;
            const list = this.props.list;
            if(num < 20 && list && list.length > 50) {
                return (
                    <button onClick={this.nextPage}> Next </button>
                    );
            } else {
                return (
                    <button disabled> Next </button>
                    );
            }
            
        };
        const renderPage = () => {
            const list = this.props.list;
            
            if(list && list.length) {
                return (
                    <div>
                        {renderPrev()}
                        <p>
                        {this.props.page}
                        </p>
                        {renderNext()}
                    </div>
                    
                    );
            } else {
                return (
                    <div></div>
                    );
            }
        };
        return (
            <div>
                {renderPage()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {list, page} = state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPage: (num) => {
            dispatch(actions.setPage(num));
        }
    };
};

const Container = connect(mapStateToProps,mapDispatchToProps)(Page);
//, mapDispatchToProps


module.exports = Container;