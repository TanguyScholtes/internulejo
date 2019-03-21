const React = require( 'react' );

class SearchBar extends React.Component {
    render () {
        return(
            <form className="search-bar" action="" method="">
                <input id="search-field" className="search-field" onChange={ ( e ) => this.props.change( e ) } placeholder="Chercher dans la liste…" type="text" />
            </form>
        );
    }
}

export default SearchBar;
