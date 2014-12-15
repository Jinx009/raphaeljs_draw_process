function textStart()
{
	this.ox = this.attr("x");
	this.oy = this.attr("y");
}
function textMove(dx,dy)
{
	this.attr({x:this.ox+dx,y:this.oy+dy});
}
function textEnd()
{
	
}