import React from 'react';

var Icon = React.createClass({
  propTypes: {
    icon: React.PropTypes.string.isRequired,
    size: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    style: React.PropTypes.object
  },
  getDefaultProps() {
    return {
      size: 24
    };
  },
  _mergeStyles(...args) {
    // This is the m function from "CSS in JS" and can be extracted to a mixin
    return Object.assign({}, ...args);
  },
  renderGraphic() {
    switch (this.props.icon) {
      case 'circles-extended':
        return (
          <g><path d="M12 10c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-6 9c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-7.9c-1.05 0-1.9.85-1.9 1.9s.85 1.9 1.9 1.9c1.05 0 1.9-.85 1.9-1.9s-.85-1.9-1.9-1.9zm6 1.9c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
        );
      case 'tv-options-parental':
        return (
          <g><path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5s-1.11-2.5-2.49-2.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5zm-7.5-1c1.66 0 2.99-1.34 2.99-3s-1.33-3-2.99-3c-1.66 0-3 1.34-3 3s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75v2.25h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zm-7.5-1c-2.33 0-7 1.17-7 3.5v2.5h7v-2.25c0-.85.33-2.34 2.37-3.47-.87-.18-1.71-.28-2.37-.28z"></path></g>
        );
      case 'access-time':
        return (
          <g><path fill-opacity=".9" d="M11.99 2c-5.52 0-9.99 4.48-9.99 10s4.47 10 9.99 10c5.53 0 10.01-4.48 10.01-10s-4.48-10-10.01-10zm.01 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path><path fill-opacity=".9" d="M12.5 7h-1.5v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
        );
      case 'forum':
        return (
          <g><path d="M21 6h-2v9h-13v2c0 .55.45 1 1 1h11l4 4v-15c0-.55-.45-1-1-1zm-4 6v-9c0-.55-.45-1-1-1h-13c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path></g>
        );
    }
  },
  render() {
    let styles = {
      fill: "currentcolor",
      verticalAlign: "middle",
      width: this.props.size, // CSS instead of the width attr to support non-pixel units
      height: this.props.size // Prevents scaling issue in IE
    };
    return (
      <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"
        style={this._mergeStyles(
          styles,
          this.props.style // This lets the parent pass custom styles
        )}>
          {this.renderGraphic()}
      </svg>
    );
  }
});

export default Icon;
