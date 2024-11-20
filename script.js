const element = React.createElement(
  'h1',
  {className: 'title'},
  'Hello World!'
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(element);

const container2 = document.getElementById('root2');
const root2 = ReactDOM.createRoot(container2);
root2.render(element);

document.querySelectorAll('.button')
  .forEach(domContainer => {
    const messageId = parseInt(domContainer.dataset.messageId);
    const root = ReactDOM.createRoot(domContainer);
    
    root.render(
      React.createElement(
        'button',
        {
          onClick: () => { console.log(`liked message: ${messageId}`); }
        },
        'Like'
      )
    )
  });