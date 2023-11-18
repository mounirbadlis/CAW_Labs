function exf(s, n) {
    for (let index = 0; index < n; index++) {
        console.log(s);
    }
}
describe('how many console.log used times', () => {
    test('print echo for 5 times', () => {
        const spy = jest.spyOn(console, 'log');
        exf('echo', 5);
        expect(spy).toHaveBeenCalledTimes(5);
        expect(spy).toHaveBeenCalledWith('echo');
        spy.mockRestore();
    });
    test('print JS from Server from for 10 times', () => {
        const spy = jest.spyOn(console, 'log');
        exf('JS from Server', 10);
        expect(spy).toHaveBeenCalledTimes(10);
        expect(spy).toHaveBeenCalledWith('JS from Server');
        spy.mockRestore();
    });
})