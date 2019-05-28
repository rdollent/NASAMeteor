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
            const num = this.props.page;
            
            if(list && list.length) {
                // get first 50 for first page
                // read what results page it is
                
                const x = 50;
                const max = (num * x) - 1;
                const min = (num * x) - x;
                const arr = [];
                for(let i = min; i <= max; i++) {
                    let itemNow = list[i];
                    arr.push(
                        <Item name={itemNow.name}/>
                        );
                }
                return arr;
                
            }
            
            
            
        };
        
        return (
            <div>
            <table>
                    <tr>
                        <th>Name</th>
                        <th>Id</th>
                        <th>Mass</th>
                        <th>Class</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                        <th>Year</th>
                    </tr>
                {renderList()}
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {list, page} = state;
};

const mapDispatchToProps = {};

const Container = connect(mapStateToProps)(Results);
//, mapDispatchToProps


module.exports = Container;