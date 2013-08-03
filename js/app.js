/**
 * Created with JetBrains WebStorm.
 * User: Amit
 * Date: 8/3/13
 * Time: 11:21 AM
 * To change this template use File | Settings | File Templates.
 */
(function () {
    return Backbone.Router.extend({
        routes: {
            "/": "index"
        },

        initialize: function (options) {
            this.index();
        },

        index: function () {
            this.currentView = new IndexView();
            $('#indexViewArea').html(this.currentView.render().el);
        }
    });
}());