import React, {Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
    const cls = 'btn btn-outline-secondary';

    onStatusFilter(filter) {
        this.props.onStatusFilter(filter);
    }

    render() {
        return (
            <div className="btn-group">
                <button type="button"
                        className="btn btn-outline-secondary" onClick={() => this.onStatusFilter('all')}>All
                </button>
                <button type="button"
                        className="btn btn-outline-secondary" onClick={() => this.onStatusFilter('active')}>Active
                </button>
                <button type="button"
                        className="btn btn-outline-secondary" onClick={() => this.onStatusFilter('done')}>Done
                </button>
            </div>
        );
    }
}
