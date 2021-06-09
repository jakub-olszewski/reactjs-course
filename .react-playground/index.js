
        import React from 'react';
        import ReactDom from 'react-dom';
        import Playground from 'react-playground-kit';
        import * as module from 'd:/b24u/reactjs/git/github/reactjs-course/public/index.html';

        ReactDom.render(React.createElement(Playground, { module }), document.getElementById('app'));
    