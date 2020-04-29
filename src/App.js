import React from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import { render } from '@testing-library/react';

import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';

class App extends React.Component{

  //Constructor ya no se necesita porque solo nos interesa editar user y lo hacemos directo de la accion de setCurrentUser
  /*constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }*/



  unsubscribeFromAuth = null


  componentDidMount(){
    const {setCurrentUser} = this.props;

   this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth => {
     if(userAuth){
       const userRef= await createUserProfileDocument(userAuth);

       userRef.onSnapshot(snapShot => {
         setCurrentUser({ id: snapShot.id, ...snapShot.data()});
         
       });
     }else{
      setCurrentUser({ userAuth});  
     }

      //this.setState({currentUser: user});
      
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() 
 { return (
    <div >
      <Header/>
      <Switch>
        <Route exact path = '/' component={HomePage} />
        <Route path = '/shop' component={ShopPage} />
        <Route exact path = '/signin' render={() => this.props.currentUser ? (<Redirect to='/'/> ) : (<SignInAndSignUpPage/>)} />
      </Switch>
    </div>
  );
}
}

const mapStatetoProps = ({user}) => ({currentUser : user.currentUser});

const mapDispatchToProps = dispatch =>({ 
  setCurrentUser: user=> dispatch(setCurrentUser(user))
});

export default connect(mapStatetoProps, mapDispatchToProps )(App);
