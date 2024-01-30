export const calculateTimeToEvent = () => {
    const eventDate = new Date("January 1, 2025 00:00:00");
    const currentDate = new Date();
    const timeRemaining = eventDate.getTime() - currentDate.getTime();

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(timeRemaining / (1000 * 60 * 60) % 24);
    const minutes = Math.floor(timeRemaining / (1000 * 60) % 60);
    const seconds = Math.floor(timeRemaining / 1000 % 60);

    return { days, hours, minutes, seconds };
};