function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var result = []
  for(var i = 0; i<arrPenumpang.length; i++) {

    var jarak = []
    var obj = {}
    obj.penumpang = arrPenumpang[i][0]
    obj.naikDari = arrPenumpang[i][1]
    obj.tujuan = arrPenumpang[i][2]
    obj.bayar = 0
    // console.log(obj);

    for(var j = 0; j<rute.length; j++) {
      if(arrPenumpang[i][1] === rute[j]) {
        jarak.push(j)
      }if(arrPenumpang[i][2] === rute[j]) {
        jarak.push(j)
      }
      var selisih = jarak[1]-jarak[0]
      obj.bayar=selisih*2000
    }
    result.push(obj)
  }

  return result
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

//console.log(naikAngkot([])); //[]
