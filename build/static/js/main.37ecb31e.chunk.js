/*! For license information please see main.37ecb31e.chunk.js.LICENSE.txt */
(this["webpackJsonpprod-exercise"]=this["webpackJsonpprod-exercise"]||[]).push([[0],{110:function(e,t,a){e.exports=a.p+"static/media/fog-low.7812184c.png"},140:function(e,t,a){e.exports=a(200)},145:function(e,t,a){},196:function(e,t,a){e.exports=a.p+"static/media/antoine-barres.dfbf459c.jpg"},197:function(e,t,a){e.exports=a.p+"static/media/clouds.61c4e000.png"},198:function(e,t,a){},199:function(e,t,a){},200:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),l=a.n(o),i=a(16),c=a(13),s=a(22),m=a(23),u=a(24),p=a(17),d=a(44),h=(a(145),a(247)),g=a(77),E=a.n(g),f=a(111),b=a.n(f),v=a(25),y=a.n(v),O=a(19),x=a(47),j=a(113),S=a(37),N=a(27),I={authenticated:!1,loading:!1,credentials:{},likes:[],notifications:[]},k={posts:[],post:{},loading:!1},T={loading:!1,errors:null},C=[j.a];console.log(C);var w=Object(x.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTHENTICATED":return Object(N.a)({},e,{authenticated:!0});case"SET_UNAUTHENTICATED":return I;case"SET_USER":return Object(N.a)({authenticated:!0,loading:!1},t.payload);case"LOADING-USER":return Object(N.a)({},e,{loading:!0});case"LIKE_POST":return Object(N.a)({},e,{likes:[].concat(Object(S.a)(e.likes),[{userHandle:e.credentials.handle,postId:t.payload.postId}])});case"UNLIKE_POST":return Object(N.a)({},e,{likes:e.likes.filter((function(e){return e.postId!==t.payload.postId}))});default:return e}},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_DATA":return Object(N.a)({},e,{loading:!0});case"SET_POSTS":return Object(N.a)({},e,{posts:t.payload,loading:!1});case"LIKE_POST":case"UNLIKE_POST":var a=e.posts.findIndex((function(e){return e.postId===t.payload.postId}));return e.posts[a]=t.payload,Object(N.a)({},e);default:return e}},UI:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ERRORS":return Object(N.a)({},e,{loading:!1,errors:t.payload});case"CLEAR_ERRORS":return Object(N.a)({},e,{loading:!1,errors:null});case"LOADING_UI":return Object(N.a)({},e,{loading:!0});default:return e}}}),U=x.d,A=Object(x.e)(w,{},U(x.a.apply(void 0,C))),P=function(){return function(e){localStorage.removeItem("FBIdToken"),delete y.a.defaults.headers.common.Authorization,e({type:"SET_UNAUTHENTICATED"})}},L=function(){return function(e){e({type:"LOADING-USER"}),y.a.get("/user").then((function(t){e({type:"SET_USER",payload:t.data})})).catch((function(e){return console.log(e)}))}},R=function(e){var t="Bearer ".concat(e);localStorage.setItem("FBIdToken",t),y.a.defaults.headers.common.Authorization=t},D=(a(46),a(259)),_=a(235),F=function(e){var t=e.children,a=e.onClick,n=e.tip,o=e.btnClassName,l=e.tipClassName;return r.a.createElement(D.a,{title:n,className:l,placement:"top"},r.a.createElement(_.a,{onClick:a,className:o},t))},W=a(242),B=a(243),G=a(241),z=a(115),H=a.n(z),K=a(117),M=a.n(K),Y=a(118),J=a.n(Y);a(21),a(236),a(237),a(258),a(238),a(239),a(240);var V=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.authenticated;return(r.a.createElement(W.a,null,r.a.createElement(B.a,{className:"nav-container"},e?r.a.createElement(n.Fragment,null,r.a.createElement(F,{tip:"Post"},r.a.createElement(H.a,null)),r.a.createElement(p.b,{to:"/"},r.a.createElement(F,{tip:"Home"},r.a.createElement(M.a,null))),r.a.createElement(F,{tip:"Notifications"},r.a.createElement(J.a,null))):r.a.createElement(n.Fragment,null,r.a.createElement(G.a,{color:"inherit",component:p.b,to:"/"},"Home"),r.a.createElement(G.a,{color:"inherit",component:p.b,to:"/login"},"Login"),r.a.createElement(G.a,{color:"inherit",component:p.b,to:"/signup"},"Signup")))))}}]),t}(n.Component),$=Object(O.b)((function(e){return{authenticated:e.user.authenticated}}))(V),q=a(3),Q=Object(O.b)((function(e){return{authenticated:e.user.authenticated}}))((function(e){var t=e.component,a=e.authenticated,n=Object(q.a)(e,["component","authenticated"]);return r.a.createElement(d.b,Object.assign({},n,{render:function(e){return!0===a?r.a.createElement(d.a,{to:"/"}):r.a.createElement(t,e)}}))})),X=a(253),Z=a(36),ee=a.n(Z),te=a(58),ae=a.n(te),ne=a(119),re=a.n(ne),oe=a(244),le=a(246),ie=a(245),ce=a(126),se=a(121),me=a.n(se),ue=a(120),pe=a.n(ue),de=a(81),he=a.n(de),ge=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).likedPost=function(){return!(!a.props.user.likes||!a.props.user.likes.find((function(e){return e.postId===a.props.post.postId})))},a.likePost=function(){a.props.likePost(a.props.post.postId)},a.unlikePost=function(){a.props.unlikePost(a.props.post.postId)},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){ae.a.extend(re.a);var e=this.props,t=e.classes,a=e.post,n=a.body,o=a.createdAt,l=a.userImage,i=a.userHandle,c=(a.postId,a.likeCount),s=a.commentCount,m=e.user.authenticated?this.likedPost()?r.a.createElement(F,{tip:"Undo like",onClick:this.unlikePost},r.a.createElement(pe.a,{color:"primary"})):r.a.createElement(F,{tip:"Like",onClick:this.likePost},r.a.createElement(he.a,{color:"primary"})):r.a.createElement(F,{tip:"like"},r.a.createElement(p.b,{to:"/login"},r.a.createElement(he.a,{color:"primary"})));return r.a.createElement(oe.a,{className:t.card},r.a.createElement(ie.a,{image:l,title:"Profile image",className:t.image}),r.a.createElement(le.a,{className:t.content},r.a.createElement(ce.a,{variant:"h5",component:p.b,to:"/users/".concat(i),color:"primary"},i),r.a.createElement(ce.a,{variant:"body2",color:"textSecondary"},ae()(o).fromNow()),r.a.createElement(ce.a,{variant:"body1"},n),m,r.a.createElement("span",null,c," Likes"),r.a.createElement(F,{tip:"comments"},r.a.createElement(me.a,{color:"primary"})),r.a.createElement("span",null,s," Comments")))}}]),t}(n.Component),Ee={likePost:function(e){return function(t){y.a.get("/post/".concat(e,"/like")).then((function(e){t({type:"LIKE_POST",payload:e.data})})).catch((function(e){return console.log(e)}))}},unlikePost:function(e){return function(t){y.a.get("/post/".concat(e,"/unlike")).then((function(e){t({type:"UNLIKE_POST",payload:e.data})})).catch((function(e){return console.log(e)}))}}},fe=Object(O.b)((function(e){return{user:e.user}}),Ee)(ee()({card:{display:"flex",marginBottom:20},image:{minWidth:200},content:{padding:25,objectFit:"cover"}})(ge)),be=a(10),ve=a(255),ye=a(257),Oe=a(250),xe=a(249),je=a(248),Se=a(68),Ne=a.n(Se),Ie=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={bio:"",location:"",open:!1},a.handleOpen=function(){a.setState({open:!0}),a.mapUserDetailToState(a.props.credentials)},a.handleClose=function(){a.setState({open:!1})},a.mapUserDetailToState=function(e){a.setState({bio:e.bio?e.bio:"",location:e.location?e.location:""})},a.handleChange=function(e){a.setState(Object(be.a)({},e.target.name,e.target.value))},a.handleSubmit=function(){var e={bio:a.state.bio,location:a.state.location};a.props.editUserDetails(e),a.handleClose()},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.credentials;this.mapUserDetailToState(e)}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(n.Fragment,null,r.a.createElement(F,{tip:"Edit Details",onClick:this.handleOpen,btnClassName:e.button},r.a.createElement(Ne.a,{color:"primary"})),r.a.createElement(ye.a,{open:this.state.open,onClose:this.handleClose,fullWidth:!0,maxWidth:"sm"},r.a.createElement(je.a,null,"Edit Your Details"),r.a.createElement(xe.a,null,r.a.createElement("form",null,r.a.createElement(ve.a,{name:"bio",type:"text",label:"Bio",multiline:!0,rows:"3",placeholder:"A short bio about yourself",className:e.textField,value:this.state.bio,onChange:this.handleChange,fullWidth:!0}),r.a.createElement(ve.a,{name:"location",type:"text",label:"Location",placeholder:"Where you live",className:e.textField,value:this.state.location,onChange:this.handleChange,fullWidth:!0}))),r.a.createElement(Oe.a,null,r.a.createElement(G.a,{onClick:this.handleSubmit,color:"primary"},"Save"),r.a.createElement(G.a,{onClick:this.handleClose,color:"primary"},"Cancel"))))}}]),t}(n.Component),ke={editUserDetails:function(e){return function(t){t({type:"LOADING-USER"}),y.a.post("/user",e).then((function(){t(L())})).catch((function(e){return console.log(e)}))}}},Te=Object(O.b)((function(e){return{credentials:e.user.credentials}}),ke)(ee()((function(e){return{form:{textAlign:"center"},image:{margin:"20px auto 10px auto",height:"50px",width:"50px"},pageTitle:{margin:"10px auto 20px auto"},textField:{margin:"10px auto 10px auto"},button:{position:"relative",float:"right"},progress:{position:"absolute"},customError:{color:"red",fontSize:"0.8rem",marginTop:10}}}))(Ie)),Ce=a(251),we=a(125),Ue=a(122),Ae=a.n(Ue),Pe=a(123),Le=a.n(Pe),Re=a(124),De=a.n(Re),_e=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleImageChange=function(e){var t=e.target.files[0],n=new FormData;n.append("image",t,t.name),a.props.uploadImage(n)},a.handleEditPicture=function(){document.getElementById("imageInput").click()},a.handleLogout=function(){a.props.logoutUser()},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.user,o=a.credentials,l=o.handle,i=o.createdAt,c=o.imageUrl,s=o.bio,m=o.location,u=a.loading,d=a.authenticated;return u?r.a.createElement("p",null,"Loading..."):d?r.a.createElement(we.a,{className:t.paper},r.a.createElement("div",{className:t.profile},r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{src:c,alt:"profile",className:"profile-image"}),r.a.createElement("input",{type:"file",id:"imageInput",hidden:"hidden",onChange:this.handleImageChange}),r.a.createElement(F,{tip:"Edit Profile Picture",onClick:this.handleEditPicture,btnClassName:"button"},r.a.createElement(Ne.a,{color:"primary"}))),r.a.createElement("hr",null),r.a.createElement("div",{className:"profile-details"},r.a.createElement(Ce.a,{component:p.b,to:"/users/".concat(l),color:"primary",variant:"h5"},"@",l),r.a.createElement("hr",null),s&&r.a.createElement(ce.a,{variant:"body2"},s),r.a.createElement("hr",null),m&&r.a.createElement(n.Fragment,null,r.a.createElement(Ae.a,{color:"primary"})," ",r.a.createElement("span",null,m),r.a.createElement("hr",null)),r.a.createElement(Le.a,{color:"primary"})," ",r.a.createElement("span",null,"Joined ",ae()(i).format("MMM YYYY"))),r.a.createElement(F,{tip:"Logout",onClick:this.handleLogout},r.a.createElement(De.a,{color:"primary"})),r.a.createElement(Te,null))):r.a.createElement(we.a,{className:t.paper},r.a.createElement(ce.a,{variant:"body2",align:"center"},"No profile found, please login again"),r.a.createElement("div",{className:t.buttons},r.a.createElement(G.a,{variant:"contained",color:"primary",component:p.b,to:"/login"},"Login"),r.a.createElement(G.a,{variant:"contained",color:"secondary",component:p.b,to:"/login"},"Signup")))}}]),t}(n.Component),Fe={logoutUser:P,uploadImage:function(e){return function(t){t({type:"LOADING-USER"}),y.a.post("/user/image",e).then((function(e){t(L())})).catch((function(e){return console.log(e)}))}}},We=Object(O.b)((function(e){return{user:e.user}}),Fe)(ee()((function(e){return{paper:{padding:20},profile:{"& .image-wrapper":{textAlign:"center",position:"relative","& button":{position:"absolute",top:"80%",left:"70%"}},"& .profile-image":{width:200,height:200,objectFit:"cover",maxWidth:"100%",borderRadius:"50%"},"& .profile-details":{textAlign:"center","& span, svg":{verticalAlign:"middle"},"& a":{color:"#00bcd4"}},"& hr":{border:"none",margin:"0 0 10px 0"},"& svg.button":{"&:hover":{cursor:"pointer"}}},buttons:{textAlign:"center","& a":{margin:"20px 10px"}}}}))(_e)),Be=a(252);var Ge=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"page-header section-dark",style:{backgroundImage:"url("+a(196)+")"}},r.a.createElement("div",{className:"filter"}),r.a.createElement("div",{className:"content-center"},r.a.createElement(Be.a,null,r.a.createElement("div",{className:"title-brand"},r.a.createElement("h1",{className:"presentation-title"},"World Gym Stay In!"),r.a.createElement("div",{className:"fog-low"},r.a.createElement("img",{alt:"...",src:a(110)})),r.a.createElement("div",{className:"fog-low right"},r.a.createElement("img",{alt:"...",src:a(110)}))),r.a.createElement("h2",{className:"presentation-subtitle text-center"},"Work out at home!"))),r.a.createElement("div",{className:"moving-clouds",style:{backgroundImage:"url("+a(197)+")"}})))},ze=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.getPosts()}},{key:"render",value:function(){var e=this.props.data,t=e.posts,a=e.loading?r.a.createElement("p",null,"Loading..."):t.map((function(e){return r.a.createElement(fe,{key:e.postId,post:e})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ge,null),r.a.createElement("div",{className:"container"},r.a.createElement(X.a,{container:!0,spacing:10},r.a.createElement(X.a,{item:!0,sm:8,xs:12},a),r.a.createElement(X.a,{item:!0,sm:4,xs:12},r.a.createElement(We,null)))))}}]),t}(n.Component),He={getPosts:function(){return function(e){e({type:"LOADING_DATA"}),y.a.get("/posts").then((function(t){e({type:"SET_POSTS",payload:t.data})})).catch((function(t){e({type:"SET_POSTS",payload:null})}))}}},Ke=Object(O.b)((function(e){return{data:e.data}}),He)(ze),Me=a(70),Ye=a.n(Me),Je=a(254),Ve=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).handleSubmit=function(t){t.preventDefault();var a={email:e.state.email,password:e.state.password};e.props.loginUser(a,e.props.history)},e.handleChange=function(t){e.setState(Object(be.a)({},t.target.name,t.target.value))},e.state={email:"",password:"",errors:{}},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.UI.errors&&this.setState({errors:e.UI.errors})}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.UI.loading,n=this.state.errors;return r.a.createElement("div",{style:{paddingTop:100}},r.a.createElement(X.a,{container:!0,className:t.form},r.a.createElement(X.a,{item:!0,sm:!0}),r.a.createElement(X.a,{item:!0,sm:!0},r.a.createElement("img",{src:Ye.a,alt:"logo",className:t.image}),r.a.createElement(ce.a,{variant:"h4",className:t.pageTitle},"Login"),r.a.createElement("form",{noValidate:!0,onSubmit:this.handleSubmit},r.a.createElement(ve.a,{id:"email",name:"email",type:"email",label:"Email",className:t.textField,helperText:n.email,error:!!n.email,value:this.state.email,onChange:this.handleChange,fullWidth:!0}),r.a.createElement(ve.a,{id:"password",name:"password",type:"password",label:"Password",className:t.textField,helperText:n.password,error:!!n.password,value:this.state.password,onChange:this.handleChange,fullWidth:!0}),n.general&&r.a.createElement(ce.a,{variant:"body2",className:t.customError},n.general),r.a.createElement(G.a,{type:"submit",variant:"contained",color:"primary",className:t.button,disabled:a},"Login",a&&r.a.createElement(Je.a,{size:30,className:t.progress})),r.a.createElement("br",null),r.a.createElement("small",null,"Don't have an account? Sign up ",r.a.createElement(p.b,{to:"/signup"},"here")))),r.a.createElement(X.a,{item:!0,sm:!0})))}}]),t}(n.Component),$e={loginUser:function(e,t){return function(a){a({type:"LOADING_UI"}),y.a.post("/login",e).then((function(e){R(e.data.token),a(L()),a({type:"CLEAR_ERRORS"}),t.push("/")})).catch((function(e){a({type:"SET_ERRORS",payload:e.response.data})}))}}},qe=Object(O.b)((function(e){return{user:e.user,UI:e.UI}}),$e)(ee()({form:{textAlign:"center"},image:{margin:"20px auto 10px auto",height:"50px",width:"50px"},pageTitle:{margin:"10px auto 20px auto"},textField:{margin:"10px auto 10px auto"},button:{marginTop:20,marginBottom:20,position:"relative"},progress:{position:"absolute"},customError:{color:"red",fontSize:"0.8rem",marginTop:10}})(Ve)),Qe=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).handleSubmit=function(t){t.preventDefault(),e.setState({loading:!0});var a={email:e.state.email,password:e.state.password,confirmPassword:e.state.confirmPassword,handle:e.state.handle};e.props.signupUser(a,e.props.history)},e.handleChange=function(t){e.setState(Object(be.a)({},t.target.name,t.target.value))},e.state={email:"",password:"",confirmPassword:"",handle:"",errors:{}},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.UI.errors&&this.setState({errors:e.UI.errors})}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.UI.loading,n=this.state.errors;return r.a.createElement("div",{style:{paddingTop:100}},r.a.createElement(X.a,{container:!0,className:t.form},r.a.createElement(X.a,{item:!0,sm:!0}),r.a.createElement(X.a,{item:!0,sm:!0},r.a.createElement("img",{src:Ye.a,alt:"logo",className:t.image}),r.a.createElement(ce.a,{variant:"h4",className:t.pageTitle},"Signup"),r.a.createElement("form",{noValidate:!0,onSubmit:this.handleSubmit},r.a.createElement(ve.a,{id:"email",name:"email",type:"email",label:"Email",className:t.textField,helperText:n.email,error:!!n.email,value:this.state.email,onChange:this.handleChange,fullWidth:!0}),r.a.createElement(ve.a,{id:"handle",name:"handle",type:"text",label:"Username",className:t.textField,helperText:n.handle,error:!!n.handle,value:this.state.handle,onChange:this.handleChange,fullWidth:!0}),r.a.createElement(ve.a,{id:"password",name:"password",type:"password",label:"Password",className:t.textField,helperText:n.password,error:!!n.password,value:this.state.password,onChange:this.handleChange,fullWidth:!0}),r.a.createElement(ve.a,{id:"confirmPassword",name:"confirmPassword",type:"password",label:"Confirm Password",className:t.textField,helperText:n.confirmPassword,error:!!n.confirmPassword,value:this.state.confirmPassword,onChange:this.handleChange,fullWidth:!0}),n.general&&r.a.createElement(ce.a,{variant:"body2",className:t.customError},n.general),r.a.createElement(G.a,{type:"submit",variant:"contained",color:"primary",className:t.button,disabled:a},"Signup",a&&r.a.createElement(Je.a,{size:30,className:t.progress})),r.a.createElement("br",null),r.a.createElement("small",null,"Already have a login? Login ",r.a.createElement(p.b,{to:"/login"},"here")))),r.a.createElement(X.a,{item:!0,sm:!0})))}}]),t}(n.Component),Xe={signupUser:function(e,t){return function(a){a({type:"LOADING_UI"}),y.a.post("/signup",e).then((function(e){R(e.data.token),a(L()),a({type:"CLEAR_ERRORS"}),t.push("/")})).catch((function(e){a({type:"SET_ERRORS",payload:e.response.data})}))}}},Ze=Object(O.b)((function(e){return{user:e.user,UI:e.UI}}),Xe)(ee()({form:{textAlign:"center"},image:{margin:"20px auto 10px auto",height:"50px",width:"50px"},pageTitle:{margin:"10px auto 20px auto"},textField:{margin:"10px auto 10px auto"},button:{marginTop:20,marginBottom:20,position:"relative"},progress:{position:"absolute"},customError:{color:"red",fontSize:"0.8rem",marginTop:10}})(Qe)),et=(a(198),a(199),E()({palette:{primary:{light:"#ce93d8",main:"#ba68c8",dark:"#9c27b0",contrastText:"#fff"},secondary:{light:"#ffcdd2",main:"#ef9a9a",dark:"#e57373",contrastText:"#fff"}},typography:{useNextVarients:!0}}));y.a.defaults.baseURL="https://us-central1-prod-exercise.cloudfunctions.net/api";var tt=localStorage.FBIdToken;tt&&(1e3*b()(tt).exp<Date.now()?(window.location.href="/login",A.dispatch(P())):(A.dispatch({type:"SET_AUTHENTICATED"}),y.a.defaults.headers.common.Authorization=tt,A.dispatch(L())));var at=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(O.a,{store:A},r.a.createElement(h.a,{theme:et},r.a.createElement(p.a,null,r.a.createElement($,null),r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",component:Ke}),r.a.createElement(Q,{exact:!0,path:"/login",component:qe}),r.a.createElement(Q,{exact:!0,path:"/signup",component:Ze})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(at,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},70:function(e,t,a){e.exports=a.p+"static/media/icon.dd6dc24b.png"}},[[140,1,2]]]);
//# sourceMappingURL=main.37ecb31e.chunk.js.map