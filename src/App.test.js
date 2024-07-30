import React from 'react';
import renderer from 'react-test-renderer'; // Import the renderer
import HelloWorld from './components/HelloWorld';

test('renders correctly', () => {
  // Render the component
  const component = renderer.create(<HelloWorld />);

  // Convert the component to JSON
  const tree = component.toJSON();

  // Compare the rendered component to a stored snapshot
  expect(tree).toMatchSnapshot();
});
