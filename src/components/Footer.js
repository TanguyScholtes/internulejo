const React = require( 'react' );

function Footer ( props ) {
    return(
        <div className="footer-container">
            <img className="footer-image" src={ require( '../../public/Shopkeeper.png' ) } />
            <p className="footer-text">Made by <a href="http://tanguyscholtes.be">Tanguy Scholtes</a>, <a href="https://github.com/vlntngrgr">Valentin Grégoire</a> & <a href="https://github.com/AnarionBe/">Marco De Bona</a>, 2019</p>
        </div>
    );
}

export default Footer;
