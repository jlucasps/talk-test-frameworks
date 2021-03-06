
var Song = function( duration ) {
    this.duration = duration; // in seconds
    this.isPlaying = false;
};

Song.prototype.play = function() {
    var self = this;
    this.isPlaying = true;
    this.timer = setTimeout( function() {
        self.nextSong.call( self );
    }, this.duration * 1000 );
};

Song.prototype.nextSong = function( ) {
    this.isPlaying = false;
    clearTimeout( this.timer );
    this.player.playNext();
};