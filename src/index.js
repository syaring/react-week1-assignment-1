/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

const BUTTON_NUMBERS = [1, 2, 3];
const INITIAL_STATE = { count: 0 };

function render({ count }) {
  const handleClickMeClick = (prevCount) => {
    render({ count: prevCount + 1 });
  };

  const handleClickNumber = (number) => {
    render({ count: number });
  };

  const element = (
    <div id="hello" className="greeting">
      <p>
        <button type="button" onClick={() => handleClickMeClick(count)}>
          Click me! (
          {count}
          )
        </button>
      </p>
      <p>{BUTTON_NUMBERS.map((number) => (<button type="button" onClick={() => handleClickNumber(number)}>{number}</button>))}</p>
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render(INITIAL_STATE);

function createElement(tag, props, ...children) {
  const element = document.createElement(tag);

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });

  children.flat().forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }
    element.appendChild(document.createTextNode(child));
  });

  return element;
}
