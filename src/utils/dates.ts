export const formatDate = (date?: string): string => {
    return date ? new Date(date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : '';
  };

export const formatHour = (date?: string): string => {
    return date ? new Date(date).toLocaleString(undefined, { hour: 'numeric', minute: '2-digit', hour12: true }) : '';
};
  
