import * as React from 'react';

interface Props {
    id: number;
    counter: number;
    incrementCounters: () => void;
    decrementCounters: () => void;
}

class CountersItem extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.counter}</h1>
                <button onClick={() => this.props.incrementCounters()}>Increment</button>
                <button onClick={() => this.props.decrementCounters()}>Decrement</button>
            </div>
        );
    }
}

export default CountersItem;
