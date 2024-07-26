export const formatDate = (dateString) => {
    const date = new Date(dateString);

    const dateOptions = {year: "numeric", month: "long", day: "numeric"};
    const formatDate = date.toLocaleDateString("en-US", dateOptions);

    return formatDate
} 