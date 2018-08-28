
import Login from '@imports/pages/Login';
import Public from '@imports/HOC/Public';
import Register from '@imports/pages/Register';
import Blank from '@imports/pages/Blank';
import Table from '@imports/pages/Table';
import Cats from '@imports/pages/Cats';
import NotFound from '@imports/pages/NotFound';


const indexRoutes = [
    { path: '/', name: 'Page3', component: Public(Login) },
    { path: '/login', name: 'login', component: Public(Login) },
    { path: '/register', name: 'register', component: Public(Register) },
    { path: '/blank', name: 'blank', component: Public(Blank)},
    { path: '/table', name: 'table', component: Public(Table)},
    { path: '/cats', name: 'cats', component: Cats},
    { path: '*', name: 'notfound', component: NotFound }
];

export default indexRoutes;