(this["webpackJsonpthomas-garrison-project-5"]=this["webpackJsonpthomas-garrison-project-5"]||[]).push([[0],{25:function(e,a,t){e.exports=t(51)},30:function(e,a,t){},31:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),l=t(24),s=t.n(l),r=(t(30),t(10)),c=t(3),i=t(4),p=t(6),m=t(5),u=(t(31),t(8)),d=t.n(u),h=function(e){Object(p.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",null,o.a.createElement("h1",null,"Your Spellbook"),o.a.createElement("p",null,"Select a spell from the spell List to add it to your personal spell book")))}}]),t}(n.Component),g=t(9),b=t.n(g);t(49);b.a.initializeApp({apiKey:"AIzaSyC28nhXgkOpxuKLY2VBacsOML7V8ZhKx4s",authDomain:"spellbook-38955.firebaseapp.com",databaseURL:"https://spellbook-38955.firebaseio.com",projectId:"spellbook-38955",storageBucket:"spellbook-38955.appspot.com",messagingSenderId:"66976700318",appId:"1:66976700318:web:c1eb9d363152aef6e1a88f"});var f=b.a,v=function(e){Object(p.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).handleNextPage=function(){if(console.log("next"),e.state.pageNumber,e.state.pageNumber<7){var a=e.state.pageNumber+1;e.setState({pageNumber:a})}},e.handlePrevPage=function(){if(console.log("previous"),e.state.pageNumber,e.state.pageNumber>1){var a=e.state.pageNumber-1;e.setState({pageNumber:a})}},e.handleClick=function(e){f.database().ref().push(e)},e.handleRemove=function(e){f.database().ref().child(e).remove()},e.state={data:[],isLoading:!0,pageNumber:1,spellBook:[]},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;d()({method:"GET",url:"https://api.open5e.com/spells/",dataResponse:"json",params:{format:"json",page:this.state.pageNumber}}).then((function(a){console.log(a),e.setState({data:Object(r.a)(a.data.results),isLoading:!1})})),f.database().ref().on("value",(function(a){var t=[],n=a.val();for(var o in n)t.push({key:o,spellData:n[o]});e.setState({spellBook:t}),console.log(t)}))}},{key:"componentDidUpdate",value:function(){var e=this;d()({method:"GET",url:"https://api.open5e.com/spells/",dataResponse:"json",params:{format:"json",page:this.state.pageNumber}}).then((function(a){console.log(a),e.setState({data:Object(r.a)(a.data.results),isLoading:!1})}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"wrapper"},o.a.createElement(h,null),o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"spellBookContainer"},o.a.createElement("div",{className:"spellBook"},this.state.isLoading?o.a.createElement("p",null,"Loading..."):this.state.spellBook.map((function(a){return o.a.createElement("div",{key:a.key,className:"spellBookItem"},o.a.createElement("h2",null,a.spellData.name),o.a.createElement("p",{className:"description"},a.spellData.desc),o.a.createElement("button",{onClick:function(){return e.handleRemove(a.key)}},"Remove"))})))),o.a.createElement("div",{className:"spellsContainer"},o.a.createElement("div",{className:"buttonContainer"},o.a.createElement("button",{onClick:function(){e.handlePrevPage()}},"previous page"),o.a.createElement("button",{onClick:function(){e.handleNextPage()}},"next page")),o.a.createElement("div",{className:"contentContainer"},o.a.createElement("h2",null,"Compendium of Spells"),o.a.createElement("div",{className:"spells"},this.state.isLoading?o.a.createElement("p",null,"Loading..."):this.state.data.map((function(a){return o.a.createElement("div",{className:"spellCard",onClick:function(){return e.handleClick(a)},key:a.slug},o.a.createElement("h2",null,a.name),o.a.createElement("p",{className:"description"},a.desc))})))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.95d80b53.chunk.js.map