/* hepl-rsv/micro-page
 *
 * /js/script.js - Toggle card state script
 *
 * coded by leny@flatLand!
 * started at 05/10/2016
 */

window.addEventListener( "load", function() {

    var $cardTwo = document.querySelector( ".card.card-two" );

    document.querySelector( ".toggle-details" ).addEventListener( "click", function( oEvent ) {
        oEvent.preventDefault();

        $cardTwo.classList.toggle( "toggled" );
    } );

} );
