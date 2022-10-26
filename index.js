
const content = document.querySelector('.js-generated.content')

const header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo');
content.append(header);

const dogContent = document.createElement('div');
dogContent.setAttribute('class', 'dog-content');
content.append(dogContent);
const dogImage = document.createElement('img');
dogImage.setAttribute('class', 'dog-image');
dogImage.setAttribute('src', './assets/rizzo.jpg');
content.append(dogImage);

const dogDetails = document.createElement('div');
dogDetails.setAttribute('class', 'dog-details');
content.append(dogDetails);

const descriptionHeader = document.createElement('h3');
descriptionHeader.append('Description:');
dogDetails.append(descriptionHeader);

const descriptionParagraph = document.createElement('p');
descriptionParagraph.textContent = 'This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.'
dogDetails.append(descriptionParagraph);

const descriptionList = document.createElement('h3');
descriptionList.append('Feeding Times:');
dogDetails.append(descriptionList);

const feedingTimeList = document.createElement('ul');
dogDetails.append(feedingTimeList);

const eatBreakfast = document.createElement('li');
eatBreakfast.textContent = '9:00 am';
feedingTimeList.append(eatBreakfast);

const eatLunch = document.createElement('li');
eatLunch.textContent = '12:00 pm';
feedingTimeList.append(eatLunch);

const eatDinner = document.createElement('li');
eatDinner.textContent = '5:00 pm';
feedingTimeList.append(eatDinner);




