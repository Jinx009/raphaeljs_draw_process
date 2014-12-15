/*
 * @author:MedivhQ
 */
function save() 
{
	var line_array = new Array();
	var node_array = new Array();
	var main = {};
	var process = {};
	var json;
	$("#process input").each(function()
	{
		var name = $(this).attr("name");
		var value = $(this).val();
		main[name] = value;
	});
	$("#process select").each(function()
	{
		var name = $(this).attr("name");
		var value = $(this).val();
		main[name] = value;
	});
	var temp;
  	$("#info div").each(function()
	{		
		var id = $(this).attr("id");
		var element = paper.getById(id);
		temp = {};
		$("div[id='"+id+"'] input").each(function()
		{
			var name = $(this).attr("name");
			var value = $(this).val();
			temp[name] = value;
		});
		$("div[id='"+id+"'] select").each(function()
		{
			var name = $(this).attr("name");
			var value = $(this).val();
			temp[name] = value;
		});
		if("path"!=element[0].nodeName)
		{
			if(temp['id']!=null)
			{
				node_array.push(temp);
			}	
		}
		if("path"==element[0].nodeName)
		{
			if(temp['id']!=null)
			{
				line_array.push(temp);
			}	
		}
	});		
	process.line = line_array;
	process.main = main;
	process.node = node_array;
	json = JSON.stringify(process); 
	console.log(json);
}