exports.handler = async () => {
2
const API_URL =
3
"https://uni001eu5.fusionsolar.huawei.com/rest/pvms/web/kiosk/v1/station-kiosk-file?kk=ie2viBuxotNw5fLrkQJF7JyJ7H8jGbvI";
4
 
5
try {
6
const response = await fetch(API_URL, {
7
headers: {
8
"User-Agent": "Mozilla/5.0"
9
}
10
});
11
 
12
const text = await response.text();
13
 
14
return {
15
statusCode: 200,
16
headers: {
17
"Access-Control-Allow-Origin": "*",
18
"Content-Type": "application/json"
19
},
20
body: text
21
};
22
} catch (err) {
23
return {
24
statusCode: 500,
25
headers: {
26
"Content-Type": "application/json"
27
},
28
body: JSON.stringify({
29
success: false,
30
error: err.message
31
})
32
};
33
}
34
};