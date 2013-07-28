Logos = function(_prefix,_logos,_onLoad) {
	self = this;

	this.logos = _logos;
	this.images = {};
	this.prefix = _prefix;
	this.numLogos = self.logos.length;
	this.currentLogo = 0;
	this.loaded = 0;
	this.onLoad = _onLoad;

	this.loadLogos = function() {
		for( var i = 0, len = self.logos.length; i < len; i++ ) {
			self.images[i] = new Image();
			self.images[i].onload = function() {
				self.loaded++;
				this.class = "logo";
				self.images[i] = this;
				if( self.loaded == self.numLogos ) {
					self.onLoad();
				}
			}
			self.images[i].src = self.prefix+self.logos[i]+".gif";
		}
	}

	this.getLogo = function(index) {
		if( index !== undefined ) {
			self.currentLogo = index;
		} else {
			var newLogo = getRandomInt(0,self.logos.length-1);
			while( newLogo == self.currentLogo ) {
				newLogo = getRandomInt(0,self.logos.length-1);
			}
			self.currentLogo = newLogo;

		}
		return self.images[self.currentLogo];
	}

	self.loadLogos();
}