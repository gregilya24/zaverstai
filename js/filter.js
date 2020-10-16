// переменные для фильтрации
let filter = document.querySelector('.filter');
let filterСhk = document.querySelectorAll('.filter-chk');
let articleLib = document.querySelectorAll('.article-for-filter');

let countM = Object.keys(filterСhk).length;
let count = 0;

// переменные для перестроения сетки после фильтрации
let countVisArt = 0;

let articleBigLib = document.querySelectorAll('.article-preview-big');
let articleSmallLib = document.querySelectorAll('.article-preview-small');
let btN = document.querySelector('.show-more-article');
let allArticlesWrap = document.querySelector('.all-articles-wrap');




console.log(countM);
filter.onchange = function () {
  for (let article of articleLib) {
  article.classList.add('hidden');}

  for (chk of filterСhk) {
    if (chk.checked) {
      console.log(chk.dataset.category);
      for (let article of articleLib) {
        if (article.dataset.category == chk.dataset.category ) {
          article.classList.remove('hidden')
          countVisArt++;
          console.log(countVisArt);
        }
        if (chk.dataset.category == 'all' ) {
          article.classList.remove('hidden')
          countVisArt = 5;
          console.log(countVisArt);
        }
      }

    }
    else {
      count++;
    }

    if (count == countM) {
      for (let article of articleLib) {
      article.classList.remove('hidden');}
      countVisArt = 5;
    }
  }
  if (countVisArt < 5) {
    btN.style.visibility = 'hidden';
    for (let articleBig of articleBigLib) {
    articleBig.style.order = '-1';}
    for (let articleSmall of articleSmallLib) {
    articleSmall.style.marginTop = '62px';}
    allArticlesWrap.style.justifyContent = "space-around";
  }
  else {
    btN.style.visibility = 'visible';
    for (let articleBig of articleBigLib) {
    articleBig.style.order = '0';}
    for (let articleSmall of articleSmallLib) {
    articleSmall.style.marginTop = '0px';}
    allArticlesWrap.style.justifyContent = "space-between";
  }
count = 0;
countVisArt = 0;
}
