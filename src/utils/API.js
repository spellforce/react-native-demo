var HOME = "http://play.vmplay.com:7300";
var API = {
    LOGIN:HOME + "/vwan/user/login",
    REGISTER:HOME + "/vwan/user/register",
}
function toQueryString(obj) {
    return obj ? Object.keys(obj).sort().map(function (key) {
        var val = obj[key];
        if (Array.isArray(val)) {
            return val.sort().map(function (val2) {
                return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
            }).join('&');
        }

        return encodeURIComponent(key) + '=' + encodeURIComponent(val);
    }).join('&') : '';
}
export function postJson(url, data, callback) {
    var fetchOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: toQueryString(data)
    };

    fetch(url, fetchOptions)
        .then((response) => response.text())
        .then((responseText) => {
            callback(JSON.parse(responseText));
        }).done();
};
export default API;