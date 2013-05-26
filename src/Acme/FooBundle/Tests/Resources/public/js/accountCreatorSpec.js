define(['AcmeFooBundle/accountCreator'], function (accountCreator) {
    describe('Account', function () {
        var acc;
        beforeEach(function () {
            acc = accountCreator(0);
        });
        it('should have initial balance set if passed in constructor', function () {
            expect(acc.getBalance()).toEqual(0);
        });
        it('should have initial balance set if passed in constructor 2', function () {
            acc = accountCreator(50);
            expect(acc.getBalance()).toEqual(50);
        });
        it('should store increased balance after deposit some money', function () {
            acc.deposit(10);
            expect(acc.getBalance()).toEqual(10);
        });
        it('should store decreased balance after withdraw some money', function () {
            acc = accountCreator(100);
            acc.withdraw(50);
            expect(acc.getBalance()).toEqual(50);
        });
        it('should return true if withdrawal succeeded', function () {
            acc = accountCreator(100);
            expect(acc.withdraw(50)).toBe(true);
        });
        it('should fail and do not change original amount if you try to withdraw more money than you have', function () {
            acc = accountCreator(100);
            expect(acc.withdraw(150)).toBe(false);
            expect(acc.getBalance()).toEqual(100);
        });
    });
});