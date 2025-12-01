// Данные фильмов
    const movies = [
        {
            id: 1,
            title: "Кофейные грезки",
            poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&h=350&q=80",
            description: "История о бариста, который открывает для себя магию кофе и меняет жизни своих клиентов.",
            cast: [
                { name: "Алексей Иванов", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80" },
                { name: "Мария Петрова", photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80" }
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
        console.log('DOM загружен, инициализация...');
        
        // Получаем DOM элементы
        carousel = document.querySelector('.movie-carousel');
        prevBtn = document.querySelector('.prev-btn');
        nextBtn = document.querySelector('.next-btn');
        movieDetail = document.querySelector('.movie-detail');
        backBtn = document.querySelector('.back-btn');

        console.log('Найдены элементы:', { carousel, prevBtn, nextBtn, movieDetail, backBtn });

        // Проверяем, что элементы найдены
        if (!carousel ||  !prevBtn || !nextBtn || !movieDetail || !backBtn) {
            console.error('Не все необходимые DOM элементы найдены');
            return;
        }

        // Создание карточек фильмов
        createMovieCards();
        
        // Добавляем обработчики событий
        setupEventListeners();
        
        console.log('Инициализация завершена, карточек создано:', movies.length);
    });

    // Создание карточек фильмов
    function createMovieCards() {
        console.log('Создание карточек фильмов...');
        
        // Очищаем карусель
        carousel.innerHTML = "";
        
        movies.forEach((movie, index) => {
            const card = document.createElement('div');
            card.className = 'movie-card';
            card.innerHTML = `
                <img src="${movie.poster}" alt="${movie.title}" class="movie-poster" loading="lazy">
                <div class="movie-title">${movie.title}</div>
            `;
            card.addEventListener('click', () => showMovieDetail(movie));
            carousel.appendChild(card);
            console.log(`Создана карточка: ${movie.title}`);
        });
        
        console.log('Все карточки созданы');
    }

    // Настройка обработчиков событий
    function setupEventListeners() {
        console.log('Настройка обработчиков событий...');
        
        // Обработчики для кнопок карусели
        prevBtn.addEventListener('click', () => {
            console.log('Клик на prev');
            moveCarousel('prev');
        });
        
        nextBtn.addEventListener('click', () => {
            console.log('Клик на next');
            moveCarousel('next');
        });
        
        // Обработчик для кнопки "Назад"
        backBtn.addEventListener('click', hideMovieDetail);
        
        // Обработчики для клавиатуры
        document.addEventListener('keydown', handleKeydown);
        
        console.log('Обработчики настроены');
    }
    // Функции для карусели
    function moveCarousel(direction) {
        console.log(`moveCarousel вызван: ${direction}, текущая позиция: ${currentPosition}`);
        
        const visibleCards = Math.floor(carousel.offsetWidth / cardWidth);
        const maxPosition = -(cardWidth * (movies.length - visibleCards));
        
        console.log(`visibleCards: ${visibleCards}, maxPosition: ${maxPosition}`);

        if (direction === 'next' && currentPosition > maxPosition) {
            currentPosition -= cardWidth;
            console.log(`Двигаем вперед, новая позиция: ${currentPosition}`);
        } else if (direction === 'prev' && currentPosition < 0) {
            currentPosition += cardWidth;
            console.log(`Двигаем назад, новая позиция: ${currentPosition}`);
        } else {
            console.log(`Движение заблокировано: ${direction}`);
        }
        
        carousel.style.transform = translateX(`${currentPosition}px`);
        console.log(`Применен transform: translateX(${currentPosition}px)`);
    }

    function showMovieDetail(movie) {
        document.querySelector('.movie-detail-poster').src = movie.poster;
        document.querySelector('.movie-detail-poster').alt = movie.title;
        document.querySelector('.movie-detail-title').textContent = movie.title;
        document.querySelector('.movie-description').textContent = movie.description;
        
        updateCastList(movie.cast);
        
        movieDetail.style.display = 'block';
        document.querySelector('.movie-strip').style.display = 'none';
        document.querySelector('.social-links').style.display = 'none';
    }

    function updateCastList(cast) {
        const castList = document.querySelector('.cast-list');
        castList.innerHTML = '';
        
        cast.forEach(actor => {
            const castMember = document.createElement('div');
            castMember.className = 'cast-member';
            castMember.innerHTML = `
                <img src="${actor.photo}" alt="${actor.name}" class="cast-photo">
                <div class="cast-name">${actor.name}</div>
            `;
            castList.appendChild(castMember);
        });
    }

    function hideMovieDetail() {
        movieDetail.style.display = 'none';
        document.querySelector('.movie-strip').style.display = 'block';
        document.querySelector('.social-links').style.display = 'flex';
    }

    function handleKeydown(e) {
        if (e.key === 'ArrowLeft') {
            moveCarousel('prev');
        } else if (e.key === 'ArrowRight') {
            moveCarousel('next');
        } else if (e.key === 'Escape' && movieDetail.style.display === 'block') {
            hideMovieDetail();
        }
    }