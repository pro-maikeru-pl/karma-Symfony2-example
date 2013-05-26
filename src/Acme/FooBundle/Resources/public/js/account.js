define(function () {
    return function (initialBalance) {
        var that = {},
            balance = initialBalance;
        that.getBalance = function () {
            return balance;
        }
        that.deposit = function (amount) {
            balance += amount;
        }
        that.withdraw = function (amount) {
            if (amount > balance) {
                return false;
            }
            balance -= amount;
            return true;
        }
        return that;
    }
});