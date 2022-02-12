const speaker_list = [
    {
        'name': 'Peter Hailu',
        'position': 'CEO Ice Addis PLC',
        'detail' : 'he had more than 20 years of exprience in cloud practioner in Azure Cloud. Nice to meet you',
        'image': './assets/images/speakers/second-man.jpg"'
    },
    {
        'name': 'Yonatan Hailu',
        'position': 'CEO Soft-Valley',
        'detail' : 'he had more than 20 years of exprience in cloud practioner in Azure Cloud. Nice to meet you',
        'image': './assets/images/speakers/third-man.png'
    },
    {
        'name': 'Dereje Tasew',
        'position': 'COO Ice Addis PLC',
        'detail' : 'he had more than 20 years of exprience in cloud practioner in Azure Cloud. Nice to meet you',
        'image': './assets/images/speakers/fourth-man.jpg"'
    },
    {
        'name': 'Bushra Mustofa',
        'position': 'CTO Hulugram',
        'detail' : 'he had more than 20 years of exprience in cloud practioner in Azure Cloud. Nice to meet you',
        'image': './assets/images/speakers/Five-man.jpg'
    },
];

const featureList = document.querySelector('.feature-list');

speaker_list.forEach((value) => {
    const insertElement = `
        <li class="feature-item">
            <span  id="speaker-img">
            </span>
            <img src="${value.image}" alt="Featu-speaker">
            <div class="speaker-detail">
                <h2>${value.name}</h2>
                <small id="speaker-position"><i>${value.position}</i></small>
                <small>${value.detail}</small>
            </div>
        </li>
    `;
    featureList.innerHTML += insertElement;
})