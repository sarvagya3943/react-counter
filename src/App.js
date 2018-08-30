import React from 'react' 
import Counter from './Counter'

const App = () => (
    <div style={{
            display : 'flex' 
        }}>
        <Counter id={0} />
        <Counter id={1} />
    </div>
);

export default App