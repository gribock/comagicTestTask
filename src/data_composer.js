/*
    Neet to refactor (recursive function?????)
*/ 
const composeer = (arr) => {
    let domainArray = arr.reduce((obj, item) => {
        obj[item.site_domain_name] = obj[item.site_domain_name] || [];
        obj[item.site_domain_name].push({ communication_type: item.communication_type, campaign_name: item.campaign_name, communication_number: item.communication_number });
        return obj;
    }, {});
    domainArray = Object.keys(domainArray).map((key) => {
        return { site_domain_name: key, other: domainArray[key] }
    });
    domainArray = domainArray.filter((item) => {
        return item.site_domain_name !== 'null';
    });
    domainArray = domainArray.map((domain) => {
        let campaignArray = domain.other;
        campaignArray = campaignArray.reduce((obj, item) => {
            obj[item.campaign_name] = obj[item.campaign_name] || [];
            obj[item.campaign_name].push({ communication_type: item.communication_type, communication_number: item.communication_number });
            return obj;
        }, {});
        campaignArray = Object.keys(campaignArray).map((key) => {
            return { campaign_name: key, communication_types: campaignArray[key] };
        });
        campaignArray = campaignArray.filter((item) => {
            return item.campaign_name !== 'null';
        });
        campaignArray = campaignArray.map((campaign) => {
            let communicationArray = campaign.communication_types;
            communicationArray = communicationArray.reduce((obj, item) => {
                obj[item.communication_type] = obj[item.communication_type] || [];
                obj[item.communication_type].push({ communication_number: item.communication_number });
                return obj;
            }, {});
            communicationArray = Object.keys(communicationArray).map((key) => {
                return { communication_type: key, communication_numbers: communicationArray[key] };
            });
            communicationArray = communicationArray.filter((item) => {
                return item.communication_type !== 'null';
            });
            return { 
                campaign_name: campaign.campaign_name,
                communication_types: communicationArray    
            };
        });
        return { 
            site_domain_name: domain.site_domain_name,
            campaign_names: campaignArray
        };
    });

    return domainArray;
};

export default composeer;
