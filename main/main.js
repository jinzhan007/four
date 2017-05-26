// Write your cade below:
function caclRemaindar(i,j) {
    Remaindar = i % j;
    return Remaindar;
};

function caclSum(array) {
    var Sum = 0;
    for (var i = 0; i < array.length; i++){
        Sum += array[i];
    }
    return Sum;
};

function caclSumInConditon(array1,j) {
    var i;
    var SumInConditon = 0;
    for (i = 0; i < array1.length; i++){
        if(array1[i] < j){
            SumInConditon += array1[i];
        }
    }
    return SumInConditon;
};

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}