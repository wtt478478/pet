import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import Index from './routes/index';
import Layout from './routes/layout/index'
import Login from './routes/login_register/login/index';
import Forget from './routes/login_register/login/forgetPassword/index'
import Register from './routes/login_register/register/index';
<<<<<<< HEAD
import PetData from './routes/petCare/pet_data'
import AddPet from './routes/petCare/addPet/index'
import UserData from './routes/user/user_data';
import DynamicDetail from './routes/community/dynamicDetail/index'
import AvatarUpdate from './components/avatarUpdate'
import ArticleDetail from './routes/article/articleDetail'
import PetList from './routes/petCare/pet_list'
import myFollow from './routes/user/myFollow';
import myDynamic from './routes/user/myDynamic';
import myFans from './routes/user/myFans';
import AddDynamic from './components/addDynamic';


// // 声明私有路由变量
// const isAuthority = true;
// // 路由优化
// const RouteConfig = [
//   {
//     path: "/login",
//     component: () => import('./routes/login_register/login/index'),
//     model: [],
//   },
//   {
//     path: "/register",
//     component: () => import('./routes/login_register/register/index'),
//     model: [],
//   },
//   {
//     path: "/forget",
//     component: () => import('./routes/login_register/login/forgetPassword/index'),
//     model: [],
//   },
//   {
//     path: "/",
//     component: () => import('./routes/layout/index'),
//     model: [],
//     isAuthority
//   },
//   {
//     path: "/",
//     component: () => import('./pages/Menus'),
//     model: [],
//     isAuthority
//   },
//   {
//     path: "/about",
//     component: () => import('./pages/About'),
//     model: [],
//     isAuthority
//   },
//   {
//     path: "/admin",
//     component: () => import('./pages/Admin'),
//     model: [],
//     isAuthority
//   },

// ]


=======
import PetData from './components/data/pet_data'
>>>>>>> f12af79a6812b84a035430f68949009cb3c61c96


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
<<<<<<< HEAD
        <Route path="/forget" exact component={Forget} />
        <Route path="/register" exact component={Register} />
        <Route path="/index" exact component={Layout} />
        <Route path="/index/petData" exact component={PetData} />
        <Route path="/index/addPet" exact component={AddPet} />
        <Route path="/index/userData" exact component={UserData} />
        <Route path="/index/dynamicDetail/" exact component={DynamicDetail} />
        <Route path="/index/userData/updateAvatar" exact component={AvatarUpdate} />
        <Route path="/index/articleDetail" exact component={ArticleDetail} />
        <Route path="/index/mypet" exact component={PetList} />
        <Route path="/index/mydynamic" exact component={myDynamic} />
        <Route path="/index/myfollow" exact component={myFollow} />
        <Route path="/index/myfans" exact component={myFans} />
        <Route path="/index/addDynamic" exact component={AddDynamic} />

=======
        <Route path="/register" exact component={Register} />
        <Route path="/index" exact component={Layout} />
        <Route path="/index/petData" exact  component={PetData} />
>>>>>>> f12af79a6812b84a035430f68949009cb3c61c96
      </Switch>
    </Router>
  );
}



export default RouterConfig;
