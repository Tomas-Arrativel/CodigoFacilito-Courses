var DbEntity;
(function (DbEntity) {
    var User = /** @class */ (function () {
        function User(name) {
            this.name = name;
        }
        return User;
    }());
    var myUser = new User('Tomás');
    console.log(myUser);
})(DbEntity || (DbEntity = {}));
