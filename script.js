// Данные фильмов
    const movies = [
        {
            id: 1,
            title: "Начало",
            poster: "https://static.kinoafisha.info/k/movie_posters/800x1200/upload/movie_posters/8/0/0/7794008/286676351653465386.jpg",
            description: "Кобб – талантливый вор, лучший из лучших в опасном искусстве извлечения: он крадет ценные секреты из глубин подсознания во время сна, когда человеческий разум наиболее уязвим. Редкие способности Кобба сделали его ценным игроком в привычном к предательству мире промышленного шпионажа, но они же превратили его в извечного беглеца и лишили всего, что он когда-либо любил. И вот у Кобба появляется шанс исправить ошибки. Его последнее дело может вернуть все назад, но для этого ему нужно совершить невозможное – инициацию. Вместо идеальной кражи Кобб и его команда спецов должны будут провернуть обратное. Теперь их задача – не украсть идею, а внедрить ее. Если у них получится, это и станет идеальным преступлением. Но никакое планирование или мастерство не могут подготовить команду к встрече с опасным противником, который, кажется, предугадывает каждый их ход. Врагом, увидеть которого мог бы лишь Кобб.",
            trailer: "https://vkvideo.ru/video-187750432_456244520",
            cast: [
                { name: "Леонардо Ди Каприо — Кобб", photo: "https://avatars.mds.yandex.net/get-entity_search/10702890/1219714372/SUx182" },
                { name: "Джозеф Гордон-Левитт — Артур", photo:"https://avatars.mds.yandex.net/get-entity_search/2079849/1202989694/SUx182_2x"} ,
                { name: "Эллен Пейдж (Эллиот Пейдж) — Ариадна", photo:"https://avatars.mds.yandex.net/get-entity_search/1989973/1219249220/SUx182"}
            ]
        },
        {
            id: 2,
            title: "Аромат кофе",
            poster: "https://images.unsplash.com/photo-1518837689772-8c6c8109c7e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&h=350&q=80",
            description: "Драма о молодом бариста, который отправляется в путешествие по миру.",
            cast: [
                { name: "Иван Смирнов", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80" },
                { name: "Елена Волкова", photo: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80" }
            ]
        },
        {
            id: 3,
            title: "Кофейный детектив",
            poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&h=350&q=80",
            description: "Детективная история, разворачивающаяся в уютной кофейне.",
            cast: [
                { name: "Андрей Новиков", photo: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80" },
                { name: "Наталья Морозова", photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80" }
            ]
        },
        {
            id: 4,
            title: "Зерна судьбы",
            poster: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&h=350&q=80",
            description: "Эпическая сага о семье кофейных фермеров.",
            cast: [
                { name: "Виктор Кузнецов", photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80" },
                { name: "Татьяна Федорова", photo: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80" }
            ]
        },
        {
            id: 5,
            title: "Кофейный ритуал",
            poster: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&h=350&q=80",
            description: "Философская драма о японском мастере чайной церемонии.",
            cast: [
                { name: "Кенджи Танака", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80" },
                { name: "Юкико Сато", photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80" }
            ]
        },
        {
            id: 6,
            title: "Ночная смена",
            poster: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&h=350&q=80",
            description: "История о работниках ночной кофейни.",
            cast: [
                { name: "Евгений Комаров", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80" },
                { name: "Алина Белова", photo: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80" }
            ]
        }
    ];

     // DOM элементы
let carousel, prevBtn, nextBtn, movieDetail, backBtn;
let currentPosition = 0;
const cardWidth = 270;
// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Получаем DOM элементы
    carousel = document.querySelector('.movie-carousel');
    prevBtn = document.querySelector('.prev-btn');
    nextBtn = document.querySelector('.next-btn');
    movieDetail = document.querySelector('.movie-detail');
    backBtn = document.querySelector('.back-btn');

    // Проверяем, что элементы найдены
    if (!carousel || !prevBtn || !nextBtn ||  !movieDetail || !backBtn) {
        console.error('Не все необходимые DOM элементы найдены');
        return;
    }

    // Создание карточек фильмов
    createMovieCards();

    // Добавляем обработчики событий
    setupEventListeners();
});

// Создание карточек фильмов
function createMovieCards() {
    // Очищаем карусель
    carousel.innerHTML = "";
    
    movies.forEach(movie => {
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

// Настройка обработчиков событий
function setupEventListeners() {
    // Обработчики для кнопок карусели
    prevBtn.addEventListener('click', () => moveCarousel('prev'));
    nextBtn.addEventListener('click', () => moveCarousel('next'));
    
    // Обработчик для кнопки "Назад"
    backBtn.addEventListener('click', hideMovieDetail);
    
    // Обработчики для клавиатуры
    document.addEventListener('keydown', handleKeydown);
}

// Функции для карусели
function moveCarousel(direction) {
    const visibleCards = Math.floor(carousel.offsetWidth / cardWidth);
    const maxPosition = -(cardWidth * (movies.length - visibleCards));
    
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
        showTrailer(movie.trailer);
        
        // Обновляем состав актеров
        updateCastList(movie.cast);
        
        // Показываем детали и скрываем карусель
        movieDetail.style.display = 'block';
        document.querySelector('.movie-strip').style.display = 'none';
        document.querySelector('.social-links').style.display = 'none';
        
        // Прокручиваем страницу вверх
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
        // Создаем iframe для Rutube
        const iframe = document.createElement('iframe');
        iframe.className = 'trailer-iframe';
        iframe.src = trailerUrl;
        iframe.title = "Трейлер фильма";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;
        iframe.loading = "lazy";
        
        trailerContainer.appendChild(iframe);
    } else {
        // Если трейлера нет
        const message = document.createElement('p');
        message.textContent = 'Трейлер для этого фильма пока не доступен';
        message.style.color = '#ccc';
        message.style.textAlign = 'center';
        message.style.padding = '20px';
        message.style.fontStyle = 'italic';
        
        trailerContainer.appendChild(message);
    }
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

// Функция скрытия деталей фильма
function hideMovieDetail() {
    movieDetail.style.display = 'none';
    document.querySelector('.movie-strip').style.display = 'block';
    document.querySelector('.social-links').style.display = 'flex';
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