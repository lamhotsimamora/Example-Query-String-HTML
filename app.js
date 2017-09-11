$(document).ready(function(){
	/**
	 * Enabled Console Log GF Javascript
	 * @type {Boolean}
	 */
	run_console = true;

	/**
	 * Get Parameter From URl, You can change the parameter that you want
	 * @type {[string]}
	 */
	var get_page = _GET('p');
	var get_id   = _GET('id');

	/**
	 * Set const of parameter
	 * @type {Array}
	 */
	const parameter = [
		'home','profile','about','contact','user'
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
		    	if (get_id)
		    	{
		    		_loadDoc("component/"+parameter[4],"display");
		    		_setTitle("User | Garuda Javascript");
		    	}
		    	else
		    	{
		    		_loadDoc("component/"+parameter[1],"display");
		    		_setTitle("Profile | Garuda Javascript");
		    	}
				
				break;
		    case parameter[2]:
				_loadDoc("component/"+parameter[2],"display");
				_setTitle("About | Garuda Javascript");
				break;
		    case parameter[3]:
				_loadDoc("component/"+parameter[3],"display");
				_setTitle("Contact | Garuda Javascript");
				break;
			case parameter[4]:

				_loadDoc("component/"+parameter[4],"display");
				_setTitle("User | Garuda Javascript");
				break;
		    default:
		    	 _loadDoc("component/"+parameter[0],"display");
		    	 _setTitle("Home | Garuda Javascript");
		      
		}	
	}

	function setup()
	{
		setupQuery(get_page);
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
			var	result = u.toLowerCase();
			setupQuery(result);
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