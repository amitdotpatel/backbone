/**
 * Created with JetBrains WebStorm.
 * User: Amit
 * Date: 8/3/13
 * Time: 11:31 AM
 * To change this template use File | Settings | File Templates.
 */
(function () {
    var IndexView = Backbone.View.extend({
        // the constructor
        initialize: function (options) {
            // model is passed through

        },
        // populate the html to the dom
        render: function () {
            this.$el.html($('#indexTemplate').html());
            return this;
        }
    });
    return IndexView;
}());