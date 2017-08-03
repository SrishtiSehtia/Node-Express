function average(scores) {
    var total = 0
    scores.forEach(function(score) {
      total += score
    })
    return Math.round(total / scores.length)
}

console.log(average([90,98,89,100,100,86,94]));
console.log(average([40,65,77,82,80,54,73,63,95,49]));