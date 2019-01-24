
__require('vue',        (r, m, e) => { m.exports = Vue;       });
__require('vue-router', (r, m, e) => { m.exports = VueRouter; });
__require('vuex',       (r, m, e) => { m.exports = Vuex;      });

__scripts_vue = function() {
  __script('https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17/vue.min.js');
  __script('https://cdnjs.cloudflare.com/ajax/libs/vuex/3.0.1/vuex.min.js');
  __script('https://cdnjs.cloudflare.com/ajax/libs/vue-router/3.0.1/vue-router.min.js');
};

__scripts = __scripts_vue;
