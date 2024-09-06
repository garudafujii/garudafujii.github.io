
document.write('<div class="Grant_Single">');

document.write('	<div class="GrantFig">');
document.write('		<a href="' + urlconf + '" target="_blank">');
document.write('			<img src="' + img + '" width="100%" alt="保存禁止" border="0">');
document.write('		</a>');
document.write('	</div>');
document.write('	<div class="GrantInfo" style="line-height:150%;">');
document.write('		<a href="' + urlgrants + '" target="_blank">');
document.write('			<span style="font-size:120%;font-family:Helvetica-Bold";>');
document.write('				' + title + '<br>');
document.write('			</span>');
document.write('		</a>');
document.write('		<span style="font-size:100%;font-family:Times">');
document.write('			' + coinvestigator + ' <br>');
document.write('		</span>');
document.write('		<span style="font-size:100%;font-family:Helvetica-Bold">');
document.write('			' + type + '<br>');
document.write('		</span>');
document.write('			<span style="font-size:100%;font-family:Times">');
document.write('			' + budget );
document.write('		</span>');
document.write('	</div>');

document.write('	<div class="GrantPower">');
document.write('		<div class="GrantNo">');
document.write('			No. <font face="Helvetica-Bold">' + grantno + '</font>');
document.write('		</div>');
document.write('		<div class="GrantPeriod">');
document.write('			<font face="Helvetica-Bold" color="black">' + period + '</font>');
document.write('		</div>');
document.write('		<div class="Progress">');
document.write('			'+ progress +' ');
document.write('		</div>');
document.write('	</div><!--GrantPower-->');

document.write('</div><!--Grant_Single-->');
