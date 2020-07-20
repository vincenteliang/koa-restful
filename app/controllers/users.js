const db = [{ name: 'user1' }, { name: 'user2' }];

class UsersCtl {
    find(ctx) {
        a.b  // 故意写一段错误代码
        ctx.body = db;
    }
    findById(ctx) {
        if(ctx.params.id * 1 >= db.length) {
            ctx.throw(412, '先决条件失败: ID大于数组长度');
        }
        ctx.body = db[ctx.params.id * 1];
    }
    create(ctx) {
        db.push(ctx.request.body);
        ctx.body = ctx.request.body;
    }
    update(ctx) {
        db[ctx.params.id * 1] = ctx.request.body;
        ctx.body = ctx.request.body;
    }
    delete(ctx) {
        db.splice(ctx.params.id * 1, 1);
        ctx.status = 204;
    }
}

module.exports = new UsersCtl();