// 郵便番号のリスト、郵便番号、範囲を受け取り、リストの中から郵便番号の範囲内にあるものだけを返します。
function zipcode_range(zipcode_list, zipcode, zipcode_range) {
  let zipcode_in_range = [];
  for(let i = 0; i < zipcode_list.length; i++) {
    if(Math.abs(zipcode_list[i] - zipcode) <= zipcode_range) {
      zipcode_in_range.push(zipcode_list[i]);
    }
  }
  return zipcode_in_range;
}

function print_list(array) {
  for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

print_list(zipcode_range([50013, 94512,90080,90190,90095,54810,85005],90094, 200));