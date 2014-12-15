/*
 * @author:MedivhQ
 */
function changeText(text_id)
{
	var value = document.getElementById(text_id+"Text").value;
	var element = paper.getById(text_id);
	element.attr({text:value});	
}
function changeLineInfo(id)
{
	var path = paper.getById(id);
	var from = path.prop.from;
	var to = path.prop.to;
	$("div[id='"+id+"'] input").each(function()
	{
		if("input_id"==$(this).attr("name"))
		{
			$(this).val(from);
		}
		if("output_id"==$(this).attr("name"))
		{
			$(this).val(to);
		}
	});
}