// https://www.imdb.com/search/title/?title_type=feature&countries=in&languages=hi&sort=release_date,desc&start=1001&ref_=adv_nxt

const moviesList = [
    {
        id: 1001,
        title: "Raktneeti",
        releaseDate: "01",
        genres: ["Thriller"],
        description:
            "Nakul, Rishi and Montu are 3 regular Delhi boys who set out on a journey to sell their car to a buyer in J&K. An accident on the way involving local MLA Abhimanyu Thakur's only son(Devan), ...",
        imgLink:
            "https://m.media-amazon.com/images/M/MV5BY2NiN2Y5MTQtN2IxNS00NGVlLWFiM2QtYTAzNDVkNTkyNTdjXkEyXkFqcGdeQXVyNzMzOTU1Njg@._V1_.jpg",
        director: "Saki Shah",
        stars: ["Rajeev Rana", "Satish Bhat", "Vishwash Chauhan", " Durvesh Rameshwaram"],
        languages: ["Hindi", "English"],
        format: ["2D", "IMAX 2D"]
    },
    {
        id: 1002,
        title: "Elham",
        releaseDate: "01",
        genres: ["Drama"],
        description:
            "The symbiosis of a boy and goat, set around the festival Bakrid.The kid befriends the goat and develops a very special bond though he knows that the goat is brought for a ceremonial sacrifice.",
        imgLink:
            "https://m.media-amazon.com/images/M/MV5BZjBhNDlkMDYtYjRjYy00ZDY0LWFhMDAtYjZhZDQ3ZDgxZDI1XkEyXkFqcGdeQXVyODU2ODIzNTA@._V1_.jpg",
        director: "Dhruva Harsh",
        stars: ["Taiyo Chan", "Tot Chan", "Mahmood Hashmi", "Gunnit Kour"],
        languages: ["Hindi", "English", "Telgu"],
        format: ["2D", "2D SCREEN X"]
    },
    {
        id: 1003,
        title: "One Way",
        releaseDate: "01",
        genres: ["Action", "Drama"],
        description:
            "The Story throw's light on Prarabdh Karma(The Arrow has left the bow) the evil deeds done two decades back is haunting Ranadheer and the love triangle of Pranit which can have Unfortunate consequences.",
        imgLink:
            "https://m.media-amazon.com/images/M/MV5BZWNmZmQxNTYtYmQ4Ni00ZmUxLWEyZmYtZjUzZjkyODFjNDdlXkEyXkFqcGdeQXVyMTU3Nzg5ODIw._V1_.jpg",
        director: "Sachin Kumar Funde",
        stars: ["Pravesh Singh", "Deeptesh Das", "Payal Khurana", "Man Singh Rajput"],
        languages: ["Hindi", "Telugu", "Malayalam"],
        format: ["2D", "IMAX 3D"]
    },
    {
        id: 1004,
        title: "Lakadbaggha",
        releaseDate: "01",
        genres: ["Action", "Comedy", "Crime"],
        description:
            "An animal loving vigilante Arjun Bakshi, unearths the fact that an underground illegal animal trade cell functions from Kolkata port. On investigating he chances upon a rare species of the Indian Striped Hyena (Lakadbaggha).",
        imgLink:
            "https://m.media-amazon.com/images/M/MV5BNDdjNzQ0M2ItZGU1MS00YjUxLWIxZjAtYjU2NjQyZjcxYmRmXkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_.jpg",
        director: "Victor Mukherjee",
        stars: ["Anshuman Jha", "Riddhi Dogra", "Paresh Pahuja", "Milind Soman"],
        languages: ["Hindi", "English", "Telgu", "Tamil"],
        format: ["2D", "IMAX 2D", "3D", "4DX", "3D SCREEN X"]
    },
    {
        id: 1005,
        title: "The Battle of Bhima Koregaon",
        releaseDate: "01",
        genres: ["Action", "Biography", "Drama"],
        description:
            "The movie is based on the Battle of Bhima Koregaon which was fought on 1 January 1818 between the British East India Company and the Peshwa faction of the Maratha Confederacy, at Koregaon Bhima.",
        imgLink:
            "https://m.media-amazon.com/images/M/MV5BMGFlYzkwYmMtZjFmYS00MDMyLWE5NzUtYzEzNmU4NGNmM2ZkXkEyXkFqcGdeQXVyMTE2MjAzMTU3._V1_.jpg",
        director: "Ramesh Thete",
        stars: ["Arjun Rampal", "Sunny Leone", "Digangana Suryavanshi", "Nataliya Kozhenova"],
        languages: ["Hindi"],
        format: ["2D", "IMAX 2D"]
    },
    {
        id: 1006,
        title: "December 24",
        releaseDate: "01",
        genres: ["Horror", "Thriller"],
        description:
            "Finding Medicine for Breathing issues that newborn baby's facing in some parts of the state of karnataka due to some environmental problems.",
        imgLink:
            "https://m.media-amazon.com/images/M/MV5BN2NkYjQ5NmYtNDhjNC00MjZjLTg1NTUtN2M1NjFlOGYxMGNmXkEyXkFqcGdeQXVyMTMzNDMyNjU4._V1_QL75_UY281_CR128,0,190,281_.jpg",
        director: "Nagaraj 'MG' Gowda",
        stars: ["Appu Badiger", "Rakesh Bhoumik", "Jagadeesha H G Doddi", "Ravi K R Pete"],
        languages: ["Hindi", "English", "Punjabi", "Bengali"],
        format: ["2D", "IMAX 2D"]
    },
    {
        id: 1007,
        title: "Waltair Veerayya",
        releaseDate: "01",
        genres: ["Action", "Drama"],
        description:
            "A fisherman who engages in smuggling accepts a request from a disheveled police officer in order to use it to his personal advantage",
        imgLink:
            "https://m.media-amazon.com/images/M/MV5BMzQxYjhmYzgtZTBhYS00MjliLWFkMGUtNjIzN2I1YjhhYzk1XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
        director: "K.S. Ravindra",
        stars: ["Chiranjeevi", "Ravi Teja", "Shruti Haasan", "Catherine Tresa"],
        languages: ["Hindi", "Telgu", "Tamil", "Malayalam", "Kannada"],
        format: ["2D", "IMAX 2D"]
    },
    {
        id: 1008,
        title: "Veera Simha Reddy",
        releaseDate: "01",
        genres: ["Action", "Drama"],
        description:
            "The father of Veera Simha Reddy is a revered man in a village and his son Bala Simha Reddy settles in the USA.When his father gets killed in the village politics, Bala Simha returns to India and takes revenge on who killed his father.",
        imgLink:
            "https://m.media-amazon.com/images/M/MV5BNmE4MTY4NmEtNzM1My00YWU3LTgyOTMtODEwMzQzZWQyOTY3XkEyXkFqcGdeQXVyMTUzOTcyODA5._V1_.jpg",
        director: "Gopichand Malineni ",
        stars: ["Nandamuri Balakrishna", "Shruti Haasan", "Honey Rose", "Duniya Vijay"],
        languages: ["Hindi", "English"],
        format: ["2D", "IMAX 2D"]
    },
    {
        id: 1009,
        title: "Thunivu",
        releaseDate: "01",
        genres: ["Action", "Adventure", "Crime"],
        description:
            "A mysterious mastermind - Daredevil and his team forms a plan and commits bank heist to find the corporate looted people's money.",
        imgLink:
            "https://m.media-amazon.com/images/M/MV5BNDE2ZGUyZDgtYjUxMi00YWNhLTgxZDUtZjExYjRkOGU0MjU1XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
        director: "H. Vinoth",
        stars: ["Ajith Kumar", "Manju Warrier", "Samuthirakani", "John Kokken"],
        languages: ["Hindi", "English"],
        format: ["2D", "IMAX 2D", "4DX"]
    },
    {
        id: 1010,
        title: "Roached",
        releaseDate: "01",
        genres: ["Fantasy", "Mystery"],
        description:
            "Stuck at home amidst the COVID pandemic, a timid housewife finds her world unraveling due to the constant presence of her overbearing husband and a six legged intruder.",
        imgLink:
            "https://m.media-amazon.com/images/M/MV5BZGEyZTg0NDItMmZkZS00N2Y1LTk5ZjYtODBlODZmZjliYmMwXkEyXkFqcGdeQXVyMjExMjU0Njg@._V1_.jpg",
        director: "Kshitij Sharma",
        stars: ["Deeya Dey", "Rudolfo Rajeev Hubert", "Rohit Pareek", "Nishtha Sharma"],
        languages: ["Hindi", "English"],
        format: ["2D", "IMAX 2D"]
    },
    {
        id: 1011,
        title: "Wrong Way",
        releaseDate: "01",
        genres: ["Horror"],
        description:
            "Shiva and his 4 friends are driving to Lonavala to have some good time but little did they know what awaits them",
        imgLink:
            "https://m.media-amazon.com/images/M/MV5BMWUwYWMxNTEtYjg1Yi00NTNiLWE1NzgtMWRhMjI2NGFiY2RhXkEyXkFqcGdeQXVyMzAxNzA0NTM@._V1_.jpg",
        director: "Salil Sand",
        stars: ["Naveen Jagbir Sandhu", "Shiva Dagar", "Ankita Sharma", "Gamya Wijayadasa"],
        languages: ["Hindi", "English"],
        format: ["2D", "IMAX 2D"]
    },
    {
        id: 1012,
        title: "One Last Time",
        releaseDate: "01",
        genres: ["Crime"],
        description:
            'Inspired by the true events, "One Last Time" is a story embedded in social injustice. Mukti, a young 24 year old girl decides against a relationship after a fateful night in a sleaze hotel....',
        imgLink:
            "https://m.media-amazon.com/images/M/MV5BMDk4MThkNTctZDYyMS00ZTgxLTk3YjgtNTM2OTc5MTQ1NTg5XkEyXkFqcGdeQXVyNjMxNzYyMjI@._V1_.jpg",
        director: "Mohinder Pratap Singh",
        stars: ["Boloram Das", "Amitosh Nagpal", "K.J. Singh", "Poornanand Wandhekar"],
        languages: ["Hindi", "English", "Punjabi", "Bengali"],
        format: ["2D", "IMAX 2D"]
    },
    {
        id: 1013,
        title: "The Y",
        releaseDate: "01",
        genres: ["Horror", "Mystery", "Thriller"],
        description:
            "The Female Protagonist is a Mute. After her marriage the couple enters a new chapter of their life but face another dilemma which they least expect. They experience paranormal incidents and their daily life turns into a mysterious tale.",
        imgLink:
            "https://m.media-amazon.com/images/M/MV5BNjhlMDE5MWEtMDg2My00ZmNmLTgwYWQtODg3ZjdiNWIxNTQwXkEyXkFqcGdeQXVyNjIxNDk4NTM@._V1_.jpg",
        director: "Girideva Raaj",
        stars: ["Yuvan Hariharan", "Leonilla, Apsara", "Chethan A"],
        languages: ["Hindi", "English", "Telgu", "Tamil"],
        format: ["2D", "IMAX 2D", "3D", "4DX", "3D SCREEN X"]
    },
    {
        id: 1014,
        title: "Kanwar",
        releaseDate: "01",
        genres: ["Drama"],
        description:
            "Dance of sin and morality in the chaotic world of Kanwar pilgrimage that pushes a group of boys to a gray area between right and wrong.",
        imgLink:
            "https://m.media-amazon.com/images/M/MV5BM2YwMjgyOTAtZTA4NS00YjFhLThlNjctNDRhMjcxMTE2ZTczXkEyXkFqcGdeQXVyMTYxNzA0NDA2._V1_.jpg",
        director: "Praful Tyagi",
        stars: ["Amit Malik", "Nitin Rao", "Narendra Rao", "Rishab Parashar"],
        languages: ["Hindi", "English", "Punjabi", "Bengali"],
        format: ["2D", "IMAX 2D"]
    },
    {
        id: 1015,
        title: "Mask",
        releaseDate: "01",
        genres: ["Drama"],
        description:
            "",
        imgLink:
            "https://m.media-amazon.com/images/M/MV5BOTk3ZmRlODMtZGZlYi00ZTgzLWEyOWYtMGVmZTJlYzNmZDE1XkEyXkFqcGdeQXVyMTk3MTE2NQ@@._V1_.jpg",
        director: "Ashish Kumar",
        stars: ["Brijendra Kala"],
        languages: ["Hindi", "English"],
        format: ["2D", "IMAX 2D"]
    },
    {
        id: 1016,
        title: "Bluff",
        releaseDate: "01",
        genres: ["Crime", "Drama", "Mystery"],
        description:
            'A suspect of murder goes "by hook or by crook" way to prove himself not guilty.',
        imgLink:
            "https://m.media-amazon.com/images/M/MV5BMDdlOTNkNzUtYjRjNy00MjYyLWFkNTEtYTI3ZWM0MDFlOGRlXkEyXkFqcGdeQXVyMTIxMjI2MTg0._V1_.jpg",
        director: "Ravikant Narayan",
        stars: ["Kuldeep Singh", "Rakhi Nagar", "Puneet Kunchhal", "Moni Shankar"],
        languages: ["Hindi", "English", "Punjabi", "Bengali"],
        format: ["2D", "IMAX 2D"]
    },
    {
        id: 1017,
        title: "Chaalbaaz in London",
        releaseDate: "01",
        genres: ["Comedy"],
        description:
            "Chaalbaaz In London is a Bollywood comedy movie, directed by Pankaj Parashar. The cast of Chaalbaaz In London includes Shraddha Kapoor",
        imgLink:
            "https://m.media-amazon.com/images/M/MV5BNWRkNjRjZDYtYWRmNi00ZTExLTljODgtY2U3NDMyODk4YjI1XkEyXkFqcGdeQXVyMTMxNjU2NTU1._V1_.jpg",
        director: "Pankaj Parashar",
        stars: ["Shraddha Kapoor"],
        languages: ["Hindi", "English"],
        format: ["2D", "IMAX 2D"]
    },
    {
        id: 1018,
        title: "Backfire",
        releaseDate: "01",
        genres: ["Mystery"],
        description:
            "",
        imgLink:
            "https://m.media-amazon.com/images/M/MV5BMjllZGVjYTEtZDAwYi00ZjdiLTk1NzktYzE0ZWNmYTQ2ZjFhXkEyXkFqcGdeQXVyMjEzNzg4NjU@._V1_.jpg",
        director: "Ashok K Mishra",
        stars: ["Sandeepa Dhar", "Karan Singh Grover", "Kay Kay Menon", "Neil Nitin Mukesh"],
        languages: ["Hindi", "English", "Punjabi", "Bengali"],
        format: ["2D", "IMAX 2D"]
    },
    {
        id: 1019,
        title: "Chalti Rahe Zindagi",
        releaseDate: "01",
        genres: ["Drama"],
        description:
            "Krishna Bhagat is a local bread supplier in three different families of a housing complex - it's the early times of the pandemic setting in. A lockdown is announced and that sets to change ...",
        imgLink:
            "https://m.media-amazon.com/images/M/MV5BNjQwODg3NGItYWI2MC00MDg5LWJiODMtMTRkZjkxOTY0ZjBjXkEyXkFqcGdeQXVyMjEzNzg4NjU@._V1_.jpg",
        director: "Aarti S. Bagdi",
        stars: ["Seema Biswas", "Manjari Fadnnis", "Siddhant Kapoor", "Indraneil Sengupta"],
        languages: ["Hindi", "English", "Punjabi", "Bengali"],
        format: ["2D", "IMAX 2D"]
    },
    {
        id: 1020,
        title: " Main Raj Kapoor Ho Gaya",
        releaseDate: "01",
        genres: ["Drama"],
        description:
            "A man who despite being born in a world full of hoggish beliefs, chooses to live a life of truth and honesty. He believes the fact that God created everyone as equals. Can he fight the system with his beliefs?",
        imgLink:
            "https://m.media-amazon.com/images/M/MV5BYjkzOWRjOWItZGUwOS00ZDk0LTgyNzMtMDU3M2JjNTkzYjdhXkEyXkFqcGdeQXVyMTYxNzk0Mzcy._V1_.jpg",
        director: "Manav Sohal",
        stars: ["Shravani Goswami", "Anant Jog", "Harshita Kashyap", "Arshin Mehta"],
        languages: ["Hindi", "English", "Telgu", "Tamil"],
        format: ["2D", "IMAX 2D", "3D", "4DX", "3D SCREEN X"]
    },
];

module.exports.moviesList = moviesList;
