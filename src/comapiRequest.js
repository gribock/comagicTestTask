import dateISOS from './formatDate';
const comapiRequest = (dateFrom, dateTill) => {
    if((dateTill - dateFrom) <= 0)
    {
        alert('Неверно установленные даты!');
    }
    return fetch('https://cors-anywhere.herokuapp.com/https://dataapi.comagic.ru/v2.0', {
        mode: 'cors',
        method: 'post',
        body: JSON.stringify({
            "jsonrpc": "2.0",
            "id": "number",
            "method": "get.communications_report",
            "params": {
                "access_token": "xt9zorkkcoqovwl0nr0dyqe9odopeeyh5568lf2z",
                "date_from": dateISOS(dateFrom),
                "date_till": dateISOS(dateTill),
                "fields": [
                    "site_domain_name",
                    "campaign_name",
                    "communication_type",
                    "communication_number"
                ]
            }
        })
    });
};
export default comapiRequest;