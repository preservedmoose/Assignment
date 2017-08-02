import * as React from 'react';
import CountersItem from './counters-item.component';

interface Stats {
    counter: number;
}

class CountersList extends React.Component<{}, Stats> {

    // value: number;

    constructor(props: {}) {
        super(props);

        this.state = {
            counter: 0
        };

        // handle 'this' for events
        this.incrementCounters = this.incrementCounters.bind(this);
        this.decrementCounters = this.decrementCounters.bind(this);
    }

    incrementCounters() {
        this.setState({ counter: this.state.counter + 1 });
    }

    decrementCounters() {
        this.setState({ counter: (this.state.counter > 0) ? this.state.counter - 1 : this.state.counter });
    }

    render() {
        return (
            <div>
                <CountersItem
                    counter={this.state.counter}
                    incrementCounters={this.incrementCounters}
                    decrementCounters={this.decrementCounters}
                />
                <CountersItem
                    counter={this.state.counter}
                    incrementCounters={this.incrementCounters}
                    decrementCounters={this.decrementCounters}
                />
            </div>
        );
    }
}

export default CountersList;
