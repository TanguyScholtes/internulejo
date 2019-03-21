const React = require( 'react' );
import ListItem from './ListItem.js';

class List extends React.Component {
    render () {
        if( this.props.companies && this.props.companies.length > 0 ) {
            return(
                <ul className="companies-list">
                    { this.props.companies.map( ( company ) => {
                        return <ListItem
                            company = { company }
                            key = { company.id }
                            edit = { ( e ) => this.props.edit( e ) }
                            change = { ( e ) => this.props.change( e ) }
                            errors = { this.props.errors }
                        />;
                    } ) }
                </ul>
            );
        } else {
            return(
                <p>No company to display. Sorry !</p>
            );
        }
    }
}

export default List;
