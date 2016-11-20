(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
new Vue({
  el: '#app',
  components: {
    'song': require('./components/song/song')
  }
})

},{"./components/song/song":1}]},{},[2]);
