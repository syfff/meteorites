import define1 from "./5432439324f2c616@268.js";
import define2 from "./450051d7f1174df8@254.js";
import define3 from "./b08c339a90d5846f@322.js";
import define4 from "./a601aba88046a626@335.js";

function _1(md){return(
md`# Gift from the Universe - Meteorites that Landed on the Earth`
)}

function _2(md){return(
md`Category: Data Analysis/Explainer Project 

Yifan Shen`
)}

function _3(md){return(
md`- Format, journalist style? how long should be write up be?
- rubric?
- How to name the title of the visualizations?
- how detailed should data analysis be? should data analysis be a separate section or just integrated with the visualizations?
- bubble: font size, color, other features?
- map: in the sea? not sure if they are correct, move the map over 360 degrees`
)}

function _4(md){return(
md`---`
)}

function _5(md){return(
md`#### Introduction
For centuries, people have been fascinated by meteorites due to their unique and otherworldly appearance, their rarity and value, as well as the intriguing stories behind their origins. However, it can be challenging to determine the exact number of meteorites that have landed on Earth and to gather specific details, such as their class and type.

Luckily, this dataset from Kaggle, [Meteorite Landings Dataset](https://www.kaggle.com/datasets/ulrikthygepedersen/meteorite-landings), keeps a record of every meteorite landed on Earth throughout history. Each record provides the year and geographical location of the landing/discovery (landing is noted as 'fell' and discovery is noted as 'found'), the type of meteorite, as well as its name, class, and mass.`
)}

function _ludovicoBeeLfazbf70rscUnsplash(FileAttachment){return(
FileAttachment("ludovico-bee-LFAzBf70rsc-unsplash.jpg").image()
)}

function _7(md){return(
md`#### Questions to explore
As an amateur astronomer, I hope to answer the following questions through data analysis and visualizations,
1. What is the spatial and temporal pattern of meteorite landing as well as meteorite discovery? 
2. Are there any observable relations between the class and mass of the meteorites?
3. What is the most common name of landed meteorites?`
)}

function _8(md){return(
md`---`
)}

function _9(md){return(
md`#### Data cleaning
Data cleaning was carried out in R. I chose to drop 75 out of 45,716 (0.16%) records whose 'nametype' is 'relict' instead of 'valid'. Then, I kept the following features: name, id, class, mass, fall_found, year, latitude, and longitude. 'fall_found' records indicate whether the year associated with the record refers to when a meteorite fell or when it was found.

The mass from 82 records (0.18%) are missing and the coordinate information from 7310 records (16.0%) are missing. I choose to drop the records with missing mass value. For the records with missing coordinate information, I will use them in other visualizations that don't require coordinate information. I also checked that every entry in the 45,559 records is unique as each of them has a unique id. There are no outliers for mass and coordinate information. Initially, the name of the meteorite is composed of a name and digits. For the sake of simplicity, I used regular expressions to keep only the letters in the meteorite name. `
)}

function _10(md){return(
md`---`
)}

function _11(md){return(
md`#### The temporal and spatial pattern of meteorite landing and meteorite discovery.
Instruction: Check the box to select meteorite landing/discovery. Move the range bar to adjust desired mass. Click the 'pause' button stop the animation. Zoom or move the map to see the patterns in the area you are interested in. `
)}

function _12(htl){return(
htl.html`<input type="checkbox" id="fell" name="fell" checked>
<label for="fell">Fell (Landing)</label>
<input type="checkbox" id="found" name="found" checked>
<label for="found">Found (Discovery)</label>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type="range" min="0" max="200000" step = "50" value="0" id="mass" oninput="amount.value=mass.value"><output id="amount" name="amount" for="mass">0</output><label for="mass">g</label> `
)}

function _yearValue(Scrubber,numbers){return(
Scrubber(numbers, {
  delay: 100,
  loop: false
})
)}

function _14(htl){return(
htl.html`<div id='map' style='width: 100%; height: 35rem;'></div>`
)}

function _15(md){return(
md`The number of discovered meteorites is significantly higher than the number of landed meteorites. Compared to meteorites discovered, landed meteorites have a more limited spatial distribution. In other words, meteorites can be discovered in the regions further north than meteorites landed in the north hemisphere, such as  in the North Europe and Siberia, as well as further south in the south hemisphere, such as in the South Africa and Antarctic. One possible explanation for this is that there are fewer observers in the areas near the poles due to lower population densities. 

For meteorites discovered, prior to 1840, meteorites were scattered sporadically across North America and Europe, with a few being found on other continents. However, around 1840, there was a sudden surge in the number of meteorites discovered in North America. After the 1900s, Australia, Japan, Europe, and South Africa also witnessed a gradually increasing number of meteorite discoveries. From 1975 onwards, North Africa and Antarctica also began to report an increasing number of found meteorites. Surprisingly, there are several areas where clusters of meteorites have been found, including Southern California in the US, the central US, the Sahara Desert, Oman in the Middle East, and the southeastern part of Australia. This roughly follows the scientific development as well as regional explorations and exploitations in history. 

With regards to fallen meteorites, there were some early records before the 1800s in West and South Europe. After the 1800s, North America, Japan, and India were among the first places to begin recording meteorites that had landed. Beginning in 1890, more and more places over the globe started to keep a record of fallen meteorites. All the continents except Antarctica have a moderate amount of landed meteorites. Additionally, there are clusters of fallen meteorites in the U.S., Western and Southern Europe, India, and Japan. This also makes sense that West and South Europe who had a more advanced scientific development in the late 18th century, particularly in the field of astronomy, were the first to record meteorites landing. As new technology was embraced, North America, Japan, and India followed suit in recording these occurrences, with scientific studies and researchers playing a significant role in driving these efforts forward.

In terms of meteorite mass, the majority of found or landed meteorites weigh less than 5000g. As the mass increases above 200000g, the likelihood of finding a meteorite with a higher mass decreases dramatically.`
)}

function _16(md){return(
md`---`
)}

function _17(md){return(
md`#### Meteorites are most often named after people or geographical locations. 
Instruction: To view the three most common occurrences of each word, click on it.`
)}

function _wordCloud(d3,d3Cloud,worddata,s,wc_data1,wc_data2,wc_data3,wrap,invalidation)
{

  const fontFamily = "Verdana, Arial, Helvetica, sans-serif";
  
  const svg = d3.create("svg")
    .attr("viewBox", [0, 0, 600, 300])
    .attr("font-family", fontFamily)
    .attr("text-anchor", "middle");
  
  const displaySelection = svg.append("text")
    .attr("font-family", "Lucida Console, Courier, monospace")
    .attr("text-anchor", "start")
    .attr("alignment-baseline", "hanging")
    .attr("x", 10)
    .attr("y", 230);
    
  const cloud = d3Cloud()
    .size([600, 250])
    .words(worddata.map(d => Object.create(d)))
    .padding(1.5)
    .rotate(0)
    .font(fontFamily)
    .fontSize(d => s(d.value))
    .on("word", ({size, x, y, rotate, text}) => {
      svg.append("text")
        .attr("font-size", size)
        .attr("transform", `translate(${x},${y}) rotate(${rotate})`)
        .text(text)
        .classed("click-only-text", true)
        .classed("word-default", true)
        .on("mouseover", handleMouseOver)
        .on("mouseout", handleMouseOut)
        .on("click", handleClick);
          
        function handleMouseOver(d, i) {
          d3.select(this)
            .classed("word-hovered", true)
            .transition(`mouseover-${text}`).duration(200).ease(d3.easeLinear)
              .attr("font-size", size + 1)
              .attr("font-weight", "bold");
        }
        
        function handleMouseOut(d, i) {
          d3.select(this)
            .classed("word-hovered", false)
            .interrupt(`mouseover-${text}`)
              .attr("font-size", size);
        }
        
        function handleClick(d, i) {
          var e = d3.select(this);
          displaySelection.text(`Appearance 1: ${wc_data1.get(e.text())}  
                                 Appearance 2: ${wc_data2.get(e.text())} 
                                 Appearance 3: ${wc_data3.get(e.text())}`).call(wrap, 500-20);
          e.classed("word-selected", false);
          e.classed("word-hovered", false);
        }

    });
  cloud.start();
  invalidation.then(() => cloud.stop());
  return svg.node();
}


function _19(md){return(
md`The visualization presented contains the words that appeare more than 10 times in the meteorites names. The size of each word is directly proportional to its frequency of occurrence. This allows us to quickly see the most common words that appear in meteorite names. Feel free to explore the name that attracts you most by clicking on it!

One observation is that many meteorites are named after people. For example,  Yamato meteorites are named after a Japanese general, while the Queen Alexandra Range meteorites are named after Queen Alexandra of Denmark. This trend is not surprising, as people often play a key role in the discovery and study of meteorites. Scientists who discover new meteorites or people who make important contributions to the historical events are sometimes honored by having a meteorite named after them.

Another common theme in meteorite names is the geographical location of their discovery or landing. Many meteorites are named after mountains or other prominent geographical features near the place where they were found, such as Allan Hills, Lewis Cliff, or Northwest Africa. 

Overall, the visualization gives us insights into some of the most common meteorite naming conventions. `
)}

function _20(md){return(
md`---`
)}

function _21(md){return(
md`#### Iron meteorites and Pallasite are the heaviest among all classes of meteorites.
Instruction: Hover on the circle to see the full name of the meteorites and click on it to direct to learn more information.`
)}

function _chart(BubbleChart,df2){return(
BubbleChart(df2, {
  label: d => `${d.class}\n${d.avg_mass}g`, // shown on the bubble
  value: d => d.avg_mass,
  group: d => d.class,
  title: d => `${d.name}`, // shown on hover
  link: d=> `${d.link}`,
  width: 1000
})
)}

function _23(md){return(
md`The visualization presented above showcases the top 9 average mass of meteorites aggregated by class. The area of the bubble is directionally proportional to the average mass for each class of meteorites.

Surprisingly, the average mass of Iron meteorites is almost three times heavier than the second heaviest class (Pallasite). Moreover, the average mass of Pallasite is about 2.5 times heavier than the third heaviest class (Aubrite). These findings indicate a considerable disparity in the average mass of meteorites across different classes.

The top 6 heaviest classes of meteorites are, Iron meteorites, Pallasite, Aubrites, Carbonaceous chondrites,  Mesosiderites, and Stone meteorites, which are also above 10, 000g. In contrast, the other classes of meteorites have a relatively lower average weight. This information sheds light on the unique characteristics of meteorites, including their mass and class, which can help scientists better understand the origins and properties of these extraterrestrial objects.`
)}

function _24(md){return(
md`---`
)}

function _25(md){return(
md`#### Todo: some visualizations about class
Total, 
fell/found,
class, iron, ..
sub-class, iron I, ...

Problem: they have repetitions`
)}

function _26(Icicle,flare,width){return(
Icicle(flare, {
  path: (d) => d.name.replaceAll(".", "/"), // e.g. flare/animate/Easing
  label: (d) => d.name.split(".").pop(), // display text
  value: (d) => d?.size, // height of each rect
  title: (d, n) => [n.id, n.value.toLocaleString()].join("\n"), // hover text
  width,
  height: 500
})
)}

function _27(md){return(
md`---`
)}

function _28(Sunburst,flare,width){return(
Sunburst(flare, {
  path: (d) => d.name.replaceAll(".", "/"), // e.g. flare/animate/Easing
  label: (d) => d.name.split(".").pop(), // display text
  value: (d) => d?.size, // angle of each arc
  title: (d, n) => [n.id, n.value.toLocaleString()].join("\n"), // hover text
  width,
  height: 720
})
)}

function _29(md){return(
md`---`
)}

function _30(md){return(
md`#### Reference
Bubblechart:
- https://observablehq.com/@d3/bubble-chart

D3 library: 
- https://github.com/d3/d3/wiki/Gallery

Dataset:
- https://www.kaggle.com/datasets/ulrikthygepedersen/meteorite-landings

Mapbox: 
- https://franksh.com/posts/d3-mapboxgl/
- https://observablehq.com/@pfoser/using-mapbox-gl-js
- https://observablehq.com/@edhschen/mapbox-d3-guide

Image:
- unsplash.com

World cloud
- https://observablehq.com/@d3/word-cloud
- https://observablehq.com/@panningforbacon/word-cloud`
)}

function _31(md){return(
md`---`
)}

function _32(md){return(
md`#### Code`
)}

function _meteorite_landings_cleaned4(__query,FileAttachment,invalidation){return(
__query(FileAttachment("Meteorite_Landings_Cleaned@4.csv"),{from:{table:"Meteorite_Landings_Cleaned"},sort:[],slice:{to:null,from:null},filter:[],select:{columns:null}},invalidation)
)}

function _classmass14(__query,FileAttachment,invalidation){return(
__query(FileAttachment("classmass1@4.csv"),{from:{table:"classmass1"},sort:[],slice:{to:null,from:null},filter:[],select:{columns:null}},invalidation)
)}

function _frequency4(__query,FileAttachment,invalidation){return(
__query(FileAttachment("frequency@4.csv"),{from:{table:"frequency"},sort:[],slice:{to:null,from:null},filter:[],select:{columns:["text","value","text1","text2","text3"]}},invalidation)
)}

function _file(FileAttachment){return(
FileAttachment("Meteorite_Landings_Cleaned@4.csv")
)}

function _file2(FileAttachment){return(
FileAttachment("classmass1@4.csv")
)}

function _file3(FileAttachment){return(
FileAttachment("frequency@4.csv")
)}

async function _data(d3,file){return(
d3.csvParse(await file.text())
)}

async function _data2(d3,file2){return(
d3.csvParse(await file2.text())
)}

async function _data3(d3,file3){return(
d3.csvParse(await file3.text())
)}

function _42(md){return(
md`##### Libraries`
)}

async function _d3(require)
{
  const d3 = await require("d3@7", "d3-array@2");
  return d3;
}


function _d3Cloud(require){return(
require("d3-cloud@1")
)}

async function _mapboxgl(require,html)
{
  const gl = await require("mapbox-gl@2.12.1");
  if (!gl.accessToken) {
    gl.accessToken =
      "pk.eyJ1Ijoic3lmZmZmZmZmZiIsImEiOiJjbGYwcGdvaHkwMHBxM3JtdDFocXRuZDdpIn0.-kvc33uE5K2U1JP5rrpbjA";
    const href = await require.resolve("mapbox-gl@2.12.1/dist/mapbox-gl.css");
    document.head.appendChild(html`<link href=${href} rel=stylesheet>`);
  }
  return gl;
}


function _BubbleChart(d3,location){return(
function BubbleChart(data, {
  name = ([x]) => x, // alias for label
  label = name, // given d in data, returns text to display on the bubble
  value = ([, y]) => y, // given d in data, returns a quantitative size
  group, // given d in data, returns a categorical value for color
  title, // given d in data, returns text to show on hover
  link, // given a node d, its link (if any)
  linkTarget = "_blank", // the target attribute for links, if any
  width = 1000, // outer width, in pixels
  height = 900, // outer height, in pixels
  padding = 3.5, // padding between circles
  margin = 1.5, // default margins
  marginTop = margin, // top margin, in pixels
  marginRight = margin, // right margin, in pixels
  marginBottom = margin, // bottom margin, in pixels
  marginLeft = margin, // left margin, in pixels
  groups, // array of group names (the domain of the color scale)
  colors = d3.schemeTableau10, // an array of colors (for groups)
  fill = "#ccc", // a static fill color, if no group channel is specified
  fillOpacity = 0.7, // the fill opacity of the bubbles
  stroke, // a static stroke around the bubbles
  strokeWidth, // the stroke width around the bubbles, if any
  strokeOpacity, // the stroke opacity around the bubbles, if any
} = {}) {
  // Compute the values.
  const D = d3.map(data, d => d);
  const V = d3.map(data, value);
  const G = group == null ? null : d3.map(data, group);
  const I = d3.range(V.length).filter(i => V[i] > 0);

  // Unique the groups.
  if (G && groups === undefined) groups = I.map(i => G[i]);
  groups = G && new d3.InternSet(groups);

  // Construct scales.
  const color = G && d3.scaleOrdinal(groups, colors);

  // Compute labels and titles.
  const L = label == null ? null : d3.map(data, label);
  const T = title === undefined ? L : title == null ? null : d3.map(data, title);

  // Compute layout: create a 1-deep hierarchy, and pack it.
  const root = d3.pack()
      .size([width - marginLeft - marginRight, height - marginTop - marginBottom])
      .padding(padding)
    (d3.hierarchy({children: I})
      .sum(i => V[i]));

  const svg = d3.create("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-marginLeft, -marginTop, width, height])
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;")
      .attr("fill", "currentColor")
      .attr("font-size", 12)
      .attr("font-family", "sans-serif")
      .attr("text-anchor", "middle");

  const leaf = svg.selectAll("a")
    .data(root.leaves())
    .join("a")
      .attr("xlink:href", link == null ? null : (d, i) => link(D[d.data], i, data))
      .attr("target", link == null ? null : linkTarget)
      .attr("transform", d => `translate(${d.x},${d.y})`);

  leaf.append("circle")
      .attr("stroke", stroke)
      .attr("stroke-width", strokeWidth)
      .attr("stroke-opacity", strokeOpacity)
      .attr("fill", G ? d => color(G[d.data]) : fill == null ? "none" : fill)
      .attr("fill-opacity", fillOpacity)
      .attr("r", d => d.r);

  if (T) leaf.append("title")
      .text(d => T[d.data]);

  if (L) {
    // A unique identifier for clip paths (to avoid conflicts).
    const uid = `O-${Math.random().toString(16).slice(2)}`;

    leaf.append("clipPath")
        .attr("id", d => `${uid}-clip-${d.data}`)
      .append("circle")
        .attr("r", d => d.r);

    leaf.append("text")
        .attr("clip-path", d => `url(${new URL(`#${uid}-clip-${d.data}`, location)})`)
      .selectAll("tspan")
      .data(d => `${L[d.data]}`.split(/\n/g))
      .join("tspan")
        .attr("x", 0)
        .attr("y", (d, i, D) => `${i - D.length / 2 + 0.85}em`)
        .attr("fill-opacity", (d, i, D) => i === D.length - 1 ? 0.7 : null)
        .text(d => d);
  }

  return Object.assign(svg.node(), {scales: {color}});
}
)}

function _49(md){return(
md`##### Map implementation`
)}

function _df(data){return(
data.map((y) => {
  return {
          id: +y.id,
        name:y.name,
         class: y.class,
         mass_g: +y.mass,
         coordinates:[+y.lat+Math.random()*0.01, +y.long+Math.random()*0.01],
         fall_found:y.fall_found,
         year: y.year
         }
})
)}

function _df2(data2){return(
data2.map((y) => {
  return {class: y.class,
          name: y.class_fullname,
         avg_mass: Math.round(+y.avg),
          link: y.wiki_link
         }
})
)}

function _df3(data3){return(
data3.map((y) => {
  return {text: y.text,
          value: +y.value
         }
})
)}

function _worddata(df3,d3){return(
df3.slice().sort((a, b) => d3.descending(a.value, b.value))
)}

async function _wc_data1(d3,FileAttachment){return(
Object.assign(new Map(d3.csvParse(await FileAttachment("frequency@4.csv").text(), ({text, text1}) => [text, text1])), {title: "Number of Reports"})
)}

async function _wc_data2(d3,FileAttachment){return(
Object.assign(new Map(d3.csvParse(await FileAttachment("frequency@4.csv").text(), ({text, text2}) => [text, text2])), {title: "Number of Reports"})
)}

async function _wc_data3(d3,FileAttachment){return(
Object.assign(new Map(d3.csvParse(await FileAttachment("frequency@4.csv").text(), ({text, text3}) => [text, text3])), {title: "Number of Reports"})
)}

function _numbers(){return(
Array.from({length: 45}, (_, i) => 1800+i*5)
)}

function _map(mapboxgl)
{
  let map = new mapboxgl.Map({
    container: 'map',
    center: [0, 0],
    zoom: 0.85,
    style: "mapbox://styles/mapbox/streets-v10",
    // maxBounds: [
    //   [-123.0, 37.1],
    //   [-121.0, 38.6]
    // ]
  });
  map.addControl(new mapboxgl.NavigationControl(), 'bottom-left');
  
  return map;
}


function _annotations(d3,svg1){return(
d3.select(svg1.node()).select("g#annotation")
)}

function _svg1(map,d3,df)
{
  var container = map.getCanvasContainer();

  // initialize the container
  var svg = d3
      .select(container)
      .append("svg")
      .attr("width", "100%")
      .attr("height", "100%")
      .style("position", "absolute")
      .style("z-index", 2); 

  // implement the circles
  const g = svg.append("g").attr("id", "circles");
    
  g.selectAll("circle")
    .data(df)
    .enter()
    .append("circle")
    .attr("r", Math.max(map.getZoom()**1/3, 2))
    .style('fill', 'black')
    .attr('fill-opacity', 0.3)

  svg.append("g").attr("id", "annotation").raise();

  return svg
}


function _dots(d3,svg1){return(
d3.select(svg1.node()).select("g#circles").selectAll("circle")
)}

function _62(md){return(
md`##### Utilities`
)}

function _project(map,mapboxgl){return(
function project(lng,lat) {
  return map.project(new mapboxgl.LngLat(lng, lat));
}
)}

function _wrap(d3){return(
function wrap(text, width) {
    text.each(function () {
        var text = d3.select(this),
            words = text.text().split(/\s+/).reverse(),
            word,
            line = [],
            lineNumber = 0,
            lineHeight = 1.1, // ems
            x = text.attr("x"),
            y = text.attr("y"),
            dy = 0, //parseFloat(text.attr("dy")),
            tspan = text.text(null)
                        .append("tspan")
                        .attr("x", x)
                        .attr("y", y)
                        .style("font", "10px sans-serif")
                        .style("fill","black")
  
                        .attr("dy", dy + "em");
        while (word = words.pop()) {
              
            line.push(word);
            tspan.text(line.join(" "));
          
            if (tspan.node().getComputedTextLength() > 500 || word == "Appearance") {
                line.pop();
                tspan.text(line.join(" "));
                line = [word];
                if(word == "Appearance"){
                  ++lineNumber;
                }
                tspan = text.append("tspan")
                            .attr("x", x)
                            .attr("y", y)
                            .attr("dy", d=> ++lineNumber * lineHeight + dy + "em")
                            .style("font", "10px sans-serif")
                            .style("fill","black")
                            .text(word);
            }
        }
    });
}
)}

function _highlight(d3,svg1,html,dots)
{
  const svg = d3.select(svg1.node());
  
  // used to test out interactivity in this cell
  const status = html`<code>highlight: none</code>`;
  
  dots.on("mouseover.highlight", function(event, d) { 
    
      d3.select(this)
        .raise() 
        .style("stroke", "black")
        .style("stroke-width", 1);
    
      d3.select(status).raise().text("highlight: " + d.name);
    });

  dots.on("mouseout.highlight", function(event, d) {
      d3.select(this)
      .raise() 
      .style("stroke", null);
      d3.select(status).text("highlight: none");
    });
  
  return status;
}


function _render(dots,project,map){return(
function render() {
  dots
    .attr("cx", function (d) {
      return project(d.coordinates[1], d.coordinates[0]).x;
    })
    .attr("cy", function (d) {
      return project(d.coordinates[1], d.coordinates[0]).y;
    })
    .attr("r", Math.max(map.getZoom()*1/3, 2));
}
)}

function _hover2(d3,svg1,html,dots)
{
  const svg = d3.select(svg1.node());
  
  const status = html`<code>hover: none</code>`;

  dots.on("mouseover.hover2", function(event, d) {
    
      let me = d3.select(this);
      let div = d3.select("body").append('div');
      
      div.attr("id", "details");
      div.attr("class", "tooltip");
    
      const res = Object.entries(d).filter(([key, value]) => key !== 'coordinates')
                                     
      let rows = div.append("table")
        .selectAll("tr")
        .data(res)
        .enter()
        .append("tr");

      rows.append("th").text(key => key[0]);
      rows.append("td").text(key => key[1]);
    
      d3.select(status).text("hover: " + d.name);
    });

  dots.on("mousemove.hover2", function(event, d) {
      let div = d3.select("div#details");
    
      let bbox = div.node().getBoundingClientRect();
    
      div.style("left", event.clientX + "px")
      div.style("top",  (event.clientY - bbox.height) + "px");
    });
  
  dots.on("mouseout.hover2", function(event, d) {
      d3.selectAll("div#details").remove();
      d3.select(status).text("hover: none");
    });
  
  return status;
}


function _s(d3){return(
d3.scaleSqrt()
  .domain([1, 6776])
  .range([5, 40])
)}

function _69(dots,yearValue,d3,map)
{
  // const status = html`<code>Move to select meteorite mass no less than: 0g (default 0, up to 200000)</code>`;

    dots.filter(d => (
                      d.year > yearValue
                     )).attr('fill-opacity', 0).attr("r", 0).on("mouseover.hover2", function(event, d){
      d3.selectAll("div#details").remove();
    }).on("mouseover.highlight", function(event, d) { 
        d3.select(this)
        .style("stroke", null);
    });
    
    dots.filter(d => ((d.mass_g >= d3.select("#mass").property("value"))
                     &&
                      ((d3.select("#found").property("checked") && d.fall_found == "Found")
                     || (d3.select("#fell").property("checked") && d.fall_found == "Fell"))
                     ) && d.year <= yearValue ).attr('fill-opacity', 0.3).attr("r", Math.max(map.getZoom()*1/3, 1.5)).on("mouseover.hover2", function(event, d){
      let me = d3.select(this);
      let div = d3.select("body").append('div');
      
      div.attr("id", "details");
      div.attr("class", "tooltip");
    
      const res = Object.entries(d).filter(([key, value]) => key !== 'coordinates')
                                     
      let rows = div.append("table")
        .selectAll("tr")
        .data(res)
        .enter()
        .append("tr");

      rows.append("th").text(key => key[0]);
      rows.append("td").text(key => key[1]);
    
      // d3.select(status).text("hover: " + d.name);
    }).on("mouseover.highlight", function(event, d) { 
        d3.select(this)
        .style("stroke", "black");
    })
  
     d3.select("#fell")
	.on("change", function() {
      dots.filter(d => (
                      !d3.select("#fell").property("checked") && d.fall_found == "Fell"
                     )
                     ).attr('fill-opacity', 0).attr("r", 0).on("mouseover.hover2", function(event, d){
      d3.selectAll("div#details").remove();
    }).on("mouseover.highlight", function(event, d) { 
        d3.select(this)
        .style("stroke", null);
    });
    
    dots.filter(d => ((d.mass_g >= d3.select("#mass").property("value"))
                     &&
                      ((d3.select("#found").property("checked") && d.fall_found == "Found")
                     || (d3.select("#fell").property("checked") && d.fall_found == "Fell"))
                     ) && d.year <= yearValue).attr('fill-opacity', 0.3).attr("r", Math.max(map.getZoom()*1/3, 1.5)).on("mouseover.hover2", function(event, d){
      let me = d3.select(this);
      let div = d3.select("body").append('div');
      
      div.attr("id", "details");
      div.attr("class", "tooltip");
    
      const res = Object.entries(d).filter(([key, value]) => key !== 'coordinates')
                                     
      let rows = div.append("table")
        .selectAll("tr")
        .data(res)
        .enter()
        .append("tr");

      rows.append("th").text(key => key[0]);
      rows.append("td").text(key => key[1]);
    
      // d3.select(status).text("hover: " + d.name);
    }).on("mouseover.highlight", function(event, d) { 
        d3.select(this)
        .style("stroke", "black");
    })

  })

  // whenever the ranger changes, updated the points
   d3.select("#found")
	.on("change", function() {
      dots.filter(d => (
                      !(d3.select("#found").property("checked") && d.fall_found == "Found")
                     )).attr('fill-opacity', 0).attr("r", 0).on("mouseover.hover2", function(event, d){
      d3.selectAll("div#details").remove();
    }).on("mouseover.highlight", function(event, d) { 
        d3.select(this)
        .style("stroke", null);
    });
    
    dots.filter(d => ((d.mass_g >= d3.select("#mass").property("value"))
                     &&
                      ((d3.select("#found").property("checked") && d.fall_found == "Found")
                     || (d3.select("#fell").property("checked") && d.fall_found == "Fell"))
                     )&& d.year <= yearValue).attr('fill-opacity', 0.3).attr("r", Math.max(map.getZoom()*1/3, 1.5)).on("mouseover.hover2", function(event, d){
      let me = d3.select(this);
      let div = d3.select("body").append('div');
      
      div.attr("id", "details");
      div.attr("class", "tooltip");
    
      const res = Object.entries(d).filter(([key, value]) => key !== 'coordinates')
                                     
      let rows = div.append("table")
        .selectAll("tr")
        .data(res)
        .enter()
        .append("tr");

      rows.append("th").text(key => key[0]);
      rows.append("td").text(key => key[1]);
    
      // d3.select(status).text("hover: " + d.name);
    }).on("mouseover.highlight", function(event, d) { 
        d3.select(this)
        .style("stroke", "black");
    })

  })
    
  d3.select("#mass")
	.on("change", function() {
    dots.filter(d => ((d.mass_g < d3.select("#mass").property("value"))
                     )).attr('fill-opacity', 0).attr("r", 0).on("mouseover.hover2", function(event, d){
      d3.selectAll("div#details").remove();
    }).on("mouseover.highlight", function(event, d) { 
        d3.select(this)
        .style("stroke", null);
    });
    
    dots.filter(d => ((d.mass_g >= d3.select("#mass").property("value"))
                     &&
                      ((d3.select("#found").property("checked") && d.fall_found == "Found")
                     || (d3.select("#fell").property("checked") && d.fall_found == "Fell"))
                     ) && d.year <= yearValue).attr('fill-opacity', 0.3).attr("r", Math.max(map.getZoom()*1/3, 1.5)).on("mouseover.hover2", function(event, d){
      let me = d3.select(this);
      let div = d3.select("body").append('div');
      
      div.attr("id", "details");
      div.attr("class", "tooltip");
    
      const res = Object.entries(d).filter(([key, value]) => key !== 'coordinates')
                                     
      let rows = div.append("table")
        .selectAll("tr")
        .data(res)
        .enter()
        .append("tr");

      rows.append("th").text(key => key[0]);
      rows.append("td").text(key => key[1]);
    
      // d3.select(status).text("hover: " + d.name);
    }).on("mouseover.highlight", function(event, d) { 
        d3.select(this)
        .style("stroke", "black");
    });
    
    // status = d3.select(status).text("Move to select meteorite mass no less than: " + d3.select("#mass").property("value") +"g (default 0, up to 200000)");
	});
}


function _70(map,render)
{
  map.on("viewreset", render);
  map.on("move", render);
  map.on("moveend", render);
  map.on("zoomend", render);
  render();
}


function _71(htl){return(
htl.html`<style>
/* Set the style for the tool-tip */
.tooltip {
  font-family: sans-serif;
  font-size: 10pt;
}

.tooltip {
  position: absolute;
  width: auto;
  height: auto;
  padding: 4px;
  background: #dbdbd7;
  pointer-events: none;
  border: 1px solid #eee;
  border-radius: 5px;
}
</style>`
)}

function _72(html){return(
html`<style>p { max-width: none; }</style>`
)}

function _73(htl){return(
htl.html`<style>ol { max-width: none; }`
)}

function _74(htl){return(
htl.html`<style> 
/* You can also set this in the initial declaration, just here for sake of explanation */
#map {
  position: relative;
  z-index: 0;
}
</style>`
)}

function _75(html){return(
html`<style type="text/css">

  .click-only-text {
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  .click-only-text::selection {
      background: none;
    }

  .word-default {
      fill: #cbc5ea;
      font-weight: normal;
    }
  .word-hovered {
      fill: #73628a;
      font-weight: bold;
    }
  // .word-selected {
  //     fill: darkslategrey;
  //     font-weight: bold;
  //   }

</style>`
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["ludovico-bee-LFAzBf70rsc-unsplash.jpg", {url: new URL("./files/a67075b00d464ee1b0c33fb7ff130ff6eabd6d36a9e98a4b6d7004d7ea3ca946d097d39bd3e3e8a184199c81047f14576831547badc405512698e0916c478d41.jpeg", import.meta.url), mimeType: "image/jpeg", toString}],
    ["Meteorite_Landings_Cleaned@4.csv", {url: new URL("./files/d211ba1445f0f6b3ec6ef89b16e4594e0818993f0c8cf0e0f69d7173e46d13c0e04a15711f6ae820a2f09c664aac365028e19f596dab4418a48f9a43fbe957fd.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["frequency@4.csv", {url: new URL("./files/68bc38d87019d0b892e5745bfeb3b30dabb792f7a889e68622ba7ef38debb4213c0b3ab57c048ede1595b4fb7221deb7c467ca3e502a625b93e512275e27d2b1.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["classmass1@4.csv", {url: new URL("./files/4821116c50454587f62d936ff8ba5ebcca84f9d561e80a29384190a58c8c582435b8c71d768fea3a18e10041daabbef80a90e8c15fef99c534850a7e15728313.csv", import.meta.url), mimeType: "text/csv", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer()).define(["md"], _3);
  main.variable(observer()).define(["md"], _4);
  main.variable(observer()).define(["md"], _5);
  main.variable(observer("ludovicoBeeLfazbf70rscUnsplash")).define("ludovicoBeeLfazbf70rscUnsplash", ["FileAttachment"], _ludovicoBeeLfazbf70rscUnsplash);
  main.variable(observer()).define(["md"], _7);
  main.variable(observer()).define(["md"], _8);
  main.variable(observer()).define(["md"], _9);
  main.variable(observer()).define(["md"], _10);
  main.variable(observer()).define(["md"], _11);
  main.variable(observer()).define(["htl"], _12);
  main.variable(observer("viewof yearValue")).define("viewof yearValue", ["Scrubber","numbers"], _yearValue);
  main.variable(observer("yearValue")).define("yearValue", ["Generators", "viewof yearValue"], (G, _) => G.input(_));
  main.variable(observer()).define(["htl"], _14);
  main.variable(observer()).define(["md"], _15);
  main.variable(observer()).define(["md"], _16);
  main.variable(observer()).define(["md"], _17);
  main.variable(observer("wordCloud")).define("wordCloud", ["d3","d3Cloud","worddata","s","wc_data1","wc_data2","wc_data3","wrap","invalidation"], _wordCloud);
  main.variable(observer()).define(["md"], _19);
  main.variable(observer()).define(["md"], _20);
  main.variable(observer()).define(["md"], _21);
  main.variable(observer("chart")).define("chart", ["BubbleChart","df2"], _chart);
  main.variable(observer()).define(["md"], _23);
  main.variable(observer()).define(["md"], _24);
  main.variable(observer()).define(["md"], _25);
  main.variable(observer()).define(["Icicle","flare","width"], _26);
  main.variable(observer()).define(["md"], _27);
  main.variable(observer()).define(["Sunburst","flare","width"], _28);
  main.variable(observer()).define(["md"], _29);
  main.variable(observer()).define(["md"], _30);
  main.variable(observer()).define(["md"], _31);
  main.variable(observer()).define(["md"], _32);
  main.variable(observer("meteorite_landings_cleaned4")).define("meteorite_landings_cleaned4", ["__query","FileAttachment","invalidation"], _meteorite_landings_cleaned4);
  main.variable(observer("classmass14")).define("classmass14", ["__query","FileAttachment","invalidation"], _classmass14);
  main.variable(observer("frequency4")).define("frequency4", ["__query","FileAttachment","invalidation"], _frequency4);
  main.variable(observer("file")).define("file", ["FileAttachment"], _file);
  main.variable(observer("file2")).define("file2", ["FileAttachment"], _file2);
  main.variable(observer("file3")).define("file3", ["FileAttachment"], _file3);
  main.variable(observer("data")).define("data", ["d3","file"], _data);
  main.variable(observer("data2")).define("data2", ["d3","file2"], _data2);
  main.variable(observer("data3")).define("data3", ["d3","file3"], _data3);
  main.variable(observer()).define(["md"], _42);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  main.variable(observer("d3Cloud")).define("d3Cloud", ["require"], _d3Cloud);
  main.variable(observer("mapboxgl")).define("mapboxgl", ["require","html"], _mapboxgl);
  const child1 = runtime.module(define1);
  main.import("Tree", child1);
  const child2 = runtime.module(define2);
  main.import("Scrubber", child2);
  main.variable(observer("BubbleChart")).define("BubbleChart", ["d3","location"], _BubbleChart);
  main.variable(observer()).define(["md"], _49);
  main.variable(observer("df")).define("df", ["data"], _df);
  main.variable(observer("df2")).define("df2", ["data2"], _df2);
  main.variable(observer("df3")).define("df3", ["data3"], _df3);
  main.variable(observer("worddata")).define("worddata", ["df3","d3"], _worddata);
  main.variable(observer("wc_data1")).define("wc_data1", ["d3","FileAttachment"], _wc_data1);
  main.variable(observer("wc_data2")).define("wc_data2", ["d3","FileAttachment"], _wc_data2);
  main.variable(observer("wc_data3")).define("wc_data3", ["d3","FileAttachment"], _wc_data3);
  main.variable(observer("numbers")).define("numbers", _numbers);
  main.variable(observer("map")).define("map", ["mapboxgl"], _map);
  main.variable(observer("annotations")).define("annotations", ["d3","svg1"], _annotations);
  main.variable(observer("svg1")).define("svg1", ["map","d3","df"], _svg1);
  main.variable(observer("dots")).define("dots", ["d3","svg1"], _dots);
  main.variable(observer()).define(["md"], _62);
  main.variable(observer("project")).define("project", ["map","mapboxgl"], _project);
  main.variable(observer("wrap")).define("wrap", ["d3"], _wrap);
  main.variable(observer("highlight")).define("highlight", ["d3","svg1","html","dots"], _highlight);
  main.variable(observer("render")).define("render", ["dots","project","map"], _render);
  main.variable(observer("hover2")).define("hover2", ["d3","svg1","html","dots"], _hover2);
  main.variable(observer("s")).define("s", ["d3"], _s);
  main.variable(observer()).define(["dots","yearValue","d3","map"], _69);
  main.variable(observer()).define(["map","render"], _70);
  main.variable(observer()).define(["htl"], _71);
  main.variable(observer()).define(["html"], _72);
  main.variable(observer()).define(["htl"], _73);
  main.variable(observer()).define(["htl"], _74);
  main.variable(observer()).define(["html"], _75);
  const child3 = runtime.module(define3);
  main.import("Icicle", child3);
  const child4 = runtime.module(define4);
  main.import("Sunburst", child4);
  return main;
}
