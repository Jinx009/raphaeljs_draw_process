/*
 * @author:MedivhQ
 */
//get process id
function getProcessId()
{
	var date = new Date();
	
	var process_id = date.getYear().toString()+date.getMonth().toString()+date.getDay().toString()+date.getHours().toString()+date.getMinutes().toString()+date.getSeconds().toString();

	return process_id;
}