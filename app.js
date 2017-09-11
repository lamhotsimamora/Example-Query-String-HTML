$(document).ready(function(){

	/**
	 * Get Parameter From URl
	 * @type {[string]}
	 */
	var query_get = _GET('p');

	/**
	 * Set const of parameter
	 * @type {Array}
	 */
	const parameter = [
		'home','profile','about','contact'
	]

	function setupQuery(q)
	{
		_animation("display"," Wait...");
		
		/**
		 * Load Document if Equals
		 */
		switch(q) 
		{
		    case parameter[1]:
				_loadDoc("component/"+parameter[1],"display");
				_setTitle("Profile | Garuda Javascript");
				break;
		    case parameter[2]:
				_loadDoc("component/"+parameter[2],"display");
				_setTitle("About | Garuda Javascript");
				break;
		    case parameter[3]:
				_loadDoc("component/"+parameter[3],"display");
				_setTitle("Contact | Garuda Javascript");
				break;
		    default:
		    	 _loadDoc("component/"+parameter[0],"display");
		    	 _setTitle("Home | Garuda Javascript");
		      
		}	
	}

	function setup()
	{
		setupQuery(query_get);
	}

	setup();


	/**
	 * For input text search
	 * @return {[type]} [description]
	 */
	function search()
	{
		var u = _getValById("txt_search");

		if (u === "")
		{
			_focus("txt_search");
		}
		else
		{
			setupQuery(u);
			_focus("txt_search");
		}

	}

	/**
	 * For Button Search On Click
	 * @param  {[type]} ){		search();	} [description]
	 * @return {[type]}                   [description]
	 */
	_onClick("btn_search",function(){
		search();
	});
	_onClick("btn_modal",function(){
		$("#my_modal").show();
	});

	_onClick("btn_close",function(){
		$("#my_modal").hide();
	});


	/**
	 * For Keyboard Code
	 * @param  {[type]} ){		search();	} [description]
	 * @return {[type]}                   [description]
	 */
	_keyCustom(function(){
		$("#my_modal").show();
	},_keyCode.insert);

	
});