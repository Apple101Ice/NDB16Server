const theatreList = [
    {
        id: 001,
        name: "PVR Cinemas",
        locations: ["Mumbai", "Delhi", "Bangalore", "Chennai"],
        address: "Multiple locations",
        screens: 10,
        showtiming: [
            { slot1: { starttime: "09:30 AM", bookedSeats: [] } },
            { slot2: { starttime: "12:30 PM", bookedSeats: [] } },
            { slot3: { starttime: "06:30 PM", bookedSeats: [] } }
        ],
        ticketprice: { Classic: 300, Prime: 700, Recliners: 1200 },
        seatsLayout: {
            Recliners: "K-K:1-4,5-8,9-12",
            Prime: "J-I:1-8,9-16",
            Classic: "H-A:1-10,11-20,21-30"
        },
        amenities: ["IMAX 2D", "IMAX 3D", "4DX", "Dolby Atmos"],
        ticketCancellable: true,
        mticket: true,
        foodbeverage: true,
        rating: 4.5,
        website: "https://www.pvrcinemas.com/",
    },
    {
        id: 002,
        name: "INOX Cinemas",
        locations: ["Hyderabad", "Kolkata", "Ahmedabad", "Pune"],
        address: "Multiple locations",
        screens: 8,
        showtiming: [
            { slot1: { starttime: "09:30 AM", bookedSeats: [] } },
            { slot2: { starttime: "06:30 PM", bookedSeats: [] } }
        ],
        ticketprice: { Classic: 200, Prime: 500, Recliners: 900 },
        seatsLayout: {
            Recliners: "O-O:1-8,9-16",
            Prime: "N-M:1-5,6-10,11-15,16-20",
            Classic: "L-A:1-8,9-16,17-24"
        },
        amenities: ["IMAX 2D", "Dolby Atmos"],
        ticketCancellable: false,
        mticket: true,
        foodbeverage: false,
        rating: 4.2,
        website: "https://www.inoxmovies.com/",
    },
    {
        id: 003,
        name: "Cinepolis",
        locations: ["Gurgaon", "Jaipur", "Chandigarh", "Noida"],
        address: "Multiple locations",
        screens: 12,
        showtiming: [
            { slot1: { starttime: "09:30 PM", bookedSeats: [] } },
            { slot2: { starttime: "11:30 PM", bookedSeats: [] } },
            { slot3: { starttime: "02:00 PM", bookedSeats: [] } },
            { slot4: { starttime: "05:00 PM", bookedSeats: [] } },
            { slot5: { starttime: "07:00 PM", bookedSeats: [] } },
            { slot6: { starttime: "09:00 PM", bookedSeats: [] } },
        ],
        ticketprice: { Classic: 300, Prime: 700, PrimePro: 1200, Recliners: 1600 },
        seatsLayout: {
            Recliners: "P-P:1-4,5-8,9-12",
            PrimePro: "N-N:1-10,11-20",
            Prime: "M-L:1-15,16-30",
            Classic: "K-A:1-12,13-24,25-36"
        },
        amenities: ["IMAX 2D", "4DX", "Dolby Atmos"],
        ticketCancellable: true,
        mticket: false,
        foodbeverage: true,
        rating: 4.3,
        website: "https://www.cinepolisindia.com/",
    },
    {
        id: 004,
        name: "SPI Cinemas",
        locations: ["Chennai", "Coimbatore", "Trivandrum", "Bangalore"],
        address: "Multiple locations",
        screens: 6,
        showtiming: [
            { slot1: { starttime: "09:30 AM", bookedSeats: [] } },
            { slot2: { starttime: "06:30 PM", bookedSeats: [] } },
            { slot3: { starttime: "05:00 PM", bookedSeats: [] } },
            { slot4: { starttime: "07:00 PM", bookedSeats: [] } },
            { slot5: { starttime: "09:00 PM", bookedSeats: [] } },
        ],
        ticketprice: { Classic: 200, Prime: 500, PrimePro: 700, Recliners: 1200 },
        seatsLayout: {
            Recliners: "M-M:1-6,7-12",
            PrimePro: "L-K:1-8,9-16",
            Prime: "J-I:1-10,11-20",
            Classic: "H-A:1-8,9-16,17-24"
        },
        amenities: ["IMAX 2D", "Dolby Atmos"],
        ticketCancellable: true,
        mticket: true,
        foodbeverage: false,
        rating: 4.1,
        website: "https://www.spicinemas.in/",
    },
    {
        id: 005,
        name: "Mirag Cinemas",
        locations: ["Chennai", "Coimbatore", "Trivandrum", "Bangalore"],
        address: "Multiple locations",
        screens: 6,
        showtiming: [
            { slot1: { starttime: "09:30 AM", bookedSeats: [] } },
            { slot2: { starttime: "06:30 PM", bookedSeats: [] } }
        ],
        ticketprice: { Classic: 200, Prime: 500, PrimePro: 700, Recliners: 1200 },
        seatsLayout: {
            Recliners: "L-L:1-6,7-12",
            Prime: "J-I:1-10,11-20",
            Classic: "H-A:1-8,9-16,17-24"
        },
        amenities: ["IMAX 2D", "Dolby Atmos"],
        ticketCancellable: true,
        mticket: true,
        foodbeverage: false,
        rating: 4.1,
        website: "https://www.spicinemas.in/",
    },
];

module.exports.theatreList = theatreList;

