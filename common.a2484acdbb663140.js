"use strict";(self.webpackChunkbudget=self.webpackChunkbudget||[]).push([[592],{4828:function(g,i,e){e.d(i,{d:function(){return c}});var o=e(5671),l=e(3144),d=e(6518),t=e(6903),c=function(){var s=function(){function n(_,r,a){(0,o.Z)(this,n),this.viewContainer=_,this.templateRef=r,this.authService=a}return(0,l.Z)(n,[{key:"forRoles",set:function(r){var a=this;null!=r?(this.roles=Array.isArray(r)?r:[r],this.roles=this.roles.map(function(u){return u.toUpperCase()})):this.roles=[],this.authService.getUserRole$().subscribe(function(u){u&&!a.roles.includes(u.toUpperCase())?a.viewContainer.clear():a.viewContainer.createEmbeddedView(a.templateRef)})}}]),n}();return s.\u0275fac=function(_){return new(_||s)(t.Y36(t.s_b),t.Y36(t.Rgc),t.Y36(d.e))},s.\u0275dir=t.lG2({type:s,selectors:[["","forRoles",""]],inputs:{forRoles:"forRoles"}}),s}()},459:function(g,i,e){e.d(i,{B:function(){return d}});var o=e(3144),l=e(5671),d=(0,o.Z)(function t(c,s){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",_=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];(0,l.Z)(this,t),this.id=c,this.accountId=s,this.name=n,this.counterpartyPatterns=_})}}]);