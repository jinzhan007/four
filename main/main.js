// Write your cade below:
function caclRemaindar(i,j) {
    Remaindar = i % j;
    return Remaindar;
};
function caclSum(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}
function caclSumInConditon(array1,i) {
    var SumInConditon = 0;
    for (let number of array1){
        if (number < i)
        {
            SumInConditon += number;
        }
    }
    return SumInConditon;
}

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}