(this.webpackJsonpfacerecognition=this.webpackJsonpfacerecognition||[]).push([[0],[,,,,,,function(e,t,a){},,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(8),s=a.n(i),r=(a(6),a(1)),l=a(2),c=a(4),m=a(3),u=a(5),d=function(e){var t=e.onRouteChange;return e.isSignedIn?o.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},o.a.createElement("p",{onClick:function(){return t("signout")},className:"custom-dbrown f3 link dim underline pa3 pointer"},"Sign Out")):o.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},o.a.createElement("p",{onClick:function(){return t("Signin")},className:"custom-dbrown f3 link dim underline pa3 pointer"},"Sign In"),o.a.createElement("p",{onClick:function(){return t("Register")},className:"custom-dbrown f3 link dim underline pa3 pointer"},"Register"))},p=a.p+"static/media/doglify-logo.d665c382.png",g=function(e){var t=e.name,a=e.entries;return o.a.createElement("div",null,o.a.createElement("div",{className:""},o.a.createElement("img",{src:p,alt:"doglify-logo",width:"250",height:"250"})),o.a.createElement("div",{className:"custom-beige f3 f"},"".concat(t,", so far you have Doglified ").concat(a," pictures.")))},h=(a(14),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onEmailChange=function(e){a.setState({signInEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({signInPassword:e.target.value})},a.onSubmitSignIn=function(){fetch("https://damp-everglades-56228.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.signInEmail,password:a.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id?(a.props.loadUser(e),a.props.onRouteChange("home")):document.getElementById("wrong").classList.toggle("wrongCred")}))},a.state={signInEmai:"",signInPassword:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.onRouteChange;return o.a.createElement("article",{className:"br3 ba dark-gray #eebbc3 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center pink custom-brown"},o.a.createElement("main",{className:"pa4 black-80"},o.a.createElement("div",{className:"measure"},o.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},o.a.createElement("legend",{className:"f1 fw6 ph0 mh custom-brown"},"Sign In"),o.a.createElement("div",{className:"mt3"},o.a.createElement("label",{className:"db fw6 lh-copy f6 custom-brown",htmlFor:"email-address"},"Email"),o.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),o.a.createElement("div",{className:"mv3"},o.a.createElement("label",{className:"db fw6 lh-copy f6 custom-brown",htmlFor:"password"},"Password"),o.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),o.a.createElement("div",{className:"wrongCred f6 red pa3",id:"wrong"},"Invalid username and/or password.",o.a.createElement("br",null)," Please try again."),o.a.createElement("div",{className:""},o.a.createElement("input",{onClick:this.onSubmitSignIn,className:"button b ph3 pv2 input-reset br2 ba b--black grow pointer f6 dib",type:"submit",value:"Sign in"})),o.a.createElement("div",{className:"lh-copy mt3"},o.a.createElement("p",{onClick:function(){return e("Register")},className:"f6 link dim black db pointer"},"Register")))))}}]),t}(o.a.Component)),b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onNameChange=function(e){a.setState({name:e.target.value})},a.onEmailChange=function(e){a.setState({email:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.onSubmitSignIn=function(){fetch("https://damp-everglades-56228.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.email,password:a.state.password,name:a.state.name})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={email:"",password:"",name:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 pink custom-brown center"},o.a.createElement("main",{className:"pa4 black-80"},o.a.createElement("div",{className:"measure"},o.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},o.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Register"),o.a.createElement("div",{className:"mt3"},o.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),o.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameChange})),o.a.createElement("div",{className:"mt3"},o.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),o.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),o.a.createElement("div",{className:"mv3"},o.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),o.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),o.a.createElement("div",{className:""},o.a.createElement("input",{onClick:this.onSubmitSignIn,className:"button b ph3 pv2 input-reset ba b--black grow pointer f6 dib",type:"submit",value:"Register"})))))}}]),t}(o.a.Component),f=(a(15),function(e){var t=e.onInputChange,a=e.onButtonSubmit;return o.a.createElement("div",null,o.a.createElement("p",{className:"f4 custom-beige"},"Enter a URL to Doglify your picture. Give it a try. I know you want to."),o.a.createElement("div",{className:"center"},o.a.createElement("div",{className:"form center pa3"},o.a.createElement("input",{className:"montreg f4 pa2 w-70 center",type:"text",placeholder:"insert URL",onChange:t}),o.a.createElement("button",{className:"myButton br2 w-30 grow link ",onClick:a},"Detect"))))}),w=(a(16),a.p+"static/media/borys5.88395bfe.png"),E=function(e){var t=e.imageUrl,a=e.box;return o.a.createElement("div",{className:"center ma"},o.a.createElement("div",{className:"absolute mt2"},o.a.createElement("img",{id:"inputimage",alt:"",src:t,width:"500px",height:"auto"}),o.a.createElement("div",{className:"bounding-box",style:{top:a.topRow,right:a.rightCol,bottom:a.bottomRow,left:a.leftCol}},o.a.createElement("img",{id:"dogdog",src:w}))))},v=(a(17),a(18),{input:"",imageUrl:"",box:{},route:"Signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}}),N=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputimage"),n=Number(a.width),o=Number(a.height);return{leftCol:t.left_col*n,topRow:t.top_row*o,rightCol:n-t.right_col*n,bottomRow:o-t.bottom_row*o}},e.displayFaceBox=function(t){console.log(t),e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),fetch("https://damp-everglades-56228.herokuapp.com/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){t&&fetch("https://damp-everglades-56228.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})).catch(console.log),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"signout"===t?e.setState(v):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state={input:"",imageUrl:"",box:{},route:"Signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,a=e.imageUrl,n=e.route,i=e.box;return o.a.createElement("div",{className:"App"},o.a.createElement(d,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===n?o.a.createElement("div",null,o.a.createElement(g,{name:this.state.user.name,entries:this.state.user.entries}),o.a.createElement(f,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),o.a.createElement(E,{box:i,imageUrl:a})):"Signin"===n?o.a.createElement(h,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):o.a.createElement(b,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.e4044d61.chunk.js.map