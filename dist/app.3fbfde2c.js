parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"cW+T":[function(require,module,exports) {
var e=[["Le voyage est une fuite contre la routine, la monotonie, la familiarité, la soumission à la régulation du gouvernement collectif.","Sylvain Tesson","Artiste, Aventurier, écrivain (1972 - )"],["Comme les rêves sont cruels, qui nous laissent entrevoir des merveilles pour mieux nous en priver !","Amélie Nothomb","Artiste, écrivain (1966 - )"],["On passe une moitié de sa vie à attendre ceux qu'on aimera et l'autre moitié à quitter ceux qu'on aime.","Victor Hugo","Artiste, écrivain, Poète, Romancier (1802 - 1885)"],["Exige beaucoup de toi-même et attends peu des autres. Ainsi beaucoup d'ennuis te seront épargnés.","Confucius","Philosophe"],["Pour critiquer les gens il faut les connaître, et pour les connaître, il faut les aimer.","Coluche","Artiste, Comique (1944 - 1986)"],["Si je devais recommencer ma vie, je n'y voudrais rien changer, seulement j'ouvrirais un peu plus grand les yeux.","Jules Renard","Artiste, écrivain (1864 - 1910)"],["Le seul moyen de se délivrer d'une tentation, c'est d'y céder. Résistez et votre âme se rend malade à force de languir ce qu'elle s'interdit.","Oscar Wilde","Artiste, écrivain (1854 - 1900)"],["La vie est un mystère qu'il faut vivre, et non un problème à résoudre.","Gandhi","Homme politique, Philosophe, Révolutionnaire (1869 - 1948)"],["La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.","Albert Einstein","Mathématicien, Physicien, Scientifique (1879 - 1955)"],["Un sourire coûte moins cher que l'électricité, mais donne autant de lumière.","Abbé Pierre","Abbé, Prêtre, Religieux (1912 - 2007)"]],t=document.querySelector(".quote"),i=document.querySelector(".author"),n=document.querySelector(".infos"),r=null;r=Math.floor(Math.random()*e.length),t.innerHTML=e[r][0],i.innerHTML=e[r][1],n.innerHTML=" - "+e[r][2];var o=document.querySelector(".new-citation");function u(){r=Math.floor(Math.random()*e.length),t.innerHTML=e[r][0],i.innerHTML=e[r][1],n.innerHTML=" - "+e[r][2]}o.addEventListener("click",u);var a=document.querySelector(".share-twitter"),s=e[r][1].replace(/ /g,""),l=c(e[r][0],280);function c(e,t){return t<=5+s.length?e.slice(0,t).concat("..."):e.length>t?e.slice(0,t-3-s.length-2).concat("..."):e}function m(){window.open("https://twitter.com/intent/tweet?text="+l+"&hashtags="+s)}console.log(l),a.addEventListener("click",m);
},{}]},{},["cW+T"], null)
//# sourceMappingURL=/app.3fbfde2c.map