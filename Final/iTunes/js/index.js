/********************************
 *Anthony Rivera                *
 *anthonyriv2@my.smccd.edu      *
 *CIS 114 OL                    *
 *index.js                      *
 *Final, iTunes                 *
 *12/8/2017                     *
 ********************************/
//Modified example file from personal CodePen dashboard https://codepen.io/ar94952/pen/jagBqg?editors=1010
//Original js file in Babel
'use strict';

(function (w) {

  //const
  var ITUNES_BASE_URL = 'https://itunes.apple.com/search';
  var ITEM_LIMITS = [10, 20, 50, 100, 200];
  var MEDIA_TYPES = {
    //list of search options
    music: {
      entity: ['album', 'song', 'mix', 'musicTrack'],
      attribute: ['mixTerm', 'genreIndex', 'artistTerm', 'composerTerm', 'albumTerm', 'ratingIndex', 'songTerm']
    },
    musicVideo: {
      entity: ['musicVideo'],
      attribute: ['genreIndex', 'artistTerm', 'albumTerm', 'ratingIndex', 'songTerm']
    },
    all: {
      entity: ['album', 'song', 'mix', 'musicVideo'],
      attribute: ['actorTerm', 'languageTerm', 'allArtistTerm', 'tvEpisodeTerm', 'shortFilmTerm', 'directorTerm', 'releaseYearTerm', 'titleTerm', 'featureFilmTerm', 'ratingIndex', 'keywordsTerm', 'descriptionTerm', 'authorTerm', 'genreIndex', 'mixTerm', 'allTrackTerm', 'artistTerm', 'composerTerm', 'tvSeasonTerm', 'producerTerm', 'ratingTerm', 'songTerm', 'movieArtistTerm', 'showTerm', 'movieTerm', 'albumTerm']
    }
  };

  //variable
  var data = {
    // Defaults - tried modifications in this section, but did not produce good outcome
    mediaTypes: Object.keys(MEDIA_TYPES),
    media: Object.keys(MEDIA_TYPES)[1],
    attrs: MEDIA_TYPES['musicVideo']['attribute'],
    attr: MEDIA_TYPES['musicVideo']['attribute'][1],
    limits: ITEM_LIMITS,
    limit: ITEM_LIMITS[1],
    term: '',
    items: {},
    isLoading: false,
    isMoreCont: false,
    request: null,
    reqItemOption: {
      lang: 'en_US',
      country: 'us'
    }
  };

  //search form
  (function (exports) {
    'use strict';

    exports.searchForm = Vue.component('search-form', {
      template: '#tpl-serch-form',

      props: {
        mediaTypes: Array,
        attrs: Array,
        limits: Array,
        media: String,
        attr: String,
        limit: Number,
        term: String
      },

      computed: {},

      methods: {
        changeValue: function changeValue(e, type) {
          var retObj = {};
          if ('media' === type) {
            retObj.media = e.target.value;
            retObj.values = MEDIA_TYPES[e.target.value]['attribute'];
          } else if ('attr' === type) {
            retObj.values = e.target.value;
          } else if ('limit' === type) {
            retObj.values = parseInt(e.target.value, 10);
          } else if ('term' === type) {
            retObj.values = e.target.value;
          }
          this.$root.$emit('updateMediaType', type, retObj);
        }
      }
    });
  })(w);

  //search results
  (function (exports) {
    'use strict';

    exports.searchResults = Vue.component('search-results', {
      template: '#tpl-serch-results',

      props: {
        isLoading: Boolean,
        isMoreCont: Boolean,
        items: Object
      },

      computed: {},

      filters: {
        showReleaseDate: function showReleaseDate(val) {
          var date = undefined,
              retDate = undefined;
          date = new Date(val);
          retDate = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
          return retDate;
        },
        showTrackTime: function showTrackTime(val) {
          var tmpSec = undefined,
              retMin = undefined,
              retSec = undefined;
          tmpSec = Math.floor(val / 1000);
          retMin = Math.floor(tmpSec / 60);
          retSec = ('0' + tmpSec % 60).slice(-2);
          return retMin + ':' + retSec;
        }
      }
    });
  })(w);

  //app
  (function (exports) {
    'use strict';

    exports.app = new Vue({
      el: '#app',

      data: data,

      mounted: function mounted() {
        this.$on('updateMediaType', this.updateMediaType);
      },

      methods: {
        updateMediaType: function updateMediaType(type, retObj) {
          if ('media' === type) {
            this.media = retObj.media;
            this.attrs = retObj.values;
            this.attr = this.attrs[0];
          } else if ('attr' === type) {
            this.attr = retObj.values;
          } else if ('limit' === type) {
            this.limit = retObj.values;
          } else if ('term' === type) {
            this.term = retObj.values;
          }
          this.updateItems();
        },
        updateItems: function updateItems() {
          var _this = this;

          if (this.checkRequestCancel()) return;

          var CancelToken = axios.CancelToken;
          var source = CancelToken.source();
          this.setData('request', source);
          this.setData('isLoading', true);

          var url = ITUNES_BASE_URL;
          var config = {
            params: {
              media: this.media,
              attribute: this.attr,
              term: this.term,
              lang: this.reqItemOption.lang,
              country: this.reqItemOption.country,
              limit: this.limit,
              offset: this.currentOffset
            },
            cancelToken: source.token
          };

          axios.get(url, config).then(function (res) {
            _this.setData('isLoading', false);
            _this.setData('request', null);
            _this.setData('items', res.data);
          }).catch(function (err) {
            if (axios.isCancel(err)) console.warn('Request canceled', err.message);else console.error(err);

            _this.setData('isLoading', false);
            _this.setData('request', null);
          });
        },
        checkRequestCancel: function checkRequestCancel() {
          if (this.request && 'function' === typeof this.request.cancel) {
            this.request.cancel('Request canceled.');
            this.setData('request', null);
            return true;
          }
          return false;
        },
        setData: function setData(propName, propVal) {
          return this[propName] = propVal;
        }
      }
    });
  })(w);
})(window);