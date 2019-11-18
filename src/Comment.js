import React, { Component } from 'react';

class CommentComponent extends Component {
    render() {
        return (
          <div className="comment">
            {this.props.commentText}
          </div>
        )
      }
}

export default CommentComponent;
