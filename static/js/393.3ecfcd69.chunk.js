"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[393],{393:function(e,r,s){s.r(r),s.d(r,{default:function(){return l}});var i=s(439),t=s(791),n=s(689),a=s(172),c={reviewsContainer:"Moviereviews_reviewsContainer__omfwH",reviewsItem:"Moviereviews_reviewsItem__nVlcM",error:"Moviereviews_error__I13bN"},o=s(184),v=function(e){var r=e.reviews;if(r)return r.map((function(e){var r=e.author,s=e.content,i=e.id,t=e.updated_at;return(0,o.jsxs)("li",{className:c.reviewsItem,children:[(0,o.jsx)("h3",{children:r}),(0,o.jsx)("p",{children:t}),(0,o.jsx)("p",{children:s})]},i)}))},u=s(9),l=function(){var e=(0,n.UO)().movieId,r=(0,t.useState)(),s=(0,i.Z)(r,2),l=s[0],w=s[1],h=(0,t.useState)(!1),_=(0,i.Z)(h,2),d=_[0],f=_[1],m=(0,t.useState)(!1),x=(0,i.Z)(m,2),j=x[0],p=x[1];return(0,t.useEffect)((function(){p(!0),(0,a.tx)(e).then((function(e){var r=e.results;w(r),0===r.length&&f(!0)})).catch().finally(p(!1))}),[e]),(0,o.jsx)("section",{className:c.reviewsSection,children:(0,o.jsx)("div",{className:c.reviewsContainer,children:(0,o.jsxs)("ul",{className:c.reviewsList,children:[j&&(0,o.jsx)(u.aN,{}),d?(0,o.jsx)("p",{className:c.error,children:"Here is no reviews yet..."}):(0,o.jsx)(v,{reviews:l})]})})})}}}]);
//# sourceMappingURL=393.3ecfcd69.chunk.js.map