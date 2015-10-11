/// <reference path="../typings/tsd.d.ts" />

import React = require('react');

interface MyProps {}
interface MyState {}

class Greeter extends React.Component<MyProps, MyState> {
    render() { return <h1>Hello World</h1>; }
};

React.render(
    <Greeter />,
    document.body
);
