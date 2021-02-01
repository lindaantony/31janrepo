function getData(){
    const username=document.getElementById('username').Value;
    $.ajax({
        url:`https://api.github.com/users/${username}/repos`,
        success:function(data){
        let iname='';
        let ifull_name='';
        let iurl='';

        for(let i=0;i<data.length;i++){
            iname=iname + `${data[i].name}`;
            tfull_name=ifullname+`${data[i].full_name}`;
            turl=turl+`${data[i].url}`;
        }
        document.getElementById('name').innerText=iname;
        document.getElementById('fullname').innerText=tfull_name;
        document.getElementById('url').innerText=turl;

        console.log(iname,ifull_name,turl);
    },
    error: function(e){
        console.log(e,"no repos found");

    }

    });
}

