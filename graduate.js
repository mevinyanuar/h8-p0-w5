function graduates (students) {
  // Code disini

  var result = {}
  for(var i = 0; i<students.length; i++) {
    if(students[i].score >= 75){
      if(result[students[i].class] === undefined){
        result[students[i].class] = []
        result[students[i].class].push({nama: students[i].name, score: students[i].score})
      }else{
        result[students[i].class].push({nama: students[i].name, score: students[i].score})
      }
    }
  }
  return result
}
console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

// console.log(graduates([
//   {
//     name: 'Alexander',
//     score: 100,
//     class: 'foxes'
//   },
//   {
//     name: 'Alisa',
//     score: 76,
//     class: 'wolves'
//   },
//   {
//     name: 'Vladimir',
//     score: 92,
//     class: 'foxes'
//   },
//   {
//     name: 'Albert',
//     score: 71,
//     class: 'wolves'
//   },
//   {
//     name: 'Viktor',
//     score: 80,
//     class: 'tigers'
//   }
// ]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


//console.log(graduates([])); //{}



//var objResult = {}
//   for(var i = 0; i<students.length; i++) {
//     //console.log(students[i]);
//     var studentsGraduate =[{name: students[i].name, score: students[i].score}]
//     if(objResult[students[i].class] === undefined) {
//       objResult[students[i].class]=studentsGraduate
//
//     }else if(students[i].score >=75) {
//       studentsGraduate.score = students[i].score
//     }else{
//       objResult[students[i].class]=studentsGraduate
//     }
//   }
//   return objResult
// }
