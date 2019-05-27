const React = require('react');

const Search = require('Search');
const Results = require('Results');
const Page = require('Page');


class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='main'>
                <Search/>
                <Results/>
                <Page/>
            </div>
        );
    }
}

module.exports = Main;
