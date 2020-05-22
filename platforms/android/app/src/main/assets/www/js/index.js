let app = {
    initialize: function () {
        console.log("initialize");

        app.prepareEvents();
    },

    prepareEvents: function () {
        console.log("prepareEvents");

        if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
            document.addEventListener("deviceready", this.onDeviceReady, false);
        } else {
            this.onDeviceReady();
        }
    },

    onDeviceReady: function () {
        console.log("onDeviceReady");

        controller.initialize();

        app.overrideBrowserAlert();
    },

    overrideBrowserAlert: function () {
        console.log("overrideBrowserAlert");

        if (navigator.notification) {
            window.alert = function (message) {
                navigator.notification.alert(message, null, "self-serve", 'OK');
            };
        }
    },
};
