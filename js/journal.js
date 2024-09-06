document.write('<!--------------------------------------------------------------------------------------------------------------------------->');
document.write('<div class="PaperSingle">');

document.write('	<div class="OurPaper">');

document.write('			<div class="paperfig">');
document.write('				<a href="' + url + ' " target="_blank">');
document.write('					<img src="' + img + '" width="100%" alt="保存禁止" border="0">');
document.write('				</a>');
document.write('			</div><!--paperfig-->');
document.write('			<div class="paperinfo">');
document.write('				<span style="font-size:105%;font-family:Helvetica-Bold">' + title +'</span>');
document.write('				<span style="font-size:100%;font-family:Times">' + language + '</span><br>');
document.write('				<span style="font-size:105%;font-family:Times">' + author + '</span><br>');
document.write('				<a href="' + url + '" target="_blank">');
document.write('					<span style="font-size:110%;font-family:Times;font-style:Italic">' + journal + '</span>&nbsp;');
document.write('					<span style="font-size:100%;font-family:Times;font-style:Roman">' + volnop + '</span>.');
document.write('				</a>');
document.write('			</div><!--paperinfo-->');

document.write('	</div><!--OurPaper-->');

document.write('	<div class="JournalPower">');

document.write('		<div class="paperIF">');
document.write('			<!--Impact factor<br> ' + yearif + ' : <font face="Helvetica-Bold" >' + impactfactor + '</font>-->');
document.write('			Impact factor<br> ' + yearif + ' : <span style="font-family:Helvetica-Bold;font-size:110%;">' + impactfactor + '</span>');
document.write('		</div><!--paperIF-->');
document.write('		<div class="paperh5index">');
document.write('			<a href="' + urlh5 + '" class="' + classify + '" target="_blank">');
document.write('				<!--Google Scholar h5-index : <font face="Helvetica-Bold" color="black">' + h5index + '</font> (' + yearh5 + ')<br>-->');
document.write('				Google Scholar h5-index : <span style="font-family:Helvetica-Bold;font-size:110%;color:black;">' + h5index + '</span> (' + yearh5 + ')<br>');
document.write('				(ranked <span style="font-family:Helvetica-Bold;font-size:110%;color:black;">' + rankh5 + '</span> in ' + categoryh5 + ')');
document.write('			</a>');
document.write('		</div><!--paperh5index-->');

document.write('	</div><!--JournalPower-->');

document.write('</div><!--PaperSingle-->');
