"use strict";(self["webpackChunkcork_vue3"]=self["webpackChunkcork_vue3"]||[]).push([[9179],{26699:function(l,e,n){var i=n(82109),s=n(41318).includes,r=n(47293),a=n(51223),t=r((function(){return!Array(1).includes()}));i({target:"Array",proto:!0,forced:t},{includes:function(l){return s(this,l,arguments.length>1?arguments[1]:void 0)}}),a("includes")},66324:function(l,e,n){n.r(e),n.d(e,{default:function(){return G}});n(26699);var i=n(66252),s=n(2262),r=n(31778),a=n(56296);const t={class:"container"},c=(0,i._)("ul",{class:"navbar-nav flex-row"},[(0,i._)("li",null,[(0,i._)("div",{class:"page-header"},[(0,i._)("nav",{class:"breadcrumb-one","aria-label":"breadcrumb"},[(0,i._)("ol",{class:"breadcrumb"},[(0,i._)("li",{class:"breadcrumb-item"},[(0,i._)("a",{href:"javascript:;"},"Elements")]),(0,i._)("li",{class:"breadcrumb-item active","aria-current":"page"},[(0,i._)("span",null,"Tree View")])])])])])],-1),o={class:"container"},d={class:"nav sidenav"},u={class:"sidenav-content"},p=(0,i._)("a",{href:"#treeviewAnimated",class:"nav-link"},"Animated",-1),f=(0,i._)("a",{href:"#treeviewBasic",class:"nav-link"},"Basic",-1),v=[p,f],g={class:"row layout-top-spacing"},m={id:"treeviewAnimated",class:"col-lg-12 layout-spacing"},h={class:"statbox panel box box-shadow"},b=(0,i._)("div",{class:"panel-heading"},[(0,i._)("div",{class:"row"},[(0,i._)("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[(0,i._)("h4",null,"Animated")])])],-1),_={class:"panel-body"},w=(0,i.uE)('<ul class="file-tree"><li class="file-tree-folder"> CSS <ul><li>style.css</li></ul></li><li class="file-tree-folder open"> Images <ul class="d-block"><li>profile.jpeg</li><li>background.png</li><li>gallery.jpg</li></ul></li><li class="file-tree-folder"> HTML <ul><li class="file-tree-folder"> PAGES <ul><li>file name</li><li>file name</li><li>file name</li></ul></li><li>file name</li><li>file name</li></ul></li><li>index.html</li><li>components.html</li></ul>',1),k={class:"code-section-container show-code"},y=(0,i._)("span",null,"Code",-1),L=[y],j={key:0,class:"code-section text-start"},x=(0,i._)("pre",null,'<ul class="file-tree">\r\n    <li class="file-tree-folder">\r\n        CSS\r\n        <ul>\r\n            <li>style.css</li>\r\n        </ul>\r\n    </li>\r\n    <li class="file-tree-folder open">\r\n        Images\r\n        <ul class="d-block">\r\n            <li>profile.jpeg</li>\r\n            <li>background.png</li>\r\n            <li>gallery.jpg</li>\r\n        </ul>\r\n    </li>\r\n    <li class="file-tree-folder">\r\n        HTML\r\n        <ul>\r\n            <li class="file-tree-folder">\r\n                PAGES\r\n                <ul>\r\n                    <li>file name</li>\r\n                    <li>file name</li>\r\n                    <li>file name</li>\r\n                </ul>\r\n            </li>\r\n            <li>file name</li>\r\n            <li>file name</li>\r\n        </ul>\r\n    </li>\r\n    <li>index.html</li>\r\n    <li>components.html</li>\r\n</ul>    \r\n\r\nJavascript\r\n=========\r\nvar folder = document.querySelectorAll(\'.file-tree li.file-tree-folder\');\r\nvar file = document.querySelectorAll(\'.file-tree li\');\r\nvar j; var k;\r\n\r\nfor (j = 0; j < folder.length; j++) {\r\n    folder[j].addEventListener("click", function (a) {\r\n        if (this.children && this.children.length) {\r\n            this.children[0].parentNode.classList.toggle(\'open\');\r\n            this.children[0].classList.toggle(\'d-block\');\r\n        }\r\n        a.stopPropagation();\r\n    });\r\n}\r\nfor (k = 0; k < file.length; k++) {\r\n    file[k].addEventListener("click", function (b) {\r\n        b.stopPropagation();\r\n    });\r\n}\r\n\r\n',-1),E={id:"treeviewBasic",class:"col-lg-12 layout-spacing"},A={class:"statbox panel box box-shadow"},S=(0,i._)("div",{class:"panel-heading"},[(0,i._)("div",{class:"row"},[(0,i._)("div",{class:"col-xl-12 col-md-12 col-sm-12 col-12"},[(0,i._)("h4",null,"Basic")])])],-1),C={class:"panel-body"},q=(0,i.uE)('<ul id="myUL"><li><span class="caret">Parent Node</span><ul class="nested active"><li><span class="caret caret-down">img</span><ul class="nested"></ul></li><li><span class="caret caret-down">css</span><ul class="nested"><li>style.css</li></ul></li><li><span class="caret caret-down">js</span><ul class="nested"><li>script.js</li></ul></li><li><span>index.html</span></li></ul></li></ul>',1),P={class:"code-section-container show-code"},B=(0,i._)("span",null,"Code",-1),N=[B],D={key:0,class:"code-section text-start"},T=(0,i._)("pre",null,'<ul id="myUL">\r\n    <li>\r\n        <span class="caret">Parent Node</span>\r\n        <ul class="nested active">\r\n            <li>\r\n                <span class="caret caret-down">img</span>\r\n                <ul class="nested"></ul>\r\n            </li>\r\n            <li>\r\n                <span class="caret caret-down">css</span>\r\n                <ul class="nested">\r\n                    <li>style.css</li>\r\n                </ul>\r\n            </li>\r\n            <li>\r\n                <span class="caret caret-down">js</span>\r\n                <ul class="nested">\r\n                    <li>script.js</li>\r\n                </ul>\r\n            </li>\r\n            <li>\r\n                <span>index.html</span>\r\n            </li>\r\n        </ul>\r\n    </li>\r\n</ul>\r\n\r\nJavascript\r\n=========\r\nvar toggler = document.getElementsByClassName("caret");\r\nvar i;\r\n\r\nfor (i = 0; i < toggler.length; i++) {\r\n    toggler[i].addEventListener("click", function () {\r\n        this.parentElement.querySelector(".nested").classList.toggle("active");\r\n        this.classList.toggle("caret-down");\r\n    });\r\n}\r\n\r\n',-1);var H={setup(l){(0,a.j)({title:"Treeview"});const e=(0,s.iH)([]);(0,i.bv)((()=>{p()}));const n=l=>{e.value.includes(l)?e.value=e.value.filter((e=>e!=l)):e.value.push(l)},p=()=>{var l,e=document.getElementsByClassName("caret");for(l=0;l<e.length;l++)e[l].addEventListener("click",(function(){this.parentElement.querySelector(".nested").classList.toggle("active"),this.classList.toggle("caret-down")}));var n,i,s=document.querySelectorAll(".file-tree li.file-tree-folder"),r=document.querySelectorAll(".file-tree li");for(n=0;n<s.length;n++)s[n].addEventListener("click",(function(l){this.children&&this.children.length&&(this.children[0].parentNode.classList.toggle("open"),this.children[0].classList.toggle("d-block")),l.stopPropagation()}));for(i=0;i<r.length;i++)r[i].addEventListener("click",(function(l){l.stopPropagation()}))};return(l,s)=>{const a=(0,i.Q2)("scroll-spy-active"),p=(0,i.Q2)("scroll-spy-link"),f=(0,i.Q2)("scroll-spy");return(0,i.wg)(),(0,i.iD)("div",t,[((0,i.wg)(),(0,i.j4)(i.lR,{to:"#breadcrumb"},[c])),(0,i._)("div",o,[(0,i._)("div",d,[(0,i.wy)(((0,i.wg)(),(0,i.iD)("div",u,v)),[[a],[p]])]),(0,i.wy)(((0,i.wg)(),(0,i.iD)("div",g,[(0,i._)("div",m,[(0,i._)("div",h,[b,(0,i._)("div",_,[w,(0,i._)("div",k,[(0,i._)("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[0]||(s[0]=l=>n("code1"))},L),e.value.includes("code1")?((0,i.wg)(),(0,i.iD)("div",j,[(0,i.Wm)(r.Z,null,{default:(0,i.w5)((()=>[x])),_:1})])):(0,i.kq)("",!0)])])])]),(0,i._)("div",E,[(0,i._)("div",A,[S,(0,i._)("div",C,[q,(0,i._)("div",P,[(0,i._)("button",{type:"button",class:"btn btn-default toggle-code-snippet",onClick:s[1]||(s[1]=l=>n("code2"))},N),e.value.includes("code2")?((0,i.wg)(),(0,i.iD)("div",D,[(0,i.Wm)(r.Z,null,{default:(0,i.w5)((()=>[T])),_:1})])):(0,i.kq)("",!0)])])])])])),[[f]])])])}}};const Q=H;var G=Q}}]);
//# sourceMappingURL=elements-treeview.19fa34e4.js.map