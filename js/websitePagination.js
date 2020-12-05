// Joeはwebサイト作成をしており、paginationを担当することになりました。URLによって構成される配列urls、各ページのサイズpageSize, 特定のページpageが与えられるので、特定のページに表示されるURLを返す、websitePaginationという関数を作成してください。例えば、url1, url2, url3, url4, url5, url6, url7, url8, url9の一覧があり、1ページに含まれるURLの数が3、現在作成しているページが2ページ目の場合、各ページに3つのURLが含まれることになるので、返される配列は2ページに含まれるurl4, url5, url6になります。

function websitePagination(urls, pageSize, page) {
  let baseUrls = [...urls];
  let paginationUrls = [];
  // const pageCount = Math.ceil(baseUrls.length / pageSize);
  for(let i = 0; i < baseUrls.length; i += pageSize) {
    paginationUrls.push(baseUrls.slice(i, i + pageSize))
  }
  return paginationUrls[page - 1];
}

console.log(websitePagination(["url1","url2","url3","url4","url5","url6"],4,1));
console.log(websitePagination(["url1","url2","url3","url4","url5","url6","url7","url8","url9"],3,2) );
console.log(websitePagination(["url1","url2","url3","url4","url5","url6","url7","url8","url9"],4,3));