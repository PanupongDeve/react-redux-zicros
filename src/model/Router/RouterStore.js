import App from '../../pages/App/App';
import NoutFound from '../../pages/NoutFound';
import Public from '../../components/HighOrderComponent/Public';
import Login from '../../pages/Login'

const routes = [
    { path: '/', name: 'App', component: App },
    { path: '/login', name: 'login', component: Public(Login) },
    { path: '*', name: 'NoutFound', component: NoutFound },
    
];

export default routes;