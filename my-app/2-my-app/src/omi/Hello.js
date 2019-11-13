import { Component as WeElement, createElement as h } from "react";
import styled from "styled-components";
const StyledComponents = styled.div`
  p {
    color: #58bc58;
  }
  div {
    height: 100px;
    background: #12d3ec;
  }
`;

class ComponentName extends WeElement {
  render() {
    return h(
      StyledComponents,
      null,
      h(
        "div",
        null,
        h("p", null, this.state.title),
        h(
          "div",
          {
            className: "div1"
          },
          "\u4F60\u597D",
          h(
            "div",
            {
              className: "div2"
            },
            "Hello"
          )
        )
      )
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      title: "react"
    };
  }

  componentDidMount() {
    console.log("生命周期");
  }
}

export default ComponentName;
