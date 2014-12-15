/*
*@author:Medivh
*/
function drawArrow(line_id)
{
		var size = 5;
		var line = paper.getById(line_id);

		var length = line.attrs.path.length;
		var x1 = line.attrs.path[length-1][1];
		var y1 = line.attrs.path[length-1][2];
		var x2 = line.attrs.path[length-2][1];
		var y2 = line.attrs.path[length-2][2];

		var angle = Raphael.angle(x1, y1, x2, y2);
	    var angle_45_one = Raphael.rad(angle - 45);
	    var angle_45_two = Raphael.rad(angle + 45);

	    var angle_x1 = x1 - Math.cos(angle_45_one) * size;
	    var angle_y1 = y1 - Math.sin(angle_45_one) * size;
	    var angle_x2 = x1 - Math.cos(angle_45_two) * size;
	    var angle_y2 = y1 - Math.sin(angle_45_two) * size;

	    var result = ["M",angle_x1,angle_y1, "L", x1,y1,"L",angle_x2, angle_y2];
	    return result;
}