import axios from 'axios';

export function getAllCategoryFromServer(){
    const url = "https://t-rbt.telesens.ua/t-rbt/subscriber"
    const body = encodeURI(
              'p0=contentCategorySearch&p1=' +
              '{"searchParameters":{"pagination":{"offset":0,"pageSize":0}, "sortOrder":[{"attribute":"OrderNo","ascending":true}]}}'
        );
    return axios.post(url, body)
  }

export function getAllSoundsFromServer(){
    const url = "https://t-rbt.telesens.ua/t-rbt/subscriber"
    const body = encodeURI(
        'p0=contentSearch&p1= {"subsIdent":"","password":"","serviceNo":-1,"searchParameters": '+
        '{ "pagination": { "offset": 0, "pageSize": 24 }, "sortOrder":  '+
        '[{ "attribute": "ContentNo", "ascending": true }] }}'
        );
    return axios.post(url, body)
  }

export function authorize(login, pass){
  const url = "https://t-rbt.telesens.ua/t-rbt/subscriber"
  const body = encodeURI(
      'p0=subscriberRetrieve&p1={"scope":{"returnGiftContent":true, "returnPersonalContent":true,"returnPlayConditions":true,"returnPreservedContent":true,"returnPublicContent":true,"returnSubscriptions":true}, "password":"'+pass+'","subsIdent":"'+login+'"}'+
      '&p2=mobile'
      );
  return axios.post(url, body)
}

export function buyRingtone(subs, pass, contentNo){
  const url = "https://t-rbt.telesens.ua/t-rbt/subscriber"
  const body = encodeURI(
      'p0=contentPurchase&p1={"password":"'+pass+'","subsIdent":"'+subs+'", "contentNoOrVirtContentNo":'+contentNo+',"serviceNoOrVirtServiceNo":1}'+
      '&p2=mobile'
      );
  return axios.post(url, body)    
}

export function searchTracks(text){
  const url = "https://t-rbt.telesens.ua/t-rbt/subscriber"
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    Accept: 'application/json',
  }
  const data = encodeURI(
    'p0=contentSearch&p1={"searchParameters":{"pagination":{"offset":0,"pageSize":24},"searchFilter"'+
    ':{"or":[{"like":{"name":"Title","stringValue":"%${title}%"}},{"like":{"name"'+
    ':"Artist","stringValue":"%'+text+'%"}}]},"sortOrder":[{"attribute":"ContentNo","ascending":true}]}}'
      );
  return axios({method: 'post', url, headers, data})  
}

