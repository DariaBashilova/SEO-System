// Данные для модальных окон
const modalData = {
  1: {
    number: "02",
    icon: `<svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 21H4C4 11.375 11.875 3.5 21.5 3.5C31.125 3.5 39 11.375 39 21C39 30.625 31.125 38.5 21.5 38.5V31.5H14.5V24.5H21.5V31.5C27.31 31.5 32 26.7925 32 21C32 15.2075 27.2925 10.5 21.5 10.5C15.7075 10.5 11 15.2075 11 21ZM14.5 31.5V36.75H9.25V31.5H14.5ZM5.75 28H9.25V31.5H5.75V28Z" fill="#0C47A0"/></svg>`,
    title: "Digital-продукты",
    description: "Создаем и развиваем digital-продукты: от веб-сервисов и мобильных приложений до сложных платформ.",
    image: "./images/2.webp"
  },
  2: {
    number: "03",
    icon: `<svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 2.625C17.6709 2.625 13.9987 4.14609 11.2911 6.85365C8.58359 9.5612 7.0625 13.2334 7.0625 17.0625V19.6875C7.0625 21.0735 7.62688 22.4044 8.22538 23.4307C8.83175 24.4781 9.5615 25.3549 10.0707 25.8668L13.7904 29.5838L15.305 34.125H27.695L29.2096 29.5838L32.9293 25.8668C33.4385 25.3549 34.1683 24.4755 34.7746 23.4307C35.3731 22.4044 35.9375 21.0735 35.9375 19.6875V17.0625C35.9375 13.2334 34.4164 9.5612 31.7089 6.85365C29.0013 4.14609 25.3291 2.625 21.5 2.625ZM25.0543 14.0543L23.1957 12.1957L18.3316 17.0625L20.9566 19.6875L17.9457 22.6957L19.8043 24.5543L24.6684 19.6875L22.0434 17.0625L25.0543 14.0543Z" fill="#0C47A0"/><path d="M26.75 39.375V36.75H16.25V39.375H26.75Z" fill="#0C47A0"/></svg>`,
    title: "Маркетинг",
    description: "Настраиваем и ведем рекламу, продвигаем в соцсетях, привлекаем лидов и повышаем лояльность.",
    image: "./images/3.webp"
  },
  3: {
    number: "04",
    icon: `<svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M17.522 14.532L21.6135 18.6235C22.2496 19.2556 23.1099 19.6104 24.0066 19.6104C24.9034 19.6104 25.7637 19.2556 26.3998 18.6235L37.9253 7.0805C38.0062 7.00547 38.1124 6.96378 38.2228 6.96378C38.3331 6.96378 38.4394 7.00547 38.5203 7.0805L40.37 8.93025C40.5258 9.08775 40.741 9.17524 40.965 9.16824C41.0712 9.19274 41.1779 9.19274 41.2853 9.16824C41.4485 9.10159 41.587 8.98572 41.6814 8.83675C41.7758 8.68778 41.8215 8.5131 41.812 8.337V1.547C41.812 1.32189 41.7226 1.10601 41.5634 0.946838C41.4043 0.787667 41.1884 0.698245 40.9633 0.698245H34.1733C33.9945 0.684894 33.8161 0.728503 33.6636 0.822818C33.5111 0.917132 33.3924 1.05731 33.3245 1.22325C33.2588 1.37701 33.2415 1.54714 33.275 1.71098C33.3085 1.87481 33.391 2.02455 33.5118 2.14025L35.5155 4.07575C35.5562 4.11388 35.5886 4.15996 35.6108 4.21113C35.633 4.2623 35.6444 4.31748 35.6444 4.37325C35.6444 4.42901 35.633 4.48419 35.6108 4.53536C35.5886 4.58653 35.5562 4.63261 35.5155 4.67075L30.423 9.76324C25.852 -1.0745 11.2658 -2.89975 4.16777 6.475C2.07828 9.23284 0.986816 12.6183 1.07202 16.0772C1.07552 16.6442 1.10935 17.2101 1.17352 17.7747C1.22379 18.1886 1.4246 18.5695 1.73766 18.8448C2.05072 19.1201 2.45414 19.2705 2.87102 19.2675H3.07402C3.29591 19.2423 3.51065 19.1735 3.70593 19.0652C3.90121 18.9569 4.07319 18.8111 4.21203 18.6361C4.35086 18.4612 4.45381 18.2606 4.51498 18.0458C4.57616 17.8311 4.59435 17.6063 4.56852 17.3845C4.5421 16.9205 4.5421 16.4555 4.56852 15.9915C4.87127 6.77249 15.0423 1.33525 22.8753 6.2055C25.1821 7.64016 26.9333 9.81583 27.8418 12.376L24.312 15.96C24.2282 16.0362 24.119 16.0785 24.0058 16.0785C23.8925 16.0785 23.7833 16.0362 23.6995 15.96L19.6098 11.8335C18.9737 11.2014 18.1134 10.8466 17.2166 10.8466C16.3199 10.8466 15.4596 11.2014 14.8235 11.8335L1.58302 25.0565C1.26579 25.376 1.08849 25.8085 1.09013 26.2588C1.09177 26.7091 1.27222 27.1403 1.59177 27.4575C1.91132 27.7747 2.34381 27.952 2.79408 27.9504C3.24436 27.9487 3.67554 27.7683 3.99277 27.4487L4.97802 26.4652C6.44784 28.0494 8.22471 29.3179 10.2004 30.1934C12.1762 31.0688 14.3094 31.5331 16.4703 31.5577C19.8451 31.5653 23.1274 30.4552 25.8048 28.4007C25.8834 28.3353 25.9825 28.2994 26.0848 28.2994C26.1871 28.2994 26.2862 28.3353 26.3648 28.4007L28.7413 30.7772C28.7988 30.8332 28.8391 30.9045 28.8574 30.9826C28.8757 31.0608 28.8712 31.1426 28.8445 31.2182C28.6829 31.6706 28.653 32.1596 28.7583 32.6283C28.8637 33.0971 29.0999 33.5262 29.4395 33.866L36.0248 40.4687C37.7818 42.4025 40.9738 41.7077 41.77 39.2175C41.9685 38.5958 41.9836 37.9301 41.8135 37.3001C41.6435 36.67 41.2954 36.1023 40.811 35.665L34.2415 29.029C33.7619 28.5553 33.1166 28.2872 32.4425 28.2817C32.1509 28.2817 31.8679 28.3325 31.5938 28.434C31.5182 28.4609 31.4366 28.4657 31.3584 28.4477C31.2803 28.4297 31.2089 28.3897 31.1528 28.3325L28.7763 25.956C28.7085 25.8785 28.6711 25.779 28.6711 25.676C28.6711 25.573 28.7085 25.4735 28.7763 25.396C29.8129 24.0265 30.6159 22.495 31.1528 20.8635C31.232 20.6492 31.2672 20.4211 31.2562 20.1928C31.2452 19.9646 31.1883 19.7409 31.0888 19.5352C30.9892 19.3295 30.8492 19.1461 30.6771 18.9958C30.5049 18.8455 30.3042 18.7315 30.087 18.6607C29.8697 18.5898 29.6404 18.5636 29.4128 18.5835C29.1852 18.6034 28.9639 18.6691 28.7622 18.7766C28.5606 18.884 28.3827 19.0311 28.2393 19.209C28.0959 19.3869 27.9898 19.5919 27.9275 19.8117C27.1395 22.2155 25.6123 24.3089 23.5639 25.7932C21.5155 27.2775 19.0506 28.0768 16.521 28.077C14.8149 28.065 13.1295 27.7017 11.5699 27.0098C10.0103 26.318 8.60993 25.3123 7.45602 24.0555L16.962 14.532C17.0395 14.4642 17.139 14.4268 17.242 14.4268C17.345 14.4268 17.4445 14.4642 17.522 14.532Z" fill="#0C47A0"/>
</svg>`,
    title: "Топовое SEO продвижение",
    description: "Продвигаем сайты, повышаем их видимость и привлекаем целевой трафик для роста бизнеса.",
    image: "./images/4.webp"
  },
  4: {
    number: "05",
    icon: `<svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18 39.7775C17.3223 39.4988 16.722 39.0605 16.25 38.5H5.75C5.28587 38.5 4.84075 38.3156 4.51256 37.9874C4.18437 37.6592 4 37.2141 4 36.75V9.1875C4 9.07147 4.04609 8.96019 4.12814 8.87814C4.21019 8.79609 4.32147 8.75 4.4375 8.75H38.5625C38.6785 8.75 38.7898 8.79609 38.8719 8.87814C38.9539 8.96019 39 9.07147 39 9.1875V18.235L42.5 19.7225V5.25C42.5 3.85761 41.9469 2.52226 40.9623 1.53769C39.9777 0.553123 38.6424 0 37.25 0L5.75 0C4.35761 0 3.02226 0.553123 2.03769 1.53769C1.05312 2.52226 0.5 3.85761 0.5 5.25L0.5 36.75C0.5 38.1424 1.05312 39.4777 2.03769 40.4623C3.02226 41.4469 4.35761 42 5.75 42H23.25L18 39.7775ZM18.875 2.625C19.3391 2.625 19.7842 2.80937 20.1124 3.13756C20.4406 3.46575 20.625 3.91087 20.625 4.375C20.625 4.83913 20.4406 5.28425 20.1124 5.61244C19.7842 5.94063 19.3391 6.125 18.875 6.125C18.4109 6.125 17.9658 5.94063 17.6376 5.61244C17.3094 5.28425 17.125 4.83913 17.125 4.375C17.125 3.91087 17.3094 3.46575 17.6376 3.13756C17.9658 2.80937 18.4109 2.625 18.875 2.625ZM12.75 2.625C13.2141 2.625 13.6592 2.80937 13.9874 3.13756C14.3156 3.46575 14.5 3.91087 14.5 4.375C14.5 4.83913 14.3156 5.28425 13.9874 5.61244C13.6592 5.94063 13.2141 6.125 12.75 6.125C12.2859 6.125 11.8408 5.94063 11.5126 5.61244C11.1844 5.28425 11 4.83913 11 4.375C11 3.91087 11.1844 3.46575 11.5126 3.13756C11.8408 2.80937 12.2859 2.625 12.75 2.625ZM6.625 2.625C7.08913 2.625 7.53425 2.80937 7.86244 3.13756C8.19063 3.46575 8.375 3.91087 8.375 4.375C8.375 4.83913 8.19063 5.28425 7.86244 5.61244C7.53425 5.94063 7.08913 6.125 6.625 6.125C6.16087 6.125 5.71575 5.94063 5.38756 5.61244C5.05937 5.28425 4.875 4.83913 4.875 4.375C4.875 3.91087 5.05937 3.46575 5.38756 3.13756C5.71575 2.80937 6.16087 2.625 6.625 2.625Z" fill="#0C47A0"/>
  <path d="M42.5 23.7475C42.4997 23.404 42.3983 23.0682 42.2085 22.7819C42.0187 22.4956 41.7488 22.2715 41.4325 22.1375L30.9325 17.64C30.7166 17.5486 30.4845 17.5015 30.25 17.5015C30.0155 17.5015 29.7834 17.5486 29.5675 17.64L19.0675 22.1375C18.7512 22.2715 18.4813 22.4956 18.2915 22.7819C18.1017 23.0682 18.0003 23.404 18 23.7475V35.7525C18.0003 36.096 18.1017 36.4319 18.2915 36.7182C18.4813 37.0045 18.7512 37.2286 19.0675 37.3625L29.5675 41.86C29.7834 41.9515 30.0155 41.9986 30.25 41.9986C30.4845 41.9986 30.7166 41.9515 30.9325 41.86L41.4325 37.3625C41.7488 37.2286 42.0187 37.0045 42.2085 36.7182C42.3983 36.4319 42.4997 36.096 42.5 35.7525V23.7475ZM30.25 21.1575L36.305 23.7475L30.25 26.355L24.195 23.7475L30.25 21.1575ZM21.5 26.4075L28.5 29.4V37.59L21.5 34.5975V26.4075ZM32 37.59V29.4L39 26.4075V34.5975L32 37.59Z" fill="#0C47A0"/>
</svg>`,
    title: "Создание сайтов",
    description: "Разрабатываем продающие сайты, которые привлекают клиентов, отражают ценности бренда.",
    image: "./images/5.webp"
  },
  5: {
    number: "06",
    icon: `<svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.3925 3.12604C10.5756 3.22089 10.7291 3.36424 10.8362 3.54042C10.9434 3.7166 11 3.91884 11 4.12504C11 5.88004 11.6045 6.89704 12.3005 7.90354C12.3665 7.99954 12.4355 8.09754 12.5075 8.19754C13.172 9.13954 14 10.3095 14 12C14 12.6895 13.8642 13.3722 13.6004 14.0091C13.3365 14.6461 12.9498 15.2248 12.4623 15.7123C11.9748 16.1999 11.396 16.5866 10.7591 16.8504C10.1221 17.1142 9.43944 17.25 8.75 17.25C8.06056 17.25 7.37787 17.1142 6.74091 16.8504C6.10395 16.5866 5.5252 16.1999 5.03769 15.7123C4.55018 15.2248 4.16347 14.6461 3.89963 14.0091C3.6358 13.3722 3.5 12.6895 3.5 12C3.5 10.7655 3.626 9.42004 4.4735 7.92004C5.3015 6.45454 6.7625 4.94104 9.2285 3.20554C9.39671 3.08714 9.59416 3.01712 9.79939 3.0031C10.0046 2.98909 10.2098 3.03161 10.3925 3.12604ZM14.333 8.21104C15.6377 7.35969 17.1411 6.86161 18.6961 6.76552C20.2511 6.66944 21.8043 6.97864 23.204 7.66288C24.6036 8.34713 25.8016 9.38297 26.6809 10.6691C27.5601 11.9552 28.0905 13.4475 28.22 15H24.1265C22.6347 15 21.2039 15.5927 20.149 16.6476C19.0941 17.7025 18.5015 19.1332 18.5015 20.625V24.72C17.4569 24.6328 16.4355 24.3638 15.4835 23.925C15.4595 24.6585 15.4085 25.4595 15.3335 26.2995C16.3514 26.6762 17.4185 26.9035 18.5015 26.9745V30.375C18.5015 31.8669 19.0941 33.2976 20.149 34.3525C21.2039 35.4074 22.6347 36 24.1265 36H33.8765C35.3683 36 36.7991 35.4074 37.854 34.3525C38.9089 33.2976 39.5015 31.8669 39.5015 30.375V20.625C39.5015 19.1332 38.9089 17.7025 37.854 16.6476C36.7991 15.5927 35.3683 15 33.8765 15H30.4775C30.3467 13.0385 29.7042 11.1454 28.614 9.50951C27.5237 7.8736 26.0239 6.55194 24.2638 5.67621C22.5037 4.80049 20.5448 4.40128 18.5824 4.51837C16.62 4.63546 14.7225 5.26475 13.079 6.34354C13.214 6.57454 13.367 6.80554 13.5365 7.05004C13.5935 7.13504 13.6585 7.22704 13.7315 7.32604C13.9085 7.57504 14.12 7.86904 14.333 8.21104ZM33.878 17.25C34.7731 17.25 35.6315 17.6056 36.2645 18.2386C36.8974 18.8715 37.253 19.7299 37.253 20.625V30.375C37.253 31.2701 36.8974 32.1286 36.2645 32.7615C35.6315 33.3945 34.7731 33.75 33.878 33.75H24.128C23.2329 33.75 22.3745 33.3945 21.7415 32.7615C21.1086 32.1286 20.753 31.2701 20.753 30.375V26.901C23.1964 26.5712 25.4639 25.4483 27.2072 23.7048C28.9505 21.9612 30.0731 19.6935 30.4025 17.25H33.878ZM20.753 24.6255V20.625C20.753 19.7299 21.1086 18.8715 21.7415 18.2386C22.3745 17.6056 23.2329 17.25 24.128 17.25H28.127C27.8147 19.0926 26.9369 20.7925 25.6154 22.114C24.2939 23.4355 22.5956 24.3132 20.753 24.6255ZM3.5 22.9305C3.5 21.426 3.62 19.5585 4.274 18.0195C5.5235 18.9495 7.073 19.5 8.75 19.5C10.3641 19.5024 11.9355 18.9819 13.229 18.0165C13.8815 19.557 14 21.4275 14 22.9305C14 25.425 13.604 29.2455 12.878 32.4555C12.518 34.0575 12.059 35.574 11.4935 36.7155C11.213 37.2855 10.8755 37.821 10.463 38.2305C10.0475 38.6415 9.473 39 8.753 39C8.033 39 7.46 38.6415 7.0445 38.229C6.632 37.821 6.2945 37.2855 6.0125 36.717C5.447 35.574 4.988 34.0575 4.625 32.457C3.8975 29.2455 3.5 25.425 3.5 22.932" fill="#0C47A0"/>
</svg>`,
    title: "Дизайн",
    description: "Создаем целостный визуальный образ бренда: от логотипа и айдентики до дизайна интерфейсов.",
    image: "./images/6.webp"
  }
};

// Функция проверки, является ли текущее устройство мобильным (<= 768px)
const isMobile = () => window.innerWidth <= 768;

// Глобальные переменные для элементов
let modalOverlay, servicesContainer, mainCard, sideCards;

// Главный обработчик клика, который переключает логику
function handleCardClick(clickedCard) {
  if (isMobile()) {
    // На мобильных карточки уже видны в слайдере, ничего не делаем
    return;
  }

  const index = clickedCard.getAttribute('data-index');
  const data = modalData[index];

  if (!data) return;

  // --- РЕЖИМ: ДЕСКТОП ---
  const isActive = modalOverlay.classList.contains('active') &&
    modalOverlay.getAttribute('data-index') === index;

  // Если кликнули по активной карточке - закрываем
  if (isActive) {
    closeModal();
    return;
  }

  // Открываем новую модалку
  makeSpaceForModal(index);
  createModalDesktop(index, data);
}

// Функция для авто-открытия карточки на мобильных устройствах
function initializeServiceCards() {
  if (isMobile()) {
    // На мобильных скрываем side-card и показываем все карточки как слайдер
    hideSideCardsAndShowMobileSlider();
  } else {
    // На десктопе автоматически открываем вторую карточку (Digital-продукты)
    const initialCardIndex = '1';
    makeSpaceForModal(initialCardIndex);
    createModalDesktop(initialCardIndex, modalData[initialCardIndex]);
  }
}

// Функция для скрытия side-card и показа мобильного слайдера
function hideSideCardsAndShowMobileSlider() {
  // Скрываем все side-card
  sideCards.forEach(card => {
    card.style.display = 'none';
  });

  // Скрываем модальное окно на мобильных
  if (modalOverlay) {
    modalOverlay.style.display = 'none';
  }

  // Создаем контейнер для мобильного слайдера
  const mobileSliderContainer = document.createElement('div');
  mobileSliderContainer.className = 'mobile-slider-container';

  // Создаем слайдер с всеми карточками
  const modalCardsContainer = document.createElement('div');
  modalCardsContainer.className = 'modal__cards';

  // Добавляем все карточки в контейнер
  Object.keys(modalData).forEach(index => {
    const data = modalData[index];

    const modalCard = document.createElement('div');
    modalCard.className = 'modal-card-mobile';
    modalCard.setAttribute('data-slide-index', index);

    modalCard.innerHTML = `
      <div class="modal-card-mobile-inner">
        <img src="${data.image}" alt="${data.title}" class="modal-bg-mobile" />
        <div class="modal-content">
          <div class="modal-header">
            <div class="modal-number">${data.number}</div>
            <div class="modal-icon">${data.icon}</div>
          </div>
          <h3 class="modal-title">${data.title}</h3>
          <p class="modal-description">${data.description}</p>
          <button class="modal-button white-button">
            Подробнее 
            <svg width="18" height="15" viewBox="0 0 18 15" fill="none">
              <path d="M1 7.5L17 7.5M17 7.5L10 0.5M17 7.5L10 14.5" stroke="#393939"/>
            </svg>
          </button>
        </div>
      </div>
    `;

    modalCardsContainer.appendChild(modalCard);
  });

  mobileSliderContainer.appendChild(modalCardsContainer);

  // Добавляем слайдер после main-card
  if (mainCard && mainCard.parentNode) {
    mainCard.parentNode.insertBefore(mobileSliderContainer, mainCard.nextSibling);
  }

  // Инициализируем пагинацию для мобильного слайдера
  initMobileSliderPagination(modalCardsContainer);
}

// Инициализация пагинации для мобильного слайдера
function initMobileSliderPagination(modalCardsContainer) {
  const dots = document.querySelectorAll('.side-card-pagination .pagination-dot');

  if (!modalCardsContainer || dots.length === 0) return;

  // Клик по точкам
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      const card = modalCardsContainer.querySelector('.modal-card-mobile');
      if (!card) return;

      const cardWidth = card.offsetWidth;
      const scrollPosition = (cardWidth + 15) * index;

      modalCardsContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });

      // Обновляем активную точку
      dots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
    });
  });

  // Авто-определение активной точки при скролле
  let scrollTimeout;
  modalCardsContainer.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const scrollLeft = modalCardsContainer.scrollLeft;
      const cardWidth = modalCardsContainer.querySelector('.modal-card-mobile').offsetWidth;
      const activeIndex = Math.round(scrollLeft / (cardWidth + 15));

      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
      });
    }, 50);
  });
}

// Функция для создания пространства для модалки
function makeSpaceForModal(activeIndex) {
  activeIndex = parseInt(activeIndex);

  const cardToReplace = document.querySelector(`.side-card[data-index="${activeIndex}"]`);

  // Сбрасываем все стили
  if (mainCard) mainCard.style.order = "0";

  sideCards.forEach((card) => {
    const cardIndex = parseInt(card.getAttribute('data-index'));
    card.classList.remove('hidden-card');
    card.style.order = cardIndex.toString();
  });

  // Модалка занимает место активной карточки
  modalOverlay.style.order = activeIndex.toString();

  // Скрываем активную карточку
  if (cardToReplace) {
    cardToReplace.classList.add('hidden-card');
  }

  // Показываем модалку
  setTimeout(() => {
    modalOverlay.classList.add('active');
  }, 10);
}

// Функция создания десктопной модалки
function createModalDesktop(index, data) {
  modalOverlay.innerHTML = '';

  const modalContainer = document.createElement('div');
  modalContainer.className = 'modal-container';
  modalOverlay.setAttribute('data-index', index);

  const modalBg = document.createElement('img');
  modalBg.className = 'modal-bg';
  modalBg.src = data.image;
  modalBg.alt = data.title;

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';
  modalContent.innerHTML = `
        <div class="modal-header">
            <div class="modal-number">${data.number}</div>
            <div class="modal-icon">${data.icon}</div>
        </div>
        <h3 class="modal-title">${data.title}</h3>
        <p class="modal-description">${data.description}</p>
        <button class="modal-button white-button">
            Подробнее 
            <svg width="18" height="15" viewBox="0 0 18 15" fill="none">
                <path d="M1 7.5L17 7.5M17 7.5L10 0.5M17 7.5L10 14.5" stroke="#393939"/>
            </svg>
        </button>
    `;

  modalContainer.appendChild(modalBg);
  modalContainer.appendChild(modalContent);
  modalOverlay.appendChild(modalContainer);

  const modalButton = modalContent.querySelector('.modal-button');
  modalButton.addEventListener('click', closeModal);
}

// Функция создания мобильной модалки (не используется на мобильных)
function createModalMobile() {
  // На мобильных модальное окно не используется
  return;
}

// Функция закрытия модалки
function closeModal() {
  const activeIndex = modalOverlay.getAttribute('data-index');

  if (!activeIndex) return;

  modalOverlay.classList.remove('active');

  const resetCard = document.querySelector(`.side-card[data-index="${activeIndex}"]`);

  const resetStyles = () => {
    if (!isMobile()) {
      // Сброс для ДЕСКТОПА
      if (resetCard) {
        resetCard.classList.remove('hidden-card');
      }
      if (mainCard) mainCard.style.order = '0';
      sideCards.forEach((card) => {
        card.style.order = 'unset';
      });
    }

    modalOverlay.removeAttribute('data-index');
    modalOverlay.innerHTML = '';
  };

  // Ждем завершения анимации
  setTimeout(resetStyles, 400);
}

// ==================== MOBILE MENU FUNCTIONALITY ====================

function initMobileMenu() {
  const mobileMenuBtn = document.querySelector('.header__mobile-menu-btn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const mobileMenuClose = document.getElementById('mobileMenuClose');
  const body = document.body;

  // Проверяем, что элементы существуют
  if (!mobileMenuBtn || !mobileMenu || !mobileMenuOverlay || !mobileMenuClose) {
    console.log('Mobile menu elements not found');
    return;
  }

  function openMenu() {
    mobileMenu.classList.add('active');
    mobileMenuOverlay.classList.add('active');
    body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    body.style.overflow = '';
  }

  // Открытие меню
  mobileMenuBtn.addEventListener('click', openMenu);

  // Закрытие меню
  mobileMenuClose.addEventListener('click', closeMenu);
  mobileMenuOverlay.addEventListener('click', closeMenu);

  // Закрытие по клавише Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
      closeMenu();
    }
  });

  // Закрытие меню при клике на ссылку
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu__link');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// Инициализация слайдера "Advantage" (Преимущества)
function initAdvantageSlider() {
  const cardsContainer = document.querySelector('.advantage__cards');
  const dots = document.querySelectorAll('.advantage-pagination .pagination-dot');

  if (!cardsContainer || dots.length === 0) return;

  // Клик по точкам
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      const card = cardsContainer.querySelector('.advantage-card');
      if (!card) return;

      const cardWidth = card.offsetWidth;
            const scrollPosition = (cardWidth + 20) * index;

      cardsContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    });
  });

  // Авто-определение активной точки при скролле
  cardsContainer.addEventListener('scroll', () => {
    const scrollLeft = cardsContainer.scrollLeft;
    const cardWidth = cardsContainer.querySelector('.advantage-card').offsetWidth;
     const activeIndex = Math.round(scrollLeft / (cardWidth + 20));

    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === activeIndex);
    });
  });
}


// Инициализация слайдера "Services" (Наши услуги)
function initMainServicesSlider() {
  const cardsContainer = document.querySelector('.services__cards');
  const dots = document.querySelectorAll('.services-pagination .pagination-dot');

  if (!cardsContainer || dots.length === 0) return;

  // Клик по точкам
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      const card = cardsContainer.querySelector('.service-card');
      if (!card) return;

      const cardWidth = card.offsetWidth;
            const scrollPosition = (cardWidth + 20) * index;

      cardsContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    });
  });

  // Авто-определение активной точки при скролле
  cardsContainer.addEventListener('scroll', () => {
    const scrollLeft = cardsContainer.scrollLeft;
    const cardWidth = cardsContainer.querySelector('.service-card').offsetWidth;
        const activeIndex = Math.round(scrollLeft / (cardWidth + 20));

    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === activeIndex);
    });
  });
}

// ==================== INITIALIZE ALL FUNCTIONALITY ====================

document.addEventListener('DOMContentLoaded', function () {
  // Инициализация глобальных переменных
  modalOverlay = document.getElementById('modalOverlay');
  servicesContainer = document.querySelector('.services-container');
  mainCard = document.querySelector('.main-card');
  sideCards = document.querySelectorAll('.side-card');

  // Проверяем, что элементы существуют
  if (!modalOverlay) {
    console.error('Modal overlay not found!');
    return;
  }

  if (!servicesContainer) {
    console.error('Services container not found!');
    return;
  }

  // Добавляем модалку как прямой потомок servicesContainer
  if (!servicesContainer.contains(modalOverlay)) {
    servicesContainer.appendChild(modalOverlay);
  }

  // Привязка кликов к карточкам (только для десктопа)
  if (!isMobile()) {
    sideCards.forEach(card => {
      card.addEventListener('click', function () {
        handleCardClick(this);
      });
    });
  }

  // Авто-открытие при загрузке
  initializeServiceCards();

  // Advantage Cards Flip Interaction
  const advantageCards = document.querySelectorAll('.advantage-card');
  advantageCards.forEach(card => {
    card.addEventListener('click', function () {
      advantageCards.forEach(c => {
        if (c !== this) {
          c.classList.remove('active');
        }
      });
      this.classList.toggle('active');
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.advantage-card') && !e.target.closest('#modalOverlay')) {
      advantageCards.forEach(card => card.classList.remove('active'));
    }
  });

  // Инициализация слайдеров
  initAdvantageSlider();
  initMainServicesSlider();

  // Timer Script
  const timerDays = document.querySelector('.timer__unit:nth-child(1) .timer__number');
  const timerHours = document.querySelector('.timer__unit:nth-child(3) .timer__number');
  const timerMinutes = document.querySelector('.timer__unit:nth-child(5) .timer__number');
  const timerSeconds = document.querySelector('.timer__unit:nth-child(7) .timer__number');

  if (timerDays && timerHours && timerMinutes && timerSeconds) {
    let days = parseInt(timerDays.textContent, 10);
    let hours = parseInt(timerHours.textContent, 10);
    let minutes = parseInt(timerMinutes.textContent, 10);
    let seconds = parseInt(timerSeconds.textContent, 10);

    function updateTimer() {
      if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(timerInterval);
        return;
      }

      seconds--;

      if (seconds < 0) {
        seconds = 59;
        minutes--;
      }
      if (minutes < 0) {
        minutes = 59;
        hours--;
      }
      if (hours < 0) {
        hours = 23;
        days--;
      }

      timerDays.textContent = String(days).padStart(2, '0');
      timerHours.textContent = String(hours).padStart(2, '0');
      timerMinutes.textContent = String(minutes).padStart(2, '0');
      timerSeconds.textContent = String(seconds).padStart(2, '0');
    }

    const timerInterval = setInterval(updateTimer, 1000);
  }

  // Инициализация мобильного меню
  initMobileMenu();
});