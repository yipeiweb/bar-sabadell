(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fd59576c"],{"6bda":function(e,t,a){"use strict";a.r(t),t["default"]={title:{en:"Menu",es:"Menu"},price:8,conditions:{en:"Included 1 drink + 1 dessert or 1 coffee",es:"Incluido 1 bebida + 1 postre o 1 café"},firstDishes:{title:{en:"First",es:"Primero"},content:{en:["Hot and sour soup","Green salad","Chicken / ham croquettes","Prawn omelette"],es:["Sopa agripicante","Ensalada verde","Croquetas pollo/jamón","Tortilla de gambas"]},images:["https://drive.google.com/uc?id=1MPN5TX11E9t16lCFdXFjs2e8SelRN6Qw","https://drive.google.com/uc?id=186N0SnednOpsWDmgeq9irP5XZu8MDtFT","https://drive.google.com/uc?id=1NEY8OBxxij1qdeED_TLwNMQX-5M3wWaO","https://drive.google.com/uc?id=1bjNIRzaBX3ouwW51EAj52dYr9AdjRj9f"]},secondDishes:{title:{en:"Second",es:"Segundo"},content:{en:["Battered chicken breast","Longaniza with potatoes","Hake battered with potatoes","Fried Noodles","Grilled pork chops"],es:["Pechuga de pollo rebozado","Longaniza con patatas","Merluza rebozada con patatas","Tallarines fritos","Chuletas de cerdo a la plancha"]},images:["https://drive.google.com/uc?id=1pDLB2wNTbbI6vkZ3_4jM25F4p1RY0ext","https://drive.google.com/uc?id=12w3mCEGe-f3GQAzOI-rs0W5vTWYCATxe","https://drive.google.com/uc?id=1FEsx1oCAyTNGjhMFERixwopcHU-mqFch","https://drive.google.com/uc?id=1qmGK8O1tILy8KqWbcQzcPA7xMFayofFN","https://drive.google.com/uc?id=1LBxg0hgIQtqODZNr9ZHsnNGmDLnz_Exs"]}}},"7a20":function(e,t,a){"use strict";a.r(t);var s=a("7a23"),c={key:0,class:"text-center m-2"},n={class:"d-flex justify-content-center m-2"},i={key:0,class:"text-center"},o={class:"d-flex justify-content-center m-2"},d={key:0,class:"font-weight-bold"},r={class:"container"},u={class:"row"},l={class:"col-md-6"},g={class:"card"},m={key:0,class:"card-header bg-primary text-white"},b={class:"list-group mt-2 mb-2"},j={class:"list-group-item list-group-item-primary"},O=Object(s["g"])("i",{class:"fa fa-eye"},null,-1),D={class:"col-md-6"},h={class:"card"},p={key:0,class:"card-header bg-primary text-white"},f={class:"list-group mt-2 mb-2"},v={class:"list-group-item list-group-item-primary"},w=Object(s["g"])("i",{class:"fa fa-eye"},null,-1);function k(e,t){return Object(s["p"])(),Object(s["d"])("div",null,[e.menuData&&e.menuData.title?(Object(s["p"])(),Object(s["d"])("h2",c,Object(s["w"])(e.menuData.title[e.languageTag]),1)):Object(s["e"])("",!0),Object(s["g"])("div",n,[Object(s["g"])("div",null,[e.menuData&&e.menuData.price?(Object(s["p"])(),Object(s["d"])("h4",i,Object(s["w"])(e.menuData.price)+"€ ",1)):Object(s["e"])("",!0)])]),Object(s["g"])("div",o,[e.menuData&&e.menuData.conditions?(Object(s["p"])(),Object(s["d"])("div",d,Object(s["w"])(e.menuData.conditions[e.languageTag]),1)):Object(s["e"])("",!0)]),Object(s["g"])("div",r,[Object(s["g"])("div",u,[Object(s["g"])("div",l,[Object(s["g"])("div",g,[e.menuData&&e.menuData.firstDishes&&e.menuData.firstDishes.title?(Object(s["p"])(),Object(s["d"])("div",m,[Object(s["g"])("b",null,Object(s["w"])(e.menuData.firstDishes.title[e.languageTag]),1)])):Object(s["e"])("",!0)]),e.menuData&&e.menuData.firstDishes&&e.menuData.firstDishes.content&&e.menuData.firstDishes.images?(Object(s["p"])(!0),Object(s["d"])(s["a"],{key:0},Object(s["t"])(e.menuData.firstDishes.content[e.languageTag],(function(t,a){return Object(s["p"])(),Object(s["d"])("div",{key:a},[Object(s["g"])("ul",b,[Object(s["g"])("li",j,[""!=e.menuData.firstDishes.images[a]?(Object(s["p"])(),Object(s["d"])("a",{key:0,class:"text-dark text-decoration-none mr-2",href:e.menuData.firstDishes.images[a]},[O],8,["href"])):Object(s["e"])("",!0),Object(s["f"])(" "+Object(s["w"])(t),1)])])])})),128)):Object(s["e"])("",!0)]),Object(s["g"])("div",D,[Object(s["g"])("div",h,[e.menuData&&e.menuData.secondDishes&&e.menuData.secondDishes.title?(Object(s["p"])(),Object(s["d"])("div",p,[Object(s["g"])("b",null,Object(s["w"])(e.menuData.secondDishes.title[e.languageTag]),1)])):Object(s["e"])("",!0)]),e.menuData&&e.menuData.secondDishes&&e.menuData.secondDishes.content&&e.menuData.secondDishes.images?(Object(s["p"])(!0),Object(s["d"])(s["a"],{key:0},Object(s["t"])(e.menuData.secondDishes.content[e.languageTag],(function(t,a){return Object(s["p"])(),Object(s["d"])("div",{key:a},[Object(s["g"])("ul",f,[Object(s["g"])("li",v,[Object(s["g"])("a",{class:"text-dark text-decoration-none mr-2",href:e.menuData.secondDishes.images[a]},[w],8,["href"]),Object(s["f"])(" "+Object(s["w"])(t),1)])])])})),128)):Object(s["e"])("",!0)])])])])}var y=a("d3c3"),x={name:"menu-component",mounted:function(){this.getData()},data:function(){return this.languageManager=new y["a"],{menuData:null,languageTag:this.languageManager.getLanguage()}},methods:{getData:function(){var e=a("6bda"),t=e.default;this.menuData=t}}};x.render=k;t["default"]=x}}]);
//# sourceMappingURL=chunk-fd59576c.c54a21cd.js.map