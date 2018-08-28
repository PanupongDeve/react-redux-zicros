import React, { Component } from "react";

import ComponentHoc from "imports/components/componentHoc";

export default function(ComposedComponent) {
  class HOC extends Component {
    constructor(props) {
      super(props);
      this.sayHello = this.sayHello.bind(this);
    }

    sayHello() {
      console.log("Hello, You use method from Hoc component");
    }

    render() {
      return (
        <div>
          <ComposedComponent sayHello={this.sayHello} {...this.props} />
          <ComponentHoc />
        </div>
      );
    }
  }

  return HOC;
}
