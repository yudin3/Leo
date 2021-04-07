console.log(document)
document.addEventListener('DOMContentLoaded', () => {

    'use Srtict';

    const productsElems = document.querySelectorAll('.products__item');
    const productDescriptionElems = document.querySelectorAll('.product__description p');
    const productTitle = document.querySelector('.product__title');
    const productImage = document.querySelector('.product__image img');

    const headerSwitchLeft = document.querySelector('.header__button_left');
    const headerSwitchRight = document.querySelector('.header__button_right');

    const bannerImage = document.querySelector('.banner__image img');
    const bannerTitle = document.querySelector('.banner__title');
    const bannerText = document.querySelector('.banner__text');

    const footerSwitchLeft = document.querySelector('.testimonial__button_left');
    const footerSwitchRight = document.querySelector('.testimonial__button_right');
    const testimonialDescription = document.querySelector('.testimonial__description p');

    console.log(productDescriptionElems);
    console.log(productTitle);
    console.log(productImage);
    console.log(headerSwitchLeft);
    console.log(headerSwitchRight);

    let bannerCounter = 2;
    let footerCounter = 2;

    const bannerData = [
        {
            img: 'images/coffee/1.jpg',
            alt: 'Coffee illustration',
            title: 'Example №1',
            text: 'Lorem ipsum dolor sit amet'

        },
        {
            img: 'images/coffee/2.jpg',
            alt: 'Coffee illustration',
            title: 'Example №2',
            text: 'Etiam facilisis lobortis libero'
        },
        {
            img: 'images/coffee/3.jpg',
            alt: 'Coffee illustration',
            title: 'Example №3',
            text: 'Proin a elementum dolor'
        },
        {
            img: 'images/coffee/4.jpg',
            alt: 'Coffee illustration',
            title: 'Example №4',
            text: 'Cras vitae nisl eros'
        },
        {
            img: 'images/coffee/5.jpg',
            alt: 'Coffee illustration',
            title: 'Example №5',
            text: 'Aenean ac dolor at leo semper varius vel vehicula dolor'
        },
        {
            img: 'images/coffee/6.jpg',
            alt: 'Coffee illustration',
            title: 'Example №6',
            text: 'Semper varius vel vehicula dolor'
        },
        {
            img: 'images/coffee/7.jpg',
            alt: 'Coffee illustration',
            title: 'Example №7',
            text: 'Vivamus felis elit, accumsan et egestas eu'
        },
        {
            img: 'images/coffee/8.jpg',
            alt: 'Coffee illustration',
            title: 'Example №8',
            text: 'Vestibulum tortor felis'
        },
    ];

    headerSwitchLeft.addEventListener('click', () => {
        bannerCounter = bannerCounter - 1;

        bannerImage.src = bannerData[bannerCounter].img;
        bannerImage.alt = bannerData[bannerCounter].alt;
        bannerTitle.textContent = bannerData[bannerCounter].title;
        bannerText.textContent = bannerData[bannerCounter].text;

        if (bannerCounter == 0){
            headerSwitchLeft.classList.add('disable');
        };
        if (bannerCounter!=7 && headerSwitchRight.classList.contains('disable')){
            headerSwitchRight.classList.toggle('disable');
        };
        
    });

    headerSwitchRight.addEventListener('click', () => {
        bannerCounter = bannerCounter + 1;

        bannerImage.src = bannerData[bannerCounter].img;
        bannerImage.alt = bannerData[bannerCounter].alt;
        bannerTitle.textContent = bannerData[bannerCounter].title;
        bannerText.textContent = bannerData[bannerCounter].text;

        if (bannerCounter == 7){
            headerSwitchRight.classList.add('disable');
        };
        if (bannerCounter!=0 && headerSwitchLeft.classList.contains('disable')){
            headerSwitchLeft.classList.toggle('disable');
        };
    });


    const footerData=[
        {
            testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis lobortis libero. Proin a elementum dolor. Ut faucibus pellentesque rutrum. Integer sit amet porta lectus.'
        },
        {
            testimonial: 'Proin mollis dapibus lacus, aliquet commodo ex. Mauris vel augue tincidunt, aliquam mi a, pharetra ligula. Nam finibus iaculis venenatis.'
        },
        {
            testimonial: 'Etiam a efficitur ligula. Sed dapibus arcu id tortor imperdiet scelerisque. In pulvinar commodo metus, sed suscipit metus tempor non.'
        },
        {
            testimonial: 'Fusce viverra et sem in suscipit. Integer ultrices dolor non ante accumsan facilisis. Morbi non semper purus.'
        }
    ];

    footerSwitchLeft.addEventListener('click', () => {
        footerCounter = footerCounter - 1;

        testimonialDescription.textContent = footerData[footerCounter].testimonial;

        if (footerCounter == 0){
            footerSwitchLeft.classList.add('disable');
        };
        if (footerCounter!=3 && footerSwitchRight.classList.contains('disable')){
            footerSwitchRight.classList.toggle('disable');
        };
        
    });

    footerSwitchRight.addEventListener('click', () => {
        footerCounter = footerCounter + 1;

        testimonialDescription.textContent = footerData[footerCounter].testimonial;

        if (footerCounter == 3){
            footerSwitchRight.classList.add('disable');
        };
        if (footerCounter!=0 && footerSwitchLeft.classList.contains('disable')){
            footerSwitchLeft.classList.toggle('disable');
        };
    });

    const productData = [
        {
            img: 'images/product1.png',
            p1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id nulla in est efficitur egestas. Nulla facilisi. Mauris mollis, odio viverra porta euismod, odio velit sodales quam, in hendrerit sem ex egestas augue. Aenean sed lorem malesuada, ullamcorper nulla lacinia, consectetur dolor. Donec semper lorem ipsum, quis cursus enim feugiat in. Aenean tempor rutrum vulputate. Nullam aliquam, lectus sit amet dapibus feugiat, nisl erat tempor risus, et mattis lorem urna in tortor. Vestibulum eget massa ultricies, pharetra nisi ullamcorper, mattis risus. Sed dignissim, enim non pulvinar cursus, magna turpis venenatis diam, et posuere arcu tortor eu odio. Maecenas volutpat velit vitae est lacinia, eu suscipit elit consectetur. Aenean blandit libero ac tempus posuere.',
            p2: 'Suspendisse quis diam eget eros consectetur vulputate. Morbi nec tincidunt odio. Nam eget vehicula velit. Vestibulum vehicula ullamcorper lacus eget faucibus. Duis pulvinar urna finibus quam consequat tempor sed quis elit. Vivamus enim tellus, maximus in varius vel, malesuada non mi. Quisque vitae augue diam. Donec dui metus, rutrum eu egestas non, bibendum quis urna. Suspendisse potenti. Quisque vitae semper libero, in congue lorem.', 
            title: 'Product №1'
        },
        {
            img: 'images/product2.jpg',
            p1: 'Maecenas condimentum libero sit amet libero condimentum, quis commodo sem commodo. Aenean sodales dui at fringilla imperdiet. Pellentesque eleifend varius egestas. Aliquam erat volutpat. Mauris semper, erat sit amet fermentum laoreet, metus metus varius nulla, eu commodo mi magna eget justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut turpis tortor, auctor sit amet urna non, posuere finibus mi. Maecenas a dui sapien. In hac habitasse platea dictumst. Nullam ut felis non nunc lacinia consectetur. Quisque fermentum id eros vel dignissim. Proin dapibus metus in lacus vehicula aliquet. Proin mattis blandit enim, bibendum condimentum nunc tempus id. Duis quis mi at justo finibus gravida. Proin gravida velit tortor, ac vulputate nulla fermentum ac.', 
            p2: 'Aenean viverra tellus sed turpis blandit fermentum a et arcu. Nulla venenatis purus in nisi ultrices, sit amet pellentesque diam luctus. Aenean facilisis eleifend placerat. Aliquam erat volutpat. Etiam mollis faucibus orci et faucibus. Aliquam in luctus turpis. Integer lacinia euismod ex vel semper.', 
            title: 'Product №2'
        },
        {
            img: 'images/product3.webp',
            p1: 'Vivamus sed dignissim urna. Aenean gravida nulla sed dictum suscipit. Nullam sit amet malesuada ligula. Maecenas facilisis, ex id rhoncus porta, purus ipsum semper orci, sollicitudin accumsan dui quam id nibh. Quisque volutpat sit amet lorem tincidunt semper. Duis in risus quis velit maximus accumsan. Mauris feugiat risus non molestie finibus. Pellentesque metus purus, convallis ut arcu vel, blandit rutrum massa. Duis aliquam at erat eu rhoncus. Aliquam et turpis non elit commodo aliquam. Cras semper lacus tempus, auctor diam sit amet, maximus diam. Fusce ac scelerisque mi, sit amet pulvinar nulla. Proin ultrices, ipsum condimentum tristique sagittis, purus arcu volutpat neque, eu rhoncus dolor nunc ut ipsum. Pellentesque in velit leo.', 
            p2: 'Mauris euismod ultrices metus, vel condimentum dolor pharetra non. Sed accumsan at lectus sit amet tempor. Duis hendrerit dolor eget ante varius, sit amet iaculis leo iaculis. Sed quis tortor vehicula, ullamcorper orci non, congue dolor. Maecenas at orci ornare diam pharetra commodo at quis ante. Nam porta nisi sit amet pharetra blandit. Donec tempor faucibus iaculis.', 
            title: 'Product №3'
        },
        {
            img: 'images/product4.jpg',
            p1: 'Integer sodales eleifend tortor. Sed iaculis vitae tellus vel consectetur. Vestibulum mollis ante eget scelerisque fringilla. Curabitur fringilla sed nisi id convallis. Praesent vitae pulvinar nunc. In eu dolor consectetur, pretium arcu viverra, finibus eros. Nullam arcu sem, ornare nec auctor non, tincidunt quis libero. Ut ipsum turpis, ultricies ac nunc eu, porttitor lacinia metus. Donec tincidunt ornare urna non pharetra. Donec vel condimentum nisi. Duis ornare ex a nisi pellentesque varius. Morbi sit amet risus velit.', 
            p2: 'Phasellus tempus bibendum erat, quis varius quam condimentum at. Integer rutrum mi velit, vitae bibendum lorem suscipit in. Morbi rutrum efficitur diam. Ut sed ex et nisl pretium laoreet. Mauris accumsan feugiat nunc vitae pulvinar. Donec nec faucibus ligula, sit amet cursus arcu. Suspendisse potenti. Aenean malesuada nisi ac tincidunt auctor. Suspendisse eu efficitur lacus, vitae viverra nisl. Cras tristique at est non fermentum.', 
            title: 'Product №4'
        },
        
    ];

    const closeAll = () =>{
        productsElems.forEach((product,i) => {
            product.classList.remove('products__item-active');

        });
    };

    productsElems.forEach((elem,i) => {
        elem.addEventListener('click', () => {
            closeAll();
            elem.classList.add('products__item-active');

            productDescriptionElems[0].textContent = productData[i].p1;
            productDescriptionElems[1].textContent = productData[i].p2;
            productTitle.textContent = productData[i].title;
            productImage.src = productData[i].img;

        });

    });



});
