// ==UserScript==
// @name     Reddit Screenwidth Tweak
// @version  1
// @grant    none
// @include       http://*www.reddit.com/r/*/comments/*
// @include       https://*www.reddit.com/r/*/comments/*
// ==/UserScript==

function addGlobalStyle(css) {
  console.log("Initial Run");
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
  console.log("Applied Styles");
}

addGlobalStyle('._31N0dvxfpsO6Ur5AKx4O5d { max-width: 90vw !important; }');
addGlobalStyle('._1OVBBWLtHoSPfGCRaPzpTf._2udhMC-jldHp_EpAuBeSR1 { max-width: 90vw !important; }');
addGlobalStyle('._1r4smTyOEZFO91uFIdWW6T.aUM8DQ_Nz5wL0EJc_wte6._2L2graYYrzv3d29vpczps_ { width: 99% !important; }');
