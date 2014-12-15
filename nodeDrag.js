/*
 * @author:MedivhQ
 */
var nodeStart = function()
{
	this.ox = this.attr("x");
	this.oy = this.attr("y");
	if(temp_line_array)
	{
		var real_line = paper.getById(temp_line_array[0].line);
		real_line.show();
		var real_arrow = paper.getById(real_line.prop.arrow);
		real_arrow.show();
		for(i in temp_line_array)
		{
			var temp_line = paper.getById(temp_line_array[i].temp_line);
			if(""!==temp_line.prop.arrow)
			{
				var arrow = paper.getById(temp_line.prop.arrow);
				arrow.remove();
			}
			temp_line.remove();
		}
	}
	if(temp_rect_array)
	{
		for(i in temp_rect_array)
		{
			var rect = paper.getById(temp_rect_array[i]);
			rect.remove();
		}
	}
	for(i in this.line_array)
	{
		var line = paper.getById(this.line_array[i]);
		if(2==line.attrs.path.length)
		{
			line.ox   = line.attrs.path[0][1];
			line.oy   = line.attrs.path[0][2];
			line.ox1 = line.attrs.path[1][1];
			line.oy1 = line.attrs.path[1][2];
		}
	}
	if(line_click_style)
	{
		line_click_style.attr({"stroke-width":2});
	}
	if(click_element!=this)
	{
		for(i in click_element.node_style)
		{
			var node_style_element = paper.getById(click_element.node_style[i]);
			node_style_element.hide();
		}
	}
	click_element = this;
	if(this.node_style)
	{
		for(i in this.node_style)
		{
			var element = paper.getById(this.node_style[i]);
			element.show();
		}
	}
	else
	{
		this.node_style = createNodeStyle(this.id);
	}
};
var nodeMove = function(dx,dy)
{
	var node_attr = {x:this.ox+dx,y:this.oy+dy};
	this.attr(node_attr);
	changeNodeStyle(this.id);
	for(i in this.line_array)
	{
		var line = paper.getById(this.line_array[i]);
		if(""===line.prop.from||""===line.prop.to)
		{
			var line_path = ["M",line.ox+dx,line.oy+dy,"L",line.ox1+dx,line.oy1+dy];
			line.attr({path:line_path});
			var arrow = paper.getById(line.prop.arrow);
			arrow.attr({path:drawArrow(line.id)});
			var text = paper.getById(line.text);
			text.attr({x:(line.ox+dx*2+line.ox1)/2,y:(line.oy+dy*2+line.oy1)/2-20});
		}
		else
		{
			if(2==line.attrs.path.length)
			{
				var text = paper.getById(line.text);
				text.attr({x:(line.ox+dx*2+line.ox1)/2,y:(line.oy+dy*2+line.oy1)/2-20});
				if(line.prop.from==this.id)
				{
					var link_line = getLinkLine(this.id,line.prop.to);
					var from_point = Raphael.pathIntersection(link_line,getNodeLine(this.id));
					var to_point = Raphael.pathIntersection(link_line,getNodeLine(line.prop.to));
					line.attr({path:["M",from_point[0].x,from_point[0].y,"L",to_point[0].x,to_point[0].y]});
					var arrow = paper.getById(line.prop.arrow);
					arrow.attr({path:drawArrow(line.id)});
				}
				if(line.prop.to==this.id)
				{
					var link_line = getLinkLine(this.id,line.prop.from);
					var from_point = Raphael.pathIntersection(link_line,getNodeLine(line.prop.from));
					var to_point = Raphael.pathIntersection(link_line,getNodeLine(this.id));
					line.attr({path:["M",from_point[0].x,from_point[0].y,"L",to_point[0].x,to_point[0].y]});
					var arrow = paper.getById(line.prop.arrow);
					arrow.attr({path:drawArrow(line.id)});
				}
			}
			else
			{
				if(line.prop.from==this.id)
				{
					var link_line = drawAnotherLine(this.id,line.attrs.path[1][1],line.attrs.path[1][2]);
					var path = new Array();
					path.push("M");
					path.push(link_line[1]);
					path.push(link_line[2]);
					for(var i = 1;i<line.attrs.path.length;i++)
					{
						path.push(line.attrs.path[i][1]);
						path.push(line.attrs.path[i][2]);
					}
					line.attr({path:path});
				}
				if(line.prop.to==this.id)
				{
					var length = line.attrs.path.length;
					var link_line = drawAnotherLine(this.id,line.attrs.path[length-2][1],line.attrs.path[length-2][2]);
					var path = new Array();
					path.push("M");
					for(var i = 0;i<length-1;i++)
					{
						path.push(line.attrs.path[i][1]);
						path.push(line.attrs.path[i][2]);
					}
					path.push(link_line[1]);
					path.push(link_line[2]);
					var arrow = paper.getById(line.prop.arrow);
					arrow.attr({path:drawArrow(line.id)});
					line.attr({path:path});
				}
			}
		}
	}	
	
	if(this.text)
	{
		var text = paper.getById(this.text);
		text.attr({x:this.ox+this.attr("width")/2+dx,y:this.oy+this.attr("height")/2+dy});
	}
};
var nodeEnd = function()
{
	//do nothings
};