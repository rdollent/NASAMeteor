const React = require('react');

const Title = require('Title');
const Search = require('Search');
const Results = require('Results');
const Page = require('Page');
// const Err = require('Error');


class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='main'>
                <Title />
                <Search/>
                <Results/>
                <Page/>
            </div>
        );
    }
}

module.exports = Main;
