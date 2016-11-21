var images = [ 'temp.jpg' ]
var titles = [ 'Song Title', 'Song Title 2', 'Song Title 3' ]
var authors = [ 'Author', 'Author 2', 'Author 3' ]

module.exports = {
  template: '#song',
  // props: ['image', 'title', 'author', 'play', 'fav'],
  data: function() {
    return {
      image: '',
      title: '',
      author: '',
      index: 0,
      play: false,
      fav: false
    }
  },
  computed: {
    index: function() {
      return this.index = Math.floor(Math.random() * titles.length)
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
      return this.play = !this.play
    },
    toggleFav: function() {
      return this.fav = !this.fav
    }
  }
}
