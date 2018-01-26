import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './components/myComponent';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<BrowserRouter><MyComponent /></BrowserRouter>, document.getElementById('root'));
