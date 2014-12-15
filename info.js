/*
 * @Author:MedivhQ
 */
//start info
function showStart(id)
{
	//hide
	$("#info div").each(function()
	{
		$(this).css('display','none');
	});
	//create
	var htmlStr = noTextInfo(id);
	
	$("#info").append(htmlStr);
	$("#"+id).css('display','block');
	
}
//end info
function showEnd(id)
{
	//hide
	$("#info div").each(function()
	{
		$(this).css('display','none');
	});
	//create
	var htmlStr = noTextInfo(id);
	
	$("#info").append(htmlStr);
	$("#"+id).css('display','block');
}
//judge info
function showJudge(id)
{
	//hide
	$("#info div").each(function()
	{
		$(this).css('display','none');
	});
	//create
	var htmlStr = noTextInfo(id);
	
	$("#info").append(htmlStr);
	$("#"+id).css('display','block');
}
//rect info
function showRect(rect_id,text_id)
{
	//hide
	$("#info div").each(function()
	{
		$(this).css('display','none');
	});
	//create
	var htmlStr = textInfo(rect_id,text_id);
	
	$("#info").append(htmlStr);
	$("#"+rect_id).css('display','block');	
}
//show line info
function showLineInfo(id,text_id)
{
	$("#info div").each(function()
	{
		$(this).css('display','none');
	});
	if(document.getElementById(id))
	{
		$("#"+id).css('display','block');
	}
	else
	{
		//create
		var htmlStr = lineInfo(id,text_id);

		$("#info").append(htmlStr);
		$("#"+id).css('display','block');	
		
	}
}
//show 
function show(id)
{
	$("#info div").each(function()
	{
		$(this).css('display','none');
	});
	if(document.getElementById(id))
	{
		$("#"+id).css('display','block');	
	}
}
//change text
function changeText(text_id)
{
	var value = document.getElementById(text_id+"Text").value;
	var element = paper.getById(text_id);
	element.attr({text:value});	
}
//process id & now date
function getDate()
{
	var date = new Date();
	
	var process_id = date.getYear().toString()+date.getMonth().toString()+date.getDay().toString()+date.getHours().toString()+date.getMinutes().toString()+date.getSeconds().toString();
	
	var now_date = date.toLocaleDateString();

	return {process_id:process_id,now_date:now_date};
}
//node info with text
function noTextInfo(id)
{
	var htmlStr = "";
	htmlStr += "<div id="+id+" ><table border=2 >";
	htmlStr += "<tr><td style=background:black;color:white>属性</td><td></td><td></td><td></td>";
	
	htmlStr += "<tr><td>编号:</td><td><input type=text name=id value='"+id+"' readOnly /></td>";
	htmlStr += "<td>流程编号:</td><td><input type=text name=process_id value='"+process_id+"' readOnly /></td></tr>";
	
	htmlStr += "<tr><td>节点类型:</td><td><select name=type ><option value=start >开始</option><option value=end >结束</option><option value=task >人工</option><option value=auto >自动</option></select></td>";
	htmlStr += "<td>节点名称:</td><td><input type=text name=name /></td></tr>";
	
	htmlStr += "<tr><td>表单url:</td><td><input type=text name=url /></td>";
	htmlStr += "<td>规则表达式:</td><td><input type=text name=rule_script /></td></tr>";
	
	htmlStr += "<tr><td>执行人岗位:</td><td><input type=text name=user_empno placeholder='逗号分开' ></td>";
	htmlStr += "<td>执行人角色</td><td><input name=user_role_id placeholder='逗号分开' /></td></tr>";
	
	htmlStr += "<tr><td>执行人关系:</td><td><input type=text name=user_relation placeholder='逗号分开' /></td>";
	htmlStr += "<td>协办人:</td><td><input type=text name=help_user_id /></td></tr>";
	
	htmlStr += "<tr><td>超期时间:</td><td><input type=text name=expiration_date placeholder='单位/天' ></td>";
	htmlStr += "<td>可回复意见:</td><td><select name=add_suggestion ><option value=1 >是</option><option value=0 >否</option></select></td></tr>";
	
	htmlStr += "<tr><td>可否查看意见:</td><td><select name=show_suggestion ><option value=0 >不能查看</option><option value=1 >上一环节主办</option><option value=2 >上一环节协办</option><option value=3 >上一环节全部</option></select></td>";
	htmlStr += "<td>可否查看所有意见:</td><td><select name=show_all_suggestion ><option value=1 >是</optopn><option value=0 >否</option></select></td></tr>";

	htmlStr += "<tr><td>可插入附件:</td><td><select name=add_file ><option value=1 >是</option><optionvalue=0 >否</option></select></td>";
	htmlStr += "<td>可查看附件:</td><td><select name=show_file ><option value=1 >是</option><option value=0 >否</option></select></td></tr>";

	htmlStr += "<tr><td>跟踪验收人:</td><td><input type=text name=acceptor_id /></td>";
	htmlStr += "<td>是否显示姓名:</td><td><select name=show_name ><option value=1 >是</option><option value=0 >否</option></select></td></tr>";

	htmlStr += "<tr><td>信息提醒下一步:</td><td><input type=text name=next_step /></td>";
	htmlStr += "<td>隶属功能:</td><td><input type=text name=function /></td></tr>";
	
	htmlStr += "<tr><td>是否即时通功能:</td><td><select name=send_message ><option value=1 >是</option><option value=0 >否</option></select></td>";
	htmlStr += "<td>是否审批需要身份确认:</td><td><select name=acceptor_identity ><option value=1 >是</option><option value=0 >否</option></select></td></tr>";

	htmlStr += "<tr><td>填写说明:</td><td><input type=text name=remark ></td>";
	htmlStr += "<td></td><td></td></tr>";
	
	htmlStr +="</table></div>";
	
	return htmlStr;
}
//node info without text
function textInfo(id,text_id)
{
	var element = paper.getById(text_id);
	var text = element.attr("text");
	
	var htmlStr = "";
	
	htmlStr += "<div id="+id+" ><table border=2 >";
	htmlStr += "<tr><td style=background:black;color:white>属性</td><td></td><td></td><td></td>";
	
	htmlStr += "<tr><td>编号:</td><td><input type=text name=id value='"+id+"' readOnly /></td>";
	htmlStr += "<td>流程编号:</td><td><input type=text name=process_id value='"+process_id+"' readOnly /></td></tr>";
	
	htmlStr += "<tr><td>节点类型:</td><td><select name=type ><option value=start >开始</option><option value=end >结束</option><option value=task  >人工</option><option value=auto  >自动</option></select></td>";
	htmlStr += "<td>节点名称:</td><td><input type=text name=name id='"+text_id+"Text' value='"+text+"' onBlur=javascript:changeText('"+text_id+"') /></td></tr>";
	
	htmlStr += "<tr><td>表单url:</td><td><input type=text name=url /></td>";
	htmlStr += "<td>状态:</td><td><input type=text name=state /></td></tr>";
	
	htmlStr += "<tr><td>执行人岗位:</td><td><input type=text name=user_empno placeholder='逗号分开' ></td>";
	htmlStr += "<td>执行人角色</td><td><input name=user_role_id placeholder='逗号分开' /></td></tr>";
	
	htmlStr += "<tr><td>执行人关系:</td><td><input type=text name=user_relation placeholder='逗号分开' /></td>";
	htmlStr += "<td>协办人:</td><td><input type=text name=help_user_id /></td></tr>";
	
	htmlStr += "<tr><td>超期时间:</td><td><input type=text name=expiration_date placeholder='单位/天' ></td>";
	htmlStr += "<td>可回复意见:</td><td><select name=add_suggestion ><option value=1 >是</option><option value=0 >否</option></select></td></tr>";
	
	htmlStr += "<tr><td>可否查看意见:</td><td><select name=show_suggestion ><option value=0 >不能查看</option><option value=1 >上一环节主办</option><option value=2 >上一环节协办</option><option value=3 >上一环节全部</option></select></td>";
	htmlStr += "<td>可否查看所有意见:</td><td><select name=show_all_suggestion ><option value=1 >是</optopn><option value=0 >否</option></select></td></tr>";

	htmlStr += "<tr><td>可插入附件:</td><td><select name=add_file ><option value=1 >是</option><optionvalue=0 >否</option></select></td>";
	htmlStr += "<td>可查看附件:</td><td><select name=show_file ><option value=1 >是</option><option value=0 >否</option></select></td></tr>";

	htmlStr += "<tr><td>跟踪验收人:</td><td><input type=text name=acceptor_id /></td>";
	htmlStr += "<td>是否显示姓名:</td><td><select name=show_name ><option value=1 >是</option><option value=0 >否</option></select></td></tr>";

	htmlStr += "<tr><td>信息提醒下一步:</td><td><input type=text name=next_step /></td>";
	htmlStr += "<td>隶属功能:</td><td><input type=text name=function /></td></tr>";
	
	htmlStr += "<tr><td>是否即时通功能:</td><td><select name=send_message ><option value=1 >是</option><option value=0 >否</option></select></td>";
	htmlStr += "<td>是否审批需要身份确认:</td><td><select name=acceptor_identity ><option value=1 >是</option><option value=0 >否</option></select></td></tr>";

	htmlStr += "<tr><td>填写说明:</td><td><input type=text name=remark ></td>";
	htmlStr += "<td></td><td></td></tr>";

	htmlStr +="</table></div>";
	
	return htmlStr;
}
//line info
function lineInfo(id,text_id)
{
	var line = paper.getById(id);

	var from = line.prop.from;
	var to = line.prop.to;
	
	var htmlStr = "<div id="+id+" ><table border=2 >";
	
	htmlStr += "<tr><td>编号:</td><td><input type=text name=id value='"+id+"' readOnly /></td>";
	htmlStr += "<td>流程编号:</td><td><input type=text name=process_id value="+process_id+" readOnly /></td></tr>";
	
	htmlStr += "<tr><td>输入节点:</td><td><input type=text  name=input_id value='"+from+"' readOnly /></td>";
	htmlStr += "<td>后续节点:</td><td><input type=text name=output_id value='"+to+"' readOnly  /></td></tr>";
	
	htmlStr += "<tr><td>关联消息内容:</td><td><input type=text name=related_message /></td>";
	htmlStr += "<td>关联消息发送对象:</td><td><input type=text name=related_target placeholder=逗号分开 /></td></tr>";
	
	htmlStr += "<tr><td>关联流程:</td><td><input type=text name=related_process /></td>";
	htmlStr += "<td>抄送对象:</td><td><input type=text name=cc_target  /></td></tr>";
	
	htmlStr += "<tr><td>路径名称</td><td><input type=text name=route_name value='' onBlur=javascript:changeText('"+text_id+"') id="+text_id+"Text /></td>";
	htmlStr += "<td>流转类型:</td><td><select name=route_type ><option value=next >下一步</option><option value=reject >驳回</option><option value=relateMessage >关联消息</option><option value=relateProcess >关联流程</option><option value=cc >抄送 </option></select></td></tr>";

	htmlStr += "<tr><td>流转表达式:</td><td><input type=text name=script ></td>";
	htmlStr += "<td>状态:</td><td><input type=text name=org_id ></td></tr>";
	
	htmlStr += "</table><div>";
	
	return htmlStr;
}


function getAllInfo () 
{
	var line_array = new Array();
	var node_array = new Array();
	var main_array = {};
	var process = new Array();
	var json;
	
	$("#process input").each(function()
	{
		var name = $(this).attr("name");
		var value = $(this).val();
		main_array[name] = value;
	})
	$("#process select").each(function()
	{
		var name = $(this).attr("name");
		var value = $(this).val();
		main_array[name] = value;
	})
	var temp_array;
  	$("#info div").each(function()
	{		
		var id = $(this).attr("id");
		
		var element = paper.getById(id);
		
		temp_array = {};
		
		$("div[id='"+id+"'] input").each(function()
		{
			var name = $(this).attr("name");
			var value = $(this).val();
			temp_array[name] = value;
		})
		$("div[id='"+id+"'] select").each(function()
		{
			var name = $(this).attr("name");
			var value = $(this).val();
			temp_array[name] = value;
		})
		console.log(temp_array.length);
		if("path"!=element[0].nodeName)
		{
			if(temp_array['id']!=null)
			{
				node_array.push(temp_array);
			}	
		}
		if("path"==element[0].nodeName)
		{
			if(temp_array['id']!=null)
			{
				line_array.push(temp_array);
			}	
		}
		
	})
		
	process.push({line:line_array});
	process.push({main:main_array});
	process.push({node:node_array});
	
	json = JSON.stringify(process);
	 
	console.log(json);
	
}
//change line info
function changeLineInfo(id)
{
	var path = paper.getById(id);
	var from = path.prop.from;
	var to = path.prop.to;
	
	$("div[id='"+id+"'] input").each(function()
	{
		if("input_id"==$(this).attr("name"))
		{
			$(this).val(from);
		}
		if("output_id"==$(this).attr("name"))
		{
			$(this).val(to);
		}
	})
}
