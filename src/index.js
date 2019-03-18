const React = require( 'react' );
const ReactDOM = require( 'react-dom' );

import App from './components/App.js';
import Banner from './components/Banner.js';
import Footer from './components/Footer.js';

ReactDOM.render(
    <Banner />,
    document.getElementById('banner')
);

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

ReactDOM.render(
    <Footer />,
    document.getElementById('footer')
);
