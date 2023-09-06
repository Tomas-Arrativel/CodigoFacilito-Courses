var DbEntity;
(function (DbEntity) {
    var User = /** @class */ (function () {
        function User(name) {
            this.name = name;
        }
        return User;
    }());
    DbEntity.User = User;
    var myUser = new User('Tomás');
    console.log(myUser);
})(DbEntity || (DbEntity = {}));
var myOtherUser = new DbEntity.User('Tomeko');
console.log(myOtherUser);
/// <reference path="namespaces.ts" />
var myOtherUser2 = new DbEntity.User('Tomeko 2');
console.log(myOtherUser2);
