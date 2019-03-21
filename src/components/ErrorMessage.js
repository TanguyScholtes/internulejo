const React = require( 'react' );

function ErrorMessage ( props ) {
    return(
        <div className="error">
            { Object.keys( props.errors ).map( key => <p key={key}>{ props.errors[ key ] }</p> ) }
        </div>
    );
}

export default ErrorMessage;
