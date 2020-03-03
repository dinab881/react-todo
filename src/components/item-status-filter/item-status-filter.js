import React, {Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {


    onStatusFilter = (filter) => {
        this.props.onStatusFilter(filter);
    };

    checkActive = (filterName) => {
        return (filterName === this.props.activeFilter ?
            'btn btn-info' :
            'btn btn-outline-secondary');
    };

    render() {

        return (
            <div className="btn-group">
                <button type="button"
                        className={this.checkActive('')}
                        onClick={() => this.onStatusFilter('')}>
                    All
                </button>
                <button type="button"
                        className={this.checkActive('active')}
                        onClick={() => this.onStatusFilter('active')}>
                    Active
                </button>
                <button type="button"
                        className={this.checkActive('done')}
                        onClick={() => this.onStatusFilter('done')}>
                    Done
                </button>
            </div>
        );
    }
}
