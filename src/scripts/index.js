import '../styles/index.scss';

import Gumshoe from 'gumshoejs';
import 'sticky-sidebar';
import SmoothScroll from 'smooth-scroll';

const scroll = new SmoothScroll('a[href*="#"]');

const spy = new Gumshoe('#sidebar a', {
    nested: true,
	nestedClass: 'active'
});

const sidebar = new StickySidebar('#sidebar', {
    containerSelector: '#main-content',
    innerWrapperSelector: '.sidebar__inner',
    topSpacing: 20,
    bottomSpacing: 20
});


setTimeout(function () {
    window.dispatchEvent(new Event('resize'));
    sidebar.updateSticky();
}, 50)

