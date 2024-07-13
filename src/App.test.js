import React from 'react';
import renderer from 'react-test-renderer'; // Import the renderer
import App from './App'; // Import the component you want to test

test('renders correctly', () => {
  // Render the component
  const component = renderer.create(<App />);

  // Convert the component to JSON
  const tree = component.toJSON();

  // Compare the rendered component to a stored snapshot
  expect(tree).toMatchSnapshot();
});
