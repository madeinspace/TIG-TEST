export const formatDate = (date?: string) => {
    if (!date) { return ''}
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = new Date(date).toLocaleDateString(undefined, options);
    return formattedDate
}

export const formatHour = (date?: string) => {
    if (!date) { return ''}
    const options: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: '2-digit', hour12: true};
    const formattedHour = new Date(date).toLocaleString(undefined, options);
    return formattedHour
}
