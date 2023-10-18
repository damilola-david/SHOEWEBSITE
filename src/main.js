import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css/sea-green';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faXTwitter,faFacebook,faInstagram,faYoutube,faPinterest} from '@fortawesome/free-brands-svg-icons'
import { faCircleChevronLeft,faCircleChevronRight,faShoePrints,faBagShopping} from '@fortawesome/free-solid-svg-icons'
library.add(faXTwitter,faFacebook,faInstagram,faYoutube,faPinterest,faCircleChevronLeft,faCircleChevronRight,faShoePrints,faBagShopping)
import buttoncta from './components/ButtonCta.vue';
import theBrands from './components/TheBrands.vue';
const app = createApp(App)

app.component('button-cta', buttoncta);
app.component('theBrands',theBrands);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use( VueSplide );
app.mount('#app')
