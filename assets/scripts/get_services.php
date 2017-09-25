<?

/* $Id: crontab.php 8603 2013-01-14 11:27:27Z aix $ */

///$DOCUMENT_ROOT="/usr/local/etc/httpd/htdocs/netcat"; # Физический путь до папки содержащей netcat
// Определим путь до DOCUMENT_ROOT (на 2 уровня выше текущей директории):
$DOCUMENT_ROOT = join('/', array_slice(explode('/', __FILE__), 0, -3));

$HTTP_HOST = 'deeptrade.ru'; #  <-------------= put domain here!!! Укажите здесь домен!!!

$_SERVER['HTTP_HOST'] = $HTTP_HOST;

putenv("DOCUMENT_ROOT=$DOCUMENT_ROOT");
putenv("HTTP_HOST=${_SERVER['HTTP_HOST']}");

$NETCAT_FOLDER = join(strstr(__FILE__, '/') ? '/' : "\\", array_slice(preg_split("/[\/\\\]+/", __FILE__), 0, -3)).( strstr(__FILE__, '/') ? '/' : "\\" );
include_once ($NETCAT_FOLDER.'vars.inc.php');

ignore_user_abort(true);

require_once ($ROOT_FOLDER.'connect_io.php');

$ID = '1c3f001e3d64';
$userID = '0b45d010b156';
$token = '0ea7dea238f5adcef53640697d05382b';

$link = 'https://klientiks.ru/clientix/Restapi/list/a/%X/u/%Y/t/%Z/m/Services/';

$link = str_replace(['%X','%Y','%Z'], [$ID,$userID,$token], $link);

$data = file_get_contents($link , false);
$data = json_decode($data, true);
echo '<pre>';
	print_r($data);
echo '</pre>';

$group = array();

foreach($data['items'] as $item){
	$group[$item['service_groups']] = 1;
}
$group_names = array_keys($group);
print_r($group_names);
//die();

//Чистим компонент
$nc_core->db->query('DELETE FROM Message130');

//Чистим инфоблоки
$nc_core->db->query('DELETE FROM Sub_Class WHERE Subdivision_ID = 20');
//

foreach($group_names as $GN){
	$nc_core->db->query("INSERT INTO Sub_Class (	Subdivision_ID,Class_ID,Sub_Class_Name,Checked,Catalogue_ID,TableViewMode)VALUES(
		20,
		130,
		'{$GN}',
		1,
		1,
		1
	)");
	
	
	$group[$GN] = $nc_core->db->insert_id;
}

foreach($data['items'] as $item){
	$nc_core->db->query("INSERT INTO Message130 (Subdivision_ID,Sub_Class_ID,Checked,Created,Name,Price)VALUES(
		20,
		".$group[$item['service_groups']].",
		1,
		NOW(),
		'{$item[name]}',
		'{$item[price]}'
		
	)");
	
}

?>