(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{18:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var a=c(9),s=c.n(a),n=c(5),i=c(2),r=c(4),l=c.n(r),o=c(1),d=(c(16),c(17),c(18),c(3)),j=c.n(d),b=c(0),u=function(e){var t=e.posts,c=e.onSelectPost,a=Object(o.useState)(-1),s=Object(i.a)(a,2),n=s[0],r=s[1],l=Object(o.useCallback)((function(e){r(e.id),c(e)}),[]),d=Object(o.useCallback)((function(){c(null),r(-1)}),[]);return Object(b.jsxs)("div",{"data-cy":"PostsList",children:[Object(b.jsx)("p",{className:"title",children:"Posts:"}),Object(b.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{className:"has-background-link-light",children:[Object(b.jsx)("th",{children:"#"}),Object(b.jsx)("th",{children:"Title"}),Object(b.jsx)("th",{children:" "})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){return Object(b.jsxs)("tr",{"data-cy":"Post",children:[Object(b.jsx)("td",{"data-cy":"PostId",children:e.id}),Object(b.jsx)("td",{"data-cy":"PostTitle",children:e.title}),Object(b.jsx)("td",{className:"has-text-right is-vcentered",children:Object(b.jsx)("button",{type:"button","data-cy":"PostButton",className:j()("button","is-link",{"is-light":n!==e.id}),onClick:function(){return n===e.id?d():l(e)},children:n===e.id?"Close":"Open"})})]},e.id)}))})]})]})},m=c(10),h=(c(20),function(){return Object(b.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(b.jsx)("div",{className:"Loader__content"})})}),O="https://mate.academy/students-api";function x(e){return new Promise((function(t){setTimeout(t,e)}))}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a={method:t};return c&&(a.body=JSON.stringify(c),a.headers={"Content-Type":"application/json; charset=UTF-8"}),x(300).then((function(){return fetch(O+e,a)})).then((function(e){if(!e.ok)throw new Error;return e.json()}))}var f=function(e){return p(e)},N=function(e,t){return p(e,"POST",t)},v=function(e){return p(e,"DELETE")},y=function(e){var t=e.postId,c=e.onAddComment,a=Object(o.useState)(!1),s=Object(i.a)(a,2),r=s[0],d=s[1],u=Object(o.useState)(!1),m=Object(i.a)(u,2),h=m[0],O=m[1],x=Object(o.useState)(!1),p=Object(i.a)(x,2),f=p[0],v=p[1],y=Object(o.useState)(""),g=Object(i.a)(y,2),k=g[0],C=g[1],S=Object(o.useState)(""),w=Object(i.a)(S,2),E=w[0],P=w[1],T=Object(o.useState)(""),I=Object(i.a)(T,2),F=I[0],B=I[1],A=Object(o.useState)(!1),D=Object(i.a)(A,2),L=D[0],M=D[1],U=Object(o.useCallback)(function(){var e=Object(n.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(!0),e.prev=1,e.next=4,N("/comments",t);case 4:a=e.sent,c(a),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:M(!1);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),[]),_=Object(o.useCallback)((function(e){d(!1),C(e.target.value)}),[]),J=Object(o.useCallback)((function(e){O(!1),P(e.target.value)}),[]),q=Object(o.useCallback)((function(e){v(!1),B(e.target.value)}),[]),W=Object(o.useCallback)((function(){d(!1),O(!1),v(!1),C(""),P(""),B("")}),[]);return Object(b.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:function(e){e.preventDefault(),d(0===k.length),O(0===E.length),v(0===F.length),0!==k.length&&0!==E.length&&0!==F.length&&(U({name:k,email:E,body:F,postId:t}),B(""))},children:[Object(b.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(b.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(b.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(b.jsx)("input",{type:"text",name:"name",value:k,onChange:_,id:"comment-author-name",placeholder:"Name Surname",className:j()("input",{"is-danger":r})}),Object(b.jsx)("span",{className:"icon is-small is-left",children:Object(b.jsx)("i",{className:"fas fa-user"})}),r&&Object(b.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(b.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),r&&Object(b.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(b.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(b.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(b.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(b.jsx)("input",{type:"email",name:"email",value:E,onChange:J,id:"comment-author-email",placeholder:"email@test.com",className:j()("input",{"is-danger":h})}),Object(b.jsx)("span",{className:"icon is-small is-left",children:Object(b.jsx)("i",{className:"fas fa-envelope"})}),h&&Object(b.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(b.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),h&&Object(b.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(b.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(b.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(b.jsx)("div",{className:"control",children:Object(b.jsx)("textarea",{id:"comment-body",name:"body",value:F,onChange:q,placeholder:"Type comment here",className:j()("textarea",{"is-danger":f})})}),f&&Object(b.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(b.jsxs)("div",{className:"field is-grouped",children:[Object(b.jsx)("div",{className:"control",children:Object(b.jsx)("button",{type:"submit",className:j()("button","is-link",{"is-loading":L}),children:"Add"})}),Object(b.jsx)("div",{className:"control",children:Object(b.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:W,children:"Clear"})})]})]})},g=function(e){var t=e.post,c=Object(o.useState)([]),a=Object(i.a)(c,2),s=a[0],r=a[1],d=Object(o.useState)(!1),j=Object(i.a)(d,2),u=j[0],O=j[1],x=Object(o.useState)(!1),p=Object(i.a)(x,2),N=p[0],g=p[1],k=Object(o.useState)(!1),C=Object(i.a)(k,2),S=C[0],w=C[1],E=Object(o.useCallback)(Object(n.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),g(!1),e.prev=2,e.next=5,f("/comments?postId=".concat(t.id));case 5:c=e.sent,r(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),g(!0);case 12:O(!1);case 13:case"end":return e.stop()}}),e,null,[[2,9]])}))),[]);Object(o.useEffect)((function(){w(!1),r([]),E()}),[t]);var P=Object(o.useCallback)((function(e){r((function(t){return t.filter((function(t){return t.id!==e}))})),v("/comments/".concat(e))}),[]),T=Object(o.useCallback)((function(e){r((function(t){return[].concat(Object(m.a)(t),[e])}))}),[]);return Object(b.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(b.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(b.jsxs)("div",{className:"block",children:[Object(b.jsx)("h2",{"data-cy":"PostTitle",children:"".concat(t.id,": ").concat(t.title)}),Object(b.jsx)("p",{"data-cy":"PostBody",children:t.body})]}),Object(b.jsxs)("div",{className:"block",children:[u&&Object(b.jsx)(h,{}),N&&Object(b.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),!u&&!N&&0===s.length&&Object(b.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),0!==s.length&&Object(b.jsx)("p",{className:"title is-4",children:"Comments:"}),s.map((function(e){return Object(b.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(b.jsxs)("div",{className:"message-header",children:[Object(b.jsx)("a",{href:"mailto:".concat(e.email),"data-cy":"CommentAuthor",children:e.name}),Object(b.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return P(e.id)},children:"delete button"})]}),Object(b.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:e.body})]},e.id)})),!u&&!S&&Object(b.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){w(!0)},children:"Write a comment"})]}),S&&Object(b.jsx)(y,{postId:t.id,onAddComment:T})]})})},k=function(e){var t=e.users,c=e.onUserSelect,a=Object(o.useState)(!1),s=Object(i.a)(a,2),n=s[0],r=s[1],l=Object(o.useState)("Choose a user"),d=Object(i.a)(l,2),u=d[0],m=d[1],h=function(e){r(e)},O=Object(o.useCallback)((function(e){c(e),r(!1),m(e.name)}),[]);return Object(b.jsxs)("div",{"data-cy":"UserSelector",className:j()("dropdown",{"is-active":n}),children:[Object(b.jsx)("div",{className:"dropdown-trigger",children:Object(b.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){return h(!0)},onBlur:function(){return h(!1)},children:[Object(b.jsx)("span",{children:u}),Object(b.jsx)("span",{className:"icon is-small",children:Object(b.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(b.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(b.jsx)("div",{className:"dropdown-content",children:t.map((function(e){return Object(b.jsx)("a",{href:"#".concat(e.id),className:j()("dropdown-item",{"is-active":u===e.name}),onMouseDown:function(){return O(e)},children:e.name},e.id)}))})})]})},C=function(){var e=Object(o.useState)(null),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(o.useState)(null),r=Object(i.a)(s,2),d=r[0],m=r[1],O=Object(o.useState)([]),x=Object(i.a)(O,2),p=x[0],N=x[1],v=Object(o.useState)(!1),y=Object(i.a)(v,2),C=y[0],S=y[1],w=Object(o.useState)([]),E=Object(i.a)(w,2),P=E[0],T=E[1],I=Object(o.useState)(!1),F=Object(i.a)(I,2),B=F[0],A=F[1],D=Object(o.useCallback)(Object(n.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("/users");case 2:t=e.sent,T(t);case 4:case"end":return e.stop()}}),e)}))),[]);Object(o.useEffect)((function(){D()}),[]);var L=Object(o.useCallback)(function(){var e=Object(n.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),A(!1),e.prev=2,e.next=5,f("/posts?userId=".concat(t));case 5:c=e.sent,N(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),A(!0);case 12:S(!1);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),[]),M=Object(o.useCallback)((function(e){m(e),N([]),L(e.id)}),[]);return Object(b.jsx)("main",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"tile is-ancestor",children:[Object(b.jsx)("div",{className:"tile is-parent",children:Object(b.jsxs)("div",{className:"tile is-child box is-success",children:[Object(b.jsx)("div",{className:"block",children:Object(b.jsx)(k,{users:P,onUserSelect:M})}),Object(b.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!d&&Object(b.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),d&&C&&Object(b.jsx)(h,{}),B&&Object(b.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),d&&0===p.length&&!A&&Object(b.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),d&&p.length>0&&Object(b.jsx)(u,{posts:p,onSelectPost:a})]})]})}),Object(b.jsx)("div",{"data-cy":"Sidebar",className:j()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":c}),children:c&&Object(b.jsx)("div",{className:"tile is-child box is-success ",children:Object(b.jsx)(g,{post:c})})})]})})})};s.a.render(Object(b.jsx)(C,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.47729f7a.chunk.js.map