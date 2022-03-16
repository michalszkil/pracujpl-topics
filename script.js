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

});

let _query = document.getElementById('text-content').innerHTML
console.log(_query)

// document.getElementById('pyldavis-wrapper').style.textAlign = 'center';
pyldavis_wrapper = document.getElementById('pyldavis-wrapper').style.textAlign = 'center';
console.log(pyldavis_wrapper.children);