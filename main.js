let s= [

	{
	
	studenName: "jack",
	
	studenClass: 6,
	
	studenSection: "a"
	
	},
	
	{
	
	studenName: "tom",
	
	studenClass: 6,
	
	studenSection: "a"
	
	},
	
	{
	
	studenName: "ricky",
	
	studenClass: 6,
	
	studenSection: "b"
	
	},{
	
	studenName: "john",
	
	studenClass: 6,
	
	studenSection: "b"
	
	},{
	
	studenName: "jerry",
	
	studenClass: 6,
	
	studenSection: "a"
	
	},{
	
	studenName: "henry",
	
	studenClass: 6,
	
	studenSection: "b"
	
	},{
	
	studenName: "stephen",
	
	studenClass: 6,
	
	studenSection: "a"
	
	}
	
	]


	let a=s.filter(function(e){
		return e.studenSection=="a";
	})

	document.write(`6A class =  ${JSON.stringify(a)}`)