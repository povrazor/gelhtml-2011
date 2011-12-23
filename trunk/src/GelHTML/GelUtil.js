
// - -------------------------------------------------------------------------------------------------------------- - //
function isMobileSafari() {
    return navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/)
}
// - -------------------------------------------------------------------------------------------------------------- - //
function isMobile() {
	return 'createTouch' in document;
}
// - -------------------------------------------------------------------------------------------------------------- - //

// - -------------------------------------------------------------------------------------------------------------- - //
function Log( val ) {
	if ( isMobile() ) {
//		setTimeout( function() { document.getElementById("HTMLLog").innerHTML += val + "<br />"; }, 50 );
	}
	else {
		console.log( val );
	}
}
// - -------------------------------------------------------------------------------------------------------------- - //

// - -------------------------------------------------------------------------------------------------------------- - //
function NextPowerOfTwo( v ) {
	// http://graphics.stanford.edu/~seander/bithacks.html#RoundUpPowerOf2 //
	v--;
	v |= v >> 1;
	v |= v >> 2;
	v |= v >> 4;
	v |= v >> 8;
	v |= v >> 16;
	v++;
	
	return v;
}
// - -------------------------------------------------------------------------------------------------------------- - //

// - -------------------------------------------------------------------------------------------------------------- - //
// http://my.opera.com/GreyWyvern/blog/show.dml/1725165 //
Object.prototype.clone = function() {
	var newObj = (this instanceof Array) ? [] : {};
	for (i in this) {
		if (i == 'clone') continue;
		if (this[i] && typeof this[i] == "object") {
			newObj[i] = this[i].clone();
		} 
		else 
			newObj[i] = this[i]
	} 
	return newObj;
};
// - -------------------------------------------------------------------------------------------------------------- - //
