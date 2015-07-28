import React from "react";

export default React.createClass({
  render: function(){
    return (
        <div className="content">
          <h2>This egg contains a {this.props.toy} or two</h2>
        </div>
      );
  }
});







