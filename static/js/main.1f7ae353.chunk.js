(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,a,t){e.exports=t(47)},36:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(17),c=t.n(r),s=(t(35),t(36),t(10)),m=t(11),o=t(13),i=t(12),u=t(14),d=t(67),E=t(68),p=t(62),b=t(60),h=t(61),k=t(63),g=t(6),f=t(48),x=t(50),v=t(51),O=t(69),T=t(52),w=t(53),j=t(54),y=t(49),N=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(i.a)(a).call(this,e))).toggle=t.toggle.bind(Object(g.a)(Object(g.a)(t))),t.state={isOpen:!1},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return l.a.createElement("div",{className:"navBar"},l.a.createElement(f.a,{color:"light",light:!0,expand:"md"},l.a.createElement(y.a,{className:"brand",to:"/todo"},l.a.createElement("img",{className:"logo",src:"../logo.ico",alt:"logo"}),l.a.createElement(x.a,null,"Todo")),l.a.createElement(v.a,{onClick:this.toggle}),l.a.createElement(O.a,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(T.a,{className:"ml-auto",navbar:!0},l.a.createElement(w.a,null,l.a.createElement(y.a,{to:"/"},l.a.createElement(j.a,{color:"success"},"Registration")))))))}}]),a}(n.Component),S=t(55),C=t(56),F=t(57),P=t(58),V=function(e){return l.a.createElement(S.a,{className:"taskForm",onSubmit:e.addTask},l.a.createElement(C.a,null,l.a.createElement(F.a,{for:"taskName"},"Task Name"),l.a.createElement(P.a,{type:"text",name:"taskName",id:"taskName",value:e.currentValue,onChange:e.updateTask})),l.a.createElement(j.a,{color:"success"},"Add Task"))},I=t(59),U=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(i.a)(a).call(this,e))).renderTask=function(){return l.a.createElement(I.a,null,l.a.createElement(b.a,null,l.a.createElement(h.a,{xl:7,lg:7,md:12,xs:12},l.a.createElement("span",null,t.props.details.name)),l.a.createElement(h.a,{xl:2,lg:2,md:6,xs:6},l.a.createElement(j.a,{color:"secondary",onClick:function(){t.toggleState()}},"Edit")),l.a.createElement(h.a,{xl:3,lg:3,md:6,xs:6},l.a.createElement(j.a,{color:"danger",onClick:function(){t.props.deleteTask(t.props.index)}},"Delete"))))},t.toggleState=function(){var e=t.state.isEdit;t.setState({isEdit:!e})},t.updateTaskItem=function(e){e.preventDefault(),t.props.editTask(t.props.index,t.input.value),t.toggleState()},t.renderUpdateForm=function(){return l.a.createElement(I.a,null,l.a.createElement(S.a,{onSubmit:t.updateTaskItem},l.a.createElement(b.a,null,l.a.createElement(h.a,{xl:9,lg:9,md:12,xs:12},l.a.createElement("input",{type:"text",name:"editTaskName",id:"editTaskName",ref:function(e){t.input=e},defaultValue:t.props.details.name})),l.a.createElement(h.a,{xl:3,lg:3,md:12,xs:12},l.a.createElement(j.a,{color:"success"},"Update")))))},t.state={isEdit:!1},t.renderTask=t.renderTask.bind(Object(g.a)(Object(g.a)(t))),t.renderUpdateForm=t.renderUpdateForm.bind(Object(g.a)(Object(g.a)(t))),t.toggleState=t.toggleState.bind(Object(g.a)(Object(g.a)(t))),t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.state.isEdit;return l.a.createElement(n.Fragment,null,e?this.renderUpdateForm():this.renderTask())}}]),a}(n.Component),A=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(i.a)(a).call(this,e))).updateTask=function(e){t.setState({currentValue:e.target.value})},t.addTask=function(e){e.preventDefault();var a=t.state.currentValue,n=t.state.tasks;n.push({name:a}),t.setState({tasks:n,currentValue:""})},t.deleteTask=function(e){var a=t.state.tasks;a.splice(e,1),t.setState({tasks:a})},t.editTask=function(e,a){var n=t.state.tasks;n[e].name=a,t.setState({tasks:n})},t.state={tasks:[],currentValue:""},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.state.tasks.map(function(a,t){return l.a.createElement(U,{details:a,key:t,index:t,update:e.handleChange,deleteTask:e.deleteTask,editTask:e.editTask})});return l.a.createElement(p.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(N,null),l.a.createElement(b.a,null,l.a.createElement(h.a,{xl:3,lg:3,md:12,xs:12},l.a.createElement(V,{currentValue:this.state.currentValue,updateTask:this.updateTask,addTask:this.addTask})),l.a.createElement(h.a,{xl:9,lg:9,md:12,xs:12},l.a.createElement(k.a,null,a)))))}}]),a}(n.Component),B=t(64),D=t(65),L=t(66),z=t(3),J=t.n(z),R=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(i.a)(a).call(this,e))).toggle=t.toggle.bind(Object(g.a)(Object(g.a)(t))),t.state={activeTab:"1"},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this;return l.a.createElement(p.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(N,null),l.a.createElement(T.a,{tabs:!0},l.a.createElement(w.a,null,l.a.createElement(B.a,{className:J()({active:"1"===this.state.activeTab}),onClick:function(){e.toggle("1")}},"Log In")),l.a.createElement(w.a,null,l.a.createElement(B.a,{className:J()({active:"2"===this.state.activeTab}),onClick:function(){e.toggle("2")}},"Register"))),l.a.createElement(D.a,{activeTab:this.state.activeTab},l.a.createElement(L.a,{tabId:"1"},l.a.createElement(b.a,{className:"regLogForm"},l.a.createElement(h.a,{sm:"12"},l.a.createElement(S.a,{inline:!0},l.a.createElement(C.a,{className:"mb-2 mr-sm-2 mb-sm-0"},l.a.createElement(F.a,{for:"exampleEmail",className:"mr-sm-2"},"Email"),l.a.createElement(P.a,{type:"email",name:"email",id:"exampleEmail"})),l.a.createElement(C.a,{className:"mb-2 mr-sm-2 mb-sm-0"},l.a.createElement(F.a,{for:"examplePassword",className:"mr-sm-2"},"Password"),l.a.createElement(P.a,{type:"password",name:"password",id:"examplePassword"})),l.a.createElement(y.a,{to:"/todo"},l.a.createElement(j.a,null,"Submit")))))),l.a.createElement(L.a,{tabId:"2"},l.a.createElement(b.a,{className:"regLogForm"},l.a.createElement(h.a,{sm:"12"},l.a.createElement(S.a,null,l.a.createElement(b.a,null,l.a.createElement(h.a,{sm:"6"},l.a.createElement(C.a,{row:!0},l.a.createElement(F.a,{for:"exampleText",sm:4},"First Name"),l.a.createElement(h.a,{sm:8},l.a.createElement(P.a,{type:"text",name:"text",id:"exampleText"})))),l.a.createElement(h.a,{sm:"6"},l.a.createElement(C.a,{row:!0},l.a.createElement(F.a,{for:"exampleText",sm:4},"Surname"),l.a.createElement(h.a,{sm:8},l.a.createElement(P.a,{type:"text",name:"text",id:"exampleText"}))))),l.a.createElement(C.a,{row:!0},l.a.createElement(F.a,{for:"exampleEmail",sm:2},"Email"),l.a.createElement(h.a,{sm:10},l.a.createElement(P.a,{type:"email",name:"email",id:"exampleEmail",placeholder:"with a placeholder"}))),l.a.createElement(C.a,{row:!0},l.a.createElement(F.a,{for:"examplePassword",sm:2},"Password"),l.a.createElement(h.a,{sm:10},l.a.createElement(P.a,{type:"password",name:"password",id:"examplePassword",placeholder:"password placeholder"}))),l.a.createElement(C.a,{row:!0},l.a.createElement(F.a,{for:"examplePassword",sm:2},"Confirm Password"),l.a.createElement(h.a,{sm:10},l.a.createElement(P.a,{type:"password",name:"password",id:"examplePassword",placeholder:"password placeholder"}))),l.a.createElement(C.a,{row:!0},l.a.createElement(F.a,{for:"checkbox2",sm:2},"Checkbox"),l.a.createElement(h.a,{sm:{size:3}},l.a.createElement(C.a,{check:!0},l.a.createElement(F.a,{check:!0},l.a.createElement(P.a,{type:"checkbox",id:"checkbox2"})," ","I am agree!")))),l.a.createElement(C.a,{check:!0,row:!0},l.a.createElement(h.a,{sm:{size:10,offset:2}},l.a.createElement(y.a,{to:"/todo"},l.a.createElement(j.a,null,"Submit")))))))))))}}]),a}(n.Component),W=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("div",null,l.a.createElement(E.a,{exact:!0,path:"/",component:R}),l.a.createElement(E.a,{path:"/todo",component:A})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.1f7ae353.chunk.js.map