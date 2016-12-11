import React, { Component } from 'react';
let classNames = require('classnames');

class TopStage extends Component {
    render() {
        let isCurrent = this.props.current==='true';
        let className = classNames('prog-step', { 'prog-current': isCurrent });
        return (
            <div className={className}>
                <div className="progress-line"></div>
                <h4>{this.props.title}
                    {isCurrent &&
                        <i className="icon ico-step"></i>                      
                    }
                </h4>
            </div>
        );
    }
}

export default TopStage;