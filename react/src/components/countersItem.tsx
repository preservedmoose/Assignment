import * as React from 'react';

interface Props {
    counter: number;
    incrementCounters: () => void;
    decrementCounters: () => void;
}

class CountersItem extends React.Component<Props, {}> {

    ic = () => this.props.incrementCounters();
    dc = () => this.props.decrementCounters();

    render() {
        return (
            <div>
                <h1>{this.props.counter}</h1>
                <button onClick={this.ic}>Increment</button>
                <button onClick={this.dc}>Decrement</button>
            </div>
        );
    }
}

export default CountersItem;
