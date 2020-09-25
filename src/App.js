import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import auth from "./auth/Auth";
import Main from "./components/Main";
import Protected from "./components/Protected";
function App() {
    const ProtectedRoute = ({component: Component}, ...rest) => {
        return(
            <Route {...rest} render={props =>{
                if(auth.isAuthenticated()){
                    return <Component {...props}/>;
                }
                else{
                    return <Redirect to={
                        {
                            pathname: "/",
                            state: {
                                from: props.location
                            }
                        }
                    }/>
                }
            }}
            />
        )
    };
  return (
   <Router>
     <Switch>
         <Route exact path="/"><Main/></Route>
         <ProtectedRoute exact path="/protected" component={Protected}/>
     </Switch>
   </Router>
  );
}

export default App;
