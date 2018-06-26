export const eventForm = (event, handleFormChange) => {
    const { name, value } = event.target;
    event.preventDefault();
    handleFormChange(name, value);
} 