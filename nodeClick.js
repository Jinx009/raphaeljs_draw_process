function nodeClick()
{
	delete_element = this.id;
	click_element = this;
	showInfo(this.id);
	if(can_draw_line)
	{
		single_click_line = false;
		if(link_line_element&&link_line_element.id!==this.id)
		{
			var from = link_line_element;
			var link_line = getLinkLine(from.id,this.id);
			var from_point = Raphael.pathIntersection(link_line,getNodeLine(from.id));
			var to_point = Raphael.pathIntersection(link_line,getNodeLine(this.id));
			var line = paper.path(["M",from_point[0].x,from_point[0].y,"L",to_point[0].x,to_point[0].y]).attr(draw_line_style);
			var arrow = paper.path(drawArrow(line.id)).attr(draw_line_style);
			line.prop = {from:from.id,to:this.id,arrow:arrow.id};
			var line_text = paper.text((line.attrs.path[0][1]+line.attrs.path[1][1])/2,(line.attrs.path[0][2]+line.attrs.path[1][2])/2-20,"");
			line.text = line_text.id;
			createLineInfo(line.id,line_text.id);
			can_draw_line = false;
			$(".tool .tool_line").each(function()
			{
				$(this).css('background','');
			});
			this.line_array.push(line.id);
			from.line_array.push(line.id);
			link_line_element = false;
			line.click(lineClick);
			changeLineInfo(line.id);
		}
		else
		{
			link_line_element = this;
		}	
	}
	if(single_click_line&&single_click_line.prop.from!==this.id)
	{
		var single_line = single_click_line;
		var from_element = paper.getById(single_line.prop.from);
		var this_link_line = getLinkLine(from_element.id,this.id);
		var first_point = Raphael.pathIntersection(this_link_line,getNodeLine(from_element.id));
		var second_point = Raphael.pathIntersection(this_link_line,getNodeLine(this.id));
		single_line.attr({path:["M",first_point[0].x,first_point[0].y,"L",second_point[0].x,second_point[0].y]});
		var this_arrow = paper.getById(single_line.prop.arrow);
		this_arrow.attr({path:drawArrow(single_line.id)});
		single_line.prop = {from:from_element.id,to:this.id,arrow:this_arrow.id};
		this.line_array.push(single_line.id);
		var text = paper.getById(single_line.text);
		single_click_line = false;
	}
}