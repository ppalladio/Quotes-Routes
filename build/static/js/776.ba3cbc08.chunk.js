"use strict";(self.webpackChunkquote_routes=self.webpackChunkquote_routes||[]).push([[776],{776:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var s=n(791),o=n(880),c=n(523),r=n(152),a=n(995),m="Comments_comments__0qAYF",d=n(853),u="NewCommentForm_form__R0uz4",l="NewCommentForm_control__XzQJp",i="NewCommentForm_actions__IuI3g",x=n(556),h=n(184),j=function(e){var t=(0,s.useRef)(),n=(0,a.Z)(d.Ir),o=n.sendRequest,c=n.status,r=n.error,m=e.onAddedComment;(0,s.useEffect)((function(){"completed"!==c||r||m()}),[c,r,m]);var j=function(n){n.preventDefault();var s=t.current.value;o({commentData:{text:s},quoteId:e.quoteId})};return(0,h.jsxs)("form",{className:u,onSubmit:j,children:["pending"===c&&(0,h.jsx)("div",{className:"centered",children:(0,h.jsx)(x.Z,{})}),(0,h.jsxs)("div",{className:l,onSubmit:j,children:[(0,h.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),(0,h.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),(0,h.jsx)("div",{className:i,children:(0,h.jsx)("button",{className:"btn",children:"Add Comment"})})]})},f="CommentItem_item__qvR49",_=function(e){return(0,h.jsx)("li",{className:f,children:(0,h.jsx)("p",{children:e.text})})},p="CommentsList_comments__2neVM",N=function(e){return(0,h.jsx)("ul",{className:p,children:e.comments.map((function(e){return(0,h.jsx)(_,{text:e.text},e.id)}))})},v=function(){var e,t=(0,s.useState)(!1),n=(0,r.Z)(t,2),c=n[0],u=n[1],l=(0,o.UO)().quoteId,i=(0,a.Z)(d.h_),f=i.sendRequest,_=i.status,p=i.data;(0,s.useEffect)((function(){f(l)}),[l,f]),"pending"===_&&(e=(0,h.jsx)("div",{className:"centered",children:(0,h.jsx)(x.Z,{})})),"completed"===_&&p&&p.length>0&&(e=(0,h.jsx)(N,{comments:p})),"completed"!==_||p&&0!==p.length||(e=(0,h.jsx)("p",{className:"centered",children:"No comments were added yet!"}));var v=(0,s.useCallback)((function(){f(l)}),[f,l]);return(0,h.jsxs)("section",{className:m,children:[(0,h.jsx)("h2",{children:"User Comments"}),!c&&(0,h.jsx)("button",{className:"btn",onClick:function(){u(!0)},children:"Add a Comment"}),c&&(0,h.jsx)(j,{quoteId:l,onAddedComment:v}),e]})},C="HighlightedQuote_quote__zLKoH",q=function(e){return(0,h.jsxs)("figure",{className:C,children:[(0,h.jsx)("p",{children:e.text}),(0,h.jsx)("figcaption",{children:e.author})]})},g=function(){var e=(0,o.$B)(),t=(0,o.UO)();console.log((0,o.UO)());var n=(0,a.Z)(d.jR,!0),r=n.sendRequest,m=n.status,u=n.data,l=n.error,i=t.quoteId;return(0,s.useEffect)((function(){r(i)}),[r,i]),"pending"===m?(0,h.jsx)("div",{className:"centered",children:(0,h.jsx)(x.Z,{})}):l?{error:l}:u.text?(console.log(e),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(q,{text:u.text,author:u.author}),(0,h.jsx)(o.AW,{path:e.path,exact:!0,children:(0,h.jsx)("div",{className:"centered",children:(0,h.jsx)(c.rU,{className:"btn--flat",to:"".concat(e.url,"/comments"),children:"Load Comments"})})}),(0,h.jsx)(o.AW,{path:"".concat(e.path,"/comments"),children:(0,h.jsx)(v,{})})]})):(0,h.jsx)("p",{children:"No quote found!"})}}}]);
//# sourceMappingURL=776.ba3cbc08.chunk.js.map