var lunchboxes = []


// constructor
function Lunchbox ( sizeIn, handleIn, colorIn, imageIn){ //add In to avoid confusion with other properties
    //is allowed to begin with capital L because constructor
    this.size = sizeIn
    this.handle = handleIn
    this.color = colorIn
    this.image = imageIn
} //end Lunchbox constructor

//create lunchbxes with constructor & push into our array
lunchboxes.push( new Lunchbox( "medium", true, "black", true));
lunchboxes.push( new Lunchbox( "medium", true, "blue faux snakeskin", false));
lunchboxes.push(new Lunchbox("large", true, "blue", true));


//console.log(lunchboxes);

//search for lunchboxes with images
function findLunchboxImages( images ){
    //create empty array to hold results
    var results = [];
    for( var i = 0; i<lunchboxes.length; i++ ) {
        //for each lunchbox
        //are we looking for images?
        if( images ) {
            if( lunchboxes [ i ].image ) {
                results.push( lunchboxes[ i ] );
            } // found match
        } // end image
        else {
            if( !lunchboxes[ i ] .image){
                results.push( lunchboxes [ i ] );
            } // found match
        } //end no image
    }// end for
    return results
} // end findLunchboxImages
