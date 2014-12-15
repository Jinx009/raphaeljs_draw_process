function input()
{
	paper.clear();
	$("#info").html("");
	resert();
	var input_json ={"info":"\n<div id=\"0\" style=\"display: none;\"><table border=\"2\"><tbody><tr><td style=\"background:black;color:white\">属性</td><td></td><td></td><td></td></tr><tr><td>编号:</td><td><input type=\"text\" name=\"id\" value=\"0\" readonly=\"\"></td><td>流程编号:</td><td><input type=\"text\" name=\"process_id\" value=\"11461161436\" readonly=\"\"></td></tr><tr><td>节点类型:</td><td><select name=\"type\"><option value=\"start\">开始</option><option value=\"end\">结束</option><option value=\"task\">人工</option><option value=\"auto\">自动</option></select></td><td>节点名称:</td><td><input type=\"text\" name=\"name\"></td></tr><tr><td>表单url:</td><td><input type=\"text\" name=\"url\"></td><td>规则表达式:</td><td><input type=\"text\" name=\"rule_script\"></td></tr><tr><td>执行人岗位:</td><td><input type=\"text\" name=\"user_empno\" placeholder=\"逗号分开\"></td><td>执行人角色</td><td><input name=\"user_role_id\" placeholder=\"逗号分开\"></td></tr><tr><td>执行人关系:</td><td><input type=\"text\" name=\"user_relation\" placeholder=\"逗号分开\"></td><td>协办人:</td><td><input type=\"text\" name=\"help_user_id\"></td></tr><tr><td>超期时间:</td><td><input type=\"text\" name=\"expiration_date\" placeholder=\"单位/天\"></td><td>可回复意见:</td><td><select name=\"add_suggestion\"><option value=\"1\">是</option><option value=\"0\">否</option></select></td></tr><tr><td>可否查看意见:</td><td><select name=\"show_suggestion\"><option value=\"0\">不能查看</option><option value=\"1\">上一环节主办</option><option value=\"2\">上一环节协办</option><option value=\"3\">上一环节全部</option></select></td><td>可否查看所有意见:</td><td><select name=\"show_all_suggestion\"><option value=\"1\">是</option><option value=\"0\">否</option></select></td></tr><tr><td>可插入附件:</td><td><select name=\"add_file\"><option value=\"1\">是</option>否</select></td><td>可查看附件:</td><td><select name=\"show_file\"><option value=\"1\">是</option><option value=\"0\">否</option></select></td></tr><tr><td>跟踪验收人:</td><td><input type=\"text\" name=\"acceptor_id\"></td><td>是否显示姓名:</td><td><select name=\"show_name\"><option value=\"1\">是</option><option value=\"0\">否</option></select></td></tr><tr><td>信息提醒下一步:</td><td><input type=\"text\" name=\"next_step\"></td><td>隶属功能:</td><td><input type=\"text\" name=\"function\"></td></tr><tr><td>是否即时通功能:</td><td><select name=\"send_message\"><option value=\"1\">是</option><option value=\"0\">否</option></select></td><td>是否审批需要身份确认:</td><td><select name=\"acceptor_identity\"><option value=\"1\">是</option><option value=\"0\">否</option></select></td></tr><tr><td>填写说明:</td><td><input type=\"text\" name=\"remark\"></td><td></td><td></td></tr></tbody></table></div><div id=\"1\" style=\"display: none;\"><table border=\"2\"><tbody><tr><td style=\"background:black;color:white\">属性</td><td></td><td></td><td></td></tr><tr><td>编号:</td><td><input type=\"text\" name=\"id\" value=\"1\" readonly=\"\"></td><td>流程编号:</td><td><input type=\"text\" name=\"process_id\" value=\"11461161436\" readonly=\"\"></td></tr><tr><td>输入节点:</td><td><input type=\"text\" name=\"input_id\" value=\"0\" readonly=\"\"></td><td>后续节点:</td><td><input type=\"text\" name=\"output_id\" value=\"\" readonly=\"\"></td></tr><tr><td>关联消息内容:</td><td><input type=\"text\" name=\"related_message\"></td><td>关联消息发送对象:</td><td><input type=\"text\" name=\"related_target\" placeholder=\"逗号分开\"></td></tr><tr><td>关联流程:</td><td><input type=\"text\" name=\"related_process\"></td><td>抄送对象:</td><td><input type=\"text\" name=\"cc_target\"></td></tr><tr><td>路径名称</td><td><input type=\"text\" name=\"route_name\" value=\"\" onblur=\"javascript:changeText('3')\" id=\"3Text\"></td><td>流转类型:</td><td><select name=\"route_type\"><option value=\"next\">下一步</option><option value=\"reject\">驳回</option><option value=\"relateMessage\">关联消息</option><option value=\"relateProcess\">关联流程</option><option value=\"cc\">抄送 </option></select></td></tr><tr><td>流转表达式:</td><td><input type=\"text\" name=\"script\"></td><td>状态:</td><td><input type=\"text\" name=\"org_id\"></td></tr></tbody></table><div style=\"display: none;\"></div></div><div id=\"4\" style=\"display: block;\"><table border=\"2\"><tbody><tr><td style=\"background:black;color:white\">属性</td><td></td><td></td><td></td></tr><tr><td>编号:</td><td><input type=\"text\" name=\"id\" value=\"4\" readonly=\"\"></td><td>流程编号:</td><td><input type=\"text\" name=\"process_id\" value=\"11461161436\" readonly=\"\"></td></tr><tr><td>节点类型:</td><td><select name=\"type\"><option value=\"start\">开始</option><option value=\"end\">结束</option><option value=\"task\">人工</option><option value=\"auto\">自动</option></select></td><td>节点名称:</td><td><input type=\"text\" name=\"name\"></td></tr><tr><td>表单url:</td><td><input type=\"text\" name=\"url\"></td><td>规则表达式:</td><td><input type=\"text\" name=\"rule_script\"></td></tr><tr><td>执行人岗位:</td><td><input type=\"text\" name=\"user_empno\" placeholder=\"逗号分开\"></td><td>执行人角色</td><td><input name=\"user_role_id\" placeholder=\"逗号分开\"></td></tr><tr><td>执行人关系:</td><td><input type=\"text\" name=\"user_relation\" placeholder=\"逗号分开\"></td><td>协办人:</td><td><input type=\"text\" name=\"help_user_id\"></td></tr><tr><td>超期时间:</td><td><input type=\"text\" name=\"expiration_date\" placeholder=\"单位/天\"></td><td>可回复意见:</td><td><select name=\"add_suggestion\"><option value=\"1\">是</option><option value=\"0\">否</option></select></td></tr><tr><td>可否查看意见:</td><td><select name=\"show_suggestion\"><option value=\"0\">不能查看</option><option value=\"1\">上一环节主办</option><option value=\"2\">上一环节协办</option><option value=\"3\">上一环节全部</option></select></td><td>可否查看所有意见:</td><td><select name=\"show_all_suggestion\"><option value=\"1\">是</option><option value=\"0\">否</option></select></td></tr><tr><td>可插入附件:</td><td><select name=\"add_file\"><option value=\"1\">是</option>否</select></td><td>可查看附件:</td><td><select name=\"show_file\"><option value=\"1\">是</option><option value=\"0\">否</option></select></td></tr><tr><td>跟踪验收人:</td><td><input type=\"text\" name=\"acceptor_id\"></td><td>是否显示姓名:</td><td><select name=\"show_name\"><option value=\"1\">是</option><option value=\"0\">否</option></select></td></tr><tr><td>信息提醒下一步:</td><td><input type=\"text\" name=\"next_step\"></td><td>隶属功能:</td><td><input type=\"text\" name=\"function\"></td></tr><tr><td>是否即时通功能:</td><td><select name=\"send_message\"><option value=\"1\">是</option><option value=\"0\">否</option></select></td><td>是否审批需要身份确认:</td><td><select name=\"acceptor_identity\"><option value=\"1\">是</option><option value=\"0\">否</option></select></td></tr><tr><td>填写说明:</td><td><input type=\"text\" name=\"remark\"></td><td></td><td></td></tr></tbody></table></div><div id=\"5\" style=\"display: none;\"><table border=\"2\"><tbody><tr><td style=\"background:black;color:white\">属性</td><td></td><td></td><td></td></tr><tr><td>编号:</td><td><input type=\"text\" name=\"id\" value=\"5\" readonly=\"\"></td><td>流程编号:</td><td><input type=\"text\" name=\"process_id\" value=\"11461161436\" readonly=\"\"></td></tr><tr><td>节点类型:</td><td><select name=\"type\"><option value=\"start\">开始</option><option value=\"end\">结束</option><option value=\"task\">人工</option><option value=\"auto\">自动</option></select></td><td>节点名称:</td><td><input type=\"text\" name=\"name\" id=\"8Text\" value=\"Node\" onblur=\"javascript:changeText('8')\"></td></tr><tr><td>表单url:</td><td><input type=\"text\" name=\"url\"></td><td>规则表达式:</td><td><input type=\"text\" name=\"rule_script\"></td></tr><tr><td>执行人岗位:</td><td><input type=\"text\" name=\"user_empno\" placeholder=\"逗号分开\"></td><td>执行人角色</td><td><input name=\"user_role_id\" placeholder=\"逗号分开\"></td></tr><tr><td>执行人关系:</td><td><input type=\"text\" name=\"user_relation\" placeholder=\"逗号分开\"></td><td>协办人:</td><td><input type=\"text\" name=\"help_user_id\"></td></tr><tr><td>超期时间:</td><td><input type=\"text\" name=\"expiration_date\" placeholder=\"单位/天\"></td><td>可回复意见:</td><td><select name=\"add_suggestion\"><option value=\"1\">是</option><option value=\"0\">否</option></select></td></tr><tr><td>可否查看意见:</td><td><select name=\"show_suggestion\"><option value=\"0\">不能查看</option><option value=\"1\">上一环节主办</option><option value=\"2\">上一环节协办</option><option value=\"3\">上一环节全部</option></select></td><td>可否查看所有意见:</td><td><select name=\"show_all_suggestion\"><option value=\"1\">是</option><option value=\"0\">否</option></select></td></tr><tr><td>可插入附件:</td><td><select name=\"add_file\"><option value=\"1\">是</option>否</select></td><td>可查看附件:</td><td><select name=\"show_file\"><option value=\"1\">是</option><option value=\"0\">否</option></select></td></tr><tr><td>跟踪验收人:</td><td><input type=\"text\" name=\"acceptor_id\"></td><td>是否显示姓名:</td><td><select name=\"show_name\"><option value=\"1\">是</option><option value=\"0\">否</option></select></td></tr><tr><td>信息提醒下一步:</td><td><input type=\"text\" name=\"next_step\"></td><td>隶属功能:</td><td><input type=\"text\" name=\"function\"></td></tr><tr><td>是否即时通功能:</td><td><select name=\"send_message\"><option value=\"1\">是</option><option value=\"0\">否</option></select></td><td>是否审批需要身份确认:</td><td><select name=\"acceptor_identity\"><option value=\"1\">是</option><option value=\"0\">否</option></select></td></tr><tr><td>填写说明:</td><td><input type=\"text\" name=\"remark\"></td><td></td><td></td></tr></tbody></table></div><div id=\"6\" style=\"display: none;\"><table border=\"2\"><tbody><tr><td style=\"background:black;color:white\">属性</td><td></td><td></td><td></td></tr><tr><td>编号:</td><td><input type=\"text\" name=\"id\" value=\"6\" readonly=\"\"></td><td>流程编号:</td><td><input type=\"text\" name=\"process_id\" value=\"11461161436\" readonly=\"\"></td></tr><tr><td>输入节点:</td><td><input type=\"text\" name=\"input_id\" value=\"5\" readonly=\"\"></td><td>后续节点:</td><td><input type=\"text\" name=\"output_id\" value=\"\" readonly=\"\"></td></tr><tr><td>关联消息内容:</td><td><input type=\"text\" name=\"related_message\"></td><td>关联消息发送对象:</td><td><input type=\"text\" name=\"related_target\" placeholder=\"逗号分开\"></td></tr><tr><td>关联流程:</td><td><input type=\"text\" name=\"related_process\"></td><td>抄送对象:</td><td><input type=\"text\" name=\"cc_target\"></td></tr><tr><td>路径名称</td><td><input type=\"text\" name=\"route_name\" value=\"\" onblur=\"javascript:changeText('9')\" id=\"9Text\"></td><td>流转类型:</td><td><select name=\"route_type\"><option value=\"next\">下一步</option><option value=\"reject\">驳回</option><option value=\"relateMessage\">关联消息</option><option value=\"relateProcess\">关联流程</option><option value=\"cc\">抄送 </option></select></td></tr><tr><td>流转表达式:</td><td><input type=\"text\" name=\"script\"></td><td>状态:</td><td><input type=\"text\" name=\"org_id\"></td></tr></tbody></table><div style=\"display: none;\"></div></div><div id=\"37\" style=\"display: none;\"><table border=\"2\"><tbody><tr><td style=\"background:black;color:white\">属性</td><td></td><td></td><td></td></tr><tr><td>编号:</td><td><input type=\"text\" name=\"id\" value=\"37\" readonly=\"\"></td><td>流程编号:</td><td><input type=\"text\" name=\"process_id\" value=\"11461161436\" readonly=\"\"></td></tr><tr><td>输入节点:</td><td><input type=\"text\" name=\"input_id\" value=\"0\" readonly=\"\"></td><td>后续节点:</td><td><input type=\"text\" name=\"output_id\" value=\"4\" readonly=\"\"></td></tr><tr><td>关联消息内容:</td><td><input type=\"text\" name=\"related_message\"></td><td>关联消息发送对象:</td><td><input type=\"text\" name=\"related_target\" placeholder=\"逗号分开\"></td></tr><tr><td>关联流程:</td><td><input type=\"text\" name=\"related_process\"></td><td>抄送对象:</td><td><input type=\"text\" name=\"cc_target\"></td></tr><tr><td>路径名称</td><td><input type=\"text\" name=\"route_name\" value=\"\" onblur=\"javascript:changeText('39')\" id=\"39Text\"></td><td>流转类型:</td><td><select name=\"route_type\"><option value=\"next\">下一步</option><option value=\"reject\">驳回</option><option value=\"relateMessage\">关联消息</option><option value=\"relateProcess\">关联流程</option><option value=\"cc\">抄送 </option></select></td></tr><tr><td>流转表达式:</td><td><input type=\"text\" name=\"script\"></td><td>状态:</td><td><input type=\"text\" name=\"org_id\"></td></tr></tbody></table><div></div></div>","element":[{"id":0,"type":"image","attr":{"x":350,"y":193,"width":50,"height":50,"src":"images/48/start_event_empty.png","cursor":"move","transform":[]},"prop":"","line_array":[1,37],"text":""},{"id":1,"type":"path","attr":{"path":[["M",349.9999999999986,229.87499999999923],["L",184.9999999999989,308.2500000000004]],"stroke":"black","stroke-width":2},"text":{"id":3,"attr":{"x":437.5,"y":198,"text-anchor":"middle","text":"","font":"10px \"Arial\"","stroke":"none","fill":"#000","cursor":"move","transform":[]}},"prop":{"from":0,"to":5,"arrow":2},"line_array":""},{"id":4,"type":"image","attr":{"x":202,"y":370,"width":50,"height":50,"src":"images/48/end_event_terminate.png","cursor":"move","transform":[]},"prop":"","line_array":[6,37],"text":""},{"id":5,"type":"rect","attr":{"x":85,"y":307,"width":100,"height":50,"r":5,"rx":0,"ry":0,"fill":"#6cc0c1","stroke":"white","stroke-width":2,"cursor":"move","transform":[]},"prop":"","line_array":[6,1],"text":{"id":8,"attr":{"x":135,"y":332,"text-anchor":"middle","text":"Node","font":"10px \"Arial\"","stroke":"white","fill":"#000","stroke-width":1,"transform":[]}}},{"id":6,"type":"path","attr":{"path":[["M",171.50793650793847,357.0000000000011],["L",202.00000000000006,377.8804347826071]],"stroke":"black","stroke-width":2},"text":{"id":9,"attr":{"x":222.5,"y":312,"text-anchor":"middle","text":"","font":"10px \"Arial\"","stroke":"none","fill":"#000","cursor":"move","transform":[]}},"prop":{"from":5,"to":4,"arrow":7},"line_array":""},{"id":37,"type":"path","attr":{"path":[["M",354.0960451977369,243.00000000000188],["L",247.9039548022594,370]],"stroke":"green","stroke-width":2},"text":{"id":39,"attr":{"x":300.9999999999981,"y":286.5000000000009,"text-anchor":"middle","text":"","font":"10px \"Arial\"","stroke":"none","fill":"#000","transform":[]}},"prop":{"from":0,"to":4,"arrow":38},"line_array":""}]} ;
	var htmlStr = input_json.info;
	$("#info").append(htmlStr);
	for(i in element)
	{
		if("path"==element[i].type)
		{
			var line = paper.path(element[i].attr.path).attr({stroke:element[i].attr.stroke,"stroke-width":2});
			var text = paper.text().attr(element[i].text.attr);
			line.text = text.id;
			text.drag(textMove,textStart,textEnd);
			$("div[id='"+element[i].id+"'] input").each(function()
			{
				if("route_name"==$(this).attr("name"))
				{
					$(this).blur(function()
					{
						changeText(text.id);
					});
				}
			});
			var arrow = paper.path(drawArrow(line.id)).attr({stroke:line.attr("stroke"),"stroke-width":line.attr("stroke-width")});
			$("#"+element[i].id).attr("id",line.id+"test");
			input_id_array.push(line.id+"test");
			input_line_array.push({root:element[i].id,copy:line.id});
			line.prop = element[i].prop;
			line.prop.arrow = arrow.id;
			line.click(lineClick);
		}
		if("image"==element[i].type)
		{
			var image = paper.image().attr(element[i].attr);
			$("#"+element[i].id).attr("id",image.id+"test");
			input_id_array.push(image.id+"test");
			image.text = false;
			image.line_array = element[i].line_array;
			input_node_array.push({root:element[i].id,copy:image.id});
			image.click(nodeClick);
			image.drag(nodeMove,nodeStart,nodeEnd);
		}
		if("rect"==element[i].type)
		{
			var rect = paper.rect().attr(element[i].attr);
			var rect_text = paper.text().attr(element[i].text.attr);
			rect.text = rect_text.id;
			$("div[id='"+element[i].id+"'] input").each(function()
			{
					if("name"==$(this).attr("name"))
					{
						$(this).blur(function()
						{
							changeText(rect_text.id);
						});
					}
			});
			$("#"+element[i].id).attr("id",rect.id+"test");
			rect.line_array = element[i].line_array;
			input_node_array.push({root:element[i].id,copy:rect.id});
			rect.click(nodeClick);
			rect.drag(nodeMove,nodeStart,nodeEnd);
			input_id_array.push(rect.id+"test");
		}
	}
	changeId();
}
function changeId()
{
	for(i in input_id_array)
	{
		var real_id = input_id_array[i].split("test")[0];
		$("#"+input_id_array[i]).attr("id",real_id);
	}
	for(j in input_line_array)
	{
		var line = paper.getById(input_line_array[j].copy);
		for(k in input_node_array)
		{
			if(line.prop.from==input_node_array[k].root)
			{
				line.prop.from = input_node_array[k].copy;
			}
		}
		if(""!==line.prop.to)
		{
			for(z in input_node_array)
			{
				if(line.prop.to==input_node_array[z].root)
				{
					line.prop.to = input_node_array[z].copy;
				}
			}
		}
		$("div[id='"+line.id+"'] input").each(function()
		{
				if("input_id"==$(this).attr("name"))
				{
					$(this).val(line.prop.from);
				}
				if("output_id"==$(this).attr("name"))
				{
					$(this).val(line.prop.to);
				}
		});
	}
	for(w in input_node_array)
	{
		var element = paper.getById(input_node_array[w].copy);
		for(x in element.line_array)
		{
			for(z in input_line_array)
			{
				if(element.line_array[x]==input_line_array[z].root)
				{
					element.line_array[x] = input_line_array[z].copy;
				}
			}
		}	
	}
}
function resert()
{
	can_draw_line = false;
	link_line_element = false;
	single_click_line = false;
	click_element = false;
	single_line_style = false;
	temp_line_array = false;
	temp_rect_array = false;
	delete_element = false;
	line_click_style = false;
}
