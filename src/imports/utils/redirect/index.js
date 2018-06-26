export const redirect = (history, path) => {
    return () => history.push(path);
}