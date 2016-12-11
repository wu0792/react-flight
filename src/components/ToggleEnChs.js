import React, { Component } from 'react';
let classNames = require('classnames');

class ToggleEnChs extends Component {
    constructor(props){
        super(props);
        this.state = {
            lang: props.lang || 'ch'
        };
    }

    toggleLang(){
        let lang = this.state.lang === 'en' ? 'ch' : 'en';
        this.setState({lang: lang});
        this.props.onLangChanged && this.props.onLangChanged(lang); 
    }

    render() {
        let currentEn = this.state.lang === 'en';
        let enClassName = classNames({'current': currentEn});
        let chClassName = classNames({'current': !currentEn});
        let flagIconClassName = classNames(['J_langIcon', 'current-icon'], {'current-icon-en': currentEn});

        return (
            <div className="form-toggle">
                <a className={enClassName} onClick={() => this.toggleLang()}>
                    <span>英</span>
                </a>
                <a className={chClassName} onClick={() => this.toggleLang()}>
                    <span>中</span>
                </a>
                <i className={flagIconClassName}>
                </i>
            </div>
        );
    }
}

export default ToggleEnChs;