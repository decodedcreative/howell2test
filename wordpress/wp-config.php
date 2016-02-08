<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'bolgerwedding');

/** MySQL database username */
define('DB_USER', 'bolgerwedding');

/** MySQL database password */
define('DB_PASSWORD', 'CPxrUsDs6fVczKqV');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'TK+?=;N5+*NB^~11-P0;4U|6),c{Mz$Y,U$EB^cD~XK5v*d)z5oeDc9oQt#-7&06');
define('SECURE_AUTH_KEY',  ':PU}Xe2Y<U}Mr1BUX}m+8cqhN+mv]q`)gl7X)_M0-?fNe}HpG |L,Y6S(+Vf@|jQ');
define('LOGGED_IN_KEY',    'iZj#q5s+.T,0{4)mFFP?-?~`QsNAthMHBgs+9B2zfK43W}G^K^+l3d-kXm5Gp;]K');
define('NONCE_KEY',        'GKHSu>pO4z6i8g3^EjEQqT#C_gL4{BwzA?~BcT632dhX{@<>7<|I4]d8f+8@.O2o');
define('AUTH_SALT',        'j3Wo yz!tc2cc|Q@Gg7m-oi5X[W?Y-40a=VGM@%Bv3zkaRlR)I? Fk8i`D3|cO(#');
define('SECURE_AUTH_SALT', '8O!:} 3a+%(q~MP9qM!}ah;wLm^n._LhUqp|Vy[m i|db%/q}NV=D^G7L]8u9mp+');
define('LOGGED_IN_SALT',   '~uGzUP~Cp|T~wZ*4fm1DA^-a@<)iH!Ha?m/(Ez(2kT<)J{CEj}P7?]kQ5<+>Gw9B');
define('NONCE_SALT',       '29juwtXUzeTfX-iy%>qK`3K[rVi(dI&/+3?x;g8#,?aO/J~+1~.HL(.2tcr,y`Oy');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
