import define1 from "./5432439324f2c616@268.js";
import define2 from "./450051d7f1174df8@254.js";
import define3 from "./5ee849a354de0839@68.js";
import define4 from "./99b2e903e7df3b0a@668.js";

function _1(md){return(
md`# Gift from the Universe - Meteorites that Landed on the Earth`
)}

function _2(md){return(
md`Category: Data Analysis/Explainer Project 

Yifan Shen`
)}

function _3(md){return(
md`---`
)}

function _4(md){return(
md`### Introduction
For centuries, people have been fascinated by meteorites due to their unique and otherworldly appearance, their rarity and value, as well as the intriguing stories behind their origins. However, it can be challenging to determine the exact number of meteorites that have landed on Earth and to gather specific details, such as their class and type.

Luckily, this dataset from Kaggle, [Meteorite Landings Dataset](https://www.kaggle.com/datasets/ulrikthygepedersen/meteorite-landings), keeps a record of every meteorite landed on Earth throughout history. Each record provides the year and geographical location of the landing/discovery (landing is noted as 'fell' and discovery is noted as 'found'), the type of meteorite, as well as its name, class, and mass.`
)}

function _ludovicoBeeLfazbf70rscUnsplash(FileAttachment){return(
FileAttachment("ludovico-bee-LFAzBf70rsc-unsplash.jpg").image()
)}

function _6(md){return(
md`---`
)}

function _7(md){return(
md`### Questions to explore
As an amateur astronomer, I hope to answer the following questions through data analysis and visualizations,
1. What is the spatial and temporal pattern of meteorite landing as well as meteorite discovery? 
2. Which continents and countries have the most meteorites?
3. What is the most common name of landed meteorites?`
)}

function _8(md){return(
md`---`
)}

function _9(md){return(
md`### Data cleaning
Data cleaning was carried out in R. I chose to drop 75 out of 45,716 (0.16%) records whose 'nametype' is 'relict' instead of 'valid'. Then, I kept the following features: name, id, class, mass, fall_found, year, latitude, and longitude. 'fall_found' records indicate whether the year associated with the record refers to when a meteorite fell or when it was found.

The mass from 82 records (0.18%) are missing and the coordinate information from 7310 records (16.0%) are missing. I choose to drop the records with missing mass value. For the records with missing coordinate information, I will use them in other visualizations that don't require coordinate information. I also checked that every entry in the 45,559 records is unique as each of them has a unique id. There are no outliers for mass and coordinate information. Initially, the name of the meteorite is composed of a name and digits. For the sake of simplicity, I used regular expressions to keep only the letters in the meteorite name. `
)}

function _10(md){return(
md`---`
)}

function _11(md){return(
md`## Meet meteorites by names`
)}

function _12(md){return(
md`Similar to how people often introduce themselves when meeting for the first time, let's get acquainted with the meteorites by learning their names!`
)}

function _13(md){return(
md`### Finding 1: Meteorites are most often named after geographical locations and people.  
Instruction: To view the three most common occurrences of each word, click on it.`
)}

function _wordCloud(d3,d3Cloud,worddata,s,number_data,wc_data1,wc_data2,wc_data3,wrap,invalidation)
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
          displaySelection.text(`Total appearance: ${number_data.get(e.text())}
                                 Appearance 1: ${wc_data1.get(e.text())}  
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


function _15(md){return(
md`The visualization presented contains the words that appear more than 10 times as the name of the meteorites in our database. The size of each word is directly proportional to its frequency of occurrence. This allows us to quickly see the most common words that appear in meteorite names. Feel free to explore the name that attracts you most by clicking on it!

One observation is that many meteorites are named after the geographical location of their discovery or landing. Many meteorites are named after mountains or other prominent geographical features near the place where they were found, such as Queen Alexandra Range, Allan Hills and Lewis Cliff. These geographical locations follow the naming conventions of 'people's name + geographic features (such as mountains, hills, and ranges)'. 

Another observation is that some meteorites are named after people. For example, Yamato meteorites are named after a Japanese general. This trend is not surprising, as people often play a key role in the discovery and study of meteorites. Scientists who discover new meteorites or people who make important contributions to historical events are sometimes honored by having a meteorite named after them.

Overall, the visualization gives us insights into some of the most common meteorite naming conventions. `
)}

function _16(md){return(
md`---`
)}

function _17(md){return(
md`## When and where have we seen?`
)}

function _18(md){return(
md`Once we've learned their names, let's delve deeper into the meteorites by discovering when and how they were first discovered. Optionally, you can also learn about their weight by moving the range bar.`
)}

function _19(md){return(
md`### Find 2: The temporal and spatial pattern of meteorite landing and meteorite discovery.
Instruction: Check the box to select meteorite landing/discovery. Move the range bar to adjust desired mass. Click the 'pause' button stop the animation. Zoom or move the map to see the patterns in the area you are interested in. Hover on the point to know more details about this meteorite. `
)}

function _20(htl){return(
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

function _22(htl){return(
htl.html`<div id='map' style='width: 90%; height: 35rem;'></div>`
)}

function _23(md){return(
md`The number of discovered meteorites is significantly higher than the number of landed meteorites. Compared to meteorites discovered, landed meteorites have a more limited spatial distribution. In other words, in the northern hemisphere, meteorites can be discovered (i.e. the found meteorites) in the regions further north than meteorites that fell on the Earth, such as in North Europe and Siberia. In the southern hemisphere, meteorites can be found in the regions further south than meteorites that fell on the Earth, such as in South Africa and Antarctica. One possible explanation for this is that there are fewer observers in the areas near the poles due to lower population densities and more extreme weather conditions. 

For meteorites discovered, prior to 1840, meteorites were scattered sporadically across North America and Europe, with a few being found on other continents. However, around 1840, there was a sudden surge in the number of meteorites discovered in North America. After the 1900s, Australia, Japan, Europe, and South Africa also witnessed a gradually increasing number of meteorite discoveries. From 1975 onwards, North Africa and Antarctica also began to report an increasing number of found meteorites. Surprisingly, there are several areas where clusters of meteorites have been found, including Southern California in the US, the central US, the Sahara Desert, Oman in the Middle East, and the southeastern part of Australia. This roughly follows the scientific development as well as regional exploitations in history. Moreover, one common characteristic of these areas are, they are all very dry throughout the year. 

With regards to fallen meteorites, there were some early records before the 1800s in West and South Europe. After the 1800s, North America, Japan, and India were among the first places to begin recording meteorites that had landed. Beginning in 1890, more and more places over the globe started to keep a record of fallen meteorites. All the continents except Antarctica have a moderate amount of landed meteorites. Additionally, there are clusters of fallen meteorites in the U.S., Western and Southern Europe, India, and Japan. This also makes sense that West and South Europe who had a more advanced scientific development in the late 18th century, particularly in the field of astronomy, were the first to record meteorites landing. As new technology was embraced, North America, Japan, and India followed suit in recording these occurrences, with scientific studies and researchers playing a significant role in driving these efforts forward.
In terms of meteorite mass, the majority of found or landed meteorites weigh less than 5000g. As the mass increases above 200000 g, the likelihood of finding a meteorite with a higher mass decreases dramatically.
`
)}

function _24(md){return(
md`---`
)}

function _25(md){return(
md`## Hey! How many friends do you have? `
)}

function _26(md){return(
md`After exploring the spatial and temporal patterns of the meteorites falling and discovery, let's have a deeper understanding by learning the total number of meteorites on each continent. `
)}

function _27(md){return(
md`### Finding 3: Antarctica has the greatest amount of meteorites, followed by Oman, the United States, and Libya. 
Instruction: Click the checkbox to inspect the continents of your interest. `
)}

function _selectedContinents(checkbox,continents){return(
checkbox({
  options: continents.map(c => {
    return {
      label: c.name,
      value: c.id,
      color: c.fill
    };
  }),
  value: continents.map(c => c.id)
})
)}

function _bubbleChart(d3)
{
  const svg = d3
    .create("svg")
    .attr('id', 'bubble-chart')
    .attr("viewBox", [0, 0, 800, 600])
    .attr("font-size", 12)
    .attr("font-weight", 'bold')
    .attr("font-family", "sans-serif")
    .attr("text-anchor", "middle");
  
  return svg.node();
}


function _30(md){return(
md`The visualization presented above illustrates the number of meteorites on each continent with an interactive bubble chart. Bubbles of different colors represent different continents, with each bubble representing a country. Bubbles with the same color are located on the same continent. The color usage here follows the color convention for the continents, for example, Oceania is colored in red while Antarctica is colored in light blue. The size of the bubble is directly proportional to the number of meteorites on this continent. This visualization aims at providing an interactive interface for the audience to compare and contrast different numbers of meteorites in each country. 

Surprisingly, Antarctica has the most number of meteorites when considered as a country, with around 22,000 meteorites. This also makes sense as it is the fifth largest continent and is considered as a country alone. After we unchecked Antarctica, there are another three countries with a much larger number of meteorites. They are Oman with around 3,000 meteorites, the United States with around 1,600 meteorites, and Libya with 1,500 meteorites. Some other countries with considerable meteorites are Algeria, Australia, and Chile. 

Surprised at the findings, I decided to delve further into why those countries with a relatively small area can have such a large amount of meteorites. From one [passage at livescience](https://www.livescience.com/3613-searching-meteorites-deserts-oman.html), I found a reasonable explanation: Stones in deserts are typically well-preserved due to the dry conditions, and the absence of rainfall reduces the likelihood of erosion or covered by sediment. Therefore, the environmental condition makes it much easier for meteorites falling there to preserve for a long period of time. Similarly, the freezing desert of Antarctica has been one of the richest sources of meteorites.`
)}

function _31(md){return(
md`---`
)}

function _32(md){return(
md`## After all, our destinies are intertwined. `
)}

function _33(md){return(
md`Now that we have acquired an understanding of both the temporal and spatial connections between the discovery and landing of the meteorites, as well as the way in which they are dispersed across the seven continents, let's integrate all of the information together!`
)}

function _34(md){return(
md`### Finding 4: Most of the meteorites are found after 1950 in Antarctica, Asia, and Africa; they have varying weights. 
Instruction: choose how to color the link with the following selection.`
)}

function _linkColor(Inputs,URLSearchParams,html){return(
Inputs.select(new Map([
  ["static", "#aaa"],
  ["source-target", "source-target"],
  ["source", "source"],
  ["target", "target"],
]), {
  value: new URLSearchParams(html`<a href>`.search).get("color") || "source-target",
  label: "Link color"
})
)}

function _chart(SankeyChart,df5,linkColor,d3,width){return(
SankeyChart({
  links: df5
}, {
  nodeGroup: d => d.id.split(/\W/)[0], // take first word for color
  linkColor, // e.g., "source" or "target"; set by input above
  format: (f => d => `${f(d)} TWh`)(d3.format(",.1~f")),
  width,
  height: 550
})
)}

function _37(md){return(
md`I use the above Sankey diagram to illustrate the relationship between year of discovery by category, discovery status (found or fell), location by continent, and mass by category. One advantage is that it becomes much easier and intuitive to inspect the relationship between these topics and the flows between the categories. 

By examining the leftmost column, it becomes evident that the occurrence of meteorite discoveries has increased considerably, with the majority of findings being made after 1950. Prior to 1850, fell meteorites comprised a larger percentage compared to found meteorites, but between 1850 and 1900, the numbers of fell and found meteorites were approximately equal. Subsequently, the proportion of found meteorites began to exceed that of the fallen ones.

Moving from the fell/found column to the continent columns, several observations can be made. Firstly, there were no fell meteorites discovered in Antarctica. Secondly, there was a higher proportion of meteorites that fell in Europe than those that were found in Europe. Thirdly, with the exception of Europe, the majority of discovered meteorites on every continent were found rather than fell.

Concerning the mass of meteorites by continent, it can be observed that (1) in Antarctica, approximately 50% of the meteorites weigh between 10g to 100g, followed by those weighing between 1g to 10g, and (2) in Africa, Asia, America, and Europe, the majority of meteorites weigh greater than 100g.`
)}

function _38(md){return(
md`---`
)}

function _39(md){return(
md`### Reference
Dataset:
- https://www.kaggle.com/datasets/ulrikthygepedersen/meteorite-landings
  
D3 library: 
- https://github.com/d3/d3/wiki/Gallery

Word cloud
- https://observablehq.com/@d3/word-cloud
- https://observablehq.com/@panningforbacon/word-cloud

Mapbox: 
- https://franksh.com/posts/d3-mapboxgl/
- https://observablehq.com/@pfoser/using-mapbox-gl-js
- https://observablehq.com/@edhschen/mapbox-d3-guide

Bubblechart:
- https://observablehq.com/@d3/bubble-chart
- https://observablehq.com/@unkleho/covid-19-bubble-chart-with-d3-render

Sankey Diagram: 
- https://observablehq.com/@d3/sankey

Image:
- unsplash.com`
)}

function _40(md){return(
md`---`
)}

function _41(md){return(
md`### Code`
)}

function _meteorite_landings_cleaned8(__query,FileAttachment,invalidation){return(
__query(FileAttachment("Meteorite_Landings_Cleaned@8.csv"),{from:{table:"Meteorite_Landings_Cleaned"},sort:[],slice:{to:null,from:null},filter:[],select:{columns:["name","class","mass","fall_found","year","lat","long","continent","country","iso3","masscategory"]}},invalidation)
)}

function _classmass14(__query,FileAttachment,invalidation){return(
__query(FileAttachment("classmass1@4.csv"),{from:{table:"classmass1"},sort:[],slice:{to:null,from:null},filter:[],select:{columns:null}},invalidation)
)}

function _frequency4(__query,FileAttachment,invalidation){return(
__query(FileAttachment("frequency@4.csv"),{from:{table:"frequency"},sort:[],slice:{to:null,from:null},filter:[],select:{columns:["text","value","text1","text2","text3"]}},invalidation)
)}

function _meteorite_landings_count1(__query,FileAttachment,invalidation){return(
__query(FileAttachment("Meteorite_Landings_Count@1.csv"),{from:{table:"Meteorite_Landings_Count"},sort:[],slice:{to:null,from:null},filter:[],select:{columns:null}},invalidation)
)}

function _meteorite_landings_sankey1(__query,FileAttachment,invalidation){return(
__query(FileAttachment("Meteorite_Landings_Sankey@1.csv"),{from:{table:"Meteorite_Landings_Sankey"},sort:[],slice:{to:null,from:null},filter:[],select:{columns:null}},invalidation)
)}

function _file(FileAttachment){return(
FileAttachment("Meteorite_Landings_Cleaned@8.csv")
)}

function _file2(FileAttachment){return(
FileAttachment("classmass1@4.csv")
)}

function _file3(FileAttachment){return(
FileAttachment("frequency@4.csv")
)}

function _file4(FileAttachment){return(
FileAttachment("Meteorite_Landings_Count@1.csv")
)}

function _file5(FileAttachment){return(
FileAttachment("Meteorite_Landings_Sankey@1.csv")
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

async function _data4(d3,file4){return(
d3.csvParse(await file4.text())
)}

async function _data5(d3,file5){return(
d3.csvParse(await file5.text())
)}

function _57(md){return(
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


function _d3Render(require){return(
require('d3-render@v0.2.4')
)}

function _df(data){return(
data.map((y) => {
  return {
        name:y.name,
         class: y.class,
         mass_g: +y.mass,
         coordinates:[+y.lat+Math.random()*0.01, +y.long+Math.random()*0.01],
         fall_found:y.fall_found,
         year: y.year,
        continent: y.continent,
        country: y.country,
        iso: y.iso3
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

function _df4(data4){return(
data4.map((y) => {
  return {
          count: +y.cnt,
        continent: y.continent,
        country: y.country,
        iso: y.iso3
         }
})
)}

function _df5(data5){return(
data5.map((y) => {
  return {
           source: y.source,
           target: y.target,
           value: +y.value
         }
})
)}

function _71(md){return(
md`##### Word cloud`
)}

function _worddata(df3,d3){return(
df3.slice().sort((a, b) => d3.descending(a.value, b.value))
)}

async function _number_data(d3,FileAttachment){return(
Object.assign(new Map(d3.csvParse(await FileAttachment("frequency@4.csv").text(), ({text, value}) => [text, value])), {title: "Number of Reports"})
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

function _s(d3){return(
d3.scaleSqrt()
  .domain([1, 6776])
  .range([5, 40])
)}

function _80(md){return(
md`##### Map implementation`
)}

function _map(mapboxgl)
{
  let map = new mapboxgl.Map({
    container: 'map',
    center: [0, 0],
    zoom: 0.75,
    style: "mapbox://styles/mapbox/streets-v10",
    maxBounds: [
      [-179.9, -89.9],
      [179.9, 89.9]
    ]
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

function _project(map,mapboxgl){return(
function project(lng,lat) {
  return map.project(new mapboxgl.LngLat(lng, lat));
}
)}

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
                                   .filter(([key, value]) => key !== 'id')
                                   .filter(([key, value]) => key !== 'masscategory')
                                   .filter(([key, value]) => key !== 'iso')
                                     
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


function _89(dots,yearValue,d3,map)
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
                                   .filter(([key, value]) => key !== 'id')
                                   .filter(([key, value]) => key !== 'masscategory')
                                   .filter(([key, value]) => key !== 'iso')   
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
                                   .filter(([key, value]) => key !== 'id')
                                   .filter(([key, value]) => key !== 'masscategory')
                                   .filter(([key, value]) => key !== 'iso')
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
                                   .filter(([key, value]) => key !== 'id')
                                   .filter(([key, value]) => key !== 'masscategory')
                                   .filter(([key, value]) => key !== 'iso')
                                     
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
                                   .filter(([key, value]) => key !== 'id')
                                   .filter(([key, value]) => key !== 'masscategory')
                                   .filter(([key, value]) => key !== 'iso')
                                     
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


function _90(map,render)
{
  map.on("viewreset", render);
  map.on("move", render);
  map.on("moveend", render);
  map.on("zoomend", render);
  render();
}


function _91(md){return(
md`##### Bubble chart`
)}

function _data_bubble(getDataBy,selectedContinents){return(
getDataBy({
  selectedContinents
})
)}

function _countries(){return(
[
  {
    continentCode: 'AT',
    iso2: 'AT',
    iso3: 'ATA',
    name: 'Antarctica'
  },
  {
    continentCode: 'AS',
    iso2: 'AF',
    iso3: 'AFG',
    name: 'Afghanistan'
  },
  {
    continentCode: 'EU',
    iso2: 'AL',
    iso3: 'ALB',
    name: 'Albania'
  },
  {
    continentCode: 'Antarctica',
    iso2: 'AQ',
    iso3: 'ATA',
    name: 'Antarctica (the territory South of 60 deg S)'
  },
  {
    continentCode: 'AF',
    iso2: 'DZ',
    iso3: 'DZA',
    name: 'Algeria'
  },
  {
    continentCode: 'OC',
    iso2: 'AS',
    iso3: 'ASM',
    name: 'American Samoa'
  },
  {
    continentCode: 'EU',
    iso2: 'AD',
    iso3: 'AND',
    name: 'Andorra'
  },
  {
    continentCode: 'AF',
    iso2: 'AO',
    iso3: 'AGO',
    name: 'Angola'
  },
  {
    continentCode: 'NA',
    iso2: 'AG',
    iso3: 'ATG',
    name: 'Antigua and Barbuda'
  },
  {
    continentCode: 'EU',
    iso2: 'AZ',
    iso3: 'AZE',
    name: 'Azerbaijan'
  },
  {
    continentCode: 'AS',
    iso2: 'AZ',
    iso3: 'AZE',
    name: 'Azerbaijan'
  },
  {
    continentCode: 'SA',
    iso2: 'AR',
    iso3: 'ARG',
    name: 'Argentina'
  },
  {
    continentCode: 'OC',
    iso2: 'AU',
    iso3: 'AUS',
    name: 'Australia'
  },
  {
    continentCode: 'EU',
    iso2: 'AT',
    iso3: 'AUT',
    name: 'Austria'
  },
  {
    continentCode: 'NA',
    iso2: 'BS',
    iso3: 'BHS',
    name: 'Bahamas the'
  },
  {
    continentCode: 'AS',
    iso2: 'BH',
    iso3: 'BHR',
    name: 'Bahrain'
  },
  {
    continentCode: 'AS',
    iso2: 'BD',
    iso3: 'BGD',
    name: 'Bangladesh'
  },
  {
    continentCode: 'EU',
    iso2: 'AM',
    iso3: 'ARM',
    name: 'Armenia'
  },
  {
    continentCode: 'AS',
    iso2: 'AM',
    iso3: 'ARM',
    name: 'Armenia'
  },
  {
    continentCode: 'NA',
    iso2: 'BB',
    iso3: 'BRB',
    name: 'Barbados'
  },
  {
    continentCode: 'EU',
    iso2: 'BE',
    iso3: 'BEL',
    name: 'Belgium'
  },
  {
    continentCode: 'NA',
    iso2: 'BM',
    iso3: 'BMU',
    name: 'Bermuda'
  },
  {
    continentCode: 'AS',
    iso2: 'BT',
    iso3: 'BTN',
    name: 'Bhutan'
  },
  {
    continentCode: 'SA',
    iso2: 'BO',
    iso3: 'BOL',
    name: 'Bolivia'
  },
  {
    continentCode: 'EU',
    iso2: 'BA',
    iso3: 'BIH',
    name: 'Bosnia and Herzegovina'
  },
  {
    continentCode: 'AF',
    iso2: 'BW',
    iso3: 'BWA',
    name: 'Botswana'
  },
  {
    continentCode: 'Antarctica',
    iso2: 'BV',
    iso3: 'BVT',
    name: 'Bouvet Island (Bouvetoya)'
  },
  {
    continentCode: 'SA',
    iso2: 'BR',
    iso3: 'BRA',
    name: 'Brazil'
  },
  {
    continentCode: 'NA',
    iso2: 'BZ',
    iso3: 'BLZ',
    name: 'Belize'
  },
  {
    continentCode: 'AS',
    iso2: 'IO',
    iso3: 'IOT',
    name: 'British Indian Ocean Territory (Chagos Archipelago)'
  },
  {
    continentCode: 'OC',
    iso2: 'SB',
    iso3: 'SLB',
    name: 'Solomon Islands'
  },
  {
    continentCode: 'NA',
    iso2: 'VG',
    iso3: 'VGB',
    name: 'British Virgin Islands'
  },
  {
    continentCode: 'AS',
    iso2: 'BN',
    iso3: 'BRN',
    name: 'Brunei Darussalam'
  },
  {
    continentCode: 'EU',
    iso2: 'BG',
    iso3: 'BGR',
    name: 'Bulgaria'
  },
  {
    continentCode: 'AS',
    iso2: 'MM',
    iso3: 'MMR',
    name: 'Myanmar'
  },
  {
    continentCode: 'AF',
    iso2: 'BI',
    iso3: 'BDI',
    name: 'Burundi'
  },
  {
    continentCode: 'EU',
    iso2: 'BY',
    iso3: 'BLR',
    name: 'Belarus'
  },
  {
    continentCode: 'AS',
    iso2: 'KH',
    iso3: 'KHM',
    name: 'Cambodia'
  },
  {
    continentCode: 'AF',
    iso2: 'CM',
    iso3: 'CMR',
    name: 'Cameroon'
  },
  {
    continentCode: 'NA',
    iso2: 'CA',
    iso3: 'CAN',
    name: 'Canada'
  },
  {
    continentCode: 'AF',
    iso2: 'CV',
    iso3: 'CPV',
    name: 'Cape Verde'
  },
  {
    continentCode: 'NA',
    iso2: 'KY',
    iso3: 'CYM',
    name: 'Cayman Islands'
  },
  {
    continentCode: 'AF',
    iso2: 'CF',
    iso3: 'CAF',
    name: 'Central African Republic'
  },
  {
    continentCode: 'AS',
    iso2: 'LK',
    iso3: 'LKA',
    name: 'Sri Lanka'
  },
  {
    continentCode: 'AF',
    iso2: 'TD',
    iso3: 'TCD',
    name: 'Chad'
  },
  {
    continentCode: 'SA',
    iso2: 'CL',
    iso3: 'CHL',
    name: 'Chile'
  },
  {
    continentCode: 'AS',
    iso2: 'CN',
    iso3: 'CHN',
    name: 'China'
  },
  {
    continentCode: 'AS',
    iso2: 'TW',
    iso3: 'TWN',
    name: 'Taiwan'
  },
  {
    continentCode: 'AS',
    iso2: 'CX',
    iso3: 'CXR',
    name: 'Christmas Island'
  },
  {
    continentCode: 'AS',
    iso2: 'CC',
    iso3: 'CCK',
    name: 'Cocos (Keeling) Islands'
  },
  {
    continentCode: 'SA',
    iso2: 'CO',
    iso3: 'COL',
    name: 'Colombia'
  },
  {
    continentCode: 'AF',
    iso2: 'KM',
    iso3: 'COM',
    name: 'Comoros'
  },
  {
    continentCode: 'AF',
    iso2: 'YT',
    iso3: 'MYT',
    name: 'Mayotte'
  },
  {
    continentCode: 'AF',
    iso2: 'CG',
    iso3: 'COG',
    name: 'Congo the'
  },
  {
    continentCode: 'AF',
    iso2: 'CD',
    iso3: 'COD',
    name: 'Congo'
  },
  {
    continentCode: 'OC',
    iso2: 'CK',
    iso3: 'COK',
    name: 'Cook Islands'
  },
  {
    continentCode: 'NA',
    iso2: 'CR',
    iso3: 'CRI',
    name: 'Costa Rica'
  },
  {
    continentCode: 'EU',
    iso2: 'HR',
    iso3: 'HRV',
    name: 'Croatia'
  },
  {
    continentCode: 'NA',
    iso2: 'CU',
    iso3: 'CUB',
    name: 'Cuba'
  },
  {
    continentCode: 'EU',
    iso2: 'CY',
    iso3: 'CYP',
    name: 'Cyprus'
  },
  {
    continentCode: 'AS',
    iso2: 'CY',
    iso3: 'CYP',
    name: 'Cyprus'
  },
  {
    continentCode: 'EU',
    iso2: 'CZ',
    iso3: 'CZE',
    name: 'Czech Republic'
  },
  {
    continentCode: 'AF',
    iso2: 'BJ',
    iso3: 'BEN',
    name: 'Benin'
  },
  {
    continentCode: 'EU',
    iso2: 'DK',
    iso3: 'DNK',
    name: 'Denmark'
  },
  {
    continentCode: 'NA',
    iso2: 'DM',
    iso3: 'DMA',
    name: 'Dominica'
  },
  {
    continentCode: 'NA',
    iso2: 'DO',
    iso3: 'DOM',
    name: 'Dominican Republic'
  },
  {
    continentCode: 'SA',
    iso2: 'EC',
    iso3: 'ECU',
    name: 'Ecuador'
  },
  {
    continentCode: 'NA',
    iso2: 'SV',
    iso3: 'SLV',
    name: 'El Salvador'
  },
  {
    continentCode: 'AF',
    iso2: 'GQ',
    iso3: 'GNQ',
    name: 'Equatorial Guinea'
  },
  {
    continentCode: 'AF',
    iso2: 'ET',
    iso3: 'ETH',
    name: 'Ethiopia'
  },
  {
    continentCode: 'AF',
    iso2: 'ER',
    iso3: 'ERI',
    name: 'Eritrea'
  },
  {
    continentCode: 'EU',
    iso2: 'EE',
    iso3: 'EST',
    name: 'Estonia'
  },
  {
    continentCode: 'EU',
    iso2: 'FO',
    iso3: 'FRO',
    name: 'Faroe Islands'
  },
  {
    continentCode: 'SA',
    iso2: 'FK',
    iso3: 'FLK',
    name: 'Falkland Islands (Malvinas)'
  },
  {
    continentCode: 'Antarctica',
    iso2: 'GS',
    iso3: 'SGS',
    name: 'South Georgia and the South Sandwich Islands'
  },
  {
    continentCode: 'OC',
    iso2: 'FJ',
    iso3: 'FJI',
    name: 'Fiji'
  },
  {
    continentCode: 'EU',
    iso2: 'FI',
    iso3: 'FIN',
    name: 'Finland'
  },
  {
    continentCode: 'EU',
    iso2: 'AX',
    iso3: 'ALA',
    name: 'Åland Islands'
  },
  {
    continentCode: 'EU',
    iso2: 'FR',
    iso3: 'FRA',
    name: 'France'
  },
  {
    continentCode: 'SA',
    iso2: 'GF',
    iso3: 'GUF',
    name: 'French Guiana'
  },
  {
    continentCode: 'OC',
    iso2: 'PF',
    iso3: 'PYF',
    name: 'French Polynesia'
  },
  {
    continentCode: 'Antarctica',
    iso2: 'TF',
    iso3: 'ATF',
    name: 'French Southern Territories'
  },
  {
    continentCode: 'AF',
    iso2: 'DJ',
    iso3: 'DJI',
    name: 'Djibouti'
  },
  {
    continentCode: 'AF',
    iso2: 'GA',
    iso3: 'GAB',
    name: 'Gabon'
  },
  {
    continentCode: 'EU',
    iso2: 'GE',
    iso3: 'GEO',
    name: 'Georgia'
  },
  {
    continentCode: 'AS',
    iso2: 'GE',
    iso3: 'GEO',
    name: 'Georgia'
  },
  {
    continentCode: 'AF',
    iso2: 'GM',
    iso3: 'GMB',
    name: 'Gambia'
  },
  {
    continentCode: 'AS',
    iso2: 'PS',
    iso3: 'PSE',
    name: 'Palestinian Territory'
  },
  {
    continentCode: 'EU',
    iso2: 'DE',
    iso3: 'DEU',
    name: 'Germany'
  },
  {
    continentCode: 'AF',
    iso2: 'GH',
    iso3: 'GHA',
    name: 'Ghana'
  },
  {
    continentCode: 'EU',
    iso2: 'GI',
    iso3: 'GIB',
    name: 'Gibraltar'
  },
  {
    continentCode: 'OC',
    iso2: 'KI',
    iso3: 'KIR',
    name: 'Kiribati'
  },
  {
    continentCode: 'EU',
    iso2: 'GR',
    iso3: 'GRC',
    name: 'Greece'
  },
  {
    continentCode: 'NA',
    iso2: 'GL',
    iso3: 'GRL',
    name: 'Greenland'
  },
  {
    continentCode: 'NA',
    iso2: 'GD',
    iso3: 'GRD',
    name: 'Grenada'
  },
  {
    continentCode: 'NA',
    iso2: 'GP',
    iso3: 'GLP',
    name: 'Guadeloupe'
  },
  {
    continentCode: 'OC',
    iso2: 'GU',
    iso3: 'GUM',
    name: 'Guam'
  },
  {
    continentCode: 'NA',
    iso2: 'GT',
    iso3: 'GTM',
    name: 'Guatemala'
  },
  {
    continentCode: 'AF',
    iso2: 'GN',
    iso3: 'GIN',
    name: 'Guinea'
  },
  {
    continentCode: 'SA',
    iso2: 'GY',
    iso3: 'GUY',
    name: 'Guyana'
  },
  {
    continentCode: 'NA',
    iso2: 'HT',
    iso3: 'HTI',
    name: 'Haiti'
  },
  {
    continentCode: 'Antarctica',
    iso2: 'HM',
    iso3: 'HMD',
    name: 'Heard Island and McDonald Islands'
  },
  {
    continentCode: 'EU',
    iso2: 'VA',
    iso3: 'VAT',
    name: 'Holy See (Vatican City State)'
  },
  {
    continentCode: 'NA',
    iso2: 'HN',
    iso3: 'HND',
    name: 'Honduras'
  },
  {
    continentCode: 'AS',
    iso2: 'HK',
    iso3: 'HKG',
    name: 'Hong Kong'
  },
  {
    continentCode: 'EU',
    iso2: 'HU',
    iso3: 'HUN',
    name: 'Hungary'
  },
  {
    continentCode: 'EU',
    iso2: 'IS',
    iso3: 'ISL',
    name: 'Iceland'
  },
  {
    continentCode: 'AS',
    iso2: 'IN',
    iso3: 'IND',
    name: 'India'
  },
  {
    continentCode: 'AS',
    iso2: 'ID',
    iso3: 'IDN',
    name: 'Indonesia'
  },
  {
    continentCode: 'AS',
    iso2: 'IR',
    iso3: 'IRN',
    name: 'Iran'
  },
  {
    continentCode: 'AS',
    iso2: 'IQ',
    iso3: 'IRQ',
    name: 'Iraq'
  },
  {
    continentCode: 'EU',
    iso2: 'IE',
    iso3: 'IRL',
    name: 'Ireland'
  },
  {
    continentCode: 'AS',
    iso2: 'IL',
    iso3: 'ISR',
    name: 'Israel'
  },
  {
    continentCode: 'EU',
    iso2: 'IT',
    iso3: 'ITA',
    name: 'Italy'
  },
  {
    continentCode: 'AF',
    iso2: 'CI',
    iso3: 'CIV',
    name: "Cote d'Ivoire"
  },
  {
    continentCode: 'NA',
    iso2: 'JM',
    iso3: 'JAM',
    name: 'Jamaica'
  },
  {
    continentCode: 'AS',
    iso2: 'JP',
    iso3: 'JPN',
    name: 'Japan'
  },
  {
    continentCode: 'EU',
    iso2: 'KZ',
    iso3: 'KAZ',
    name: 'Kazakhstan'
  },
  {
    continentCode: 'AS',
    iso2: 'KZ',
    iso3: 'KAZ',
    name: 'Kazakhstan'
  },
  {
    continentCode: 'AS',
    iso2: 'JO',
    iso3: 'JOR',
    name: 'Jordan'
  },
  {
    continentCode: 'AF',
    iso2: 'KE',
    iso3: 'KEN',
    name: 'Kenya'
  },
  {
    continentCode: 'AS',
    iso2: 'KP',
    iso3: 'PRK',
    name: 'Korea'
  },
  {
    continentCode: 'AS',
    iso2: 'KR',
    iso3: 'KOR',
    name: 'Korea'
  },
  {
    continentCode: 'AS',
    iso2: 'KW',
    iso3: 'KWT',
    name: 'Kuwait'
  },
  {
    continentCode: 'AS',
    iso2: 'KG',
    iso3: 'KGZ',
    name: 'Kyrgyz Republic'
  },
  {
    continentCode: 'AS',
    iso2: 'LA',
    iso3: 'LAO',
    name: 'Laos'
  },
  {
    continentCode: 'AS',
    iso2: 'LB',
    iso3: 'LBN',
    name: 'Lebanon'
  },
  {
    continentCode: 'AF',
    iso2: 'LS',
    iso3: 'LSO',
    name: 'Lesotho'
  },
  {
    continentCode: 'EU',
    iso2: 'LV',
    iso3: 'LVA',
    name: 'Latvia'
  },
  {
    continentCode: 'AF',
    iso2: 'LR',
    iso3: 'LBR',
    name: 'Liberia'
  },
  {
    continentCode: 'AF',
    iso2: 'LY',
    iso3: 'LBY',
    name: 'Libya'
  },
  {
    continentCode: 'EU',
    iso2: 'LI',
    iso3: 'LIE',
    name: 'Liechtenstein'
  },
  {
    continentCode: 'EU',
    iso2: 'LT',
    iso3: 'LTU',
    name: 'Lithuania'
  },
  {
    continentCode: 'EU',
    iso2: 'LU',
    iso3: 'LUX',
    name: 'Luxembourg'
  },
  {
    continentCode: 'AS',
    iso2: 'MO',
    iso3: 'MAC',
    name: 'Macao'
  },
  {
    continentCode: 'AF',
    iso2: 'MG',
    iso3: 'MDG',
    name: 'Madagascar'
  },
  {
    continentCode: 'AF',
    iso2: 'MW',
    iso3: 'MWI',
    name: 'Malawi'
  },
  {
    continentCode: 'AS',
    iso2: 'MY',
    iso3: 'MYS',
    name: 'Malaysia'
  },
  {
    continentCode: 'AS',
    iso2: 'MV',
    iso3: 'MDV',
    name: 'Maldives'
  },
  {
    continentCode: 'AF',
    iso2: 'ML',
    iso3: 'MLI',
    name: 'Mali'
  },
  {
    continentCode: 'EU',
    iso2: 'MT',
    iso3: 'MLT',
    name: 'Malta'
  },
  {
    continentCode: 'NA',
    iso2: 'MQ',
    iso3: 'MTQ',
    name: 'Martinique'
  },
  {
    continentCode: 'AF',
    iso2: 'MR',
    iso3: 'MRT',
    name: 'Mauritania'
  },
  {
    continentCode: 'AF',
    iso2: 'MU',
    iso3: 'MUS',
    name: 'Mauritius'
  },
  {
    continentCode: 'NA',
    iso2: 'MX',
    iso3: 'MEX',
    name: 'Mexico'
  },
  {
    continentCode: 'EU',
    iso2: 'MC',
    iso3: 'MCO',
    name: 'Monaco'
  },
  {
    continentCode: 'AS',
    iso2: 'MN',
    iso3: 'MNG',
    name: 'Mongolia'
  },
  {
    continentCode: 'EU',
    iso2: 'MD',
    iso3: 'MDA',
    name: 'Moldova'
  },
  {
    continentCode: 'EU',
    iso2: 'ME',
    iso3: 'MNE',
    name: 'Montenegro'
  },
  {
    continentCode: 'NA',
    iso2: 'MS',
    iso3: 'MSR',
    name: 'Montserrat'
  },
  {
    continentCode: 'AF',
    iso2: 'MA',
    iso3: 'MAR',
    name: 'Morocco'
  },
  {
    continentCode: 'AF',
    iso2: 'MZ',
    iso3: 'MOZ',
    name: 'Mozambique'
  },
  {
    continentCode: 'AS',
    iso2: 'OM',
    iso3: 'OMN',
    name: 'Oman'
  },
  {
    continentCode: 'AF',
    iso2: 'NA',
    iso3: 'NAM',
    name: 'Namibia'
  },
  {
    continentCode: 'OC',
    iso2: 'NR',
    iso3: 'NRU',
    name: 'Nauru'
  },
  {
    continentCode: 'AS',
    iso2: 'NP',
    iso3: 'NPL',
    name: 'Nepal'
  },
  {
    continentCode: 'EU',
    iso2: 'NL',
    iso3: 'NLD',
    name: 'Netherlands'
  },
  {
    continentCode: 'NA',
    iso2: 'AN',
    iso3: 'ANT',
    name: 'Netherlands Antilles'
  },
  {
    continentCode: 'NA',
    iso2: 'CW',
    iso3: 'CUW',
    name: 'Curaçao'
  },
  {
    continentCode: 'NA',
    iso2: 'AW',
    iso3: 'ABW',
    name: 'Aruba'
  },
  {
    continentCode: 'NA',
    iso2: 'SX',
    iso3: 'SXM',
    name: 'Sint Maarten (Netherlands)'
  },
  {
    continentCode: 'NA',
    iso2: 'BQ',
    iso3: 'BES',
    name: 'Bonaire, Sint Eustatius and Saba'
  },
  {
    continentCode: 'OC',
    iso2: 'NC',
    iso3: 'NCL',
    name: 'New Caledonia'
  },
  {
    continentCode: 'OC',
    iso2: 'VU',
    iso3: 'VUT',
    name: 'Vanuatu'
  },
  {
    continentCode: 'OC',
    iso2: 'NZ',
    iso3: 'NZL',
    name: 'New Zealand'
  },
  {
    continentCode: 'NA',
    iso2: 'NI',
    iso3: 'NIC',
    name: 'Nicaragua'
  },
  {
    continentCode: 'AF',
    iso2: 'NE',
    iso3: 'NER',
    name: 'Niger'
  },
  {
    continentCode: 'AF',
    iso2: 'NG',
    iso3: 'NGA',
    name: 'Nigeria'
  },
  {
    continentCode: 'OC',
    iso2: 'NU',
    iso3: 'NIU',
    name: 'Niue'
  },
  {
    continentCode: 'OC',
    iso2: 'NF',
    iso3: 'NFK',
    name: 'Norfolk Island'
  },
  {
    continentCode: 'EU',
    iso2: 'NO',
    iso3: 'NOR',
    name: 'Norway'
  },
  {
    continentCode: 'OC',
    iso2: 'MP',
    iso3: 'MNP',
    name: 'Northern Mariana Islands'
  },
  {
    continentCode: 'OC',
    iso2: 'UM',
    iso3: 'UMI',
    name: 'United States Minor Outlying Islands'
  },
  {
    continentCode: 'NA',
    iso2: 'UM',
    iso3: 'UMI',
    name: 'United States Minor Outlying Islands'
  },
  {
    continentCode: 'OC',
    iso2: 'FM',
    iso3: 'FSM',
    name: 'Micronesia'
  },
  {
    continentCode: 'OC',
    iso2: 'MH',
    iso3: 'MHL',
    name: 'Marshall Islands'
  },
  {
    continentCode: 'OC',
    iso2: 'PW',
    iso3: 'PLW',
    name: 'Palau'
  },
  {
    continentCode: 'AS',
    iso2: 'PK',
    iso3: 'PAK',
    name: 'Pakistan'
  },
  {
    continentCode: 'NA',
    iso2: 'PA',
    iso3: 'PAN',
    name: 'Panama'
  },
  {
    continentCode: 'OC',
    iso2: 'PG',
    iso3: 'PNG',
    name: 'Papua New Guinea'
  },
  {
    continentCode: 'SA',
    iso2: 'PY',
    iso3: 'PRY',
    name: 'Paraguay'
  },
  {
    continentCode: 'SA',
    iso2: 'PE',
    iso3: 'PER',
    name: 'Peru'
  },
  {
    continentCode: 'AS',
    iso2: 'PH',
    iso3: 'PHL',
    name: 'Philippines'
  },
  {
    continentCode: 'OC',
    iso2: 'PN',
    iso3: 'PCN',
    name: 'Pitcairn Islands'
  },
  {
    continentCode: 'EU',
    iso2: 'PL',
    iso3: 'POL',
    name: 'Poland'
  },
  {
    continentCode: 'EU',
    iso2: 'PT',
    iso3: 'PRT',
    name: 'Portugal'
  },
  {
    continentCode: 'AF',
    iso2: 'GW',
    iso3: 'GNB',
    name: 'Guinea-Bissau'
  },
  {
    continentCode: 'AS',
    iso2: 'TL',
    iso3: 'TLS',
    name: 'Timor-Leste'
  },
  {
    continentCode: 'NA',
    iso2: 'PR',
    iso3: 'PRI',
    name: 'Puerto Rico'
  },
  {
    continentCode: 'AS',
    iso2: 'QA',
    iso3: 'QAT',
    name: 'Qatar'
  },
  {
    continentCode: 'AF',
    iso2: 'RE',
    iso3: 'REU',
    name: 'Reunion'
  },
  {
    continentCode: 'EU',
    iso2: 'RO',
    iso3: 'ROU',
    name: 'Romania'
  },
  {
    continentCode: 'EU',
    iso2: 'RU',
    iso3: 'RUS',
    name: 'Russia'
  },
  // {
  // 	continentCode: 'AS',
  // 	iso2: 'RU',
  // 	iso3: 'RUS',
  // 	name: 'Russian Federation',
  // },
  {
    continentCode: 'AF',
    iso2: 'RW',
    iso3: 'RWA',
    name: 'Rwanda'
  },
  {
    continentCode: 'NA',
    iso2: 'BL',
    iso3: 'BLM',
    name: 'Saint Barthelemy'
  },
  {
    continentCode: 'AF',
    iso2: 'SH',
    iso3: 'SHN',
    name: 'Saint Helena'
  },
  {
    continentCode: 'NA',
    iso2: 'KN',
    iso3: 'KNA',
    name: 'Saint Kitts and Nevis'
  },
  {
    continentCode: 'NA',
    iso2: 'AI',
    iso3: 'AIA',
    name: 'Anguilla'
  },
  {
    continentCode: 'NA',
    iso2: 'LC',
    iso3: 'LCA',
    name: 'Saint Lucia'
  },
  {
    continentCode: 'NA',
    iso2: 'MF',
    iso3: 'MAF',
    name: 'Saint Martin'
  },
  {
    continentCode: 'NA',
    iso2: 'PM',
    iso3: 'SPM',
    name: 'Saint Pierre and Miquelon'
  },
  {
    continentCode: 'NA',
    iso2: 'VC',
    iso3: 'VCT',
    name: 'Saint Vincent and the Grenadines'
  },
  {
    continentCode: 'EU',
    iso2: 'SM',
    iso3: 'SMR',
    name: 'San Marino'
  },
  {
    continentCode: 'AF',
    iso2: 'ST',
    iso3: 'STP',
    name: 'Sao Tome and Principe'
  },
  {
    continentCode: 'AS',
    iso2: 'SA',
    iso3: 'SAU',
    name: 'Saudi Arabia'
  },
  {
    continentCode: 'AF',
    iso2: 'SN',
    iso3: 'SEN',
    name: 'Senegal'
  },
  {
    continentCode: 'EU',
    iso2: 'RS',
    iso3: 'SRB',
    name: 'Serbia'
  },
  {
    continentCode: 'AF',
    iso2: 'SC',
    iso3: 'SYC',
    name: 'Seychelles'
  },
  {
    continentCode: 'AF',
    iso2: 'SL',
    iso3: 'SLE',
    name: 'Sierra Leone'
  },
  {
    continentCode: 'AS',
    iso2: 'SG',
    iso3: 'SGP',
    name: 'Singapore'
  },
  {
    continentCode: 'EU',
    iso2: 'SK',
    iso3: 'SVK',
    name: 'Slovakia'
  },
  {
    continentCode: 'AS',
    iso2: 'VN',
    iso3: 'VNM',
    name: 'Vietnam'
  },
  {
    continentCode: 'EU',
    iso2: 'SI',
    iso3: 'SVN',
    name: 'Slovenia'
  },
  {
    continentCode: 'AF',
    iso2: 'SO',
    iso3: 'SOM',
    name: 'Somalia'
  },
  {
    continentCode: 'AF',
    iso2: 'ZA',
    iso3: 'ZAF',
    name: 'South Africa'
  },
  {
    continentCode: 'AF',
    iso2: 'ZW',
    iso3: 'ZWE',
    name: 'Zimbabwe'
  },
  {
    continentCode: 'EU',
    iso2: 'ES',
    iso3: 'ESP',
    name: 'Spain'
  },
  {
    continentCode: 'AF',
    iso2: 'SS',
    iso3: 'SSD',
    name: 'South Sudan'
  },
  {
    continentCode: 'AF',
    iso2: 'EH',
    iso3: 'ESH',
    name: 'Western Sahara'
  },
  {
    continentCode: 'AF',
    iso2: 'SD',
    iso3: 'SDN',
    name: 'Sudan'
  },
  {
    continentCode: 'SA',
    iso2: 'SR',
    iso3: 'SUR',
    name: 'Suriname'
  },
  {
    continentCode: 'EU',
    iso2: 'SJ',
    iso3: 'SJM',
    name: 'Svalbard & Jan Mayen Islands'
  },
  {
    continentCode: 'AF',
    iso2: 'SZ',
    iso3: 'SWZ',
    name: 'Swaziland'
  },
  {
    continentCode: 'EU',
    iso2: 'SE',
    iso3: 'SWE',
    name: 'Sweden'
  },
  {
    continentCode: 'EU',
    iso2: 'CH',
    iso3: 'CHE',
    name: 'Switzerland'
  },
  {
    continentCode: 'AS',
    iso2: 'SY',
    iso3: 'SYR',
    name: 'Syria'
  },
  {
    continentCode: 'AS',
    iso2: 'TJ',
    iso3: 'TJK',
    name: 'Tajikistan'
  },
  {
    continentCode: 'AS',
    iso2: 'TH',
    iso3: 'THA',
    name: 'Thailand'
  },
  {
    continentCode: 'AF',
    iso2: 'TG',
    iso3: 'TGO',
    name: 'Togo'
  },
  {
    continentCode: 'OC',
    iso2: 'TK',
    iso3: 'TKL',
    name: 'Tokelau'
  },
  {
    continentCode: 'OC',
    iso2: 'TO',
    iso3: 'TON',
    name: 'Tonga'
  },
  {
    continentCode: 'NA',
    iso2: 'TT',
    iso3: 'TTO',
    name: 'Trinidad and Tobago'
  },
  {
    continentCode: 'AS',
    iso2: 'AE',
    iso3: 'ARE',
    name: 'United Arab Emirates',
    shortName: 'U.A.E.'
  },
  {
    continentCode: 'AF',
    iso2: 'TN',
    iso3: 'TUN',
    name: 'Tunisia'
  },
  {
    continentCode: 'EU',
    iso2: 'TR',
    iso3: 'TUR',
    name: 'Turkey'
  },
  {
    continentCode: 'AS',
    iso2: 'TR',
    iso3: 'TUR',
    name: 'Turkey'
  },
  {
    continentCode: 'AS',
    iso2: 'TM',
    iso3: 'TKM',
    name: 'Turkmenistan'
  },
  {
    continentCode: 'NA',
    iso2: 'TC',
    iso3: 'TCA',
    name: 'Turks and Caicos Islands'
  },
  {
    continentCode: 'OC',
    iso2: 'TV',
    iso3: 'TUV',
    name: 'Tuvalu'
  },
  {
    continentCode: 'AF',
    iso2: 'UG',
    iso3: 'UGA',
    name: 'Uganda'
  },
  {
    continentCode: 'EU',
    iso2: 'UA',
    iso3: 'UKR',
    name: 'Ukraine'
  },
  {
    continentCode: 'EU',
    iso2: 'MK',
    iso3: 'MKD',
    name: 'Macedonia'
  },
  {
    continentCode: 'AF',
    iso2: 'EG',
    iso3: 'EGY',
    name: 'Egypt'
  },
  {
    continentCode: 'EU',
    iso2: 'GB',
    iso3: 'GBR',
    name: 'United Kingdom',
    shortName: 'U.K.'
  },
  {
    continentCode: 'EU',
    iso2: 'GG',
    iso3: 'GGY',
    name: 'Guernsey'
  },
  {
    continentCode: 'EU',
    iso2: 'JE',
    iso3: 'JEY',
    name: 'Jersey'
  },
  {
    continentCode: 'EU',
    iso2: 'IM',
    iso3: 'IMN',
    name: 'Isle of Man'
  },
  {
    continentCode: 'AF',
    iso2: 'TZ',
    iso3: 'TZA',
    name: 'Tanzania'
  },
  {
    continentCode: 'NA',
    iso2: 'US',
    iso3: 'USA',
    name: 'United States of America',
    shortName: 'U.S.A.'
  },
  {
    continentCode: 'NA',
    iso2: 'VI',
    iso3: 'VIR',
    name: 'United States Virgin Islands'
  },
  {
    continentCode: 'AF',
    iso2: 'BF',
    iso3: 'BFA',
    name: 'Burkina Faso'
  },
  {
    continentCode: 'SA',
    iso2: 'UY',
    iso3: 'URY',
    name: 'Uruguay'
  },
  {
    continentCode: 'AS',
    iso2: 'UZ',
    iso3: 'UZB',
    name: 'Uzbekistan'
  },
  {
    continentCode: 'SA',
    iso2: 'VE',
    iso3: 'VEN',
    name: 'Venezuela'
  },
  {
    continentCode: 'OC',
    iso2: 'WF',
    iso3: 'WLF',
    name: 'Wallis and Futuna'
  },
  {
    continentCode: 'OC',
    iso2: 'WS',
    iso3: 'WSM',
    name: 'Samoa'
  },
  {
    continentCode: 'AS',
    iso2: 'YE',
    iso3: 'YEM',
    name: 'Yemen'
  },
  {
    continentCode: 'AF',
    iso2: 'ZM',
    iso3: 'ZMB',
    name: 'Zambia'
  },
  {
    continentCode: 'EU',
    iso2: 'XK',
    iso3: 'XKX',
    name: 'Kosovo'
  }
]
)}

function _colours(){return(
{
  pink: '#f686bd',
  red: '#8c1c13',
  blue: '#1f5673', 
  lightblue: '#a7cced',
  green: '#d0f4de',
  yellow: '#fcf6bd',
  hyperGreen: '#72a276',
  purple: '#9d79bc',
  orange: '#f7934c',
  charcoal: '#735751'
}
)}

function _continents(colours){return(
[
  {
    id: 'AF',
    name: 'Africa',
    fill: colours.orange
    // colour: colours.charcoal
  },
  {
    id: 'AS',
    name: 'Asia',
    fill: colours.yellow,
    colour: colours.charcoal
  },
  {
    id: 'EU',
    name: 'Europe',
    fill: colours.blue
  },
  {
    id: 'NA',
    name: 'North America',
    fill: colours.hyperGreen
  },
  {
    id: 'OC',
    name: 'Oceania',
    fill: colours.red
    // colour: colours.red
  },
  {
    id: 'SA',
    name: 'South America',
    fill: colours.pink
  },
  {
    id: 'AT',
    name: 'Antarctica',
    fill: colours.lightblue,
    colour: colours.charcoal
  }
]
)}

function _pack(d3){return(
data =>
  d3
    .pack()
    .size([800 - 2, 600 - 2])
    .padding(2)(d3.hierarchy({ children: data }).sum(d => d.value))
)}

function _renderbubble(d3Render){return(
d3Render.default
)}

function _renderBubbleChartContainer(renderBubbleChart,data_bubble)
{
  renderBubbleChart("#bubble-chart", data_bubble);
}


function _renderBubbleChart(pack,bubbleComponent,renderbubble){return(
(selection, data) => {
  const root = pack(data);

  const renderData = root.leaves().map(d => {
    return bubbleComponent({
      id: d.data.id,
      name: d.data.name,
      value: d.data.value,
      r: d.r,
      x: d.x,
      y: d.y,
      fill: d.data.fill,
      colour: d.data.colour
    });
  });

  return renderbubble(selection, renderData);
}
)}

function _bubbleComponent(width,circleComponent,labelComponent){return(
({
  name,
  id,
  value,
  r,
  x,
  y,
  fill,
  colour,
  duration = 1000
}) => {
  return {
    append: 'g',
    key: id,
    transform: {
      enter: `translate(${x + 1},${y + 1})`,
      exit: `translate(${width / 2},${800 / 2})`
    },
    duration,
    delay: Math.random() * 300,
    children: [
      circleComponent({ key: id, r, fill, duration }),
      ...labelComponent({
        key: id,
        countryName: name,
        value,
        isoCode: id,
        r,
        colour,
        duration
      })
    ]
  };
}
)}

function _labelComponent(textComponent,format){return(
({ isoCode, countryName, value, r, colour }) => {
  // Don't show any text for radius under 12px
  if (r < 12) {
    return [];
  }

  const circleWidth = r * 2;
  const nameWidth = countryName.length * 10;
  const shouldShowIso = nameWidth > circleWidth;
  const newCountryName = shouldShowIso ? isoCode : countryName;
  const shouldShowValue = r > 18;

  let nameFontSize;

  if (shouldShowValue) {
    nameFontSize = shouldShowIso ? '10px' : '12px';
  } else {
    nameFontSize = '8px';
  }

  return [
    textComponent({
      key: isoCode,
      text: newCountryName,
      fontSize: nameFontSize,
      y: shouldShowValue ? '-0.2em' : '0.3em',
      fillOpacity: 1,
      colour
    }),
    ...(shouldShowValue
      ? [
          textComponent({
            key: isoCode,
            text: format(value),
            fontSize: '10px',
            y: shouldShowIso ? '0.9em' : '1.0em',
            fillOpacity: 0.7,
            colour
          })
        ]
      : [])
  ];
}
)}

function _circleComponent(){return(
({
  key,
  r,
  cx,
  cy,
  fill,
  randomDelay = Math.random() * 300
}) => {
  return {
    append: 'circle',
    key,
    r: { enter: r, exit: 0 },
    cx,
    cy,
    fill,
    duration: 1000,
    delay: randomDelay
  };
}
)}

function _textComponent(){return(
({
  key,
  text,
  x = 0,
  y = 0,
  fontWeight = 'bold',
  fontSize = '12px',
  textAnchor = 'middle',
  fillOpacity = 1,
  colour,
  r,
  duration = 1000
}) => {
  return {
    append: 'text',
    key,
    text,
    x,
    y,
    textAnchor,
    fontFamily: 'sans-serif',
    fontWeight,
    fontSize,
    fillOpacity: { enter: fillOpacity, exit: 0 },
    fill: colour,
    duration,
    style: {
      pointerEvents: 'none'
    }
  };
}
)}

function _getDataBy(df4,countries,continents){return(
function getDataBy({
  selectedContinents
}) {
  return (
    df4
      .filter(d => d)
      .filter(d => d.iso !== 'OWID_WRL')
      .filter(d => {
        const country = countries.find(c => c.iso3 === d.iso);
        const continent = continents.find((c, i) => {
          if (!country) {
            return false;
          }

          return c.id === country.continentCode;
        });

        if (!continent) {
          return false;
        }

        return selectedContinents.includes(continent.id);
      })
      .map(d => {
        const country = countries.find(c => c.iso3 === d.iso);
        const continent = continents.find(c => c.id === country.continentCode);

        const name = country.shortName || country.name;

        return {
          name,
          id: country.iso3,
          value: d['count'],
          fill: continent.fill,
          colour: continent.colour || 'white'
        };
      })
      .filter(d => d.value !== "0.0")
  );
}
)}

function _format(d3){return(
value => {
  const newValue = d3.format("0.2s")(value);

  if (newValue.indexOf('m') > -1) {
    return parseInt(newValue.replace('m', '')) / 1000;
  }

  return newValue;
}
)}

function _106(md){return(
md`##### Format`
)}

function _107(htl){return(
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
  padding: 3px;
  background: #dbdbd7;
  pointer-events: none;
  border: 1px solid #eee;
  border-radius: 5px;
}
</style>`
)}

function _108(html){return(
html`<style>p { max-width: none; }</style>`
)}

function _109(html){return(
html`<style>h3 { max-width: none; }</style>`
)}

function _110(htl){return(
htl.html`<style>ol { max-width: none; }`
)}

function _111(htl){return(
htl.html`<style> 
/* You can also set this in the initial declaration, just here for sake of explanation */
#map {
  position: relative;
  z-index: 0;
}
</style>`
)}

function _112(html){return(
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
    ["frequency@4.csv", {url: new URL("./files/68bc38d87019d0b892e5745bfeb3b30dabb792f7a889e68622ba7ef38debb4213c0b3ab57c048ede1595b4fb7221deb7c467ca3e502a625b93e512275e27d2b1.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["classmass1@4.csv", {url: new URL("./files/4821116c50454587f62d936ff8ba5ebcca84f9d561e80a29384190a58c8c582435b8c71d768fea3a18e10041daabbef80a90e8c15fef99c534850a7e15728313.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["Meteorite_Landings_Count@1.csv", {url: new URL("./files/8e0cc8455f29f426c0dc4bdc0524fd7e85ecc0788bbb57514baec8888b0cdbbccd15844c4f25f61ceacfe157f73f1eefa6de2393b478669f5fb920871e714b35.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["Meteorite_Landings_Cleaned@8.csv", {url: new URL("./files/affd4cb75a86a2c9aff912c3a4babf1f2ba3323c84dade3d5dfed0c8379432d3e7965eb6cfc000bfdd67a7a62c2b34cc67504882aeb0723bf5ee562e5ecdcd37.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["Meteorite_Landings_Sankey@1.csv", {url: new URL("./files/fe812e3784097f4c425f501569dd01decea3cd96d3755dde923d9981ba0c0004d7997ddcfd88d8a43976f0c10cca388a14837c06b3cf97067f62077b3fffdc1c.csv", import.meta.url), mimeType: "text/csv", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer()).define(["md"], _3);
  main.variable(observer()).define(["md"], _4);
  main.variable(observer("ludovicoBeeLfazbf70rscUnsplash")).define("ludovicoBeeLfazbf70rscUnsplash", ["FileAttachment"], _ludovicoBeeLfazbf70rscUnsplash);
  main.variable(observer()).define(["md"], _6);
  main.variable(observer()).define(["md"], _7);
  main.variable(observer()).define(["md"], _8);
  main.variable(observer()).define(["md"], _9);
  main.variable(observer()).define(["md"], _10);
  main.variable(observer()).define(["md"], _11);
  main.variable(observer()).define(["md"], _12);
  main.variable(observer()).define(["md"], _13);
  main.variable(observer("wordCloud")).define("wordCloud", ["d3","d3Cloud","worddata","s","number_data","wc_data1","wc_data2","wc_data3","wrap","invalidation"], _wordCloud);
  main.variable(observer()).define(["md"], _15);
  main.variable(observer()).define(["md"], _16);
  main.variable(observer()).define(["md"], _17);
  main.variable(observer()).define(["md"], _18);
  main.variable(observer()).define(["md"], _19);
  main.variable(observer()).define(["htl"], _20);
  main.variable(observer("viewof yearValue")).define("viewof yearValue", ["Scrubber","numbers"], _yearValue);
  main.variable(observer("yearValue")).define("yearValue", ["Generators", "viewof yearValue"], (G, _) => G.input(_));
  main.variable(observer()).define(["htl"], _22);
  main.variable(observer()).define(["md"], _23);
  main.variable(observer()).define(["md"], _24);
  main.variable(observer()).define(["md"], _25);
  main.variable(observer()).define(["md"], _26);
  main.variable(observer()).define(["md"], _27);
  main.variable(observer("viewof selectedContinents")).define("viewof selectedContinents", ["checkbox","continents"], _selectedContinents);
  main.variable(observer("selectedContinents")).define("selectedContinents", ["Generators", "viewof selectedContinents"], (G, _) => G.input(_));
  main.variable(observer("bubbleChart")).define("bubbleChart", ["d3"], _bubbleChart);
  main.variable(observer()).define(["md"], _30);
  main.variable(observer()).define(["md"], _31);
  main.variable(observer()).define(["md"], _32);
  main.variable(observer()).define(["md"], _33);
  main.variable(observer()).define(["md"], _34);
  main.variable(observer("viewof linkColor")).define("viewof linkColor", ["Inputs","URLSearchParams","html"], _linkColor);
  main.variable(observer("linkColor")).define("linkColor", ["Generators", "viewof linkColor"], (G, _) => G.input(_));
  main.variable(observer("chart")).define("chart", ["SankeyChart","df5","linkColor","d3","width"], _chart);
  main.variable(observer()).define(["md"], _37);
  main.variable(observer()).define(["md"], _38);
  main.variable(observer()).define(["md"], _39);
  main.variable(observer()).define(["md"], _40);
  main.variable(observer()).define(["md"], _41);
  main.variable(observer("meteorite_landings_cleaned8")).define("meteorite_landings_cleaned8", ["__query","FileAttachment","invalidation"], _meteorite_landings_cleaned8);
  main.variable(observer("classmass14")).define("classmass14", ["__query","FileAttachment","invalidation"], _classmass14);
  main.variable(observer("frequency4")).define("frequency4", ["__query","FileAttachment","invalidation"], _frequency4);
  main.variable(observer("meteorite_landings_count1")).define("meteorite_landings_count1", ["__query","FileAttachment","invalidation"], _meteorite_landings_count1);
  main.variable(observer("meteorite_landings_sankey1")).define("meteorite_landings_sankey1", ["__query","FileAttachment","invalidation"], _meteorite_landings_sankey1);
  main.variable(observer("file")).define("file", ["FileAttachment"], _file);
  main.variable(observer("file2")).define("file2", ["FileAttachment"], _file2);
  main.variable(observer("file3")).define("file3", ["FileAttachment"], _file3);
  main.variable(observer("file4")).define("file4", ["FileAttachment"], _file4);
  main.variable(observer("file5")).define("file5", ["FileAttachment"], _file5);
  main.variable(observer("data")).define("data", ["d3","file"], _data);
  main.variable(observer("data2")).define("data2", ["d3","file2"], _data2);
  main.variable(observer("data3")).define("data3", ["d3","file3"], _data3);
  main.variable(observer("data4")).define("data4", ["d3","file4"], _data4);
  main.variable(observer("data5")).define("data5", ["d3","file5"], _data5);
  main.variable(observer()).define(["md"], _57);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  main.variable(observer("d3Cloud")).define("d3Cloud", ["require"], _d3Cloud);
  main.variable(observer("mapboxgl")).define("mapboxgl", ["require","html"], _mapboxgl);
  const child1 = runtime.module(define1);
  main.import("Tree", child1);
  const child2 = runtime.module(define2);
  main.import("Scrubber", child2);
  const child3 = runtime.module(define3);
  main.import("checkbox", child3);
  const child4 = runtime.module(define4);
  main.import("SankeyChart", child4);
  main.variable(observer("d3Render")).define("d3Render", ["require"], _d3Render);
  main.variable(observer("df")).define("df", ["data"], _df);
  main.variable(observer("df2")).define("df2", ["data2"], _df2);
  main.variable(observer("df3")).define("df3", ["data3"], _df3);
  main.variable(observer("df4")).define("df4", ["data4"], _df4);
  main.variable(observer("df5")).define("df5", ["data5"], _df5);
  main.variable(observer()).define(["md"], _71);
  main.variable(observer("worddata")).define("worddata", ["df3","d3"], _worddata);
  main.variable(observer("number_data")).define("number_data", ["d3","FileAttachment"], _number_data);
  main.variable(observer("wc_data1")).define("wc_data1", ["d3","FileAttachment"], _wc_data1);
  main.variable(observer("wc_data2")).define("wc_data2", ["d3","FileAttachment"], _wc_data2);
  main.variable(observer("wc_data3")).define("wc_data3", ["d3","FileAttachment"], _wc_data3);
  main.variable(observer("numbers")).define("numbers", _numbers);
  main.variable(observer("wrap")).define("wrap", ["d3"], _wrap);
  main.variable(observer("s")).define("s", ["d3"], _s);
  main.variable(observer()).define(["md"], _80);
  main.variable(observer("map")).define("map", ["mapboxgl"], _map);
  main.variable(observer("annotations")).define("annotations", ["d3","svg1"], _annotations);
  main.variable(observer("svg1")).define("svg1", ["map","d3","df"], _svg1);
  main.variable(observer("dots")).define("dots", ["d3","svg1"], _dots);
  main.variable(observer("project")).define("project", ["map","mapboxgl"], _project);
  main.variable(observer("render")).define("render", ["dots","project","map"], _render);
  main.variable(observer("highlight")).define("highlight", ["d3","svg1","html","dots"], _highlight);
  main.variable(observer("hover2")).define("hover2", ["d3","svg1","html","dots"], _hover2);
  main.variable(observer()).define(["dots","yearValue","d3","map"], _89);
  main.variable(observer()).define(["map","render"], _90);
  main.variable(observer()).define(["md"], _91);
  main.variable(observer("data_bubble")).define("data_bubble", ["getDataBy","selectedContinents"], _data_bubble);
  main.variable(observer("countries")).define("countries", _countries);
  main.variable(observer("colours")).define("colours", _colours);
  main.variable(observer("continents")).define("continents", ["colours"], _continents);
  main.variable(observer("pack")).define("pack", ["d3"], _pack);
  main.variable(observer("renderbubble")).define("renderbubble", ["d3Render"], _renderbubble);
  main.variable(observer("renderBubbleChartContainer")).define("renderBubbleChartContainer", ["renderBubbleChart","data_bubble"], _renderBubbleChartContainer);
  main.variable(observer("renderBubbleChart")).define("renderBubbleChart", ["pack","bubbleComponent","renderbubble"], _renderBubbleChart);
  main.variable(observer("bubbleComponent")).define("bubbleComponent", ["width","circleComponent","labelComponent"], _bubbleComponent);
  main.variable(observer("labelComponent")).define("labelComponent", ["textComponent","format"], _labelComponent);
  main.variable(observer("circleComponent")).define("circleComponent", _circleComponent);
  main.variable(observer("textComponent")).define("textComponent", _textComponent);
  main.variable(observer("getDataBy")).define("getDataBy", ["df4","countries","continents"], _getDataBy);
  main.variable(observer("format")).define("format", ["d3"], _format);
  main.variable(observer()).define(["md"], _106);
  main.variable(observer()).define(["htl"], _107);
  main.variable(observer()).define(["html"], _108);
  main.variable(observer()).define(["html"], _109);
  main.variable(observer()).define(["htl"], _110);
  main.variable(observer()).define(["htl"], _111);
  main.variable(observer()).define(["html"], _112);
  return main;
}
