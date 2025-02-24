const Pizza = ({ name, description }) => {
    return React.createElement('div', {}, [
        React.createElement('h2', {}, name),
        React.createElement('p', {}, description),
    ])
}

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Pixel Perfect Pizzas"),
            React.createElement(Pizza, {
                name: "The Pepperoni Pizza",
                description: "Mozarella Cheese, Pepperoni",
            }),
            React.createElement(Pizza, {
                name: 'The Hawaiian Pizza',
                description: "Sliced Ham, Pineapple, Mozzarella"
            }),
            React.createElement(Pizza, {
                name: "The Big Meat Pizza",
                description: "Bacon, Pepperoni, Italian sausage"
            }),
        ]
    );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));