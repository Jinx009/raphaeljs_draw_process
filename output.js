function output()
{
	var output_json = {};
	var element_array = new Array();
	var htmlStr = $("#info").html();
	output_json.info = htmlStr;
	var id_home = new Array();
	$("#info div").each(function()
	{
		if(""!==$(this).attr("id"))
		{
			id_home.push($(this).attr("id"));
		}		
	});
	for(i in id_home)
	{
		var element = paper.getById(id_home[i]);
		var element_info = {};
		if("path"==element[0].nodeName)
		{
			element_info.id = element.id;
			element_info.type = "path";
			element_info.attr = {path:element.attr("path"),stroke:element.attr("stroke"),"stroke-width":element.attr("stroke-width")};
			var text = paper.getById(element.text);
			element_info.text = {id:element.text,attr:text.attr()};
			element_info.prop = element.prop;
			element_info.line_array = "";
		}
		if("path"!=element[0].nodeName)
		{
			element_info.id = element.id;
			element_info.type = element[0].nodeName;
			element_info.attr = element.attr();
			element_info.prop = "";
			element_info.line_array = element.line_array;
			if(element.text)
			{
				var rect_text = paper.getById(element.text);
				element_info.text ={id:rect_text.id,attr:rect_text.attr()};
				
			}
			else
			{
				element_info.text = "";
			}
		}
		element_array.push(element_info);
	}
	output_json.element = element_array;
	var json = JSON.stringify(output_json);
	console.log(json);
}