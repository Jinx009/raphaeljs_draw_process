document.onkeydown = function(e)
{
	   if(!e) e = window.event;
	   if((e.keyCode||e.which) == 46)
	   {
				dele();
	   }
};
function dele()
{
	   if(confirm("Do you realy want to delete this?"))
	    {
		   var element = paper.getById(delete_element);
		   console.log(element);
		   if("path"==element[0].nodeName&&!single_click_line)
			 {
			   var arrow = paper.getById(temp_arrow);
			   arrow.remove();
			   for(i in temp_line_array)
			   {
				   var line = paper.getById(temp_line_array[i].temp_line);
				   line.remove();
			   }
			   for(j in temp_rect_array)
			   {
				   var rect  = paper.getById(temp_rect_array[j]);
				   rect.remove();
			   }
			   var obj = document.getElementById(element.id);
			   obj.remove();
			   var arrow = paper.getById(element.prop.arrow);
			   arrow.remove();
			   var element_text = paper.getById(element.text);
			   element_text.remove();
			   var from_node = paper.getById(element.prop.from);
			   for(i in from_node.line_array)
			  {
				   if(from_node.line_array[i]===element.id)
				  {
					   from_node.line_array.splice(i,1);
					   break;
				  }
			  }
			   if(""!==element.prop.to)
			 {
				   var to_node = paper.getById(element.prop.to);
				   for(j in to_node.line_array)
				{
					   if(to_node.line_array[j]===element.id)
					  {
						   to_node.line_array.splice(j,1);
						   break;
					  }
				}
		 	}
			   element.remove();
			}
		   if(single_click_line&&"path"==element[0].nodeName)
		   {
			   var obj = document.getElementById(element.id);
			   obj.remove();
			   var arrow = paper.getById(element.prop.arrow);
			   arrow.remove();
			   var element_text = paper.getById(element.text);
			   element_text.remove();
			   var from_node = paper.getById(element.prop.from);
			   for(i in from_node.line_array)
			  {
				   if(from_node.line_array[i]===element.id)
				  {
					   from_node.line_array.splice(i,1);
					   break;
				  }
			  }
			   if(""!==element.prop.to)
			 {
				   var to_node = paper.getById(element.prop.to);
				   for(j in to_node.line_array)
				{
					   if(to_node.line_array[j]===element.id)
					  {
						   to_node.line_array.splice(j,1);
						   break;
					  }
				}
		 	}
			   element.remove();
		   }
		   if(element[0]&&"path"!=element[0].nodeName)
			{
				var obj = document.getElementById(element.id);
				obj.remove();
			   if(element.text)
				{
				   var text = paper.getById(element.text);
				   text.remove();
				}
			   for(y in element.node_style)
			   {
				   var style_element = paper.getById(element.node_style[y]);
				   style_element.remove();
			   }
			   for(k in element.line_array)
			  {
				   var line = paper.getById(element.line_array[k]);
				   var line_arrow = paper.getById(line.prop.arrow);
				   var obj = document.getElementById(element.line_array[k]);
				   obj.remove();
				   line_arrow.remove();
				   if(line.prop.from!=element.id)
					  {
						   var from = paper.getById(line.prop.from);
						   for(z in from.line_array)
						   {
							   if(from.line_array[z]==line.id)
							   {
								   from.line_array.splice(z,1);
								   break;
							   }
						   }
					  }
				   if(""!==line.prop.to&&line.prop.to!=element.id)
				  {
					   var to = paper.getById(line.prop.to);
					   for(z in to.line_array)
					   {
						   if(to.line_array[z]==line.id)
						   {
							   to.line_array.splice(z,1);
							   break;
						   }
					   }
				  }
				   line.remove();
			  }
			   element.remove();
			}
	    }
}
function iteration(array)
{
	
}
