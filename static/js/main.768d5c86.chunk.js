(this["webpackJsonpfreightwise-weather"]=this["webpackJsonpfreightwise-weather"]||[]).push([[0],{16:function(e,a,t){e.exports=t(40)},21:function(e,a,t){},22:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(15),s=t.n(r),i=(t(21),t(22),t(2)),l=(t(4),t(5),function(e){var a,r=Object(n.useState)({}),s=Object(i.a)(r,2),l=s[0],m=s[1],o=t(6);return Object(n.useEffect)((function(){o.get("https://api.openweathermap.org/data/2.5/weather?zip=37027,us&appid=25e989bd41e3e24ce13173d8126e0fd6").then((function(e){m(e.data)})).catch((function(e){console.log(e)})).then((function(){}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{id:"background"},c.a.createElement("div",{className:"container"},l.main?c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col sm-6"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header card-header1"},c.a.createElement("h5",{className:""},"Weather today at FreightWise in ",l.name),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col sm"},c.a.createElement("h3",null,Math.round(9*(l.main.temp-273.15)/5+32),"\xb0 F",c.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(l.weather[0].icon,"@2x.png"),alt:"weather-icon"})),l.weather[0].description),c.a.createElement("div",{className:"col sm-6"},c.a.createElement("p",{id:"sunrise"}," ","\ud83c\udf05 Sunrise:"," ",new Date(1e3*l.sys.sunrise).toLocaleTimeString()),c.a.createElement("p",{id:"sunrise"},"\ud83c\udf07 Sunset:"," ",new Date(1e3*l.sys.sunset).toLocaleTimeString())))),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col sm-4"},c.a.createElement("strong",null,"\ud83c\udf21 High/Low:")," "),c.a.createElement("div",{className:"col sm-4"},Math.round(9*(l.main.temp_max-273.15)/5+32),"\xb0/",Math.round(9*(l.main.temp_min-273.15)/5+32),"\xb0"),c.a.createElement("div",{className:"col sm-4"},c.a.createElement("strong",null,"\ud83d\udca8 Wind:")),c.a.createElement("div",{className:"col sm-4"},(a=l.wind.direction)>11.25&&a<33.75?"NNE":a>33.75&&a<56.25?"ENE":a>56.25&&a<78.75?"E":a>78.75&&a<101.25||a>101.25&&a<123.75?"ESE":a>123.75&&a<146.25?"SE":a>146.25&&a<168.75?"SSE":a>168.75&&a<191.25?"S":a>191.25&&a<213.75?"SSW":a>213.75&&a<236.25?"SW":a>236.25&&a<258.75?"WSW":a>258.75&&a<281.25?"W":a>281.25&&a<303.75?"WNW":a>303.75&&a<326.25?"NW":a>326.25&&a<348.75?"NNW":"N"," at"," ",l.wind.speed," mph")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col sm-4"},"\ud83d\udca7 ",c.a.createElement("strong",null,"Humidity:")),c.a.createElement("div",{className:"col sm-4"},l.main.humidity,"%"),c.a.createElement("div",{className:"col sm-4"},c.a.createElement("strong",null,c.a.createElement("img",{src:"https://img.icons8.com/ios/50/000000/atmospheric-pressure.png",alt:"air-pressure",id:"air"})," ","Pressure:"," ")),c.a.createElement("div",{className:"col sm-4"},(.03*l.main.pressure).toFixed(2)," in.")))))):c.a.createElement("p",null,"There is no weather information for this zipcode"))))});var m=function(){return c.a.createElement("header",null,c.a.createElement("div",{className:"App"},c.a.createElement(l,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,a,t){}},[[16,1,2]]]);
//# sourceMappingURL=main.768d5c86.chunk.js.map