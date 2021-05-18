(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{49:function(e,t,a){e.exports=a(87)},81:function(e,t,a){},85:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(25),o=a.n(r),c=a(8),s=a(9),i=a(11),u=a(10),m=a(12),p=a(93),h=a(91),d=a(95),v=a(27),E=a.n(v),g=a(13),f=a.n(g),b=function(e){e?f.a.defaults.headers.common.Authorization=e:delete f.a.defaults.headers.common.Authorization},w=a(15),y=a(17),O=a(46),N=a(37),j=a(77),C={isAuthenticated:!1,user:{},loading:!1},S={},k=Object(y.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(N.a)({},e,{isAuthenticated:!j(t.payload),user:t.payload});case"USER_LOADING":return Object(N.a)({},e,{loading:!0});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}}}),x=[O.a],T=Object(y.e)(k,{},Object(y.d)(y.a.apply(void 0,x),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()||y.d)),R=function(e){return{type:"SET_CURRENT_USER",payload:e}},_=function(){return function(e){localStorage.removeItem("jwtToken"),b(!1),e(R({}))}},D=a(28),L=a(24),A=a(38),U=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(A.a,{className:"NavBar"},l.a.createElement(D.a,null,l.a.createElement(A.a.Brand,{href:"#home",className:"cornerlogo"},l.a.createElement("img",{src:"images/AWtY.png",alt:"are we there yet logo",className:"cornerlogo"})),l.a.createElement(L.a,{className:"selection"},l.a.createElement(L.a.Link,{href:"./"},l.a.createElement("span",{className:"glyphicon glyphicon-home"}),"Home"),l.a.createElement(L.a.Link,{href:"./Register"},l.a.createElement("span",{className:"glyphicon glyphicon-user"}),"Sign Up"),l.a.createElement(L.a.Link,{href:"./Login"},l.a.createElement("span",{className:"glyphicon glyphicon-log-in"}),"Login"),l.a.createElement(L.a.Link,{href:"./addtopic"},l.a.createElement("span",{className:"glyphicon glyphicon-log-in"}),"Add Topic"),l.a.createElement(L.a.Link,{href:"./viewtopics"},l.a.createElement("span",{className:"glyphicon glyphicon-log-in"}),"See Topics")))))}}]),t}(n.Component);var I=function(e){return l.a.createElement("div",null,l.a.createElement("h3",{className:"welcome"},"Welcome To Are We There Yet"),l.a.createElement("div",{className:"recaps"},"Recap/Overall Stats"),l.a.createElement("img",{src:"images/AWtY.png",alt:"Are We There Yet logo",class:"welcomelogo"}))},P=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).onLogoutClick=function(e){e.preventDefault(),a.props.logoutUser()},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.auth.user;return l.a.createElement("div",{style:{height:"75vh"},className:"container valign-wrapper"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"landing-copy col s12 center-align"},l.a.createElement("h4",null,l.a.createElement("b",null,"Hey there,")," ",e.name.split(" ")[0],l.a.createElement("p",{className:"flow-text grey-text text-darken-1"},"You are logged into a full-stack"," ",l.a.createElement("span",{style:{fontFamily:"monospace"}},"MERN")," app \ud83d\udc4f")),l.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},onClick:this.onLogoutClick,className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Logout"))))}}]),t}(n.Component),F=Object(w.b)(function(e){return{auth:e.auth}},{logoutUser:_})(P),q=a(19),W=a(90),H=a(94),M=a(4),B=a.n(M),Y=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).onChange=function(t){e.setState(Object(q.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={firstname:e.state.firstname,lastname:e.state.lastname,email:e.state.email,password:e.state.password,password2:e.state.password2};e.props.registerUser(a,e.props.history)},e.state={firstname:"",lastname:"",email:"",password:"",password2:"",errors:{}},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s8 offset-s2"},l.a.createElement("div",{className:"col s12",style:{textAlign:"center"}},l.a.createElement("h4",null,l.a.createElement("b",null,"Sign up")," below"),l.a.createElement("p",{className:"grey-text text-darken-1"},"Already have an account? ",l.a.createElement(W.a,{to:"/login"},"Log in"))),l.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},l.a.createElement("div",{className:"input-field col s12"},l.a.createElement("input",{onChange:this.onChange,value:this.state.firstname,error:e.firstname,id:"firstname",type:"text",className:B()("",{invalid:e.firstname})}),l.a.createElement("label",{htmlFor:"name"},"First Name"),l.a.createElement("span",{className:"red-text"},e.firstname)),l.a.createElement("div",{className:"input-field col s12"},l.a.createElement("input",{onChange:this.onChange,value:this.state.lastname,error:e.lastname,id:"lastname",type:"text",className:B()("",{invalid:e.lastname})}),l.a.createElement("label",{htmlFor:"name"},"Last Name"),l.a.createElement("span",{className:"red-text"},e.lastname)),l.a.createElement("div",{className:"input-field col s12"},l.a.createElement("input",{onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email",className:B()("",{invalid:e.email})}),l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("span",{className:"red-text"},e.email)),l.a.createElement("div",{className:"input-field col s12"},l.a.createElement("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",className:B()("",{invalid:e.password})}),l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("span",{className:"red-text"},e.password)),l.a.createElement("div",{className:"input-field col s12"},l.a.createElement("input",{onChange:this.onChange,value:this.state.password2,error:e.password2,id:"password2",type:"password",className:B()("",{invalid:e.password2})}),l.a.createElement("label",{htmlFor:"password2"},"Confirm Password"),l.a.createElement("span",{className:"red-text"},e.password2)),l.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},l.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},type:"submit",className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Sign up"))))))}}]),t}(n.Component),G=Object(w.b)(function(e){return{auth:e.auth,errors:e.errors}},{registerUser:function(e,t){return function(a){f.a.post("/api/users/register",e).then(function(e){return t.push("/login")}).catch(function(e){return a({type:"GET_ERRORS",payload:e.response.data})})}}})(Object(H.a)(Y)),V=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).onChange=function(t){e.setState(Object(q.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={email:e.state.email,password:e.state.password};e.props.loginUser(a)},e.state={email:"",password:"",errors:{}},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push("/dashboard"),e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{style:{marginTop:"4rem"},className:"row"},l.a.createElement("div",{className:"col s8 offset-s2"},l.a.createElement(W.a,{to:"/",className:"btn-flat waves-effect"},l.a.createElement("i",{className:"material-icons left"},"keyboard_backspace")," Back to home"),l.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},l.a.createElement("h4",null,l.a.createElement("b",null,"Login")," below"),l.a.createElement("p",{className:"grey-text text-darken-1"},"Don't have an account? ",l.a.createElement(W.a,{to:"/register"},"Register"))),l.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},l.a.createElement("div",{className:"input-field col s12"},l.a.createElement("input",{onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email",className:B()("",{invalid:e.email||e.emailnotfound})}),l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("span",{className:"red-text"},e.email,e.emailnotfound)),l.a.createElement("div",{className:"input-field col s12"},l.a.createElement("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",className:B()("",{invalid:e.password||e.passwordincorrect})}),l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("span",{className:"red-text"},e.password,e.passwordincorrect)),l.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},l.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},type:"submit",className:"btn btn-large waves-effect waves-light hoverable accent-3"},"Login"))))))}}]),t}(n.Component),X=Object(w.b)(function(e){return{auth:e.auth,errors:e.errors}},{loginUser:function(e){return function(t){f.a.post("/api/users/login",e).then(function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),b(a);var n=E()(a);t(R(n))}).catch(function(e){return t({type:"GET_ERRORS",payload:e.response.data})})}}})(V),z=a(48),J=a(92),Q=Object(w.b)(function(e){return{auth:e.auth}})(function(e){var t=e.component,a=e.auth,n=Object(z.a)(e,["component","auth"]);return l.a.createElement(h.a,Object.assign({},n,{render:function(e){return!0===a.isAuthenticated?l.a.createElement(t,e):l.a.createElement(J.a,{to:"/login"})}}))}),K=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={topic:"",prompt:""},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"onChange",value:function(e){this.setState(Object(q.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",{class:"TopicBig"},"Topic List"),l.a.createElement("br",null),l.a.createElement("form",{onSubmit:this.onSubmit,className:"Topic"},l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("input",{type:"text",name:"topic1",placeholder:"Topic",value:this.state.value}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"topic1",placeholder:"Topic",value:this.state.value}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"topic1",placeholder:"Topic",value:this.state.value}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"topic1",placeholder:"Topic",value:this.state.value}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"topic1",placeholder:"Topic",value:this.state.value}),l.a.createElement("br",null),l.a.createElement("br",null))))}}]),t}(n.Component);var Z=function(){return l.a.createElement("div",null,l.a.createElement(K,null))},$=a(18),ee={getTopics:function(){return f.a.get("/api/topic")},getTopic:function(e){return f.a.get("/api/topic"+e)},deleteTopic:function(e){return f.a.delete("/api/topic"+e)},saveTopic:function(e){return f.a.post("/api/topic",e)},saveResponse:function(e){return f.a.post("/api/responses",e)},getResponses:function(e){return f.a.get("/api/responses"+e)}};var te=function(e){var t,a=e.topic;function n(e){e.preventDefault(),console.log("Hi, good job!"),console.log(e.target.value);var a=e.target.value;ee.saveResponse({userID:"6099bf2843afca3ed4f46e53",topicID:t._id,answer:a})}return ee.getTopics().then(function(e){return function(e){var a=e.data;t=a[a.length-1],console.log(t._id)}(e)}).catch(function(e){return console.log(e)}),console.log(a),l.a.createElement("div",{className:"row"},l.a.createElement("button",{onClick:n,value:"1"},"1"),l.a.createElement("button",{onClick:n,value:"2"},"2"),l.a.createElement("button",{onClick:n,value:"3"},"3"),l.a.createElement("button",{onClick:n,value:"4"},"4"),l.a.createElement("button",{onClick:n,value:"5"},"5"))};var ae=function(e){var t,a=e.topic;function n(e){e.preventDefault(),console.log("Hi, good job!"),console.log(e.target.value);var a=e.target.value;ee.saveResponse({userID:"6099bf2843afca3ed4f46e53",topicID:t._id,answer:a})}return ee.getTopics().then(function(e){return function(e){var a=e.data;t=a[a.length-1],console.log(t._id)}(e)}).catch(function(e){return console.log(e)}),console.log(a),l.a.createElement("div",{className:"row"},l.a.createElement("button",{onClick:n,value:"up"},"Up"),l.a.createElement("button",{onClick:n,value:"ok"},"Ok"),l.a.createElement("button",{onClick:n,value:"down"},"Down"))};var ne=function(e){var t,a=e.topic;return ee.getTopics().then(function(e){return function(e){var a=e.data;t=a[a.length-1],console.log(t._id)}(e)}).catch(function(e){return console.log(e)}),console.log(a),l.a.createElement("div",{className:"row"},l.a.createElement("input",{placeholder:"type question here",id:"questionsub"}),l.a.createElement("button",{onClick:function(e){e.preventDefault(),console.log("Hi, good job!"),console.log(e.target.value);var a=e.target.value;ee.saveResponse({userID:"6099bf2843afca3ed4f46e53",topicID:t._id,answer:a})},value:"up"}," "))},le=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).topicChange=function(e){a.setState({topic:e.target.value})},a.state={value:"",topic:""},a.topicChange=a.topicChange.bind(Object($.a)(Object($.a)(a))),a.handleChange=a.handleChange.bind(Object($.a)(Object($.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object($.a)(Object($.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log(this.state.value),console.log(this.state.topic),ee.saveTopic({topic:this.state.topic,questionType:this.state.value})}},{key:"render",value:function(){return console.log(this.state.value),"multipleChoice"===this.state.value?l.a.createElement(te,null):"thumbsChoice"===this.state.value?l.a.createElement(ae,null):"questionsPrompt"===this.state.value&&l.a.createElement(ne,null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{style:{marginTop:"4rem"},className:"row"},l.a.createElement("h3",null,"Understanding/Comfort")),l.a.createElement("div",{style:{marginTop:"2rem"},className:"row"},l.a.createElement("form",{onSubmit:this.handleSubmit,class:"col s12"},l.a.createElement("div",{class:"input-field col xl5 l5 m5 s12"},l.a.createElement("input",{id:"topic",className:"questionName",placeholder:"Input Topic Here",onChange:this.topicChange,value:this.state.topic})),l.a.createElement("div",{class:"input-field col xl5 l5 m5 s12 "},l.a.createElement("select",{className:"browser-default",value:this.state.value,onChange:this.handleChange},l.a.createElement("option",{value:""},"Choose an option"),l.a.createElement("option",{value:"multipleChoice"},"Multiple Choice"),l.a.createElement("option",{value:"thumbsChoice"},"Thumbs Choice"),l.a.createElement("option",{value:"questionsPrompt"},"Any Questions?"))),l.a.createElement("div",{class:"input-field col xl2 l2 m2 s12 "},l.a.createElement("button",{class:"btn waves-effect waves-light hoverable white-text green darken-3 ",variant:"primary",type:"submit"},"Submit",l.a.createElement("i",{class:"material-icons right"},"send"))))))}}]),t}(l.a.Component),re=a(26);var oe=function(){var e,t=Object(n.useState)(""),a=Object(re.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)(""),s=Object(re.a)(c,2),i=s[0],u=s[1];return Object(n.useEffect)(function(){},[]),setInterval(function(){ee.getTopics().then(function(e){return function(e){var t=e.data,a=t[t.length-1];o(a.topic),u(a.questionType)}(e)}).catch(function(e){return console.log(e)}),console.log(r)},3e3),"multipleChoice"===i?e=l.a.createElement(te,null):"thumbsChoice"===i?e=l.a.createElement(ae,null):"questionsPrompt"===i&&(e=l.a.createElement(ne,null)),l.a.createElement("div",null,l.a.createElement(D.a,null,l.a.createElement("h3",null,"Comprehension Check"),l.a.createElement("h1",null,r),e))};var ce=function(){var e=Object(n.useState)(""),t=Object(re.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)(function(){},[]),ee.getResponses().then(function(e){return function(e){var t=e.data,n=t[t.length-1];r(n.answer),console.log(a)}(e)}).catch(function(e){return console.log(e)}),l.a.createElement("div",null,a)};a(81);if(localStorage.jwtToken){var se=localStorage.jwtToken;b(se);var ie=E()(se);T.dispatch(R(ie));var ue=Date.now()/1e3;ie.exp<ue&&(T.dispatch(_()),window.location.href="./login")}var me=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(w.a,{store:T},l.a.createElement(p.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(U,null),l.a.createElement(h.a,{exact:!0,path:"/",component:I}),l.a.createElement(h.a,{exact:!0,path:"/register",component:G}),l.a.createElement(h.a,{exact:!0,path:"/login",component:X}),l.a.createElement(d.a,null,l.a.createElement(Q,{exact:!0,path:"/dashboard",component:F}),l.a.createElement(Q,{path:"/topiclist",exact:!0,component:Z}),l.a.createElement(Q,{exact:!0,path:"/addtopic",component:le}),l.a.createElement(Q,{exact:!0,path:"/viewtopics",component:oe}),l.a.createElement(Q,{exact:!0,path:"/final",component:ce})))))}}]),t}(n.Component);a(83),a(85);o.a.render(l.a.createElement(me,null),document.getElementById("root"))}},[[49,2,1]]]);
//# sourceMappingURL=main.63080292.chunk.js.map