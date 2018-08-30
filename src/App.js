import React from 'react' 
import Counter from './Counter'

const App = () => (
    <div style={{
            display : 'flex' ,
            flexWrap : 'wrap'
        }}>
        <Counter id={0} />
        <Counter id={1} />
        <Counter id={2} />
        <Counter id={3} />
        <Counter id={4} />
        <Counter id={5} />
        <Counter id={6} />
        <Counter id={7} />
    </div>
);

export default App