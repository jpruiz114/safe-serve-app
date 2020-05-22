let StorageService = function () {
    let service = {
        initialize: function () {
            console.log("initialize");

            this.initializeListOfVenues();
        },

        /**
         *
         * @param venueId
         * @returns {*}
         */
        getVenueDetails: function (venueId) {
            let result = this.listOfVenues.filter(obj => {
                return obj.id === venueId
            });

            return result[0];
        },

        /**
         *
         * @param maxDistance
         * @returns {number}
         */
        getRandomDistance: function (maxDistance) {
            return Math.floor(Math.random() * Math.floor(maxDistance)) + Math.round(Math.random() * 10) / 10;
        },

        /**
         *
         * @param min
         * @param max
         * @returns {*}
         */
        getNumberInRange: function (min, max) {
            return Math.round(Math.random() * (max - min) + min);
        },

        listOfVenues: null,

        initializeListOfVenues: function () {
            this.listOfVenues = [
                {
                    id: 1,
                    name: "Mr. Gyros",
                    address: "3725 S Orange Blossom Trail",
                    city: "Orlando",
                    state: "FL",
                    zip: 32839,
                    distance: this.getRandomDistance(5) + " mi",
                    outsideDining: {
                        availability: "At Capacity",
                        estimatedWaitingTime: this.getNumberInRange(5, 30) + " minutes"
                    },
                    insideDining: {
                        availability: "Available Now",
                        estimatedWaitingTime: "0 minutes"
                    }
                },
                {
                    id: 2,
                    name: "Tijuana Flats",
                    address: "4693 Gardens Park Blvd #101",
                    city: "Orlando",
                    state: "FL",
                    zip: 32839,
                    distance: this.getRandomDistance(5) + " mi",
                    outsideDining: {
                        availability: "At Capacity",
                        estimatedWaitingTime: this.getNumberInRange(5, 30) + " minutes"
                    },
                    insideDining: {
                        availability: "Available Now",
                        estimatedWaitingTime: "0 minutes"
                    }
                },
                {
                    id: 3,
                    name: "Krispy Kreme",
                    address: "4080 Millenia Ave",
                    city: "Orlando",
                    state: "FL",
                    zip: 32839,
                    distance: this.getRandomDistance(5) + " mi",
                    outsideDining: {
                        availability: "At Capacity",
                        estimatedWaitingTime: this.getNumberInRange(5, 30) + " minutes"
                    },
                    insideDining: {
                        availability: "Available Now",
                        estimatedWaitingTime: "0 minutes"
                    }
                },
                {
                    id: 4,
                    name: "McDonald's",
                    address: "4640 S Orange Blossom Trail",
                    city: "Orlando",
                    state: "FL",
                    zip: 32839,
                    distance: this.getRandomDistance(5) + " mi",
                    outsideDining: {
                        availability: "At Capacity",
                        estimatedWaitingTime: this.getNumberInRange(5, 30) + " minutes"
                    },
                    insideDining: {
                        availability: "Available Now",
                        estimatedWaitingTime: "0 minutes"
                    }
                },
                {
                    id: 5,
                    name: "Zoës Kitchen",
                    address: "4724 Millenia Plaza Way Suite C",
                    city: "Orlando",
                    state: "FL",
                    zip: 32839,
                    distance: this.getRandomDistance(5) + " mi",
                    outsideDining: {
                        availability: "At Capacity",
                        estimatedWaitingTime: this.getNumberInRange(5, 30) + " minutes"
                    },
                    insideDining: {
                        availability: "Available Now",
                        estimatedWaitingTime: "0 minutes"
                    }
                }
            ];
        },

        getListOfVenues: function () {
            return this.listOfVenues;
        }
    };

    service.initialize();
    return service;
}
