let StorageService = function () {
    let service = {
        initialize: function () {
            console.log("initialize");

            this.initializeListOfVenues();
            this.initializeListOfReservations();
        },

        getRandomDistance: function (maxDistance) {
            return Math.floor(Math.random() * Math.floor(maxDistance)) + Math.round(Math.random() * 10) / 10;
        },

        getNumberInRange: function (min, max) {
            return Math.round(Math.random() * (max - min) + min);
        },

        listOfVenues: [],

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
        },

        getVenueDetails: function (venueId) {
            let result = this.listOfVenues.filter(obj => {
                return obj.id === venueId
            });

            return result[0];
        },

        listOfReservations: [],

        initializeListOfReservations: function () {
            this.listOfReservations = [
                {
                    id: 1,
                    venue: 1,
                    outsideDining: true,
                    insideDining: false,
                    placeInQueue: this.getNumberInRange(5, 20),
                    estimatedWaitingTime: this.getNumberInRange(5, 30) + " minutes"
                },
                {
                    id: 2,
                    venue: 4,
                    outsideDining: false,
                    insideDining: true,
                    placeInQueue: this.getNumberInRange(5, 20),
                    estimatedWaitingTime: this.getNumberInRange(5, 30) + " minutes"
                },
            ];
        },

        getListOfReservations: function () {
            return this.listOfReservations;
        },

        /**
         * Removes a specific reservation by id doing a filter by the opposite predicate.
         * @param reservationId
         */
        removeReservation: function (reservationId) {
            this.listOfReservations = $.grep(this.listOfReservations, function (element) {
                return element.id != reservationId;
            });
        }
    };

    service.initialize();
    return service;
}
