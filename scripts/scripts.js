// Данные фильмов
    const movies = [
        {
            id: 1,
            title: "Начало",
            poster: "fonds/nachalo.webp",
            description: "Кобб – талантливый вор, лучший из лучших в опасном искусстве извлечения: он крадет ценные секреты из глубин подсознания во время сна, когда человеческий разум наиболее уязвим. Редкие способности Кобба сделали его ценным игроком в привычном к предательству мире промышленного шпионажа, но они же превратили его в извечного беглеца и лишили всего, что он когда-либо любил. И вот у Кобба появляется шанс исправить ошибки. Его последнее дело может вернуть все назад, но для этого ему нужно совершить невозможное – инициацию. Вместо идеальной кражи Кобб и его команда спецов должны будут провернуть обратное. Теперь их задача – не украсть идею, а внедрить ее. Если у них получится, это и станет идеальным преступлением. Но никакое планирование или мастерство не могут подготовить команду к встрече с опасным противником, который, кажется, предугадывает каждый их ход. Врагом, увидеть которого мог бы лишь Кобб.",
            trailers: {
                "720": "content/nach720.wmv",
                "480": "content/nach480.mp4"
            },
            genres: ["Фантастика", "Триллер", "Драма"],
            cast: [
                { name: "Леонардо Ди Каприо — Кобб", photo: "https://avatars.mds.yandex.net/get-entity_search/10702890/1219714372/SUx182" },
                { name: "Джозеф Гордон-Левитт — Артур", photo:"https://avatars.mds.yandex.net/get-entity_search/2079849/1202989694/SUx182_2x"} ,
                { name: "Эллен Пейдж (Эллиот Пейдж) — Ариадна", photo:"https://avatars.mds.yandex.net/get-entity_search/1989973/1219249220/SUx182"},
                { name: "Том Харди — Эймс", photo: "https://avatars.mds.yandex.net/get-entity_search/5126074/1219658198/SUx182_2x" },
                { name: "Кен Ватанабэ — Саито", photo: "https://avatars.mds.yandex.net/i?id=b29db0c55e37739048d17a6cefc6fa05bcae32bf-7716570-images-thumbs&n=13" }
            ]
        },
        {
            id: 2,
            title: "Офис",
            poster: "fonds/ofis.webp",
            description: "Сериал о трудовых буднях небольшого регионального офиса крупной компании, обитатели которого целыми днями должны терпеть закидоны своего непутевого босса.",
            trailers: {
                "1080": "content/ofis1080.mp4",
                "720": "content/ofis720.mp4",
                "480": "content/ofis480.mp4"
            },
            genres: ["Комедия", "Ситком"],
            cast: [
                { name: "Стив Карелл — Майкл Скотт", photo: "https://avatars.mds.yandex.net/get-entity_search/901699/1219801762/SUx182_2x" },
                { name: "Рейн Уилсон — Дуайт Шрут", photo:"https://avatars.mds.yandex.net/get-entity_search/5098099/1222875683/SUx182"} ,
                { name: "Джон Красински — Джим Хэлперт", photo:"https://avatars.mds.yandex.net/get-entity_search/4789399/851650899/SUx182_2x"},
                { name: "Дженна Фишер — Пэм Бисли", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPAy8-Sz6DLLfWH9qwKW39ojSdDFAFA1ZSfVF2lZK1PSb3n189" },
                { name: "Минди Кейлинг — Келли Капур", photo: "https://wallpapers.com/images/hd/mindy-kaling-indian-american-actress-xiusk51euicdk1lg.jpg" }
            ]
        },
        {
            id: 3,
            title: "Сорвиголова",
            poster: "fonds/sorvi.webp",
            description: "В результате несчастного случая юный Мэтт Мердок теряет зрение, но зато все остальные его чувства усиливаются в десятки раз. Повзрослев, Мердок понимает, что хочет посвятить свою жизнь защите людей и борьбе с преступностью. Днем он — успешный адвокат, а ночью — мститель в маске по прозвищу Сорвиголова.",
            trailers: {
                "1080": "content/1080.mp4",
                "720": "content/720.mp4",
                "480": "content/480.mp4"
            },
            genres: ["Экшен", "Фантастика", "Криминал", "Драма"],
            cast: [ 
                { name:"Чарли Кокс — Мэтт Мёрдок", photo:"https://avatars.mds.yandex.net/i?id=224299173bab3a819be740f04094a03029ff717b-4374572-images-thumbs&n=13" },
                { name: "Дебора Энн Уолл — Карен Пейдж", photo:"https://is1-ssl.mzstatic.com/image/thumb/F7n6nXwxqcvqHlw2LFPcjw/1200x675mf.jpg"},
                { name: "Элден Хенсон — Фогги Нельсон", photo:"https://avatars.mds.yandex.net/i?id=9049a450110fad113b89728634cf62d62cfc89cda742feea-5569949-images-thumbs&n=13"},
                { name: "Винсент Д’Онофрио — Кингпин", photo: "https://avatars.mds.yandex.net/get-entity_search/2057673/1219741292/SUx182_2x" },
                { name: "Джон Бернтал — Каратель", photo: "https://avatars.mds.yandex.net/get-entity_search/118114/1065572932/SUx182_2x" }
            ]
        },
        {
            id: 4,
            title: "Очень странные дела",
            poster: "fonds/osd.webp",
            description: "1980-е годы, тихий провинциальный американский городок. Благоприятное течение местной жизни нарушает загадочное исчезновение подростка по имени Уилл. Выяснить обстоятельства дела полны решимости родные мальчика и местный шериф, также события затрагивают лучшего друга Уилла – Майка. Он начинает собственное расследование. Майк уверен, что близок к разгадке, и теперь ему предстоит оказаться в эпицентре ожесточенной битвы потусторонних сил.",
            trailers: {
                "1080": "content/1080.mp4",
                "720": "content/720.mp4",
                "480": "content/480.mp4"
            },
            genres: ["Экшен", "Фантастика", "Ужасы", "Детектив"],
            cast: [
                { name:"Милли Бобби Браун — Одиннадцать", photo:"https://avatars.mds.yandex.net/i?id=7cc15e30b6b63214907e9a380f8a37cee4255c3b-5295804-images-thumbs&n=13" },
                { name: "Финн Вулфхард — Майк", photo:"https://avatars.mds.yandex.net/get-entity_search/2338423/1191609466/SUx182_2x"},
                { name: "Гейтен Матараццо — Дастин", photo:"https://avatars.mds.yandex.net/i?id=f610ad45864e6387b7b46fd08207e3536dc4deeb-17020949-images-thumbs&n=13"},
                { name: "Кэлеб Маклафлин — Лукас", photo: "https://avatars.mds.yandex.net/get-entity_search/5098055/1219584173/S600xU_2x" },
                { name: "Вайнона Райдер — Джойс Байерс", photo: "https://58v76y8z87lo.hellomagazine.com/horizon/square/20064b2e1584-winona-ryder-was-rejected-by-hollywood-icon-she-was-in-love-with.jpg" }
            ]
        },
        {
            id: 5,
            title: "Однажды в Голливуде",
            poster: "fonds/golivud.webp",
            description: "1969 год, золотой век Голливуда уже закончился. Известный актёр Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.",
            trailers: {
                "1080": "content/1080.mp4",
                "720": "content/720.mp4",
                "480": "content/gol480.mp4"
            },
            genres: ["Комедия", "Драма"],
            cast: [
                { name:"Леонардо Ди Каприо — Рик Далтон", photo:"https://avatars.mds.yandex.net/get-entity_search/10702890/1219714372/SUx182" },
                { name: "Брэд Питт — Клифф Бут", photo:"https://avatars.mds.yandex.net/get-entity_search/4964907/1220003563/SUx182_2x"},
                { name: "Марго Робби — Шэрон Тейт", photo:"https://avatars.mds.yandex.net/get-entity_search/4740766/1218546587/S88x116Face_2x"},
                { name: "Эмиль Хирш — Джей Себринг", photo: "https://avatars.mds.yandex.net/get-entity_search/5508932/931001890/SUx182_2x" },
                { name: "Аль Пачино — Марвин Шварц", photo: "https://avatars.mds.yandex.net/i?id=6b1b9da9edae6f8a86486f117c7a1bb702e363c6-12421984-images-thumbs&n=13" }
            ]
        },
        {
            id: 6,
            title: "Назад в будущее",
            poster: "fonds/nazad.webp",
            description: "Подросток Марти с помощью машины времени, сооружённой его другом-профессором доком Брауном, попадает из 80-х в далекие 50-е. Там он встречается со своими будущими родителями, ещё подростками, и другом-профессором, совсем молодым.",
            trailers: {
                "1080": "content/nazad1080.mp4",
                "720": "content/nazad720.mp4",
                "480": "content/480.mp4"
            },
            genres: ["Фантастика", "Комедия", "Приключения"],
            cast: [
                { name:"Майкл Дж. Фокс — Марти МакФлай", photo:"https://avatars.mds.yandex.net/i?id=4e65004a560abb15437a19bb6cf88c9398744951-16349001-images-thumbs&n=13" },
                { name: "Кристофер Ллойд — Док Браун", photo:"https://avatars.mds.yandex.net/i?id=df3f1f47527ed1f16fab7ff4669d63e3fd00d5900221f66e-5252083-images-thumbs&n=13"},
                { name: "Лиа Томпсон — Лорейн", photo:"https://avatars.mds.yandex.net/get-entity_search/1978677/1219896672/SUx182"},
                { name: "Криспин Гловер — Джордж МакФлай", photo: "https://avatars.mds.yandex.net/get-entity_search/4740766/1220683321/SUx182_2x" },
                { name: "Том Уилсон — Бифф Таннен", photo: "https://avatars.mds.yandex.net/i?id=9aec615a5064c88e94ad315d68b2232b_l-3833406-images-thumbs&n=13&n=13&w=230&h=230" }
            ]
        },
        {
            id: 7,
            title: "Во все тяжкие",
            poster: "fonds/vovse.webp",
            description: "Школьный учитель химии Уолтер Уайт узнаёт, что болен раком лёгких. Учитывая сложное финансовое состояние дел семьи, а также перспективы, Уолтер решает заняться изготовлением метамфетамина. Для этого он привлекает своего бывшего ученика Джесси Пинкмана, когда-то исключённого из школы при активном содействии Уайта. Пинкман сам занимался варкой мета, но накануне, в ходе рейда УБН, он лишился подельника и лаборатории.",
            trailers: {
                "1080": "content/1080.mp4",
                "720": "content/720.mp4",
                "480": "content/vovse480.mp4"
            },
            genres: ["Криминал", "Драма", "Триллер"],
            cast: [
                { name:"Брайан Крэнстон — Уолтер Уайт", photo:"https://avatars.mds.yandex.net/get-entity_search/4741242/1220637666/SUx182_2x" },
                { name: "Аарон Пол — Джесси Пинкман", photo:"https://avatars.mds.yandex.net/get-entity_search/2331707/1195107934/SUx182_2x"},
                { name: "Анна Ганн — Скайлер Уайт", photo:"https://avatars.mds.yandex.net/get-entity_search/114969/1057851920/SUx182_2x"},
                { name: "Дин Норрис — Хэнк Шрейдер", photo: "https://avatars.mds.yandex.net/i?id=75ad3bb2d7ad3111335ce0a454896ef1a1f20596-6948195-images-thumbs&n=13" },
                { name: "Джонатан Бэнкс — Майк Эрмантраут", photo: "https://avatars.mds.yandex.net/i?id=8dbe925916ae58490f72201a214f88247c0b6b4e-4502683-images-thumbs&n=13" }
            ]
        },
        {
            id: 8,
            title: "Шоу Трумана",
            poster: "fonds/shou.webp",
            description: "Представьте себе, что вы вдруг начинаете понимать, что все вокруг вас — декорации, а люди — актеры, притворяющиеся теми, кем они вам кажутся. Весь ваш мир оказывается большим телесериалом, где вы исполняете главную роль, даже не подозревая об этом. Вся ваша жизнь — результат работы автора телешоу, которое вот уже тридцать лет смотрит вся планета, начиная с момента вашего рождения.В такой ситуации оказался Труман, главный герой картины. Будет ли он продолжать жить в безопасном мире, где, как он теперь знает, у него практически нет свободы выбора, или все-таки выйдет из «игры» и станет сам хозяином своей судьбы, в которой его ждет не запланированная сценарием девушка?",
            trailers: {
                "1080": "content/1080.mp4",
                "720": "content/720.mp4",
                "480": "content/480.mp4"
            },
            genres: ["Драма", "Комедия"],
            cast: [
                { name:"Джим Керри — Труман Бёрбанк", photo:"https://avatars.mds.yandex.net/i?id=35792fede483d7f5c15a7c140b63f7fcdf7648cf-11953055-images-thumbs&n=13" },
                { name: "Лора Линни — Мерил", photo:"https://images.iptv.rt.ru/images/cpt90j3ir4sqiatbdok0.jpg"},
                { name: "Ной Эммерих — Марлон", photo:"https://avatars.mds.yandex.net/i?id=1bc3f453ee85708ab4535a9d92b1c3b62448f796-9865886-images-thumbs&n=13"},
                { name: "Эд Харрис — Кристоф", photo: "https://avatars.mds.yandex.net/i?id=2735f7a443b6b89945225a1a917a9e3005ee8b65-6974903-images-thumbs&n=13" },
                { name: "Холланд Тейлор — Анджела", photo: "https://avatars.mds.yandex.net/i?id=3b1fb54d3f0dd2b9e23ffcc4a86937a5a7086017-4033208-images-thumbs&n=13" }
            ]
        },
        {
            id: 9,
            title: "Один дома",
            poster: "fonds/odin.webp",
            description: "Американское семейство отправляется из Чикаго в Европу, но в спешке сборов бестолковые родители забывают дома... одного из своих детей. Юное создание, однако, не теряется и демонстрирует чудеса изобретательности. И когда в дом залезают грабители, им приходится не раз пожалеть о встрече с милым крошкой.",
            trailers: {
                "1080": "content/1080.mp4",
                "720": "content/720.mp4",
                "480": "content/480.mp4"
            },
            genres: ["Комедия", "Семейный", "Приключения"],
            cast: [
                { name: "Маколей Калкин — Кевин МакКалистер", photo:"https://avatars.mds.yandex.net/get-entity_search/5542822/1219660875/SUx182_2x"},
                { name: "Джо Пеши — Гарри", photo:"https://avatars.mds.yandex.net/get-entity_search/1734588/1220184540/SUx182_2x"},
                { name: "Дэниел Стерн — Марв", photo: "https://avatars.mds.yandex.net/i?id=f4fbb1561c83bcdbd7b8843d0b4c1569_sr-5647863-images-thumbs&n=13" },
                { name: "Кэтрин О’Хара — Кейт МакКалистер", photo: "https://avatars.mds.yandex.net/i?id=640bbd40a31cc40670f7855a89eec2eecea8917b-8230897-images-thumbs&n=13" },
                { name: "Джон Хёрд — Питер МакКалистер", photo: "https://avatars.mds.yandex.net/i?id=ce882190418fb7416e952a516d5dae4de42f5538-16118181-images-thumbs&n=13" }
            ]
        },  
        {
            id: 10,
            title: "Уэнздей",
            poster: "fonds/ueu.webp",
            description: "Уэнздей, дочь Гомеса и Мортиши Аддамс, учится в академии Nevermore. Ей предстоит освоить экстрасенсорные способности, чтобы остановить местного серийного убийцу и раскрыть тайну родителей.",
            trailers: {
                "1080": "content/wdd1080.mp4",
                "720": "content/wdd720.mp4",
                "480": "content/480.mp4"
            },
            genres: ["Фэнтези", "Детектив", "Комедия", "Драма"],
            cast: [
                { name: "Дженна Ортега — Уэнсдэй Аддамс", photo: "https://avatars.mds.yandex.net/i?id=5a95a413d98da0083f702c64dcf672b17987233b-4274999-images-thumbs&n=13" },
                { name: "Эмма Майерс — Инид Синклер", photo: "https://avatars.mds.yandex.net/i?id=f735932f8abce7bd06c32259a9995272e190117f-17508860-images-thumbs&n=13" },
                { name: "Хантер Дуэн — Тайлер Гэлпин", photo:"https://avatars.mds.yandex.net/i?id=9259741a5c8bdc76cba6b97a2a3ed958e60cbcad-5906571-images-thumbs&n=13"},
                { name: "Перси Хайнс Уайт — Ксавьер Торп", photo: "https://avatars.mds.yandex.net/get-entity_search/1020180/953059881/SUx182_2x" },
                { name: "Гвендолин Кристи — Ларисса Уимз", photo: "https://avatars.mds.yandex.net/i?id=b31340980796fe04cb027b876f434c77aeec25ec-5568023-images-thumbs&n=13" }
            ]
        },
        {
            id: 11,
            title: "The Fallout",
            poster: "fonds/fall.webp",
            description: "Старшеклассница Вада идет в туалет посреди урока, когда в школе начинается стрельба. Девушка прячется в кабинке со своими одноклассниками. Хотя Вада и не пострадала физически, у нее развивается ПТСР, и теперь ей надо учиться жить дальше.",
            trailers: {
                "1080": "content/1080.mp4",
                "720": "content/720.mp4",
                "480": "content/480.mp4"
            },
            genres: ["Драма", "Подростковый"],
            cast: [
                { name: "Дженна Ортега — Вада", photo: "https://avatars.mds.yandex.net/i?id=5a95a413d98da0083f702c64dcf672b17987233b-4274999-images-thumbs&n=13" },
                { name: "Мэдди Зиглер — Миа", photo: "https://avatars.mds.yandex.net/i?id=d32b0685307c771b637995d632c9a1c88162c30c-16346982-images-thumbs&n=13" },
                { name: "Найлс Фитч — Куентин", photo:"https://avatars.mds.yandex.net/i?id=3a8a9c22d651380ee4d6c4090409586f93c4c6dc-16559529-images-thumbs&n=13"},
                { name: "Шейлин Вудли — Анна (психолог)", photo: "https://avatars.mds.yandex.net/i?id=b8a3124d6d12330f87bfae26db1f4bc8271a0f45-4426074-images-thumbs&n=13" },
                { name: "Джули Боуэн — Мать Вады", photo:"https://avatars.mds.yandex.net/get-entity_search/5513020/1212543185/SUx182_2x"},
            ]
        },
        {
            id: 12,
            title: "Я видел дьявола",
            poster: "fonds/ya.webp",
            description: "Преступник жестоко расправился с дочерью бывшего высокопоставленного полицейского. Девушка была невестой специального агента Ким Су-хёна, и он не может оставить произошедшее без ответа. Су-хён начинает проверять всех подозрительных лиц из соответствующих списков, быстро находит нужного, но не торопится передавать его полиции. У спецагента свой собственный план возмездия.",
            trailers: {
                "1080": "content/1080.mp4",
                "720": "content/720.mp4",
                "480": "content/480.mp4"
            },
            genres: ["Триллер", "Криминал", "Ужасы"],
            cast: [
                { name: "Евгений Комаров", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80" },
                { name: "Алина Белова", photo: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80" }
            ]
        },
        {
            id: 13,
            title: "Алиса в Пограничье",
            poster: "fonds/alisa.webp",
            description: "Молодой безработный игроман Рёхэй Арису в очередной раз поссорился с отцом и старшим братом и ушёл из дома. Он встречается с двумя закадычными друзьями — один прогуливает работу, а другого уволили — в районе Сибуя, где ребята видят в небе странный салют, а после троицу накрывает новая реальность. Друзья оказываются в пустынной версии Токио и выясняют, что теперь им предстоит участвовать в жестоких играх на выживание, после успешного прохождения которых им будут выдаваться визы на несколько дней. Проигравших ждёт смерть, вышедших из игры ждёт смерть, и тех, кто отказывается продлевать визы, тоже ждёт мгновенная смерть от небесного лазера.",
            trailers: {
                "1080": "content/1080.mp4",
                "720": "content/720.mp4",
                "480": "content/480.mp4"
            },
            genres: ["Фантастика", "Триллер", "Экшен"],
            cast: [
                { name: "Евгений Комаров", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80" },
                { name: "Алина Белова", photo: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80" }
            ]
        },
        {
            id: 14,
            title: "Игра смерти",
            poster: "fonds/igrasm.webp",
            description: "Чхве И-джэ вырос в бедной семье и не получил в жизни хороший старт, поэтому, провалив собеседование в престижную фирму, семь лет был вынужден перебиваться подработками. Когда парень снова не проходит собеседование, то впадает в отчаяние и, оставив предсмертную записку, что не боится смерти, прыгает с крыши. Он думал, что на этом его мучения закончатся, но не тут-то было. И-джэ оказывается перед вратами ада, где его встречает сама смерть, и узнаёт, что теперь в качестве наказания будет умирать 12 раз в разных телах. А если он не хочет попасть в ад, то должен постараться выжить.",
            trailers: {
                "1080": "content/1080.mp4",
                "720": "content/720.mp4",
                "480": "content/480.mp4"
            },
            genres: ["Триллер", "Фэнтези", "Драма"],
            cast: [
                { name: "Евгений Комаров", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80" },
                { name: "Алина Белова", photo: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80" }
            ]
        },
        {
            id: 15,
            title: "Локи",
            poster: "fonds/loki.webp",
            description: "Локи попадает в таинственную организацию «Управление временными изменениями» после того, как он украл Тессеракт, и путешествует во времени, меняя историю.",
            trailers: {
                "1080": "content/1080.mp4",
                "720": "content/720.mp4",
                "480": "content/480.mp4"
            },
            genres: ["Фантастика", "Фэнтези", "Приключения", "Экшен"],
            cast: [
                { name: "Евгений Комаров", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80" },
                { name: "Алина Белова", photo: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80" }
            ]
        },
        {
            id: 16,
            title: "Мышь",
            poster: "fonds/mish.webp",
            description: "Серийный убийца по прозвищу «Охотник за головами» держал в страхе всю страну. Паника и недовольство силами полиции достигли такого уровня, что правительство всерьёз обсуждало законопроект о генетическом тесте, позволяющем с точностью до 99% определить ген психопатии у эмбриона. Прошло 10 лет, но столь жуткие события не могут исчезнуть без следа и уже тесно переплели судьбы опытного детектива, талантливой женщины-продюсера, рядового полицейского и проблемной старшеклассницы. Но они об этом ещё не догадываются.",
            trailers: {
                "1080": "content/1080.mp4",
                "720": "content/720.mp4",
                "480": "content/480.mp4"
            },
            genres: ["Триллер", "Криминал", "Детектив"],
            cast: [
                { name: "Евгений Комаров", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80" },
                { name: "Алина Белова", photo: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80" }
            ]
        },
        {
            id: 17,
            title: "Перелеска",
            poster: "fonds/pereleska.webp",
            description: "Переехав из Токио в маленький город, в новой школе старшеклассница Харука сталкивается с буллингом. Как хорошая дочь, не желающая создавать проблемы родителям, девушка пытается не реагировать, а после и вовсе перестаёт ходить в школу. Но однажды одноклассники преступают черту и поджигают дом Харуки: её родители гибнут, а младшая сестра получает сильные ожоги. Вот теперь-то и пришло время обратить на задир внимание и расквитаться со всеми виновными.",
            trailers: {
                "1080": "content/1080.mp4",
                "720": "content/720.mp4",
                "480": "content/480.mp4"
            },
            genres: ["Триллер", "Драма"],
            cast: [
                { name: "Евгений Комаров", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80" },
                { name: "Алина Белова", photo: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80" }
            ]
        },
        {
            id: 18,
            title: "Игра в кальмара",
            poster: "fonds/kalmar.webp",
            description: "Сон Ги-хун уже немолод, разведён, по уши погряз в долгах и сидит на шее у старенькой матери. Даже выигранные на скачках деньги в его руках долго не задерживаются, и однажды он встречает в метро загадочного незнакомца, который сначала предлагает сыграть в детскую игру, а затем вручает Ги-хуну немалую сумму и визитку. Но радость мужчины сменяется отчаянием, когда он узнаёт, что бывшая жена с новым мужем собираются увезти его дочь в Америку. Он звонит по номеру с визитки и становится последним участником тайных игр на выживание с призом в 40 миллионов долларов. Среди товарищей по несчастью оказываются его друг детства — прогоревший финансист, бандит, смертельно больной старик, северокорейская перебежчица, иммигрант из Пакистана и многие другие отчаянно нуждающиеся в деньгах.",
            trailers: {
                "1080": "content/1080.mp4",
                "720": "content/720.mp4",
                "480": "content/480.mp4"
            },
            genres: ["Триллер", "Драма", "Выживание"],
            cast: [
                { name: "Евгений Комаров", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80" },
                { name: "Алина Белова", photo: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80" }
            ]
        },
        {
            id: 19,
            title: "Паразиты",
            poster: "fonds/parazit.webp",
            description: "Обычное корейское семейство Кимов жизнь не балует. Приходится жить в сыром грязном полуподвале, воровать интернет у соседей и перебиваться случайными подработками. Однажды друг сына семейства, уезжая на стажировку за границу, предлагает тому заменить его и поработать репетитором у старшеклассницы в богатой семье Пак. Подделав диплом о высшем образовании, парень отправляется в шикарный дизайнерский особняк и производит на хозяйку дома хорошее впечатление. Тут же ему в голову приходит необычный план по трудоустройству сестры.",
            trailers: {
                "1080": "content/1080.mp4",
                "720": "content/720.mp4",
                "480": "content/480.mp4"
            },
            genres: ["Драма", "Триллер", "Черная комедия"],
            cast: [
                { name: "Евгений Комаров", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80" },
                { name: "Алина Белова", photo: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80" }
            ]
        },
    ];

     // DOM элементы
let carousel, prevBtn, nextBtn, movieDetail, backBtn;
let currentPosition = 0;
const cardWidth = 270;
let displayedMovies = movies; // фильмы, которые сейчас показываются в карусели
// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    // базовые элементы
    carousel    = document.querySelector('.movie-carousel');
    prevBtn     = document.querySelector('.prev-btn');
    nextBtn     = document.querySelector('.next-btn');
    movieDetail = document.querySelector('.movie-detail');
    backBtn     = document.querySelector('.back-btn');

    if (!carousel || !prevBtn || !nextBtn || !movieDetail || !backBtn) {
        console.error('Не все необходимые DOM элементы найдены');
        return;
    }

    // по умолчанию показываем все фильмы
    displayedMovies = movies;

    // создаём карточки
    createMovieCards(displayedMovies);

    // рисуем кнопки жанров в выпадающем меню
    renderGenreButtons();

    // обработчики карусели, back-кнопки и кликов по жанрам
    setupEventListeners();

    // логика выпадающего меню "Жанры"
    const dropdown = document.querySelector('.genre-dropdown');
    const toggle   = document.querySelector('.genre-toggle');

    if (dropdown && toggle) {
        // открыть / закрыть меню
        toggle.addEventListener('click', () => {
            dropdown.classList.toggle('open');
        });

        // закрывать по клику вне блока
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.genre-filter')) {
                dropdown.classList.remove('open');
            }
        });
    }
});

// Создание карточек фильмов
function createMovieCards(list = displayedMovies) {
    // Очищаем карусель
    carousel.innerHTML = "";
    
    list.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" class="movie-poster" loading="lazy">
            <div class="movie-title">${movie.title}</div>
        `;
        card.addEventListener('click', () => showMovieDetail(movie));
        carousel.appendChild(card);
    });
}

// Собираем уникальные жанры из всех фильмов
function getAllGenres() {
    const set = new Set();

    movies.forEach(movie => {
        if (Array.isArray(movie.genres)) {
            movie.genres.forEach(g => set.add(g));
        }
    });

    return Array.from(set).sort();
}

function renderGenreButtons() {
    const dropdown = document.querySelector('.genre-dropdown');
    if (!dropdown) return;

    dropdown.innerHTML = ""; // очищаем меню

    // Кнопка "Все"
    const btnAll = document.createElement('button');
    btnAll.className = 'genre-btn active';
    btnAll.dataset.genre = 'all';
    btnAll.textContent = 'Все';
    dropdown.appendChild(btnAll);

    // Получаем уникальные жанры
    const genres = getAllGenres();

    genres.forEach(genre => {
        const btn = document.createElement('button');
        btn.className = 'genre-btn';
        btn.dataset.genre = genre;
        btn.textContent = genre;
        dropdown.appendChild(btn);
    });
}


function applyGenreFilter(genre) {
    if (genre === 'all') {
        displayedMovies = movies;
    } else {
        displayedMovies = movies.filter(movie =>
            Array.isArray(movie.genres) && movie.genres.includes(genre)
        );
    }

    // Закрыть дропдаун после выбора
    const dropdown = document.querySelector('.genre-dropdown');
    if (dropdown) dropdown.classList.remove('open');

    currentPosition = 0;
    carousel.style.transform = 'translateX(0px)';

    createMovieCards(displayedMovies);
}


// Настройка обработчиков событий
function setupEventListeners() {
    prevBtn.addEventListener('click', () => moveCarousel('prev'));
    nextBtn.addEventListener('click', () => moveCarousel('next'));
    
    backBtn.addEventListener('click', hideMovieDetail);
    
    document.addEventListener('keydown', handleKeydown);

    // Клики по кнопкам жанров (делегирование)
    const filterContainer = document.querySelector('.genre-filter');
    if (filterContainer) {
        filterContainer.addEventListener('click', (event) => {
            const btn = event.target.closest('.genre-btn');
            if (!btn) return;

            // переключаем active
            document.querySelectorAll('.genre-btn').forEach(b =>
                b.classList.remove('active')
            );
            btn.classList.add('active');

            const genre = btn.dataset.genre;
            applyGenreFilter(genre);
        });
    }
}

// Функции для карусели
function moveCarousel(direction) {
    const visibleCards = Math.floor(carousel.offsetWidth / cardWidth);
    const maxPosition = -(cardWidth * (displayedMovies.length - visibleCards));
    
    if (direction === 'next' && currentPosition > maxPosition) {
        currentPosition -= cardWidth;
    } else if (direction === 'prev' && currentPosition < 0) {
        currentPosition += cardWidth;
    }
    
    carousel.style.transform = `translateX(${currentPosition}px)`;
}

// Функция показа деталей фильма
function showMovieDetail(movie) {
    if (!movie) {
        console.error('Фильм не передан в функцию showMovieDetail');
        return;
    }

    try {
        // Обновляем данные фильма
        document.querySelector('.movie-detail-poster').src = movie.poster;
        document.querySelector('.movie-detail-poster').alt = movie.title;
        document.querySelector('.movie-detail-title').textContent = movie.title;
        document.querySelector('.movie-description').textContent = movie.description;

        // Обновляем трейлер
        renderQualityButtons(movie);

        // Обновляем актёров
        updateCastList(movie.cast);

        // Обновляем жанры
        updateGenres(movie.genres);


        // Показываем детальную страницу, скрываем каталог
        movieDetail.style.display = 'block';
        document.querySelector('.movie-strip').style.display = 'none';
        document.querySelector('.social-links').style.display = 'none';

        // Прокрутка вверх
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // <<< ВАЖНО: добавляем запись в историю браузера >>>
        history.pushState({ movieId: movie.id }, "", `#movie-${movie.id}`);

    } catch (error) {
        console.error('Ошибка при отображении деталей фильма:', error);
    }
}


// Функция показа трейлера
function showTrailer(trailerUrl) {
    const trailerContainer = document.querySelector('.trailer-container');
    
    if (!trailerContainer) {
        console.error('Элемент .trailer-container не найден');
        return;
    }

    // Очищаем контейнер
    trailerContainer.innerHTML = '';

    if (trailerUrl) {

        // === создаём видео-плеер ===
        const video = document.createElement('video');
        video.className = "trailer-video";
        video.src = trailerUrl;

        // <<< управление громкостью + управление плеером >>>
        video.controls = true;
        video.setAttribute("controlsList", "nodownload"); 
        video.preload = "metadata";
        video.autoplay = false;

        // Добавляем видео на страницу
        trailerContainer.appendChild(video);

    } else {
        // Если трейлер отсутствует
        const message = document.createElement('p');
        message.textContent = 'Трейлер для этого фильма пока не доступен';
        message.style.color = '#ccc';
        message.style.textAlign = 'center';
        message.style.padding = '20px';
        message.style.fontStyle = 'italic';
        
        trailerContainer.appendChild(message);
    }
}

function showTrailerByQuality(movie, quality) {
    const container = document.querySelector('.trailer-container');
    if (!container) return;

    const file = movie.trailers[quality];
    if (!file) return;

    container.innerHTML = `
        <video controls width="720" class="movie-trailer">
            <source src="${file}" type="video/mp4">
            Ваш браузер не поддерживает видео.
        </video>
    `;
}

function renderQualityButtons(movie) {
    const block = document.querySelector('.quality-selector');
    if (!block) return;

    block.innerHTML = ""; // очищаем

    const qualities = Object.keys(movie.trailers).sort((a,b) => b - a); // 1080,720,480

    qualities.forEach(q => {
        const btn = document.createElement('button');
        btn.className = "quality-btn";
        btn.dataset.quality = q;
        btn.textContent = q + "p";

        btn.addEventListener('click', () => {
            document.querySelectorAll('.quality-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            showTrailerByQuality(movie, q);
        });

        block.appendChild(btn);
    });

    // Автоматически выбираем первое (лучшее)
    block.querySelector('.quality-btn').classList.add('active');
    showTrailerByQuality(movie, qualities[0]);
}


// Обновление списка актеров
function updateCastList(cast) {
    const castList = document.querySelector('.cast-list');
    
    if (!castList) {
        console.error('Элемент .cast-list не найден');
        return;
    }
    
    // Очищаем список
    castList.innerHTML = '';
    
    // Добавляем актеров
    cast.forEach(actor => {
        const castMember = document.createElement('div');
        castMember.className = 'cast-member';
        castMember.innerHTML = `
            <img src="${actor.photo}" alt="${actor.name}" class="cast-photo" loading="lazy">
            <div class="cast-name">${actor.name}</div>
        `;
        castList.appendChild(castMember);
    });
}

// Функция вывода жанров
function updateGenres(genres) {
    const genresList = document.querySelector('.genres-list');

    if (!genresList) {
        console.error("Блок .genres-list не найден");
        return;
    }

    // Очищаем список жанров
    genresList.innerHTML = "";

    // Если жанров нет
    if (!genres || genres.length === 0) {
        genresList.textContent = "Жанры не указаны";
        return;
    }

    // Добавляем каждый жанр как элемент
    genres.forEach(genre => {
        const item = document.createElement('span');
        item.className = "genre-item";
        item.textContent = genre;
        genresList.appendChild(item);
    });
}

// Функция скрытия деталей фильма
function hideMovieDetail() {
    movieDetail.style.display = 'none';
    document.querySelector('.movie-strip').style.display = 'block';
    document.querySelector('.social-links').style.display = 'flex';

    // Добавляем запись "мы вернулись к каталогу"
    history.pushState(null, "", "#catalog");
}


// Обработка нажатий клавиш
function handleKeydown(e) {
    if (e.key === 'ArrowLeft') {
        moveCarousel('prev');
    } else if (e.key === 'ArrowRight') {
        moveCarousel('next');
    } else if (e.key === 'Escape' && movieDetail.style.display === 'block') {
        hideMovieDetail();
    }
}

// Реакция на кнопку браузера "Назад"
window.onpopstate = function(event) {
    if (event.state && event.state.movieId) {
        const movie = movies.find(m => m.id === event.state.movieId);
        if (movie) {
            showMovieDetail(movie);
        }
    } else {
        hideMovieDetail();
    }
};
