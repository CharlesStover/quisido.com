(this["webpackJsonpquisido.com"]=this["webpackJsonpquisido.com"]||[]).push([[3],{152:function(e,t,a){},153:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){},161:function(e,t,a){},163:function(e,t,a){"use strict";var n=a(4),i=a(3),c=a(0),r=a.n(c),l=(a(152),{"card-inner":"_card-inner_p8a6i_67z7i_3",root:"_root_p8a6i_67z7i_19",header:"_header_p8a6i_67z7i_34",list:"_list_p8a6i_67z7i_38","list-grid-1":"_list-grid-1_p8a6i_67z7i_46",card:"_card_p8a6i_67z7i_3","list-grid-2":"_list-grid-2_p8a6i_67z7i_49","list-grid-3":"_list-grid-3_p8a6i_67z7i_52","list-grid-4":"_list-grid-4_p8a6i_67z7i_55","list-grid-5":"_list-grid-5_p8a6i_67z7i_58","list-grid-6":"_list-grid-6_p8a6i_67z7i_61","list-grid-7":"_list-grid-7_p8a6i_67z7i_64","list-grid-8":"_list-grid-8_p8a6i_67z7i_67","list-grid-9":"_list-grid-9_p8a6i_67z7i_70","list-grid-10":"_list-grid-10_p8a6i_67z7i_73","list-grid-11":"_list-grid-11_p8a6i_67z7i_76","list-grid-12":"_list-grid-12_p8a6i_67z7i_79","list-grid-13":"_list-grid-13_p8a6i_67z7i_82","list-grid-14":"_list-grid-14_p8a6i_67z7i_85","list-grid-15":"_list-grid-15_p8a6i_67z7i_88","list-grid-16":"_list-grid-16_p8a6i_67z7i_91","list-grid-17":"_list-grid-17_p8a6i_67z7i_94","list-grid-18":"_list-grid-18_p8a6i_67z7i_97","list-grid-19":"_list-grid-19_p8a6i_67z7i_100","list-grid-20":"_list-grid-20_p8a6i_67z7i_103","selection-control":"_selection-control_p8a6i_67z7i_107",loading:"_loading_p8a6i_67z7i_116",empty:"_empty_p8a6i_67z7i_117","has-header":"_has-header_p8a6i_67z7i_124","card-header":"_card-header_p8a6i_67z7i_160","card-header-inner":"_card-header-inner_p8a6i_67z7i_164","card-selectable":"_card-selectable_p8a6i_67z7i_168","card-selected":"_card-selected_p8a6i_67z7i_171",section:"_section_p8a6i_67z7i_180","section-header":"_section-header_p8a6i_67z7i_186","section-content":"_section-content_p8a6i_67z7i_189"}),o=[1920,1400,1200,992,768].map((function(e,t,a){return{minWidth:e,cards:a.length+1-t}})),s=a(8),d=a(59),_=a(26),u=(a(153),"_tools_wih1l_wlnf2_11"),b="_tools-filtering_wih1l_wlnf2_17",m="_tools-align-right_wih1l_wlnf2_21",f="_tools-pagination_wih1l_wlnf2_25",g="_tools-preferences_wih1l_wlnf2_25",p="_tools-small_wih1l_wlnf2_31";function h(e){var t=e.header,a=e.filter,n=e.pagination,c=e.preferences,l=Object(_.a)(["xs"]),o=l[0],s=l[1],d="default"===o,h=a||n||c;return r.a.createElement(r.a.Fragment,null,t,h&&r.a.createElement("div",{ref:s,className:Object(i.a)(u,d&&p)},a&&r.a.createElement("div",{className:b},a),r.a.createElement("div",{className:m},n&&r.a.createElement("div",{className:f},n),c&&r.a.createElement("div",{className:g},c))))}var v,y,j,O=function(e,t){return"function"===typeof e?e(t):t[e]},w=function(e,t,a){return e?O(e,t):a},z=function(e,t){return e?O(e,t):t},E=a(10),x=a(44),k=a(34),N=(a(154),"_root_1ut8b_4pfx5_3"),I="_label_1ut8b_4pfx5_7",C="_stud_1ut8b_4pfx5_23";function L(e,t){return-1===t?e.querySelector('[data-selection-item="all"] .'+N+" input"):e.querySelectorAll('[data-selection-item="item"] .'+N+" input")[t]}function T(e,t){if("multi"!==e)return{};function a(e,a,n){for(var i,c=a,r=(i=e,Object(k.a)(i,(function(e){return"true"===e.dataset.selectionRoot})));c>=-1&&c<t;){var l=L(r,c+=n);if(l&&!l.disabled){l.focus();break}}}var n=[1,-1].map((function(e){return function(t){var n=t.currentTarget,i=Object(k.a)(n,(function(e){return"item"===e.dataset.selectionItem}));a(n,Array.prototype.indexOf.call(i.parentElement.children,i),e)}}));return{moveFocusDown:n[0],moveFocusUp:n[1],moveFocus:a}}var S=function(e,t){var a=this;this.map=new Map,this.put=function(e){return a.map.set.call(a.map,z(a.trackBy,e),e)},this.has=function(e){return a.map.has.call(a.map,z(a.trackBy,e))},this.forEach=this.map.forEach.bind(this.map),this.trackBy=e,t.forEach(this.put)},D={item:(v={},v["data-selection-item"]="item",v),all:(y={},y["data-selection-item"]="all",y),root:(j={},j["data-selection-root"]="true",j)};function F(e){var t=e.items,a=e.selectedItems,i=void 0===a?[]:a,r=e.selectionType,l=e.isItemDisabled,o=void 0===l?function(){return!1}:l,s=e.trackBy,d=e.onSelectionChange,_=e.ariaLabels,u=Object(c.useState)(!1),b=u[0],m=u[1],f=Object(c.useState)(null),g=f[0],p=f[1],h=Object(x.a)(),v="single"===r?i.slice(0,1):i,y=new S(s,v),j=new Map;t.forEach((function(e,t){return j.set(z(s,e),t)}));var O=y.has.bind(y),w=function(e){return{disabled:o(e),selected:O(e)}},k=r?t.reduce((function(e,t){var a=e[0],n=e[1],i=e[2],c=w(t),r=c.disabled,l=c.selected;return[a&&r,n&&(l||r),i||l]}),[!0,!0,!1]):[!0,!0,!1],N=k[0],I=k[1],C=k[2],L=function(e){var t=[];return i.forEach((function(a){e.has(a)&&!o(a)||t.push(a)})),t},T=function(e){var t=Object(n.c)(i);return e.forEach((function(e){var a=w(e),n=a.selected,i=a.disabled;n||i||t.push(e)})),t},D=function(e){return function(){var a=w(e),n=a.disabled,i=a.selected;if(!(n||"single"===r&&i))if("single"===r)Object(E.c)(d,{selectedItems:[e]});else{var c=function(e){var a=new S(s,[e]),n=g?j.get(z(s,g)):-1;if(void 0===n&&(n=-1),b&&-1!==n){var i=j.get(z(s,e)),c=Math.min(i,n),r=Math.max(i,n);t.slice(c,r+1).forEach((function(e){return a.put(e)}))}return a}(e),l=i?L(c):T(c);Object(E.c)(d,{selectedItems:l}),p(e)}}},F=function(e){return _&&_.selectionGroupLabel+" "+_.itemSelectionLabel({selectedItems:i},e)};return{isItemSelected:O,selectAllProps:{name:h,disabled:N,selectionType:r,indeterminate:C&&!I,checked:C&&I,onChange:function(){var e=new S(s,t),a=I?L(e):T(e);Object(E.c)(d,{selectedItems:a})},ariaLabel:_&&_.selectionGroupLabel+" "+(_.allItemsSelectionLabel&&_.allItemsSelectionLabel({selectedItems:i}))},getItemSelectionProps:function(e){return{name:h,selectionType:r,ariaLabel:F(e),onChange:D(e),checked:O(e),disabled:o(e)}},updateShiftToggle:function(e){m(e)}}}var B=a(14),P=a(58),R=(a(155),"_wrapper_1wepg_1y1xl_3"),K="_label-wrapper_1wepg_1y1xl_10",U="_content_1wepg_1y1xl_15",q="_empty-content_1wepg_1y1xl_21",W="_description_1wepg_1y1xl_25",A="_description-bottom-padding_1wepg_1y1xl_30",H="_label_1wepg_1y1xl_10",M="_label-disabled_1wepg_1y1xl_38",G="_description-disabled_1wepg_1y1xl_39",J="_control_1wepg_1y1xl_43",V="_outline_1wepg_1y1xl_46",Y=a(32);function Q(e){return e.filter((function(e){return!!e})).join(" ")}function X(e){var t,a,c=e.controlId,l=e.controlClassName,o=e.disabled,s=e.nativeControl,d=e.styledControl,_=e.label,u=e.description,b=e.descriptionBottomPadding,m=e.ariaLabel,f=e.ariaLabelledby,g=e.ariaDescribedby,p=e.withoutLabel,h=Object(n.b)(e,["controlId","controlClassName","disabled","nativeControl","styledControl","label","description","descriptionBottomPadding","ariaLabel","ariaLabelledby","ariaDescribedby","withoutLabel"]),v=Object(x.a)(),y=c||v,j=Object(Y.a)(),O=y+"-wrapper",w=y+"-label",z=y+"-description",E=p?"div":"label",k={};p||(k.id=O,k.htmlFor=y);var N=[];_&&N.push(w),f&&N.push(f);var I=[];return g&&I.push(g),u&&I.push(z),r.a.createElement("div",Object(n.a)({},h,{className:Object(i.a)(R,h.className)}),r.a.createElement(E,Object(n.a)({},k,{className:K,"aria-disabled":o?"true":void 0}),r.a.createElement("div",{className:Object(i.a)(J,l)},d,s(Object(n.a)(Object(n.a)({},j),{id:y,disabled:o,"aria-describedby":I.length?Q(I):void 0,"aria-labelledby":N.length?Q(N):void 0,"aria-label":m})),r.a.createElement("div",{className:V})),r.a.createElement("div",{className:Object(i.a)(U,!_&&!u&&q)},_&&r.a.createElement("div",{id:w,className:Object(i.a)(H,(t={},t[M]=o,t))},_),u&&r.a.createElement("div",{id:z,className:Object(i.a)(W,(a={},a[G]=o,a[A]=b,a))},u))))}a(156);var Z="_root_k2y2q_nzszc_3",$="_checkbox-control_k2y2q_nzszc_14",ee="_input_k2y2q_nzszc_22",te=(a(157),"_root_1fn7j_rw5f2_3"),ae="_styled-box_1fn7j_rw5f2_10",ne="_styled-box-checked_1fn7j_rw5f2_16",ie="_styled-box-indeterminate_1fn7j_rw5f2_16",ce="_styled-box-disabled_1fn7j_rw5f2_20",re="_styled-line_1fn7j_rw5f2_34",le="_styled-line-disabled_1fn7j_rw5f2_39",oe=function(e){var t,a,c=e.checked,l=e.indeterminate,o=e.disabled,d=void 0!==o&&o,_=Object(n.b)(e,["checked","indeterminate","disabled"]),u=Object(s.a)(_);return r.a.createElement("svg",Object(n.a)({className:te,viewBox:"0 0 14 14","aria-hidden":"true",focusable:"false"},u),r.a.createElement("rect",{className:Object(i.a)(ae,(t={},t[ne]=c,t[ie]=l,t[ce]=d,t)),x:.5,y:.5,rx:1.5,ry:1.5,width:13,height:13}),c||l?r.a.createElement("polyline",{className:Object(i.a)(re,(a={},a[le]=d,a)),points:l?"2.5,7 11.5,7":"2.5,7 6,10 11,3"}):null)},se=r.a.forwardRef((function(e,t){var a=e.controlId,l=e.name,o=e.checked,d=e.disabled,_=e.indeterminate,u=e.children,b=e.description,m=e.ariaLabel,f=e.ariaLabelledby,g=e.ariaDescribedby,p=e.onFocus,h=e.onBlur,v=e.onChange,y=e.withoutLabel,j=e.tabIndex,O=Object(n.b)(e,["controlId","name","checked","disabled","indeterminate","children","description","ariaLabel","ariaLabelledby","ariaDescribedby","onFocus","onBlur","onChange","withoutLabel","tabIndex"]),w=Object(s.a)(O),z=Object(c.useRef)(null);return Object(P.a)(t,z),Object(c.useEffect)((function(){z.current&&(z.current.indeterminate=Boolean(_))})),r.a.createElement(X,Object(n.a)({},w,{className:Object(i.a)(Z,w.className),controlClassName:$,controlId:a,disabled:d,label:u,description:b,descriptionBottomPadding:!0,ariaLabel:m,ariaLabelledby:f,ariaDescribedby:g,nativeControl:function(e){return r.a.createElement("input",Object(n.a)({},e,{ref:z,className:ee,type:"checkbox",checked:o,name:l,tabIndex:j,onFocus:p&&function(){return Object(E.c)(p)},onBlur:h&&function(){return Object(E.c)(h)},onChange:function(){},onClick:v&&function(){return Object(E.c)(v,_?{checked:!0,indeterminate:!1}:{checked:!o,indeterminate:!1})}}))},styledControl:r.a.createElement(oe,{checked:o,indeterminate:_,disabled:d}),withoutLabel:y}))})),de=(a(158),"_radio_1mabk_exx4u_14"),_e="_radio--has-description_1mabk_exx4u_22",ue="_radio-control_1mabk_exx4u_26",be="_input_1mabk_exx4u_34",me="_styled-circle-border_1mabk_exx4u_53",fe="_styled-circle-disabled_1mabk_exx4u_57",ge="_styled-circle-fill_1mabk_exx4u_62",pe="_styled-circle-checked_1mabk_exx4u_68";function he(e){var t,a,c=e.name,l=e.label,o=e.value,s=e.checked,d=e.withoutLabel,_=e.description,u=e.disabled,b=e.controlId,m=e.onChange;return r.a.createElement(X,{className:Object(i.a)(de,_&&_e),controlClassName:ue,label:l,description:_,disabled:u,controlId:b,nativeControl:function(e){return r.a.createElement("input",Object(n.a)({},e,{className:be,type:"radio",name:c,value:o,checked:s,onChange:m&&function(){return Object(E.c)(m,{value:o})}}))},styledControl:r.a.createElement("svg",{viewBox:"0 0 100 100",focusable:"false","aria-hidden":"true"},r.a.createElement("circle",{className:Object(i.a)(me,(t={},t[fe]=u,t)),strokeWidth:8,cx:50,cy:50,r:46}),r.a.createElement("circle",{className:Object(i.a)(ge,(a={},a[fe]=u,a[pe]=s,a)),strokeWidth:30,cx:50,cy:50,r:35})),withoutLabel:d})}function ve(e){var t=e.selectionType,a=e.indeterminate,c=void 0!==a&&a,l=e.className,o=e.onShiftToggle,s=e.onFocusUp,d=e.onFocusDown,_=e.name,u=e.scope,b=e.ariaLabel,m=e.rootTag,f=void 0===m?"td":m,g=Object(n.b)(e,["selectionType","indeterminate","className","onShiftToggle","onFocusUp","onFocusDown","name","scope","ariaLabel","rootTag"]),p=Object(x.a)(),h="multi"===t,v=function(e){h&&o&&o(e.shiftKey)},y=h?r.a.createElement(se,Object(n.a)({},g,{controlId:p,withoutLabel:!0,indeterminate:c})):r.a.createElement(he,Object(n.a)({},g,{controlId:p,withoutLabel:!0,name:_,value:"",label:""}));return r.a.createElement(f,{className:Object(i.a)(N,l),onKeyDown:function(e){v(e),h&&(e.keyCode===B.a.up&&(e.preventDefault(),s&&s(e)),e.keyCode===B.a.down&&(e.preventDefault(),d&&d(e)))},onKeyUp:v,onMouseDown:function(e){v(e),h&&e.preventDefault()},onMouseUp:v,onClick:function(e){var t=e.currentTarget,a="INPUT"===t.tagName?t:t.querySelector("input");null===a||void 0===a||a.focus()},scope:u},r.a.createElement("label",{htmlFor:p,className:I,"aria-label":b},y),r.a.createElement("span",{className:Object(i.a)(C),"aria-hidden":!0},"\xa0"))}var ye=a(83),je=(a(159),{"uxdg-inverted":"_uxdg-inverted_1cbgc_cfc8l_3",root:"_root_1cbgc_cfc8l_7","status-error":"_status-error_1cbgc_cfc8l_14","status-warning":"_status-warning_1cbgc_cfc8l_17","status-success":"_status-success_1cbgc_cfc8l_20","status-info":"_status-info_1cbgc_cfc8l_23","status-stopped":"_status-stopped_1cbgc_cfc8l_26","status-pending":"_status-pending_1cbgc_cfc8l_29","status-in-progress":"_status-in-progress_1cbgc_cfc8l_32","status-loading":"_status-loading_1cbgc_cfc8l_35","color-override-red":"_color-override-red_1cbgc_cfc8l_38","color-override-grey":"_color-override-grey_1cbgc_cfc8l_41","color-override-blue":"_color-override-blue_1cbgc_cfc8l_44","color-override-green":"_color-override-green_1cbgc_cfc8l_47",icon:"_icon_1cbgc_cfc8l_50",container:"_container_1cbgc_cfc8l_54"}),Oe=a(18),we=a(47),ze={error:r.a.createElement(Oe.a,{name:"status-negative"}),warning:r.a.createElement(Oe.a,{name:"status-warning"}),success:r.a.createElement(Oe.a,{name:"status-positive"}),info:r.a.createElement(Oe.a,{name:"status-info"}),stopped:r.a.createElement(Oe.a,{name:"status-stopped"}),pending:r.a.createElement(Oe.a,{name:"status-pending"}),"in-progress":r.a.createElement(Oe.a,{name:"status-in-progress"}),loading:r.a.createElement(we.a,null)};function Ee(e){var t,a=e.type,c=void 0===a?"success":a,l=e.children,o=e.iconAriaLabel,d=e.colorOverride,_=e.uxdgInverted,u=Object(n.b)(e,["type","children","iconAriaLabel","colorOverride","uxdgInverted"]),b=Object(s.a)(u);return r.a.createElement("span",Object(n.a)({},b,{className:Object(i.a)(je.root,je["status-"+c],(t={},t[je["color-override-"+d]]=d,t[je["uxdg-inverted"]]=_,t),b.className)}),r.a.createElement("span",{className:je.container},r.a.createElement("span",{className:je.icon,"aria-label":o},ze[c]),l))}var xe=a(13),ke=a(12);function Ne(e){var t=e.type,a=void 0===t?"success":t,i=Object(n.b)(e,["type"]);return Object(xe.a)("StatusIndicator"),r.a.createElement(Ee,Object(n.a)({type:a},i))}Object(ke.a)(Ne,"StatusIndicator");var Ie=a(48);function Ce(e,t){var a=Object(Ie.b)(t);a.length?a[0].scrollTop-=e:window.scrollTo({top:window.pageYOffset-e})}var Le=a(84),Te=r.a.forwardRef((function(e,t){var a=e.items,_=void 0===a?[]:a,u=e.cardDefinition,b=e.cardsPerRow,m=void 0===b?[]:b,f=e.header,g=e.filter,p=e.pagination,v=e.preferences,y=e.empty,j=e.loading,O=e.loadingText,w=e.trackBy,z=e.selectedItems,E=e.selectionType,x=e.isItemDisabled,k=e.onSelectionChange,N=e.ariaLabels,I=e.visibleSections,C=e.stickyHeader,L=e.stickyHeaderVerticalOffset,T=Object(n.b)(e,["items","cardDefinition","cardsPerRow","header","filter","pagination","preferences","empty","loading","loadingText","trackBy","selectedItems","selectionType","isItemDisabled","onSelectionChange","ariaLabels","visibleSections","stickyHeader","stickyHeaderVerticalOffset"]);Object(xe.a)("Cards");var S=Object(s.a)(T),D=Object(d.a)((function(e){return function(e,t){0===t.length&&(t=o);var a=1;return t.slice().map((function(e){return{minWidth:e.minWidth||0,cards:e.cards}})).sort((function(e,t){return t.minWidth-e.minWidth})).some((function(t){if(e>=t.minWidth)return a=t.cards,!0})),a}(e.width,m)}),[m]),B=D[0],P=D[1],R=F({items:_,trackBy:w,selectedItems:z,selectionType:E,isItemDisabled:x,onSelectionChange:k,ariaLabels:N}),K=R.isItemSelected,U=R.getItemSelectionProps,q=R.updateShiftToggle,W=f||g||p||v,A=Object(c.useRef)(null),H=function(e,t,a){return{scrollToTop:function(){if(e.current&&t.current){var n=function(e,t,a){var n=t.getBoundingClientRect(),i=e.getBoundingClientRect();return n.top-i.top-a}(e.current,t.current,a);n>0&&Ce(n,e.current)}},scrollToItem:function(a){if(a&&e.current&&t.current){var n=t.current.getBoundingClientRect().bottom-a.getBoundingClientRect().top;n>0&&Ce(n,e.current)}}}}(P,A,1),M=H.scrollToTop,G=H.scrollToItem;C=Object(Le.b)()&&C;var J;return Object(c.useImperativeHandle)(t,(function(){return{scrollToTop:function(){C&&M()}}}),[C,M]),j?J=r.a.createElement("div",{className:l.loading},r.a.createElement(Ne,{type:"loading"},O)):y&&!_.length&&(J=r.a.createElement("div",{className:l.empty},y)),r.a.createElement("div",Object(n.a)({},S,{className:Object(i.a)(S.className,l.root),ref:P}),r.a.createElement(ye.a,{header:W&&r.a.createElement("div",{className:Object(i.a)(l.header),ref:A},r.a.createElement(h,{header:f,filter:g,pagination:p,preferences:v})),__stickyHeader:C,__stickyOffset:L,disableHeaderPaddings:!0,disableContentPaddings:!0,__disableContentBorders:!0},r.a.createElement("div",{className:Object(i.a)(W&&l["has-header"])},null!==J&&void 0!==J?J:r.a.createElement(Se,{items:_,cardDefinition:u,trackBy:w,selectionType:E,columns:B,isItemSelected:K,getItemSelectionProps:U,visibleSections:I,updateShiftToggle:q,onFocus:function(e){C&&G(e.currentTarget)}}))))})),Se=(t.a=Te,function(e){var t=e.items,a=e.cardDefinition,c=e.trackBy,o=e.selectionType,s=e.columns,d=e.isItemSelected,_=e.getItemSelectionProps,u=e.visibleSections,b=e.updateShiftToggle,m=e.onFocus,f=!!o,g=T(o,t.length),p=g.moveFocusDown,h=g.moveFocusUp,v=a.sections||[];return v=u?v.filter((function(e){return e.id&&-1!==u.indexOf(e.id)})):v,r.a.createElement("ol",Object(n.a)({className:Object(i.a)(l.list,l["list-grid-"+(s||1)])},D&&D.root),t.map((function(e,t){var o;return r.a.createElement("li",Object(n.a)({className:Object(i.a)(l.card,(o={},o[l["card-selectable"]]=f,o[l["card-selected"]]=f&&d(e),o)),key:w(c,e,t),onFocus:m},D&&D.item),r.a.createElement("div",{className:l["card-inner"]},r.a.createElement("div",{className:l["card-header"]},r.a.createElement("span",{className:l["card-header-inner"]},a.header?a.header(e):""),f&&r.a.createElement(ve,Object(n.a)({className:l["selection-control"],rootTag:"div",onFocusDown:p,onFocusUp:h,onShiftToggle:b},_(e)))),v.map((function(t,a){var n=t.width,i=void 0===n?100:n,c=t.header,o=t.content,s=t.id;return r.a.createElement("div",{key:s||a,className:l.section,style:{width:i+"%"}},c?r.a.createElement("div",{className:l["section-header"]},c):"",o?r.a.createElement("div",{className:l["section-content"]},o(e)):"")}))))})))});Object(ke.a)(Te,"Cards")},164:function(e,t,a){"use strict";var n=a(4),i=a(0),c=a.n(i),r=a(3),l=a(18),o=(a(161),{link:"_link_4c84z_g6nuv_3","weight-bold":"_weight-bold_4c84z_g6nuv_31","weight-normal":"_weight-normal_4c84z_g6nuv_35","color-inverted":"_color-inverted_4c84z_g6nuv_39","font-size-body-s":"_font-size-body-s_4c84z_g6nuv_43","font-size-body-m":"_font-size-body-m_4c84z_g6nuv_47","font-size-heading-xs":"_font-size-heading-xs_4c84z_g6nuv_51","font-size-heading-s":"_font-size-heading-s_4c84z_g6nuv_55","font-size-heading-m":"_font-size-heading-m_4c84z_g6nuv_59","font-size-heading-l":"_font-size-heading-l_4c84z_g6nuv_63","font-size-heading-xl":"_font-size-heading-xl_4c84z_g6nuv_67","font-size-display-l":"_font-size-display-l_4c84z_g6nuv_71",icon:"_icon_4c84z_g6nuv_76"}),s=a(32),d=a(8),_=a(10),u=a(58),b=a(14),m=a(13),f=a(12),g={"body-s":"small","body-m":"normal","heading-xs":"normal","heading-s":"normal","heading-m":"normal","heading-l":"normal","heading-xl":"big","display-l":"large"},p=c.a.forwardRef((function(e,t){var a=e.variant,f=void 0===a?"secondary":a,p=e.fontSize,h=void 0===p?"body-m":p,v=e.color,y=void 0===v?"normal":v,j=e.external,O=void 0!==j&&j,w=e.target,z=e.href,E=e.ariaLabel,x=e.externalIconAriaLabel,k=e.onFollow,N=e.children,I=Object(n.b)(e,["variant","fontSize","color","external","target","href","ariaLabel","externalIconAriaLabel","onFollow","children"]);Object(m.a)("Link");var C=!z,L=Object(s.a)(),T=Object(d.a)(I),S=null!==w&&void 0!==w?w:O?"_blank":void 0,D="_blank"===S?"noopener noreferrer":void 0,F=function(e){Object(_.a)(k,{href:z,external:O,target:S},e)},B=Object(i.useRef)(null);Object(u.a)(t,B);var P=Object(n.a)(Object(n.a)(Object(n.a)({},L),T),{ref:B,className:Object(r.a)(o.link,T.className,o["weight-"+("secondary"===f?"normal":"bold")],o["font-size-"+("info"===f?"body-s":h)],o["color-"+("info"===f?"normal":y)]),"aria-label":E}),R=c.a.createElement(c.a.Fragment,null,N,O&&c.a.createElement(c.a.Fragment,null," ",c.a.createElement("span",{className:o.icon,"aria-label":x},c.a.createElement(l.a,{name:"external",size:"info"===f?"small":g[h]}))));return C?c.a.createElement("a",Object(n.a)({},P,{role:"button",tabIndex:0,onKeyDown:function(e){e.keyCode===b.a.space&&e.preventDefault()},onKeyUp:function(e){e.keyCode!==b.a.space&&e.keyCode!==b.a.enter||F(e)},onClick:function(e){F(e)}}),R):c.a.createElement("a",Object(n.a)({},P,{target:S,rel:D,href:z,onClick:function(e){0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||F(e)}}),R)}));Object(f.a)(p,"Link");t.a=p}}]);
//# sourceMappingURL=3.b88df11a.chunk.js.map