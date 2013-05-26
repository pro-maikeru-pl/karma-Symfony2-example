define(['AcmeFooBundle/account'], function (account) {
    describe('Account', function () {
        var acc;
        beforeEach(function () {
            acc = account(0);
        });
        it('should have initial balance set if passed in constructor', function () {
            expect(acc.getBalance()).toEqual(0);
        });
        it('should have initial balance set if passed in constructor 2', function () {
            acc = account(50);
            expect(acc.getBalance()).toEqual(50);
        });
        it('should store increased balance after deposit some money', function () {
            acc.deposit(10);
            expect(acc.getBalance()).toEqual(10);
        });
        it('should store decreased balance after withdraw some money', function () {
            acc = account(100);
            acc.withdraw(50);
            expect(acc.getBalance()).toEqual(50);
        });
        it('should return true if withdrawal succeeded', function () {
            acc = account(100);
            expect(acc.withdraw(50)).toBe(true);
        });
        it('should fail and do not change original amount if you try to withdraw more money than you have', function () {
            acc = account(100);
            expect(acc.withdraw(150)).toBe(false);
            expect(acc.getBalance()).toEqual(100);
        });
    });
});