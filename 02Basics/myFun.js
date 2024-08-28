function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}
//default parameter
var signUP = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(5);
getUpper("ritesh");
signUpUser("ritesh", "ritesh@gmail.com", false);
signUP("r", "r@r.com");
//-----------------------------------------------------------------
// agar aapko function ka return type fix karno h to aapko
//explicitly functionka return type mention karna padega
function myFun(val) {
    return val + 2;
    //this line produces error string cannot be assigned to type number
    // return "ritesh"
}
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
