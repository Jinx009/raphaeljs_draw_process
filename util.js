function getCenterPoint(node_id)
{
	var node = paper.getById(node_id);
	var center_x = node.attr("x")+node.attr("width")/2;
	var center_y = node.attr("y")+node.attr("height")/2;	
	return {x:center_x,y:center_y};
}
function getLinkLine(node_one_id,node_two_id)
{
	var node_one_center = getCenterPoint(node_one_id);
	var node_two_center = getCenterPoint(node_two_id);
	return ["M ",node_one_center.x,node_one_center.y," L ",node_two_center.x,node_two_center.y];
} 
function getNodeLine(node_id)
{
   var node = paper.getById(node_id);
   var node_width = node.attr("width");
   var node_height = node.attr("height");
   var node_x = node.attr("x");
   var node_y = node.attr("y");
   var left_top = {x:node_x,y:node_y};
   var left_bottom = {x:node_x,y:node_y+node_height};
   var right_top = {x:node_x+node_width,y:node_y};
   var right_bottom = {x:node_x+node_width,y:node_y+node_height};
   return ["M",left_top.x,left_top.y,"L",right_top.x,right_top.y,"L",right_bottom.x,right_bottom.y,"L",left_bottom.x,left_bottom.y,"L",left_top.x,left_top.y];
}
function drawAnotherLine(node_id,x,y)
{
	var center_point = getCenterPoint(node_id);
	var link_line = ["M",x,y,"L",center_point.x,center_point.y];
	var real_point = Raphael.pathIntersection(link_line,getNodeLine(node_id));
	return ["M",real_point[0].x,real_point[0].y,"L",x,y];
}
function createNodeStyle(node_id)
{
	var click_node = paper.getById(node_id);
	var dot1 = {x:click_node.attr("x"),y:click_node.attr("y")};
	var dot2 = {x:click_node.attr("x"),y:click_node.attr("y")+click_node.attr("height")/2};
	var dot3 = {x:click_node.attr("x"),y:click_node.attr("y")+click_node.attr("height")};
	var dot4 = {x:click_node.attr("x")+click_node.attr("width")/2,y:click_node.attr("y")+click_node.attr("height")};
	var dot5 = {x:click_node.attr("x")+click_node.attr("width"),y:click_node.attr("y")+click_node.attr("height")};
	var dot6 = {x:click_node.attr("x")+click_node.attr("width"),y:click_node.attr("y")+click_node.attr("height")/2};
	var dot7 = {x:click_node.attr("x")+click_node.attr("width"),y:click_node.attr("y")};
	var dot8 = {x:click_node.attr("x")+click_node.attr("width")/2,y:click_node.attr("y")};
	var node_style_line = paper.path(["M",dot1.x,dot1.y,"L",dot2.x,dot2.y,"L",dot3.x,dot3.y,"L",dot4.x,dot4.y,"L",dot5.x,dot5.y,"L",dot6.x,dot6.y,"L",dot7.x,dot7.y,"L",dot8.x,dot8.y,"L",dot1.x,dot1.y]).toBack().attr({stroke:"gray","stroke-width":1});
	var rect1 = paper.rect(dot1.x-1,dot1.y-1,2,2).attr(model.littleRect.attr).toFront();
	var rect2 = paper.rect(dot2.x-1,dot2.y-1,2,2).attr(model.littleRect.attr).toFront();
	var rect3 = paper.rect(dot3.x-1,dot3.y-1,2,2).attr(model.littleRect.attr).toFront();
	var rect4 = paper.rect(dot4.x-1,dot4.y-1,2,2).attr(model.littleRect.attr).toFront();
	var rect5 = paper.rect(dot5.x-1,dot5.y-1,2,2).attr(model.littleRect.attr).toFront();
	var rect6 = paper.rect(dot6.x-1,dot6.y-1,2,2).attr(model.littleRect.attr).toFront();
	var rect7 = paper.rect(dot7.x-1,dot7.y-1,2,2).attr(model.littleRect.attr).toFront();
	var rect8 = paper.rect(dot8.x-1,dot8.y-1,2,2).attr(model.littleRect.attr).toFront();
	return [node_style_line.id,rect1.id,rect2.id,rect3.id,rect4.id,rect5.id,rect6.id,rect7.id,rect8.id];
}
function changeNodeStyle(node_id)
{
	var element = paper.getById(node_id);
	var point1 = {x:element.attr("x"),y:element.attr("y")};
	var point2 = {x:element.attr("x"),y:element.attr("y")+element.attr("height")/2};
	var point3 = {x:element.attr("x"),y:element.attr("y")+element.attr("height")};
	var point4 = {x:element.attr("x")+element.attr("width")/2,y:element.attr("y")+element.attr("height")};
	var point5 = {x:element.attr("x")+element.attr("width"),y:element.attr("y")+element.attr("height")};
	var point6 = {x:element.attr("x")+element.attr("width"),y:element.attr("y")+element.attr("height")/2};
	var point7 = {x:element.attr("x")+element.attr("width"),y:element.attr("y")};
	var point8 = {x:element.attr("x")+element.attr("width")/2,y:element.attr("y")};
	var line = paper.getById(element.node_style[0]);
	line.attr({path:["M",point1.x,point1.y,"L",point2.x,point2.y,"L",point3.x,point3.y,"L",point4.x,point4.y,"L",point5.x,point5.y,"L",point6.x,point6.y,"L",point7.x,point7.y,"L",point8.x,point8.y,"L",point1.x,point1.y]});
	var rect1 = paper.getById(element.node_style[1]);
	var rect2 = paper.getById(element.node_style[2]);
	var rect3 = paper.getById(element.node_style[3]);
	var rect4 = paper.getById(element.node_style[4]);
	var rect5 = paper.getById(element.node_style[5]);
	var rect6 = paper.getById(element.node_style[6]);
	var rect7 = paper.getById(element.node_style[7]);
	var rect8 = paper.getById(element.node_style[8]);
	rect1.attr({x:point1.x,y:point1.y});
	rect2.attr({x:point2.x,y:point2.y});
	rect3.attr({x:point3.x,y:point3.y});
	rect4.attr({x:point4.x,y:point4.y});
	rect5.attr({x:point5.x,y:point5.y});
	rect6.attr({x:point6.x,y:point6.y});
	rect7.attr({x:point7.x,y:point7.y});
	rect8.attr({x:point8.x,y:point8.y});
}
