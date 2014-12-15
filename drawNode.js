/*
 * @author:MedivhQ
 */
function drawNodeNoLine(type,x,y)
{
	var node_attr = model[type].attr;
	var node = paper.image().attr(node_attr).attr({x:x,y:y});
	node.drag(nodeMove,nodeStart,nodeEnd);
	node.line_array = new Array();
	node.text = false;
	node.click(nodeClick);
	createNoTextInfo(node.id);
}
function drawNodeOneLine(type,x,y)
{
	var node_attr = model[type].attr;
	var node = paper.rect().attr(node_attr).attr({x:x,y:y});
	node.drag(nodeMove,nodeStart,nodeEnd);
	node.line_array = new Array();
	var line_path =  ["M",node.attr("x")+node.attr("width"),node.attr("y")+node.attr("height")/2,"L",node.attr("x")+node.attr("width")+75,node.attr("y")+node.attr("height")/2];
	var line = paper.path(line_path).attr(model.blackLine.attr);
	node.line_array.push(line.id);
	var arrow = paper.path(drawArrow(line.id)).attr(model.blackLine.attr);
	line.prop = {from:node.id,to:"",arrow:arrow.id};
	var text = paper.text(node.attr("x")+node.attr("width")/2,node.attr("y")+node.attr("height")/2,"Node").attr(model.text.attr);
	node.text = text.id;
	node.click(nodeClick);
	createTextInfo(node.id,text.id);
	var line_text = paper.text((line.attrs.path[0][1]+line.attrs.path[1][1])/2,(line.attrs.path[0][2]+line.attrs.path[1][2])/2-20,"").attr({cursor:"move"});
	line.text = line_text.id;
	createLineInfo(line.id,line_text.id);
	line.click(lineClick);
	line_text.drag(textMove,textStart,textEnd);
}
function drawNodeDoubleLine(x,y)
{
	var node = paper.rect().attr(model.doubleNode.attr).attr({x:x,y:y});
	node.drag(nodeMove,nodeStart,nodeEnd);
	node.line_array = new Array();
	var line_right_path = ["M",node.attr("x")+node.attr("width"),node.attr("y")+node.attr("height")/2,"L",node.attr("x")+node.attr("width")+75,node.attr("y")+node.attr("height")/2];
	var line_right = paper.path(line_right_path).attr(model.blackLine.attr);
	var arrow_right = paper.path(drawArrow(line_right.id)).attr(model.blackLine.attr);
	line_right.prop = {from:node.id,to:"",arrow:arrow_right.id};
	node.line_array.push(line_right.id);
	var line_top_path = ["M",node.attr("x")+node.attr("width")/2,node.attr("y"),"L",node.attr("x")+node.attr("width")/2,node.attr("y")-75];
	var line_top = paper.path(line_top_path).attr(model.redLine.attr);
	var arrow_top = paper.path(drawArrow(line_top.id)).attr(model.redLine.attr);
	line_top.prop = {from:node.id,to:"",arrow:arrow_top.id};
	node.line_array.push(line_top.id);
	var text = paper.text(node.attr("x")+node.attr("width")/2,node.attr("y")+node.attr("height")/2,"Approval").attr(model.text.attr);
	node.text = text.id;
	node.click(nodeClick);
	createTextInfo(node.id,text.id);
	var line_right_text = paper.text((line_right.attrs.path[0][1]+line_right.attrs.path[1][1])/2,(line_right.attrs.path[0][2]+line_right.attrs.path[1][2])/2-20,"").attr({cursor:"move"});
	line_right.text = line_right_text.id;
	createLineInfo(line_right.id,line_right_text.id);
	var line_top_text = paper.text((line_top.attrs.path[0][1]+line_top.attrs.path[1][1])/2,(line_top.attrs.path[0][2]+line_top.attrs.path[1][2])/2-20,"").attr({cursor:"move"});
	line_top.text = line_top_text.id;
	createLineInfo(line_top.id,line_top_text.id);
	line_right.click(lineClick);
	line_top.click(lineClick);
	line_right_text.drag(textMove,textStart,textEnd);
	line_top_text.drag(textMove,textStart,textEnd);
}
function drawStart(x,y)
{
	var node = paper.image().attr(model.start.attr).attr({x:x,y:y});
	node.drag(nodeMove,nodeStart,nodeEnd);
	node.line_array = new Array();
	var line_path = ["M",node.attr("x")+node.attr("width"),node.attr("y")+node.attr("height")/2,"L",node.attr("x")+node.attr("width")+75,node.attr("y")+node.attr("height")/2];
	var line = paper.path(line_path).attr(model.blackLine.attr);
	node.line_array.push(line.id);
	var arrow = paper.path(drawArrow(line.id)).attr(model.blackLine.attr);
	line.prop = {from:node.id,to:"",arrow:arrow.id};
	node.text = false;
	node.click(nodeClick);
	createNoTextInfo(node.id);
	var line_text = paper.text((line.attrs.path[0][1]+line.attrs.path[1][1])/2,(line.attrs.path[0][2]+line.attrs.path[1][2])/2-20,"").attr({cursor:"move"});
	line.text = line_text.id;
	createLineInfo(line.id,line_text.id);
	line.click(lineClick);
	line_text.drag(textMove,textStart,textEnd);
}
function drawSingleLine(x,y)
{
	if(click_element)
	{
		var another_line = paper.path(drawAnotherLine(click_element.id,x,y)).attr(single_line_style);
		click_element.line_array.push(another_line.id);
		var another_line_arrow = paper.path(drawArrow(another_line.id)).attr(single_line_style);
		another_line.prop = {from:click_element.id,to:"",arrow:another_line_arrow.id};
		var another_line_text = paper.text((another_line.attrs.path[0][1]+another_line.attrs.path[1][1])/2,(another_line.attrs.path[0][2]+another_line.attrs.path[1][2])/2,"");
		another_line.text = another_line_text.id;
		createLineInfo(another_line.id,another_line_text.id);
		another_line.click(lineClick);
	}
}
