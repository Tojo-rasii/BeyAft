const headerSection = document.getElementById('sectionHeaderMobile');
const show = document.getElementById('show');
const closes = document.getElementById('close');

show.addEventListener('click', () => {
    headerSection.classList.add('display');
})

closes.addEventListener('click', () => {
    headerSection.classList.remove('display');
})

