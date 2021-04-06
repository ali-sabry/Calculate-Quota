
/****************************  Start The Project ***********************************/
	let start        = document.getElementById('start'), // Start Date Input
	    total        = document.getElementById('total'), // Total Package
		dailyUsage 	 = document.getElementById('daily-usage'), // Daily Usage
		generateVal  = document.getElementById('generate'), // Generate Values
		setVal       = document.getElementById('set'), // Set All Setting
		result	     = document.getElementById('result'), // Result To Show Message
		// Important Storage 
	 	startStorage = localStorage.getItem('Start_value'), // Get Start Value From LocalStorage
		totalStorage = localStorage.getItem('total_value'), // Get Total Value From LocalStorage
		dailyStorage = localStorage.getItem('daily_value'); // Get Daily Value From LocalStorage


generateVal.onclick = () => {

	// Set The LocalStorage Value Of The Inputs
		if (total.value && dailyUsage.value && start.value !== '') {
			// Set Start LocalStorage
			localStorage.setItem('Start_value', start.value);
			// Set total LocalStorage
			localStorage.setItem('total_value', total.value);
			// Set Daily LocalStorage
			localStorage.setItem('daily_value', dailyUsage.value);
			// Show Generate Button
			generateVal.style.display = 'block';
			// Reload Window
			window.location.reload();
		} else {
			// Show Result Message With To Diffrent Languages
			if (document.body.getAttribute('class') == 'arabic-style') {
				// Result Arabic Message
				result.textContent = 'يجب ملئ الحقول أولا';
			} else {
				// Result English Message
				result.textContent = 'Sorry Input Cant Be Empty';
			}
			// Hide Result Message On Input Focused
			Array.from(document.getElementsByTagName("input")).forEach((element)=> {
				element.onfocus = () => {
					result.textContent = "";
				}
			});
		}

}
	// Storage Checker
	if (startStorage && totalStorage && dailyStorage !== '') {
		// Hide All Input Parent
		start.parentElement.style.display = 'none';
		// Hide Generate Button
		generateVal.style.display = 'none';
		// Show Set Button
		setVal.style.display = 'block';
		// Result Message Style
			result.style.marginTop = '125px';
			result.style.textAlign = 'center'
		
		// Show Qota Date Result Message 
			if (document.body.getAttribute('class') == 'arabic-style') {
				// Show  Arabic Message Data On Result From LocalSorage
				result.textContent = ' تاريخ بداية الباقة : '+ startStorage;
			} else {
				// Show  Arabic Message Data On Result From LocalSorage
				result.textContent = 'Start Quota On: '+ startStorage;
			}

	} else {
		// Show All Button
		start.parentElement.style.display = 'block';
		// Hide Set Button
		setVal.style.display = 'none';
	}

	// Set All Setting
	set.onclick = ()=> {
		// Clear All LocalStorage
		localStorage.removeItem('Start_value');
		localStorage.removeItem('total_value');
		localStorage.removeItem('daily_value');

		// Reload Window
		window.location.reload();
	}

	/***************** Start Concat The LocalStorage With The Calcute ********************/
	let showDaily   		= document.querySelector('.show-usage span'), // Daily Giga Byte For Used
		showTotal   		= document.querySelector('.show-total span'), // Show Total Giga Byte of Package 
		progress    		= document.querySelector('.progress span'), // Progress For Show Your Postion
		progressMsg    		= document.querySelector('.progress .progress-msg'), // Progress For Show Your Postion
		showDay 			= document.querySelector('.day span'), // Show The Day Of The Month
		theUsed    		    = document.querySelector('.used span'), // All Giga Byte Finished
		remind      		= document.querySelector('.remind span'),  // All Remind Giga Byte
		endDate             = new Date(), // create The End Date 
		endMillsec          = endDate.getTime(), // Convert End Date To Mill Seconds
		startMillsec        = new Date(startStorage).getTime(), // Convert Start Date To Mill Seconds
		calcFuntion         = 1000 * 3600 * 24, //  Mill Seconds To Days
		lastStart           = startMillsec / calcFuntion, // Start Mill Seconds To Days
		lastEnd             = endMillsec / calcFuntion, // End Mill Seconds To Days
		theRealdays         = Math.floor(lastEnd) - lastStart; // The Real Days

		// Show Daily Usage
		if (totalStorage == null && dailyStorage == null) {
			showDaily.textContent  = 0;
			showTotal.textContent  = 0;
			showDay.textContent = 0;
		} else {
			showDaily.textContent = dailyStorage;
			showTotal.textContent = totalStorage;
			showDay.textContent = theRealdays;
		}

		// The Used Data
		theUsed.textContent = dailyStorage * theRealdays;

		// The Remind Data
		remind.textContent = totalStorage - (dailyStorage * theRealdays)

		// The Progress Width
		progress.style.width = (100 - 3 * theRealdays) + '%';

		// Progress Widget 
			if (progress.style.width > 1+'%') {
				// Show The widget
				progressMsg.style.display = 'block';
				// Message Content
				progressMsg.textContent = progress.style.width;	
				// Message Width Style
				progressMsg.style.left = (progress.style.width);
				// Message Transform Styl
				progressMsg.style.transform = 'translateX(-50%)';

			}	

		// Progress Main Green Background
		progress.style.backgroundColor = '#008800a8';

		// Diffrent Background Color On Diffrent Width
		if (progress.style.width <= 30 +'%' ) {

			progress.style.backgroundColor = '#f00'; // Red Background If It Less Than 30%

		} else if (progress.style.width <= 50+'%' ) {
			
			progress.style.backgroundColor = '#ff4967'; // Primary Background If It Less Than 30%

		}	

	/***************** End Concat The LocalStorage With The Calcute ********************/
				
/****************************  End The Project ***********************************/
