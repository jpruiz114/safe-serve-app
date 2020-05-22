let controller = {
    storageService: null,

    initialize: function () {
        controller.storageService = new StorageService();

        controller.bindEvents();

        controller.renderSearchVenueView();
    },

    bindEvents: function () {
        $(".tab-button").on("click", controller.onTabClick);
    },

    onTabClick: function (e) {
        e.preventDefault();

        if ($(this).hasClass("active")) {
            return;
        }

        let tab = $(this).data("tab");

        if (tab === "#search-tab") {
            controller.renderSearchVenueView();
        }

        if (tab === "#reservations-tab") {
            controller.renderReservationsView();
        }
    },

    renderSearchVenueView: function () {
        $(".tab-button").removeClass("active");
        $("#search-tab-button").addClass("active");

        let $tab = $("#tab-content");
        $tab.empty();

        let $venueTemplate = null;

        $("#tab-content").load("./views/search-venue-view.html", function (data) {
            $("#venueSearch").on("click", function () {
                alert("Not implemented");
            });

            $venueTemplate = $(".venue").remove();

            let listOfVenues = controller.storageService.getListOfVenues();

            for (let index in listOfVenues) {
                let $div = $venueTemplate.clone();
                let venue = listOfVenues[index];

                $div.data("venue-id", venue.id);

                $div.on("click", function () {
                    controller.renderViewVenueView($(this).data("venue-id"));
                });

                $div.find(".venue-name").text(venue.name);
                $div.find(".venue-address").text(venue.address);
                $div.find(".venue-city-state-zip").text(venue.city + ", " + venue.state + " " + venue.zip);
                $div.find(".venue-distance").text(venue.distance);

                $tab.append($div);
            }
        });
    },

    renderViewVenueView: function (venueId) {
        $(".tab-button").removeClass("active");
        $("#search-tab-button").addClass("active");

        let $tab = $("#tab-content");
        $tab.empty();

        let venueDetails = controller.storageService.getVenueDetails(venueId);

        let $venueTemplate = null;

        $("#tab-content").load("./views/view-venue-view.html", function (data) {
            $("#back-to-search-button").on("click", function () {
                controller.renderSearchVenueView();
            });

            $venueTemplate = $(".venue");

            $venueTemplate.data("venue-id", venueDetails.id);

            $venueTemplate.find(".venue-name").text(venueDetails.name);
            $venueTemplate.find(".venue-address").text(venueDetails.address);
            $venueTemplate.find(".venue-city-state-zip").text(venueDetails.city + ", " + venueDetails.state + " " + venueDetails.zip);
            $venueTemplate.find(".venue-distance").text(venueDetails.distance);

            $venueTemplate.find(".outside-availability").text(venueDetails.outsideDining.availability);
            $venueTemplate.find(".outside-estimated-waiting-time").text(venueDetails.outsideDining.estimatedWaitingTime);

            $venueTemplate.find(".inside-availability").text(venueDetails.insideDining.availability);
            $venueTemplate.find(".inside-estimated-waiting-time").text(venueDetails.insideDining.estimatedWaitingTime);
        });
    },

    renderReservationsView: function () {
        $(".tab-button").removeClass("active");
        $("#post-tab-button").addClass("active");

        let $tab = $("#tab-content");
        $tab.empty();

        let $reservationTemplate = null;

        $("#tab-content").load("./views/view-reservations-view.html", function (data) {
            $("#back-to-search-button").on("click", function () {
                controller.renderSearchVenueView();
            });

            $reservationTemplate = $(".reservation").remove();

            let listOfReservations = controller.storageService.getListOfReservations();

            for (let index in listOfReservations) {
                let $div = $reservationTemplate.clone();
                let reservation = listOfReservations[index];

                $div.data("reservation-id", reservation.id);

                $div.on("click", function () {
                    let reservationId = $(this).data("reservation-id");
                    console.log("reservationId: " + reservationId);
                });

                let venue = controller.storageService.getVenueDetails(reservation.venue);

                $div.find(".venue-name").text(venue.name);
                $div.find(".venue-address").text(venue.address);
                $div.find(".venue-city-state-zip").text(venue.city + ", " + venue.state + " " + venue.zip);
                $div.find(".venue-distance").text(venue.distance);

                if (reservation.outsideDining) {
                    $div.find(".option-title").text("Outside Dining");
                }

                if (reservation.insideDining) {
                    $div.find(".option-title").text("Inside Dining");
                }

                $div.find(".place-in-queue").text(reservation.placeInQueue);
                $div.find(".estimated-wait-time").text(reservation.estimatedWaitingTime);

                $tab.append($div);
            }
        });
    }
}
