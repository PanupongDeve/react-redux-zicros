import { redirect } from '../redirect';

export const handleMenuOpen = (event, setState, name) => {
    event.preventDefault();
    setState({[name]: event.currentTarget });
  }

export const handleMenuClose = (event, path = false, setState, name , props) => {
    event.preventDefault();
    setState({[name]: null});
    if(path) redirect(props.history, path)();
  }