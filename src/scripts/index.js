import '../styles/index.scss';

import {stickysidebar} from 'sticky-sidebar';

var sidebar = new StickySidebar('#sidebar', {
    containerSelector: '#main-content',
    innerWrapperSelector: '.sidebar__inner',
    topSpacing: 20,
    bottomSpacing: 20
});


setTimeout(function () {
    window.dispatchEvent(new Event('resize'));
}, 50)

