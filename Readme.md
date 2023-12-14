# Namste React 🚀

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
- 