<?php
        error_reporting(0);
        mb_language("ja");
        mb_internal_encoding('UTF-8');

        session_start();

        $nonce = base64_encode( openssl_random_pseudo_bytes( 48 ) );

        if ( empty( $_SESSION[ 'csrf_tokens' ] ) ) {
            $_SESSION[ 'csrf_tokens' ] = [];
        }

        $_SESSION[ 'csrf_tokens' ][ $nonce ] = true;

        return htmlspecialchars( $nonce, ENT_QUOTES, 'UTF-8' );


        $url=$_POST["data"];
        print $_POST["data"].strval(htmlspecialchars( $nonce, ENT_QUOTES, 'UTF-8' ));
?>
