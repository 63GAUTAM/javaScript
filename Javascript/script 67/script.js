console.log("Hello World!");
document.body.firstChild
// #text

document.body.firstElementChild
{/* <div class=​"container">​…​</div>​   */}

document.body.firstElementChild.childNodes
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text] 

document.body.firstElementChild.children
// HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box] 



document.body.firstElementChild.children[3]
{/* <div class=​"box">​Box4​</div>​  */}

document.body.firstElementChild.children[3].nextElementSibling
{/* <div class=​"box">​Box5​</div>​  */}

document.body.firstElementChild.children[3].previousElementSibling
{/* <div class=​"box">​Box3​</div>​  */}

document.body.firstElementChild.children[3].previousSibling
// #text 