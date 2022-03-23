const select = document.getElementById("categories_select")

select.addEventListener('change', function () {
    let target = this.value;
    // console.log(target)
    document.getElementById("text-content").data="LDA_WEB\\" + target + ".txt";
    document.getElementById("iframe-lda").src="LDA_WEB\\" + target + "_LDA.html";
    document.getElementById("wordcloud").src="LDA_WEB\\" + target + "_wordcloud.png";
    document.getElementById("wordcloud_bigrams").src="LDA_WEB\\" + target + "_wordcloud_bigrams.png";
    document.getElementById("wordcloud_trigrams").src="LDA_WEB\\" + target + "_wordcloud_trigrams.png";
    document.getElementById("barplot").src="LDA_WEB\\" + target + "_barplot.png";
    document.getElementById("tsne-plot").src="LDA_WEB\\" + target + "_30_tsne_plot.html";
    document.getElementById("iframe-regression").src="LDA_WEB\\" + target + "_regression.html";
    document.getElementById("dominant-iframe-regression").src="LDA_WEB\\" + target + "_dominant_topic_regression.html";
    document.getElementById("iframe-quantile-regression").src="LDA_WEB\\" + target + "_quantile.html";
    document.getElementById("histogram-plot").src="LDA_histograms\\" + target + "_histogram_custom_bins.html";
    tsne_select.value = "30";
    tsne_select_extended.value = "";
    // if (target == 1) {
    //     document.getElementById("topics-description-text").innerHTML = 1.html;
    // }
});

const tsne_select = document.getElementById("categories-tsne-plot-select")

tsne_select.addEventListener('change', function () {
    let target = this.value;
    document.getElementById("tsne-plot").src = "LDA_WEB\\" + select.value + "_" + target + "_tsne_plot" + tsne_select_extended.value +".html";
    // console.log("LDA_WEB\\" + select.value + "_" + target + "_tsne_plot.html");
})

const histogram_bins_select = document.getElementById("histogram-bins-plot-select")

histogram_bins_select.addEventListener('change', function () {
    let target = this.value;
    document.getElementById("histogram-plot").src = "LDA_histograms\\" + select.value + "_histogram" + target + ".html";
    // console.log("LDA_WEB\\" + select.value + "_" + tsne_select.value + "_tsne_plot" + target + ".html");
})

const tsne_select_extended = document.getElementById("categories-tsne-plot-select-extended")

tsne_select_extended.addEventListener('change', function () {
    let target = this.value;
    document.getElementById("tsne-plot").src = "LDA_WEB\\" + select.value + "_" + tsne_select.value + "_tsne_plot" + target + ".html";
    // console.log("LDA_WEB\\" + select.value + "_" + tsne_select.value + "_tsne_plot" + target + ".html");
})

let _query = document.getElementById('text-content').innerHTML
console.log(_query)

// document.getElementById('pyldavis-wrapper').style.textAlign = 'center';
pyldavis_wrapper = document.getElementById('pyldavis-wrapper').style.textAlign = 'center';
console.log(pyldavis_wrapper.children);

// testing

// var client = new XMLHttpRequest();
// client.open('GET', 'topic_descriptions\\1.txt');
// client.onreadystatechange = function() {
//   alert(client.responseText);
// }
// client.send();
// topic_description = client.responseText;

fetch('http://localhost/1.txt')
  .then(response => response.text())
  .then((data) => {
    console.log(data)
  })