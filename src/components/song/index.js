var images = [ 'temp.jpg' ]
var titles = [ 'Song Title' ]
var authors = [ 'Author' ]

module.exports = {
  template: '.song',
  props: ['image', 'title', 'author', 'play', 'fav'],
  data: function() {
    return {
      image: 'temp.jpg',
      title: 'Song Title',
      author: 'Author',
      index: 0,
      play: false,
      fav: false
    }
  },
  computed: {
    index: function() {
      return this.index = 0
    },
    image: function() {
      return this.image = images[this.index]
    },
    title: function() {
      return this.title = titles[this.index]
    },
    author: function() {
      return this.author = authors[this.index]
    }
  },
  methods: {
    togglePlay: function() {
      this.play = !this.play
      return this.play = this.play ? 'pause' : 'play_arrow'
    },
    toggleFav: function() {
      return this.fav = !this.fav
    }
  }
}
