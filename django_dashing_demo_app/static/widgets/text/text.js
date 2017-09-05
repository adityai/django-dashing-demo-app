/* global Dashing */

Dashing.widgets.Text = function(dashboard) {
    var self = this, widget;
    self.__init__ = Dashing.utils.widgetInit(dashboard, 'text');
    self.row = 1;
    self.col = 1;
    self.color = '#96bf48';
    self.scope = {};
    self.getWidget = function () { return widget; };
    self.getData = function () {};
    self.interval = 20000;
};