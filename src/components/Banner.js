const React = require( 'react' );

function Banner ( props ) {
    return (
        <div className="banner">
            <h1 className="site-title">
                <span className="site-title-marker fas fa-map-marker-alt"></span>
                Internulejo
            </h1>
            <p className="site-subtitle">Find a web company near you&nbsp;!</p>
        </div>
    );
}

export default Banner;
