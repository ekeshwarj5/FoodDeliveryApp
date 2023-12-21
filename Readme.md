# React Notes 🚀

# Parcel

- Dev build
- Local server
- HMR = Hot Module Replacement
- File watching Algorithm (Written in c++)
- Caching (faster builds)
- Image optimisation
- Minification of file whn it goes to production
- Bundling of files (Main feature of parcel)
- Consistent Hashing
- Code splitting
- Differential Bundling (It take cares, where the app is opening like:- old browser or mobile phones)
- Diagnostic
- Good Error handling
- Parcel can host our app on (https) also
- Tree shaking - (remove unused code)
- Different dev and production bundles

# Babel

- Babel is a package
- Babel is transpiling our code
- It takes the code and translate such that (JSX --> JS ) JS engine can undersatnd.
- JSX => React.createElement => ReactElement(JS object) => HTML element(render)
- If we have to give attribute to JSX we have to use camel case.

# Components

- Everything is component in React
- there are two types of components :- 
    (1). Class based (Old)
    (2). Fucntion based -> Just a normal JS function

# functional Compenent

- Whenever we are giving name to a component always start with a capital letter.
- If a fucntion is returning a react component then it is a fucntional component.
-   const HeadingComponent = () =>{
        return <h1>This is React functional component</h1>;
    }

-   const HeadingComponent = () =>{
        <h1>This is React functional component</h1>;
    }
    we can also write without return

- to render a component we have to follow a syntax :- root.render(<HeadingComponent/>);

# JSX

- we can write javascript inside JSX, in between curly braces {}. 

# Props

- Props (properties) :- Props are just normal arguments to a function. Passing a props to a component is just passing arguments to a function.
- When we have to dynamicly pass data to some component we will pass it as props.

# Config driven UI
- Controlling your UI using data or config. And the data is coming from backend
- De structuring on the fly:- When we send props to component and instead of props we just write the name of the props.
- Don't use indexs as keys. (Aisa react bolta)

# App structure

// *Header
//     ->logo 
//     ->Nav bar
// *Body
//     ->search
//     ->resturantContainer
//     ->resturantCard
            // ->img
            // ->Name of res, star rating, cuisine, deivery time 
// *Footer
//     ->Copyright
//     ->Links
//     ->Address
//     ->Contact

- In a file we can only have one default export.
- To export multiple things then we use named export. 

# Hooks

- A react hook is a normal javascript utility funciton which is given to us by react.
- There are two very important react hoks:-

(1). useState() -> This is use to create super powerful state variable in react.We have to import it using named import. Use state is used to create state varibale(Super powerful variable). This is called state variable because it mantains the state of our components. When we call useState() function it will send state variable. 

- Whenever a state variable is updated or changes react re-render the component.

- sytax:-
    const [<updated_list_name> , <set_function_name>] = useState([<data>]); 

# React Reconciliation (React fiber) (react 16):-

- Virtual DOM:- virtual dom is representation of actual DOM. It is nothing just a javascript object.
- Diff. Algo. :- It finds the difference between the previous virtual DOM and the updated virtual DOM.

(2). useEffect() -> 

# Monolith and Microservice architecture:-

- 
# Conditional Rendering
- Rendering based on the conditions.

# Shimmer UI

- Loading a fake page until we get a live data from the API. 
