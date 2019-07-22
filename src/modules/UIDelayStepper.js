export default class UIDelayStepper {
    constructor(elm) {

        this.parent = [].slice.call( elm.querySelectorAll( '[data-delay-step]' ) );
    }

    run() {
        this.parent.forEach( ( target ) => {
            this._addDelay( target );
        } );
    }

    /**
     *
     * @param parent
     * @private
     */
    _addDelay( parent ) {
        let $targets = [].slice.call( parent.querySelectorAll( '.delay-elem' ) ),
            len = $targets.length,
            step = parent.getAttribute( 'data-delay-step' ),
            mode = parent.getAttribute( 'data-delay-mode' ) || 'step',
            delay = parent.getAttribute( 'data-delay-delay' ) || 0,
            delayInit = Number(parent.getAttribute( 'data-delay-init' ) || 0),
            randomStep = [],
            children = [];

        if ( len === 0 ) return;

        $targets.forEach( function( $target ) {
            if ( null !== $target.getAttribute( 'data-delay-step' ) ) {
                [].slice.call( $target.querySelectorAll( '.delay-elem' ) ).forEach( elem => {
                    children.push( elem );
                } );
            } else if ( $target.querySelectorAll( '[data-delay-step]' ) ) {
                [].slice.call( $target.querySelectorAll( '[data-delay-step]' ) ).forEach( parent => {
                    [].slice.call( parent.querySelectorAll( '.delay-elem' ) ).forEach( elem => {
                        children.push( elem );
                    } );
                } );
            }
        } );

        $targets.forEach( function( $target, index ) {
            children.some( ( aa, ii ) => {
                if ( $target !== aa ) return;
                $targets[ index ] = '';
                children.splice( ii, 1 );
            } );
        } );

        $targets = $targets.filter( $target => $target !== '' );

        if ( mode === 'random' ) {
            randomStep = this._noneOverWrapRandom( $targets.length );
        }

        $targets.forEach( ( $target, index ) => {
            if ( '' === $target ) return;

            let time;

            if ( mode === 'step' || mode === '' ) {
                time = index * step;
            }
            if ( mode === 'random' ) {
                time = randomStep[ index ] * step;
            }

            $target.style.transitionDelay = time + delay + delayInit + 'ms';
        } );
    }

    _noneOverWrapRandom( count ) {
        let random = [],
            randomCount = random.length;

        for ( let j = 0; j < count; j++ ) {
            let candidate = Math.floor( Math.random() * count );
            for ( let k = 0; k < randomCount; k++ ) {
                if ( candidate === random[ k ] ) {
                    candidate = Math.floor( Math.random() * count );
                    k = -1;
                }
            }
            random[ j ] = candidate;
            randomCount++;
        }

        return random;
    }

    destroy() {
        // this.target.css( {
        //     'transition-delay' : ''
        // } );
    }
}
