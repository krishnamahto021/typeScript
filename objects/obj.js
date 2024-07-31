function createUser(_a) {
    var name = _a.name, isPaid = _a.isPaid;
    return {
        name: name,
        isPaid: isPaid,
    };
}
createUser({ name: "krishna", isPaid: true });
var create = function (_a) {
    var name = _a.name, isPaid = _a.isPaid;
    return {
        name: name,
        isPaid: isPaid,
    };
};
create({ name: "krishna", isPaid: false });
