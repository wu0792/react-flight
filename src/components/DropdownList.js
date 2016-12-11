import React, { Component } from 'react';

class DropdownList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSlidDown: false,
            selectedValue: null,
            selectedText: null
        }

        let selectFirstItem = props.selectFirst === "true";
        if (selectFirstItem && this.props.children.length) {
            let firstItem = this.props.children[0];
            this.state = { isSlidDown: false, selectedValue: firstItem.props.value, selectedText: firstItem.props.text };
        }
    }

    toggleDropdown() {
        this.setState({ isSlidDown: !this.state.isSlidDown });
    }

    onSelectItem(item) {
        React.Children.forEach(this.props.children, (child) => {
            this[`item_${child.props.value}`].setState({ isSelected: item.props.value === child.props.value });
        });

        this.setState({ selectedValue: item.props.value, selectedText: item.props.text, isSlidDown: false });
    }

    componentDidMount() {
        this.list.style.left = `${this.title.offsetLeft}px`;
        this.list.style.top = `${this.title.offsetTop + this.title.offsetHeight}px`;
    }

    render() {
        let newChildren = React.Children.map(this.props.children, (item) => {
            let _this = this;
            return React.cloneElement(item, {
                ref: (el) => this[`item_${item.props.value}`] = el,
                onSelect: () => { _this.onSelectItem.bind(_this)(item) }
            });
        });

        return (
            <div className="form-item">
                <div className="form-select c-dropdown_2">
                    <div className="form-select-txt"
                        ref={(el) => { this.title = el; } }
                        onClick={() => this.toggleDropdown()}>
                        <span>{this.state.selectedText || ''}</span>
                        <i className="ico-caret-down"></i>
                    </div>
                </div>

                <div className="form-select-list"
                    style={{ position: 'absolute', display: (this.state.isSlidDown ? 'block' : 'none') }}
                    ref={(el) => this.list = el}>
                    <ul>
                        {newChildren}
                    </ul>
                </div>
            </div>
        );
    }
}

export default DropdownList;