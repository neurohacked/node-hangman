/**
 * Check user guess against word
 */
hangman.prototype.check = function(callback) {
    var self = this;
    if (this.isFinished()) {
        callback();
    } else {
        this.progress(function() {
            self.check(callback);
        });
    }
};