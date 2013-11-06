var Photo = Backbone.Model.extend({

  defaults: {
    photoUrl: '/img/'
  },

  initialize: function() {

  }

});

var Album = Backbone.Collection.extend({

  model: Photo,

  initialize: function() {

  }

});


var album = new Album([

  { photoUrl: '/img/01.jpg' },
  { photoUrl: '/img/02.jpg' },
  { photoUrl: '/img/03.jpg' },
  { photoUrl: '/img/04.jpg' },
  { photoUrl: '/img/05.jpg' },
  { photoUrl: '/img/06.jpg' },
  { photoUrl: '/img/07.jpg' },
  { photoUrl: '/img/08.jpg' }

]);
