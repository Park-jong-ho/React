// import ActiveUserCount from "./react_hooks/ActiveUserCount"
import "./App.css"
// import CounterUserCallback from "./react_hooks/CounterUserCallback"
// import ReducerCounter from "./react_hooks/Reducercounter"
import CounterContext from "./react_hooks/Countercontext"


const App = () => {

    return (
        <>
            <div>
                {/* <ActiveUserCount /> */}
                {/* <CounterUserCallback /> */}
                {/* <ReducerCounter /> */}
                <CounterContext />
            </div>
        </>
    )
}

export default App