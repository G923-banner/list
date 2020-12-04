'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx, app } = this;
        // select全表查询
        // select后边的第二个参数可以对我们查询语句进行更加细致的条件查询
        // where: {}   该属性值对应是查询语句中的where判断条件
        // orders: []  该属性相当于order by  表示以某种形式来进行升序或者是降序排列
        // limit   显示数据的条数
        // offset  数据的偏移量
        var num = (parseInt(JSON.parse(ctx.params.id).page) - 1) * 6
        console.log(999, typeof num)
            // console.log('id',typeof parseInt(JSON.parse(ctx.params.id).page))
        const res = await app.mysql.select("t_articles", {
            limit: 6,
            offset: num,
            where: {
                type_id: JSON.parse(ctx.params.id).id
            }
        })
        ctx.body = {
            data: res,
            status: 200
        };
    }

    async sort() {
        const { ctx, app } = this
        const res = await app.mysql.select("t_types")

        ctx.body = {
            data: res,
            status: 200
        }
    }

    async detail() {
        const { ctx, app } = this
        console.log(444, ctx.params.id)
        const res = await app.mysql.select("t_articles", {
            where: {
                id: ctx.params.id
            }
        })
        ctx.body = {
            data: res,
            status: 200
        }
    }

    async page() {
        const { ctx, app } = this

        const res = await app.mysql.select('t_articles', {
            where: {
                type_id: ctx.query.type
            }
        })
        console.log(res.length)
        ctx.body = {
            data: res.length,
            status: 200
        }
    }
}

module.exports = HomeController;