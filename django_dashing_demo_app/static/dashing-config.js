/* global Dashboard */

var dashboard = new Dashboard();

dashboard.addWidget('clock_widget', 'Clock');

dashboard.addWidget('new_users_widget', 'Number', {
    getData: function () {
        var self = this;
        Dashing.utils.get('new_users_widget', function(scope) {
            $.extend(self.scope, scope);
        });
    },
    interval: 5000
});

dashboard.addWidget('new_number_widget', 'Number', {
    getData: function () {
        var self = this;
        Dashing.utils.get('new_number_widget', function(scope) {
            $.extend(self.scope, scope);
        });
    },
    interval: 5000
});

dashboard.addWidget('roseville_weather_widget', 'Weather', {
    //WOEID: 24701613 //Los Angeles
    WOEID: 2484861 //Roseville
});

dashboard.addWidget('san_francisco_weather_widget', 'Weather', {
    WOEID: 2487956 //San Francisco
});

dashboard.addWidget('text_widget', 'Widget', {
    getData: function () {
        var self = this;
        Dashing.utils.get('text_widget', function(scope) {
            $.extend(self.scope, scope);
        });
    }
});

dashboard.addWidget('mongo_widget', 'Number', {
    getData: function () {
        var self = this;
        Dashing.utils.get('mongo_widget', function(scope) {
            $.extend(self.scope, scope);
        });
    }
});
