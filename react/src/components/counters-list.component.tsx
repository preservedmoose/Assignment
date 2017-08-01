import * as React from 'react';
import CountersItem from './counters-item.component';

// export interface Props {
//     value: number;
// }

class CountersList extends React.Component {

    value: number;

    constructor(props: {}) {
        super(props);

        this.value = 0;

        // handle 'this' for events
        this.incrementCounters = this.incrementCounters.bind(this);
        this.decrementCounters = this.decrementCounters.bind(this);
    }

    incrementCounters() {
        this.value++;
        this.forceUpdate();
    }

    decrementCounters() {
        this.value = (this.value > 0) ? this.value - 1 : this.value;
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <CountersItem
                    id={1}
                    counter={this.value}
                    incrementCounters={this.incrementCounters}
                    decrementCounters={this.decrementCounters}
                />
                <CountersItem
                    id={2}
                    counter={this.value}
                    incrementCounters={this.incrementCounters}
                    decrementCounters={this.decrementCounters}
                />
            </div>
        );
    }
}

export default CountersList;
