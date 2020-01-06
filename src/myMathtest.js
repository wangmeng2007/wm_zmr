const MyMath=require('../src/myMath');
const assert=require('assert');

describe('测试', function () {
    before(function (done){
        mym=new MyMath;
    });
    after(function () {
        console.log("测试结束")
    });
    beforeEach(function () {
        console.log("before each..")
    });
    afterEach(function () {
        console.log("after each")
    });
    it('should ', function (done) {
        mym.sum(1,2,function (m1) {
            assert.ok(m1=4);
            done();
        });
    })
    it('multi ', function (done) {
        let m1=mym.multi(1,2);
        assert.ok(m1=2)
    })
});


