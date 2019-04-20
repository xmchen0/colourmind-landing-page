document.addEventListener('click', ( evnt ) => {
    var target = evnt.target;
    let xmpl = target.closest('.xmpl');
    if ( xmpl ) {
        let webcomponent = xmpl.querySelector( 'm-burger' );
        if ( webcomponent ) {
            if ( webcomponent.getAttribute( 'state' ) ) {
                webcomponent.removeAttribute( 'state' );
            } else {
                webcomponent.setAttribute( 'state', 'cross' );
            }
        } else {
            xmpl.classList.toggle( 'mm-wrapper_opened' );
        }
    }
});