var Users;
(function (Users) {
    Users["NormalUser"] = "normal";
    Users["PayedUser"] = "payed";
    Users["AdminUser"] = "admin";
    Users["MegaUser"] = "mega";
})(Users || (Users = {}));
var myUser = Users.MegaUser;
console.log(myUser);
