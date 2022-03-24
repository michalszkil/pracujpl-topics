const select = document.getElementById("categories_select")

select.addEventListener('change', function () {
    let target = this.value;
    // console.log(target)
    document.getElementById("text-content").data="LDA_WEB\\" + target + ".txt";
    document.getElementById("iframe-lda").src="LDA_WEB\\" + target + "_LDA.html";
    document.getElementById("wordcloud").src="wordclouds\\" + target + "_wordcloud.png";
    document.getElementById("wordcloud_bigrams").src="wordclouds\\" + target + "_wordcloud_bigrams.png";
    document.getElementById("wordcloud_trigrams").src="wordclouds\\" + target + "_wordcloud_trigrams.png";
    document.getElementById("barplot").src="LDA_WEB\\" + target + "_barplot.png";
    document.getElementById("tsne-plot").src="LDA_WEB\\" + target + "_30_tsne_plot.html";
    document.getElementById("tsne-svd-plot").src="LDA_WEB\\" + target + "_30_tsne_svd_plot.html";
    document.getElementById("iframe-regression").src="LDA_WEB\\" + target + "_regression.html";
    document.getElementById("dominant-iframe-regression").src="LDA_WEB\\" + target + "_dominant_topic_regression.html";
    document.getElementById("iframe-quantile-regression").src="LDA_WEB\\" + target + "_quantile.html";
    document.getElementById("histogram-plot").src="LDA_histograms\\" + target + "_histogram_custom_bins.html";
    tsne_select.value = "30";
    tsne_select_extended.value = "";
    tsne_svd_select.value = "30";
    tsne_svd_select_extended.value = "";
});

const tsne_select = document.getElementById("categories-tsne-plot-select")

tsne_select.addEventListener('change', function () {
    let target = this.value;
    document.getElementById("tsne-plot").src = "LDA_WEB\\" + select.value + "_" + target + "_tsne_plot" + tsne_select_extended.value +".html";
    // console.log("LDA_WEB\\" + select.value + "_" + target + "_tsne_plot.html");
})

const tsne_svd_select = document.getElementById("categories-tsne-svd-plot-select")

tsne_svd_select.addEventListener('change', function () {
    let target = this.value;
    document.getElementById("tsne-svd-plot").src = "LDA_WEB\\" + select.value + "_" + target + "_tsne_svd_plot" + tsne_select_extended.value +".html";
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

const tsne_svd_select_extended = document.getElementById("categories-tsne-svd-plot-select-extended")

tsne_svd_select_extended.addEventListener('change', function () {
    let target = this.value;
    document.getElementById("tsne-svd-plot").src = "LDA_WEB\\" + select.value + "_" + tsne_select.value + "_tsne_svd_plot" + target + ".html";
    // console.log("LDA_WEB\\" + select.value + "_" + tsne_select.value + "_tsne_plot" + target + ".html");
})



let _query = document.getElementById('text-content').innerHTML
console.log(_query)

// document.getElementById('pyldavis-wrapper').style.textAlign = 'center';
pyldavis_wrapper = document.getElementById('pyldavis-wrapper').style.textAlign = 'center';
console.log(pyldavis_wrapper.children);

// testing