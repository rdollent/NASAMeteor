const React = require('react');
// need connect function to be able to connect to store from Provider
const {connect} = require('react-redux');

// const actions = require('actions');

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
            const err = this.props.err;
            
            if(list && list.length && !err.length) {
                // get first 50 for first page
                // read what results page it is
                
                let x, min, max;	
                const arr = [];	
                if(list.length === 1000) {	
                    x = 50;	
                    min = (num * x) - x;	
                    max = (num * x) - 1;	
                } else {	
                    min = 0;	
                    max = list.length - 1;	
                }
                
                for(let i = min; i <= max; i++) {
                    let itemNow = list[i];
                    // id, name, mass, recclass, recclat, reclong, year	
                    arr.push(
                        <Item
                            name={itemNow.name}	
                            id={itemNow.id}	
                            mass={itemNow.mass}	
                            class={itemNow.recclass}	
                            lat={itemNow.reclat}	
                            long={itemNow.reclong}	
                            year={itemNow.year}	
                        />	
                        );
                }
                return arr;
                
            } else if(err.length) {
                return  (
                <tr>
                    <td colSpan="7" style={{ textAlign: 'center', padding: '20px' }}>
                        <div>{err}</div>
                    </td>
                </tr>
                
                );
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
    return {list, page, err} = state;
};

const mapDispatchToProps = {};

const Container = connect(mapStateToProps)(Results);
//, mapDispatchToProps


module.exports = Container;