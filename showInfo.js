/*
 * @author:MedivhQ
 */
function createNoTextInfo(id)
{
	var htmlStr = nodeNoTextInfo(id);
	$("#info").append(htmlStr);
	$("#"+id).css('display','block');
}
function createTextInfo(id,text_id)
{
	var htmlStr = nodeTextInfo(id,text_id);	
	$("#info").append(htmlStr);
	$("#"+id).css('display','none');	
}
function createLineInfo(id,text_id)
{
	var htmlStr = lineInfo(id,text_id);
	$("#info").append(htmlStr);
	$("#"+id).css('display','none');	
}
function showInfo(id)
{
	$("#info div").each(function()
	{
		$(this).css('display','none');
	});
	if(document.getElementById(id))
	{
		$("#"+id).css('display','block');	
	}
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