function make_String(val)
     	{
     		document.getElementById("result").value+=val;

     	}
     	function solve(){
     		var operand=document.getElementById("result").value;
     		var claculation=eval(operand);
     		document.getElementById("result").value=claculation;

     	}
     	function clear_result()
     	{
     		document.getElementById("result").value="";	
     	}