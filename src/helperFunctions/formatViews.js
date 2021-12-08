/**
 * Takes a String (integer or float)and returns a formatted number
 * Example: formatViews(72000); // "72,000"
 * Example: formatViews(7); // "7"
 * Example: formatViews(234999); // "234,999"
 *
 * @param {String} num
 * @returns {String} The formatted number views with commas 
 */
 const formatViews = (num) => `${(Number(num).toLocaleString(3)).toString()}`;

 export default formatViews;
 