
import Login from '@imports/pages/Login';
import Public from '@imports/HOC/Public';
import Register from '@imports/pages/Register';
import Blank from '@imports/pages/Blank'

const indexRoutes = [
    { path: '/', name: 'Page3', component: Public(Login) },
    { path: '/login', name: 'login', component: Public(Login) },
    { path: '/register', name: 'register', component: Public(Register) },
    { path: '/blank', name: 'blank', component: Public(Blank)}
];

export default indexRoutes;