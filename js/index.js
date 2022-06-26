var stop =true;
var img=["","",""];
var i = 0;
 $("").mouseover(function(){
 	i=$(this).index();
 	$("").css({"background":"url(/img/"+img[i]+")","background-size":"500px 500px"})
    $("").css("","");
    $("").siblings().css("","")
 })
 function jia(){
 	if(i>=2){
 		i=0;
 		$("").css("background","url(/img/"+img[i]+")")
 	    $("").eq(i).css("")
 	}else{
 		i=i+1;
 		$("").css()
 	}
 }
 $("").hover(function(){
 	stop=false
 },function(){
    stop=true 	
 }
 )
 setInterval(function(){
 	if(stop == true){
 		jia()
 	}
 },2000)
 $.ajax({
 	type:"get",
 	url:"",
 	async:true,
 	data:"123",
 	success:function(data){
 		
 	},
 	error:function(){
 		
 	}
 });
 this.$router.push({
 	name:"",
 	params:{
 		id:1
 	}
 })
 mounted(){
 	this.sadf =this.$route.params.id
 }
 created(){
 	this.$http.get("",{id:"1"}).then(data=>{
 		console.log(data);
 		this.adf=data
 	}).catch( (error)=>{
 		console.log(error)
 	})
 }
