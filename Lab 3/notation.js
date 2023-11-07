const mean = function (list) {
    var total = 0;
    var length = list.length;
    list.forEach(element => {
        total += element;
    });
    return total / length;
}

module.exports = mean;
