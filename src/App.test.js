import React from 'react';
import { create, ReactTestUtils } from "react-test-renderer";
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './App';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("App component", () => {
  test("test default initialized values in App", () => {
    const component = create(<App/>);
    const instance = component.getInstance();
    expect(instance.state.enteredValue).toBe("");
    expect(instance.state.result).toBe("");
    expect(instance.state.totalCoins).toBe("");
  });
});

it('can render and update a counter', () => {
  act(() => {
    ReactDOM.render(<App />, container);
  });

  container.querySelector("input").value =  "10.99";
  container.querySelector('button').click();

  // TODO - Needs to be fixed get the value of 18
  // expect(container.querySelector('#result')).toBe('<td id='+result+'>0</td>');
});
