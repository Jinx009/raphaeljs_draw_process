function drawLine(type)
{
	draw_line_style = model[type+"Line"].attr;	
	$(".tool .tool_line").each(function()
	{
		$(this).css('backgroud','');
	});
	$("#"+type).css('background', 'rgb(238,238,238');
	can_draw_line = true;
}