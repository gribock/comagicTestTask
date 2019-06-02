const dateISOS = (date) =>{
    return `${date.getFullYear()}-${parseInt(date.getMonth())+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}; 

export default dateISOS;