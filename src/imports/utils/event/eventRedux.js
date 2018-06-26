export const eventRedux = (event, connectRedux) => {
    event.preventDefault();
    connectRedux();
} 