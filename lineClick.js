function lineClick()
{
	delete_element = this.id;
	showInfo(this.id);
	if(""===this.prop.from||""===this.prop.to)
	{
		if(click_element!=this&&click_element)
		{
			for(k in click_element.node_style)
			{
				var node_style_element = paper.getById(click_element.node_style[k]);
				node_style_element.hide();
			}
		}
		if(line_click_style)
		{
			line_click_style.attr({"stroke-width":2});
		}
		line_click_style = this;
		this.attr({"stroke-width":4});
		single_click_line  = this;
	}
	else
	{
		if(""!==click_element)
		{
			for(i in click_element.node_style)
			{
				var node_style_element = paper.getById(click_element.node_style[i]);
				node_style_element.hide();
			}
		}
		temp_line_array = new Array();
		temp_rect_array = new Array();
		this.hide();
		var line_arrow = paper.getById(this.prop.arrow);
		line_arrow.hide();
		for(var i = 0;i<this.attrs.path.length-1;i++)
		{
			var left_from_point = {x:this.attrs.path[i][1],y:this.attrs.path[i][2]};
			var right_to_point = {x:this.attrs.path[i+1][1],y:this.attrs.path[i+1][2]};
			var center_point = {x:(left_from_point.x+right_to_point.x)/2,y:(left_from_point.y+right_to_point.y)/2};
			var from_line_left = ["M",left_from_point.x,left_from_point.y,"L",center_point.x,center_point.y];
			var left_to_point = Raphael.getPointAtLength(from_line_left,Raphael.getTotalLength(from_line_left)-5);
			var left_line_path = ["M",left_from_point.x,left_from_point.y,"L",left_to_point.x,left_to_point.y];
			var left_line = paper.path(left_line_path);
			left_line.attr({stroke:this.attr("stroke"),"stroke-width":this.attr("stroke-width")});
			var to_line_right = ["M",right_to_point.x,right_to_point.y,"L",center_point.x,center_point.y];
			var right_from_point = Raphael.getPointAtLength(to_line_right,Raphael.getTotalLength(to_line_right)-5);
			var right_line_path = ["M",right_from_point.x,right_from_point.y,"L",right_to_point.x,right_to_point.y];
			var right_line = paper.path(right_line_path);
			right_line.attr({stroke:this.attr("stroke"),"stroke-width":this.attr("stroke-width")});
			left_line.prop = {from:"",to:"",arrow:""};
			right_line.prop = {from:"",to:"",arrow:""};
			if(0==i)
			{
				left_line.prop = {from:this.prop.from,to:"",arrow:""};
			}
			if(this.attrs.path.length-2==i)
			{
				var arrow = paper.path(drawArrow(right_line.id));
				arrow.attr({stroke:this.attr("stoke"),"stroke-width":this.attr("stroke-width")});
				right_line.prop = {from:"",to:this.prop.to,arrow:arrow.id};
				temp_arrow = arrow.id;
			}
			var rect = paper.rect(center_point.x-1,center_point.y-1,2,2).attr({fill:"black"});
			rect.prop = {left:left_line.id,right:right_line.id};
			rect.drag(rectMove,rectStart,rectEnd);
			rect.attr({cursor:"move"});
			temp_line_array.push({temp_line:left_line.id,line:this.id,num:i});
			temp_line_array.push({temp_line:right_line.id,line:this.id,num:i+1});
			temp_rect_array.push(rect.id);
		}
	}
}
var rectStart = function()
{
	this.ox = this.attr("x");
	this.oy = this.attr("y");
};
var rectMove = function(dx,dy)
{
	var rect_attr = {x:this.ox+dx,y:this.oy+dy};
	this.attr(rect_attr);
	var left_line = paper.getById(this.prop.left);
	var right_line = paper.getById(this.prop.right);
	if(""!==left_line.prop.from)
	{
		var node = paper.getById(left_line.prop.from);
		var link_line = drawAnotherLine(node.id,this.ox+dx+1,this.oy+dy+1);
		var left_to_point = Raphael.getPointAtLength(link_line,Raphael.getTotalLength(link_line)-5);
		var left_line_path = ["M",link_line[1],link_line[2],"L",left_to_point.x,left_to_point.y];
		left_line.attr({path:left_line_path});
	}
	if(""!==right_line.prop.to)
	{
		var node = paper.getById(right_line.prop.to);
		var link_line = drawAnotherLine(node.id,this.ox+dx+1,this.oy+dy+1);
		var right_from_point = Raphael.getPointAtLength(link_line,Raphael.getTotalLength(link_line)-5);
		var right_line_path = ["M",right_from_point.x,right_from_point.y,"L",link_line[1],link_line[2]];
		right_line.attr({path:right_line_path});
		var arrow = paper.getById(right_line.prop.arrow);
		arrow.attr({path:drawArrow(right_line.id)});
	}
	if(""===left_line.prop.from)
	{
		var from_point = {x:left_line.attrs.path[0][1],y:left_attr.attrs.path[0][2]};
		var left_false_line = ["M",from_point.x,from_point.y,"L",this.ox+dx+1,this.oy+dy+1];
		var left_true_point = Raphael.getPointAtLength(left_false_line,Raphael.getTotalLength(left_false_line)-5);
		var left_line_path = ["M",from_point.x,from_point.y,"L",left_true_point.x,left_true_point.y];
		left_line.attr({path:left_line_path});
	}
	if(""===right_line.prop.to)
	{
		var to_point = {x:right_line.attrs.path[1][1],y:right_line.attrs.path[1][2]};
		var right_false_line = ["M",to_point.x,to_point.y,"L",this.ox+dx+1,this.oy+dy+1];
		var right_true_point = Raphael.getPointAtLength(right_false_line,Raphael.getTotalLength(right_false_line)-5);
		var right_line_path = ["M",right_true_point.x,right_true_point.y,"L",to_point.x,to_point.y];
		right_line.attr({path:right_line_path});
	}
};
var rectEnd = function()
{
	var line = paper.getById(temp_line_array[0].line);
	var left_line = paper.getById(this.prop.left);
	var right_line = paper.getById(this.prop.right);
	var num_left=0,num_right=0;
	var path = new Array();
	path.push("M");
	for(i in temp_line_array)
	{
		if(temp_line_array[i].temp_line===left_line.id)
		{
			num_left = temp_line_array[i].num;
		}
		if(temp_line_array[i].temp_line===right_line.id)
		{
			num_right = temp_line_array[i].num;
		}
	}
	for(var j = 0;j<line.attrs.path.length;j++)
	{
		if(num_left===j)
		{
			path.push(left_line.attrs.path[0][1]);
			path.push(left_line.attrs.path[0][2]);
			path.push(this.attr("x")+1);
			path.push(this.attr("y")+1);
		}
		else if(num_right===j)
		{
			path.push(right_line.attrs.path[1][1]);
			path.push(right_line.attrs.path[1][2]);
		}
		else
		{
			path.push(line.attrs.path[j][1]);
			path.push(line.attrs.path[j][2]);
		}
	}
	line.attr({path:path});
	line.show();
	var arrow = paper.getById(line.prop.arrow);
	arrow.attr({path:drawArrow(line.id)});
	arrow.show();
	for(i in temp_line_array)
	{
		var line = paper.getById(temp_line_array[i].temp_line);
		line.remove();
	}
	temp_line_array = false;
	for(j in temp_rect_array)
	{
		var rect = paper.getById(temp_rect_array[j]);
		rect.remove();
	}
	temp_rect_array = false;
	var end_arrow = paper.getById(temp_arrow);
	end_arrow.remove();
};
