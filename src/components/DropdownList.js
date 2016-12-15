import React, { Component } from 'react';

class DropdownList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSlidDown: false,
            selectedValue: null,
            selectedText: null
        }

        let selectedValue = null, selectedText = null;
        let selectFirstItem = props.selectFirst === "true";
        let selectedItem = null;
        if (selectFirstItem) {
            selectedItem = this.props.children[0];
        } else if (props.defaultValue) {
            let items = this.props.children.filter(e => e.props.value === props.defaultValue);
            if (items.length) {
                selectedItem = items[0];
            }
        }

        if (selectedItem) {
            selectedValue = selectedItem.props.value;
            selectedText = selectedItem.props.text;
        }

        this.state = { isSlidDown: false, selectedValue: selectedValue, selectedText: selectedText };
    }

    toggleDropdown() {
        this.setState({ isSlidDown: !this.state.isSlidDown });
    }

    onSelectItem(item) {
        React.Children.forEach(this.props.children, (child) => {
            this[`item_${child.props.value}`].setState({ isSelected: item.props.value === child.props.value });
        });

        this.setState({ selectedValue: item.props.value, selectedText: item.props.text, isSlidDown: false });
        if (item.props.value !== this.state.selectedValue) {
            const oldItem = { value: this.state.selectedValue, text: this.state.selectedText };
            this.props.onChange && this.props.onChange(item, oldItem, this);
        }
    }

    componentDidMount() {
        this.list.style.left = `${this.title.offsetLeft}px`;
        this.list.style.top = `${this.title.offsetTop + this.title.offsetHeight}px`;
    }

    render() {
        let _this = this;
        let newChildren = React.Children.map(this.props.children, (item) => {
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
                        onClick={this.toggleDropdown.bind(this)}>
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