import * as React from 'react';
import { CountersItem } from './countersItem';

interface Props {
    numberOfCounters: number;
}

interface Stats {
    counter: number;
}

export class CountersList extends React.Component<Props, Stats> {

    constructor(props: Props) {
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
