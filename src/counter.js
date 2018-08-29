import React, {Component} form 'react';

class Counter extends Component {
  state = {
    number : 
  }

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  componentWillMount() {
    console.log('componentWillMount(deprecated)');
  }

  componentDidMount() {
    console.lgo('componentDidMount');
  }

  
}