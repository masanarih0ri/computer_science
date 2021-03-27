let sectionInfo = [
  {
    "title":"Kittens",
    "color":"green",
    "description":"A kitten is a juvenile cat. After being born, kittens display primary altriciality and are totally dependent on their mother for survival. They do not normally open their eyes until after seven to ten days. After about two weeks, kittens quickly develop and begin to explore the world outside the nest (Wikipedia)."
  },
  {
    "title":"Tigers",
    "color":"red",
    "description":"The tiger is the largest extant cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes on orange-brown fur with a lighter underside. It is an apex predator, primarily preying on ungulates such as deer and wild boar. (Wikipedia)"
  },
  {
    "title":"Elephant",
    "color":"blue",
    "description":"Elephants are mammals of the family Elephantidae and the largest existing land animals. Three species are currently recognised: the African bush elephant, the African forest elephant, and the Asian elephant. Elephantidae is the only surviving family of the order Proboscidea; extinct members include the mastodons. (Wikipedia)"
  },
];

let tableOfContents = "<ul>";
for(let i = 0; i < sectionInfo.length; i++) {
  tableOfContents += `<li><a href="#sec${i}">${sectionInfo[i].title}</a></li>`;
}
tableOfContents += "</ul>"

let containerSection = "";
for(let i = 0; i < sectionInfo.length; i++) {
  containerSection += `
  <div id="sec${i}" class="bg-${sectionInfo[i].color} big-square">
    <h2>${sectionInfo[i].title}</h2>
    <p>${sectionInfo[i].description}</p>
  </div>
  `
}


// tableOfContentsとcontainerSectionに分けて要素を作る
let htmlString = `
<h1>Information: We are doing #{id} to jump to a section</h1>
${tableOfContents}
${containerSection}
`

// 最後にhtmlStringを挿入する
document.getElementById("target").innerHTML = htmlString;