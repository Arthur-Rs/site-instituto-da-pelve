"use strict";//#region Variables
var btnHeader=document.querySelector("#btn-header"),header=document.querySelector("header"),main=document.querySelector("main"),HeaderButtons=document.querySelectorAll("header nav span"),Sections={home:document.querySelector(".home"),about:document.querySelector(".about"),matter:document.querySelector(".matter")},offsetHeight=Sections.home.offsetTop,toggleHeader=function(){btnHeader.classList.toggle("close"),header.classList.toggle("open"),main.classList.toggle("header-open")},scrollToSection=function(a){var b=Sections[a],c=b.offsetTop-offsetHeight;scrollTo({top:c,behavior:"smooth"}),toggleHeader()};//#endregion
//#region Events
HeaderButtons.forEach(function(a){a.addEventListener("click",function(){scrollToSection(a.dataset.link)})}),btnHeader.addEventListener("click",toggleHeader);
