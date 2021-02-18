let now=2;
let max=7;
function show(dl){
	if(Number(dl)){
		now=dl;
	}
//	alert(now);
	for(var i=2;i<=max;i++)
	{
//	alert(now);	
		if(i==now){
			document.getElementById("song_p_"+i).style.display='';
		}
		else{
			document.getElementById("song_p_"+i).style.display='none';
		}
	}
}
function show_random(){
	  var r=Math.random()%7;
	  document.getElementById("song_p_"+r).style.display='';
}
function show_1(dl){
	if(Number(dl)){
		now=dl;
	}
//	alert(now);
	for(var i=2;i<=max;i++)
	{
		
		if(i==now){
			document.getElementById("song_p_2_"+i).style.display='';
		}
		else{
			document.getElementById("song_p_2_"+i).style.display='none';
		}
	}
}
function show_3(dl){
	if(Number(dl)){
		now=dl;
	}
//	alert(now);
	for(var i=2;i<=max;i++)
	{
		
		if(i==now){
			document.getElementById("song_3_"+i).style.display='';
		}
		else{
			document.getElementById("song_3_"+i).style.display='none';
		}
	}
}
function showw(){
	for(var i=0;i<12;i++){
		document.getElementsByClassName("label")[i].style.display="";
	}
}
function disshow(){
	for(var i=0;i<12;i++){
		document.getElementsByClassName("label")[i].style.display="none";
	}
	
}
