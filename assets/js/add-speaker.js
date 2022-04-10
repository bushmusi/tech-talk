const speakerList = [
  {
    name: 'Peter Hailu',
    position: 'CEO Ice Addis PLC',
    detail: 'he had more than 20 years of exprience in cloud practioner in Azure Cloud. Nice to meet you',
    image: './assets/images/speakers/second-man.jpg"',
  },
  {
    name: 'Yonatan Hailu',
    position: 'CEO Soft-Valley',
    detail: 'he had more than 20 years of exprience in cloud practioner in Azure Cloud. Nice to meet you',
    image: './assets/images/speakers/third-man.png',
  },
  {
    name: 'Dereje Tasew',
    position: 'COO Ice Addis PLC',
    detail: 'he had more than 20 years of exprience in cloud practioner in Azure Cloud. Nice to meet you',
    image: './assets/images/speakers/fourth-man.jpg"',
  },
  {
    name: 'Bushra Mustofa',
    position: 'CTO Hulugram',
    detail: 'he had more than 20 years of exprience in cloud practioner in Azure Cloud. Nice to meet you',
    image: './assets/images/speakers/Five-man.jpg',
  },
  {
    name: 'Hawletu Zemene',
    position: 'CTO Yegara Host',
    detail: 'he had more than 20 years of exprience in cloud practioner in Azure Cloud. Nice to meet you',
    image: './assets/images/speakers/six-man.jpg',
  },
  {
    name: 'Ferid Yesuf',
    position: 'Big-Boss CTO',
    detail: 'he had more than 20 years of exprience in cloud practioner in Azure Cloud. Nice to meet you',
    image: './assets/images/speakers/Fifth-man.jpg',
  },
];

const featureList = document.querySelector('.feature-list');

const moreBtn = document.querySelector('.feature-more-btn');

const moreBox = ` 
  <strong>MORE </strong>
  <i class="fas fa-chevron-down"></i>
`;

const lessBox = `
  <strong>LESS </strong>
  <i class="fas fa-chevron-up"></i>
`;

const speakerUpdate = (max = 3) => {
  featureList.innerHTML = '';
  speakerList.forEach((value, index) => {
    if (index <= max) {
      const insertElement = `
          <li class="feature-item">
              <div  class="speaker-img">
                  <img class="checker" src="./assets/images/checkerboard.png" alt="Checker Board">
                  <img class="person" src="${value.image}" alt="Featu-speaker">
              </div>
              <div class="speaker-detail">
                  <h2>${value.name}</h2>
                  <small id="speaker-position"><i>${value.position}</i></small>
                  <small>${value.detail}</small>
              </div>
          </li>
      `;
      featureList.innerHTML += insertElement;
    }
  });
};

moreBtn.addEventListener('click', () => {
  const { btnBoxChild, len } = moreBtn.id === 'moreTrue' ? { btnBoxChild: lessBox, len: 5 } : { btnBoxChild: moreBox, len: 3 };
  moreBtn.id = moreBtn.id === 'moreTrue' ? 'moreFalse' : 'moreTrue';
  moreBtn.innerHTML = btnBoxChild;
  speakerUpdate(len);
});

speakerUpdate();