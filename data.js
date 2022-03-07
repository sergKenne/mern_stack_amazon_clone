//import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Basir',
            email: 'admin@example.com',
            //password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
            isSeller: true,
            seller: {
                name: 'Puma',
                logo: '/images/logo1.png',
                description: 'best seller',
                rating: 4.5,
                numReviews: 120,
            },
        },
        {
            name: 'John',
            email: 'user@example.com',
            //password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products: [
        {
            name: 'Pant - WomenACCESS PANTS W BLUE',
            category: 'Pants',
            image: '/images/p2.jpg',
            price: 50,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description:
                "Perfect for one-day hikes and weekend explorations. With its lightweight fabric which also has a plant repellent treatment with geraniol against mosquitoes, the ACCESS PANT W is a seriously functional item for all your sporting activities. Its strong outdoor look adapts easily to your playgrounds. Both lightweight and breathable, these ACCESS PANTS women's hiking trousers are your all-terrain option for all your outdoors escapades. Their instant-drying fabric makes life in humid conditions. With their feminine yet comfortable cut with multiple practical pockets, these ACCESS PANTS W women's trousers wth their plant-based geraniol repellent coating are designed so you can admire the starry skies in summer without worrying about mosquitoes when night falls.",
        },
        {
            name: 'Carhartt WIP Sid Pant',
            category: 'Pants',
            image: '/images/p3.jpg',
            price: 100,
            countInStock: 20,
            brand: 'Adidas',
            rating: 2.5,
            numReviews: 10,
            description:
                'A brand staple from Carhartt WIP, the versatile Sid pants are cut to a slim, tapered fit from a mid-weight stretch twill. Styled in a rinsed black, this pair are a perfect choice for your everyday wear and are sure to go with pretty much anything in your wardrobe.',
        },
        {
            name: 'Jordan 23 Engineered',
            category: 'Pants',
            image: '/images/p4.jpg',
            price: 220,
            countInStock: 0,
            brand: 'Nike',
            rating: 3.8,
            numReviews: 17,
            description:
                'Улицы города — идеальная площадка, чтобы продемонстрировать футуристическую версию легендарных брюк Jordan 23 Engineered. Jordan 23 Engineered — сочетание плотного и мягкого флиса с ткаными накладками для создания стильного образа. Облегающий силуэт с карманами на молнии и светоотражающей графикой подчеркнут твою индивидуальность. Модель не менее чем на 75% изготовлена из экологичных материалов: переработанного полиэстера и органического хлопка. В состав смесовой ткани входит не менее 10% переработанных волокон или не менее 10% органического хлопка.',
        },
        {
            name: 'Toronto Raptors Courtside',
            category: 'Pants',
            image: '/images/p5.jpg',
            price: 78,
            countInStock: 15,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 14,
            description:
                'Брюки Toronto Raptors Courtside созданы для максимального комфорта. Эти брюки с манжетами из плотного флиса с начесом украшены боковыми вставками с символикой команды и особым логотипом в честь 75-летия НБА.',
        },
        {
            name: 'Nike Dri-FIT ADV AeroSwift',
            category: 'Pants',
            image: '/images/p6.jpg',
            price: 65,
            countInStock: 5,
            brand: 'Nike',
            rating: 3.8,
            numReviews: 10,
            description:
                'Твой упорный труд привел тебя на стартовую линию. Тайтсы Nike Dri-FIT ADV AeroSwift — твой первый шаг к успешному финишу. Эти невероятно гладкие и легкие тайтсы с надежной посадкой помогут тебе ставить личные рекорды. В составе модели не менее 75% переработанного полиэстера.',
        },
        {
            name: 'Nike Dri-FIT',
            category: 'Pants',
            image: '/images/p7.jpg',
            price: 148,
            countInStock: 12,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 15,
            description:
                'Легкие и эластичные брюки Nike Dri-FIT позволяют играть весь матч в полном комфорте. Благодаря немного зауженному крою и заниженному шаговому шву эту повседневную модель в уличном стиле можно использовать в разных образах для любой ситуации.',
        },

        {
            name: "Symbol Men's Regular Shirt",
            category: 'Shirts',
            image: '/images/s1.jpg',
            price: 95,
            countInStock: 12,
            brand: 'Amazon Brand',
            rating: 1.5,
            numReviews: 15,
            description:
                'An Amazon brand, Symbol is built on the pillars of quality, reliability and affordability, offering a range of lifestyle essentials that help you look good every day. This classic formal shirt is crafted with precision in cotton blend, two tone Fil a Fil fabric, to offer enhanced comfort and style, all at a great value. This shirt comes in a range of colors to choose for any formal or semi formal ocassion. To complete the look, pair it with an elegant solid formal trouser and brown leather shoes for a lasting impression. Now, look good every day with Symbol fashion essentials.',
        },
        {
            name: "Symbol Men's Regular Shirt",
            category: 'Shirts',
            image: '/images/s2.jpg',
            price: 148,
            countInStock: 7,
            brand: 'Amazon Brand',
            rating: 5,
            numReviews: 15,
            description:
                'The cloth quality is very poor and seems like it is very heap. Also, it is very thin and in case you wear it with a dark coloured vest, it will show the colour of the vest..',
        },
        {
            name: 'Park Avenue Printed MediumBlue Coloured Cotton Blend Shirt',
            category: 'Shirts',
            image: '/images/s3.jpg',
            price: 8,
            countInStock: 12,
            brand: 'Amazon Brand',
            rating: 4.5,
            numReviews: 15,
            description:
                "Fitting perfect as order the color slitely up and down it's was my first time I usually order mobile , shoes but clothes I didn't order . Quality of the product looking good watting for the day to use it.i was little scared of fitting but the fitting was bang on the size chart was very helpful",
        },
        {
            name: 't-shirt jesta',
            category: 'Shirts',
            image: '/images/s4.jpg',
            price: 39,
            countInStock: 0,
            brand: 'ECOVERO',
            rating: 3.2,
            numReviews: 11,
            description:
                "Imaginée dans une coupe fittée et fluide, la chemise Jesta porte un motif fleuri et aux inspirations cachemire. Douce et confortable, elle s'adapte à toutes vos envies de style: associée à un jean, elle sera décontractée. Portée sur une jupe en crêpe noire, elle orne un côté féminin et plus distingué.",
        },
        {
            name: "Men's Capilene",
            category: 'Shirts',
            image: '/images/s5.jpg',
            price: 67,
            countInStock: 12,
            brand: 'Capilene',
            rating: 4.5,
            numReviews: 4,
            description:
                'Легкие и эластичные брюки Nike Dri-FIT позволяют играть весь матч в полном комфорте. Благодаря немного зауженному крою и заниженному шаговому шву эту повседневную модель в уличном стиле можно использовать в разных образах для любой ситуации.',
        },
        {
            name: 'GREY SOLID SHIRT',
            category: 'Shirts',
            image: '/images/s6.jpg',
            price: 37,
            countInStock: 4,
            brand: 'CAVALLO',
            rating: 1,
            numReviews: 8,
            description:
                'Легкие и эластичные брюки Nike Dri-FIT позволяют играть весь матч в полном комфорте. Благодаря немного зауженному крою и заниженному шаговому шву эту повседневную модель в уличном стиле можно использовать в разных образах для любой ситуации.',
        },
        {
            name: 'Man Formal Shirts Suit',
            category: 'Shirts',
            image: '/images/s7.jpg',
            price: 304,
            countInStock: 12,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 15,
            description:
                'Man Formal Shirt Photo Suit app will help you to choose best designer dresses because People are too busy in their daily life and don’t have time to choose fashion dresses',
        },
        {
            name: 'Formal Shirts',
            category: 'Shirts',
            image: '/images/s8.jpg',
            price: 20,
            countInStock: 12,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 15,
            description:
                'Man Formal Shirt Photo Suit app will help you to choose best designer dresses because People are too busy in their daily life and don’t have time to choose fashion dresses',
        },
        {
            name: 'Nike Dri-FIT',
            category: 'Shorts',
            image: '/images/sh1.jpeg',
            price: 29,
            countInStock: 2,
            brand: 'Adidas',
            rating: 2.3,
            numReviews: 15,
            description: "WSEVYPO Men's 3/4 Jogger Capri Pants Sport Shorts Running Trouser With",
        },
        {
            name: "Ma Croix Men's Mesh Shorts ",
            category: 'Shorts',
            image: '/images/sh2.jpeg',
            price: 39,
            countInStock: 7,
            brand: 'Adidas',
            rating: 1.5,
            numReviews: 25,
            description:
                'Mesh Shorts that’s brought to you at bargain price; in many colors; provides comfort, utility, and durability into one package. Shorts that can be used in any and all situations. Go running and these shorts are sure not to absorb any moisture.',
        },
        {
            name: 'Fruit of the Loom',
            category: 'Shorts',
            image: '/images/sh3.jpg',
            price: 139,
            countInStock: 12,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 15,
            description:
                'Легкие и эластичные брюки Nike Dri-FIT позволяют играть весь матч в полном комфорте. Благодаря немного зауженному крою и заниженному шаговому шву эту повседневную модель в уличном стиле можно использовать в разных образах для любой ситуации.',
        },

        {
            name: 'Wesley Milestone 15.6',
            category: 'Bags',
            image: '/images/b1.jpeg',
            price: 39,
            countInStock: 7,
            brand: 'Wesley',
            rating: 1.5,
            numReviews: 25,
            description:
                'Wesley Milestone 15.6 inch 25 L Casual Waterproof Laptop Backpack/Office Bag/School Bag/College Bag/Business Bag/Unisex Travel Backpack',
        },
        {
            name: 'Lenovo Slim Everyday Backpack',
            category: 'Bags',
            image: '/images/b2.jpeg',
            price: 139,
            countInStock: 12,
            brand: 'Lenovo',
            rating: 5,
            numReviews: 15,
            description:
                'Slim, compact & sturdy: Minimal and compact design for professionals: Joint material design, durable, water-resistant polyester material. The padded shoulder straps, handle, and back panel provides protection and all-day comfort',
        },
        {
            name: 'AH Arctic Hunter Laptop Backpack,',
            category: 'Bags',
            image: '/images/b3.jpeg',
            price: 99,
            countInStock: 7,
            brand: 'Hunter',
            rating: 3.9,
            numReviews: 25,
            description:
                'eparate laptop compartment hold 15.6 Inch Laptop as well as 15 Inch,14 Inch and 13 Inch Macbook/Laptop. Spacious packing compartment for daily Luch box and clothing.Third compartment with many small pockets for necessities,electronics ,pen and key fob hook, make your items organized and easier to find. ',
        },
        {
            name: 'ZOUK BWhite Arrow Handmade',
            category: 'Bags',
            image: '/images/b4.jpg',
            price: 139,
            countInStock: 12,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 15,
            description:
                'Our Stylish Office Bag For Women Is An Ideal Laptop Bag, Handbag Or A Professional Bag. It Can Fit A Laptop Of Upto 15.6 Inches And Is Perfect For Macbook, Chromebook, Ipad, Tablet, Hp, Lenovo, Dell Etc. Dimensions: 18 X 13 X 4 Inch',
        },
        {
            name: "Ma Croix Men's Mesh Bag ",
            category: 'Bags',
            image: '/images/b5.jpeg',
            price: 39,
            countInStock: 7,
            brand: 'Adidas',
            rating: 1.5,
            numReviews: 25,
            description:
                'Mesh Shorts that’s brought to you at bargain price; in many colors; provides comfort, utility, and durability into one package. Shorts that can be used in any and all situations. Go running and these shorts are sure not to absorb any moisture.',
        },
        {
            name: 'LV Genuine Leather Laptop Bags for Men Office',
            category: 'Bags',
            image: '/images/b6.jpeg',
            price: 339,
            countInStock: 5,
            brand: 'LV Genuine',
            rating: 2.3,
            numReviews: 15,
            description:
                'Легкие и эластичные брюки Nike Dri-FIT позволяют играть весь матч в полном комфорте. Благодаря немного зауженному крою и заниженному шаговому шву эту повседневную модель в уличном стиле можно использовать в разных образах для любой ситуации.',
        },

        {
            name: 'Aluminum Case with Sport Band ',
            category: 'Watch',
            image: '/images/w1.jpeg',
            price: 39,
            countInStock: 7,
            brand: 'Apple',
            rating: 1.5,
            numReviews: 25,
            description:
                'Mesh Shorts that’s brought to you at bargain price; in many colors; provides comfort, utility, and durability into one package. Shorts that can be used in any and all situations. Go running and these shorts are sure not to absorb any moisture.',
        },
        {
            name: 'Apple Watch Series 6 GPS',
            category: 'Watch',
            image: '/images/w2.jpeg',
            price: 139,
            countInStock: 5,
            brand: 'LV Genuine',
            rating: 3.3,
            numReviews: 15,
            description:
                'Легкие и эластичные брюки Nike Dri-FIT позволяют играть весь матч в полном комфорте. Благодаря немного зауженному крою и заниженному шаговому шву эту повседневную модель в уличном стиле можно использовать в разных образах для любой ситуации.',
        },
        {
            name: 'Apple Watch Series 6 GPS-456',
            category: 'Watch',
            image: '/images/w3.jpeg',
            price: 229,
            countInStock: 5,
            brand: 'LV Genuine',
            rating: 5,
            numReviews: 15,
            description:
                'Легкие и эластичные брюки Nike Dri-FIT позволяют играть весь матч в полном комфорте. Благодаря немного зауженному крою и заниженному шаговому шву эту повседневную модель в уличном стиле можно использовать в разных образах для любой ситуации.',
        },
    ],
};

module.exports =  data;
