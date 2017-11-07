<?php
/**
 * Основные параметры WordPress.
 *
 * Этот файл содержит следующие параметры: настройки MySQL, префикс таблиц,
 * секретные ключи и ABSPATH. Дополнительную информацию можно найти на странице
 * {@link http://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Кодекса. Настройки MySQL можно узнать у хостинг-провайдера.
 *
 * Этот файл используется скриптом для создания wp-config.php в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать этот файл
 * с именем "wp-config.php" и заполнить значения вручную.
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('DB_NAME', 'xn--l1adgm_telecom');

/** Имя пользователя MySQL */
define('DB_USER', 'xn--l1adgm_mysql');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', 'eax544xw');

/** Имя сервера MySQL */
define('DB_HOST', 'xn--l1adgm.mysql');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '={:MfTVB$++5+9uwhVk9z+t6To9@&B>40AR-VG/oDPg}4TVLQ(Kl0$B[rH/H=K`&');
define('SECURE_AUTH_KEY',  'GPj.W-$]`+,s!N!]I87I~j$%g5~Mrn_$W&<p.)g?l/:cEs{0BX|`V,,>%i[dr1>_');
define('LOGGED_IN_KEY',    'k<1|Y{Y(RX1_s4b3IT;~#-&f$m%(!PIsb {R4Lw(&J7p]H7q2+sK@@YB#Tc2)k5Y');
define('NONCE_KEY',        'M(H-X*Ww<To9&|E`KZ+H8Q2=f<)ldf`BHu@AD_7Lc(+/pb.bJWX6I=&V-o|Y?o^;');
define('AUTH_SALT',        '/nd|bz82QXu_u@kH RE(5,3s_.DiZ%?Z:^jH|y0b#}I{m5A a> zta#R6pv#DwFs');
define('SECURE_AUTH_SALT', 'Z-W6m+P:H-a0fL+.2T43%&noG[1v;ai:0@>CvN)Nw+kL6;Zd@,m<lpwZx!a.AKm ');
define('LOGGED_IN_SALT',   'V3a.5kF2TG+hNYf`aRLy-EGg%QoJ.=OeJiKAfrCuM/Cd8eicn|DJ246]LBt&kT)6');
define('NONCE_SALT',       'K&2}{s%kh.qx5O_yz]HKt9(/a.:[IjdGNK1A)m%!mJ+bmi||?h,J &}iw.X&J2F6');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 */
define('WP_DEBUG', false);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');
