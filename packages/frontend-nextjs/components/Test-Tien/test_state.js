import { storiesOf } from '@storybook/react';
import useState from 'storybook-addon-state';
 
storiesOf('FooBar', module).add('I get state', () => {
  const [count, set] = useState('clicks', 0);
 
  return (
    <div>
      <button onClick={() => set(count + 1)}>Click Me</button>
      <div>{`I was clicked ${count} time(s)`}</div>
    </div>
  );
});