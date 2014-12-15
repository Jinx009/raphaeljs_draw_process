/*
*@author :medivh
 */
$(function()
{
   paper = new Raphael("flow", 1600, 500);
   $(".tool_part").each(function()
   {
      $(this).draggable(
      {
         helper : "clone", cursor : 'move'
      });
   });
   process_id = getProcessId();
   $("#main").val(process_id);
   $("#flow").droppable(
   {
      accept : ".tool_part",
      drop : function(event, ui)
      {
      	 var tool_type = ui.helper.attr("type");
      	 var real_x  = event.clientX-padding_left;
      	 var real_y = event.clientY-padding_top;
      	 if("start"==tool_type)
         {
      		 drawStart(real_x,real_y);
      	 }
      	 if("end"==tool_type||"judge"==tool_type)
      	 {
      	 	drawNodeNoLine(tool_type,real_x,real_y);
      	 }
      	 if("single"==tool_type||"many"==tool_type)
      	 {
      	 	drawNodeOneLine(tool_type,real_x,real_y);	
      	 }
      	 if("double"==tool_type)
      	 {
      	 	drawNodeDoubleLine(real_x,real_y);
      	 }
      	 if("blackLine"==tool_type||"redLine"==tool_type||"greenLine"==tool_type)
      	 {
      	 	single_line_style = model[tool_type].attr;
      	 	drawSingleLine(real_x,real_y);
      	 }
      }
   });
});