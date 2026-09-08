import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default function createTreeNodeDropTarget(Renderer, onDragTargetLeave) {
  class TreeNodeDropTarget extends Component {
    componentDidUpdate(prevProps) {
      if (prevProps.isOver && !this.props.isOver) {
        onDragTargetLeave(this.props.path);
      }
    }

    componentWillUnmount() {
      if (this.props.isOver) {
        onDragTargetLeave(this.props.path);
      }
    }

    render() {
      return React.createElement(Renderer, this.props);
    }
  }

  TreeNodeDropTarget.propTypes = {
    isOver: PropTypes.bool.isRequired,
    path: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ).isRequired,
  };

  return TreeNodeDropTarget;
}
