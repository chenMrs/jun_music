var now=1;
var max=5;
function show(dl){
    now=dl;
    for(var i=1; i<=max; i++)
    {
        if(i==now){
            //设置当前显示图片以及对应的数字标签
            document.getElementById('singerList'+now).style.display='block';
            document.getElementById('intem'+now).style.backgroundColor='#31C27C';
            document.getElementById('intem'+now).style.color='#fff';
        }
        else
        {
            document.getElementById('singerList'+i).style.display='none';
            document.getElementById('intem'+i).style.backgroundColor='#fff';
            document.getElementById('intem'+i).style.color='#a2a2a2';
        }
    }
}

var pro_now=1;
var pro_max=5;
function show_profile(xl) {
    pro_now=xl;
    for(var i=1; i<=pro_max; i++)
    {
        if(i==pro_now){
            //设置当前显示图片以及对应的数字标签
            document.getElementById('pro'+pro_now).style.display='block';
            document.getElementById('nav_item'+i).style.color="#31C27C";
        }
        else
        {
            document.getElementById('pro'+i).style.display='none';
            document.getElementById('nav_item'+i).style.color="#000";
        }
    }
}