
const theatreList = [
    {
        id: 001,
        name: "PVR Cinemas",
        locations: ["Mumbai", "Delhi", "Bangalore", "Chennai"],
        address: "Multiple locations",
        screens: 10,
        showtiming: [{ slot1: { starttime: "09:30 AM" } }, { slot2: { starttime: "12:30 PM" } }, { slot3: { starttime: "06:30 PM" } }],
        ticketprice: { Regular: 100, Premium: 300, VIP: 500 },
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
        showtiming: [{ slot1: { starttime: "09:30 AM" } }, { slot2: { starttime: "06:30 PM" } },],
        ticketprice: { Regular: 200, Premium: 500, VIP: 700 },
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
        showtiming: [{ slot1: { starttime: "12:30 PM" } }, { slot2: { starttime: "03:00 PM" } }, { slot3: { starttime: "06:00 PM" } }],
        ticketprice: { Regular: 50, Premium: 100, VIP: 300 },
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
        showtiming: [{ slot1: { starttime: "09:30 AM" } }, { slot2: { starttime: "06:30 PM" } },],
        ticketprice: { Regular: 100, Premium: 400, VIP: 600 },
        amenities: ["IMAX 2D", "Dolby Atmos"],
        ticketCancellable: true,
        mticket: true,
        foodbeverage: false,
        rating: 4.1,
        website: "https://www.spicinemas.in/",
    },
];


module.exports.theatreList = theatreList;