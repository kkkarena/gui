function testAlert() {
    //get selected radio input
    //alert(getCheckedRadioId('q4_hybridMode'));
    
    //get selected dropbox input
    //alert(getDropedBoxId('q3_chipsetCompany')); //get dropbox value
}

function getCheckedRadioId(name) {
    var radio = document.getElementsByName(name);

    for (var i=0, len=radio.length; i<len; ++i)
        if (radio[i].checked) return radio[i].value;
}

function getDropedBoxId(name) {
    var dropbox = document.getElementById(name);
    var index = dropbox.selectedIndex;
   	return dropbox.options[index].value;
}

function addModel(theselect){
		//*BRCM customer (EX: Charter, TWC .etc) 
		var BRCM_customer = new Array();
		BRCM_customer[0] = "Charter" ;
		BRCM_customer[1] = "TWC_Genie" ;
		BRCM_customer[2] = "Cox" ;
		//*BRCM_model
		var BRCM_model = new Array();
		BRCM_model[0] = "CG3000D-RG";
		BRCM_model[1] = "CG3000Dv2";
		BRCM_model[2] = "CG4500BX";

		//*TI customer (EX: Virgin, ONO .etc) 
		var TI_customer = new Array();
		TI_customer[0] = "Virgin" ;
		//*TI_model
		var TI_model = new Array();
		TI_model[0] = "CG4000D";
		TI_model[1] = "CG6250TD";
		
		document.getElementById('q2_customer').options.length = 0;
		document.getElementById('q3_model').options.length = 0;
			
		if (theselect.value == 'BCM'){
  					for (i = 0 ; i < BRCM_customer.length ; i++) {
  						document.getElementById('q2_customer').options[i] = new Option(BRCM_customer[i] , BRCM_customer[i]);
   					}
   					for (i = 0 ; i < BRCM_model.length ; i++) {
   						document.getElementById('q3_model').options[i] = new Option(BRCM_model[i] , BRCM_model[i]);
  					}

  					document.getElementById('TI_Backdoor_PreWireless_driver').style.display='none';
  					document.getElementById('TI_Backdoor_CurWireless_driver').style.display='none';

  		} else {
  					for (i = 0 ; i < TI_customer.length ; i++) {
  						document.getElementById('q2_customer').options[i] = new Option(TI_customer[i] , TI_customer[i]);
   					}
   					for (i = 0 ; i < TI_model.length ; i++) {
   						document.getElementById('q3_model').options[i] = new Option(TI_model[i] , TI_model[i]);
  					}

  					document.getElementById('TI_Backdoor_PreWireless_driver').style.display='';
  					document.getElementById('TI_Backdoor_CurWireless_driver').style.display='';
  		}
}

function runAllGWorNot() {
    var boolValue = !!parseInt(getDropedBoxId('Switch_Router_Function'));
  
		document.getElementById('Switch_DHCP_on_LAN').checked = boolValue;								//Switch_DHCP_on_LAN
		document.getElementById('Switch_DHCP_on_LAN').disabled = boolValue;
		document.getElementById('Switch_DMZ').checked = boolValue;												//Switch_DMZ
		document.getElementById('Switch_DMZ').disabled = boolValue;												
		document.getElementById('Switch_MAC_Filtering').checked = boolValue;							//Switch_MAC_Filtering
		document.getElementById('Switch_MAC_Filtering').disabled = boolValue;
		document.getElementById('Switch_IP_Filtering').checked = boolValue;								//Switch_IP_Filtering
		document.getElementById('Switch_IP_Filtering').disabled = boolValue;								
		document.getElementById('Switch_Port_Filtering').checked = boolValue;							//Switch_Port_Filtering
		document.getElementById('Switch_Port_Filtering').disabled = boolValue;
		document.getElementById('Switch_Port_Forwarding').checked = boolValue;						//Switch_Port_Forwarding
		document.getElementById('Switch_Port_Forwarding').disabled = boolValue;
		document.getElementById('Switch_Port_Triggering').checked = boolValue;						//Switch_Port_Triggering
		document.getElementById('Switch_Port_Triggering').disabled = boolValue;
		document.getElementById('Switch_NAT').checked = boolValue;												//Switch_NAT
		document.getElementById('Switch_NAT').disabled = boolValue;
		document.getElementById('Switch_Web_Filtering').checked = boolValue;							//Switch_Web_Filtering
		document.getElementById('Switch_Web_Filtering').disabled = boolValue;
}

function runAllorNot(theselect) {
    var boolValue = !!parseInt(getDropedBoxId('run_all_or_not'));											//True(1):run_all //False(0):run_selected 
  
		document.getElementById('Switch_Remote_Upgrade').checked = boolValue;							//Switch_Remote_Upgrade
		document.getElementById('Switch_SNMP_sysDescr').checked = boolValue;							//Switch_SNMP_sysDescr
		document.getElementById('Switch_Ver_Console_Check').checked = boolValue;					//Switch_Ver_Console_Check
		document.getElementById('Switch_Ver_Web_Check').checked = boolValue;							//Switch_Ver_Web_Check
		document.getElementById('Switch_Reboot_Web_Check').checked = boolValue;						//Switch_Reboot_Web_Check
		document.getElementById('Switch_Power_Lose_DUT').checked = boolValue;							//Switch_Power_Lose_DUT
		document.getElementById('Switch_Default_Web_Check').checked = boolValue;					//Switch_Default_Web_Check
		document.getElementById('Switch_BPI_Test').checked = boolValue;										//Switch_BPI_Test
		document.getElementById('Switch_RF_Lock_MIB').checked = boolValue;								//Switch_RF_Lock_MIB
		document.getElementById('Switch_Wireless_Test').checked = boolValue;							//Switch_Wireless_Test
		document.getElementById('Switch_SNMP_Agent_CM').checked = boolValue;							//Switch_SNMP_Agent_CM
		document.getElementById('Switch_Web_Surf_GUI').checked = boolValue;								//Switch_Web_Surf_GUI
		document.getElementById('Switch_SortSite').checked = boolValue;										//Switch_SortSite
		document.getElementById('Switch_Router_Function').selectedIndex  = (getDropedBoxId('run_all_or_not')); //Switch_Router_Function
		runAllGWorNot();
		
		document.getElementById('Switch_Primary_SSID').checked = boolValue;								//Switch_Primary_SSID
		document.getElementById('Switch_WPS_PIN').checked = boolValue;										//Switch_WPS_PIN
		document.getElementById('Switch_WPS_PBC').checked = boolValue;										//Switch_WPS_PBC
		document.getElementById('Switch_CDRouter_Quick').checked = boolValue;							//Switch_CDRouter_Quick
}

function checkUserInput(){

	//Remote Upgrade/Downgrade
	if(document.getElementById('Switch_Remote_Upgrade').checked){
		if(document.getElementById('Backdoor_Previous_Bootloader').value == '' || 
		document.getElementById('Backdoor_Previous_Image_File').value == '' ||
		document.getElementById('Backdoor_Current_Image_File').value == '' ||
		document.getElementById('Source_Previous_Image_Path').value == '' || 
		document.getElementById('Source_Current_Image_Path').value =='')
		{
			alert("Backdoor and SW Settings can NOT be empty! ");
		} else {
			createFile();
		}
	} else if (document.getElementById('q1_chipsetCompany').value == 'Please Select') {
		alert("ChipSet Comany cannot be empty! ");

	} else {createFile();}

}



function createFile() {    
		//*Creat Now_Test_Model.txt*//
 		var object1 = new ActiveXObject("Scripting.FileSystemObject");
		var fs1 = object1.CreateTextFile("C:\\Now_Test_Model.txt", true); 		
		
		fs1.WriteLine('DUT_Chip_Type=>'+getDropedBoxId('q1_chipsetCompany'));					//DUT_Chip_Type
    	fs1.WriteLine('DUT_Company=>'+getDropedBoxId('q2_customer'));									//DUT_Company
    	fs1.WriteLine('DUT_Model=>'+getDropedBoxId('q3_model'));											//DUT_Model
   	 	fs1.Close();
		
		//*Creat User_Defined.txt*//
		var object2 = new ActiveXObject("Scripting.FileSystemObject");
		var fs2 = object2.CreateTextFile("C:\\User_Defined.txt", true);
    
    	fs2.WriteLine('Source_Previous_Image_Path=>'+document.getElementById('Source_Previous_Image_Path').value);								//Source_Previous_Image_Path
    	fs2.WriteLine('Source_Current_Image_Path=>'+document.getElementById('Source_Current_Image_Path').value);								//Source_Current_Image_Path

    	fs2.WriteLine('Backdoor_Previous_Bootloader=>'+document.getElementById('Backdoor_Previous_Bootloader').value);							//Backdoor_Previous_Bootloader
    	fs2.WriteLine('Backdoor_Previous_Image_File=>'+document.getElementById('Backdoor_Previous_Image_File').value);							//Backdoor_Previous_Image_File
    	fs2.WriteLine('Backdoor_Previous_Linux_Kernel=>'+document.getElementById('Backdoor_Previous_Linux_Kernel').value);						//Backdoor_Previous_Linux_Kernel
    	fs2.WriteLine('Backdoor_Previous_Linux_FS_File=>'+document.getElementById('Backdoor_Previous_Linux_FS_File').value);					//Backdoor_Previous_Linux_FS_File
      	fs2.WriteLine('Backdoor_Previous_Wireless_Driver=>'+document.getElementById('Backdoor_Previous_Wireless_Driver').value);				//Backdoor_Previous_Wireless_Driver
    	
		fs2.WriteLine('Backdoor_Current_Bootloader=>'+document.getElementById('Backdoor_Current_Bootloader').value);
    	fs2.WriteLine('Backdoor_Current_Image_File=>'+document.getElementById('Backdoor_Current_Image_File').value);
    	fs2.WriteLine('Backdoor_Current_Linux_Kernel=>'+document.getElementById('Backdoor_Current_Linux_Kernel').value);
    	fs2.WriteLine('Backdoor_Current_Linux_FS_File=>'+document.getElementById('Backdoor_Current_Linux_FS_File').value);
      	fs2.WriteLine('Backdoor_Current_Wireless_Driver=>'+document.getElementById('Backdoor_Current_Wireless_Driver').value);
    	
    	fs2.WriteLine('DUT_Version=>'+document.getElementById('q4_swVersion').value);															//DUT_Version

    	fs2.WriteLine('CMTS_Frequency=>'+getDropedBoxId('q7_lockedFrequency'));																	//CMTS_Frequency
    	fs2.WriteLine('CMTS_Other_Frequency=>'+getDropedBoxId('q8_secondaryLocked'));															//CMTS_Other_Frequency
    	fs2.WriteLine('Tester_User_email=>'+getDropedBoxId('q9_testername'));																	//Tester_User_email
    	fs2.WriteLine('Email_Test_Report=>'+Number(document.getElementById('Email_Test_Report').checked));										//Email_Test_Report
    	fs2.Close();
    
    	//*Creat Switch_Test_List.txt*//
    	var object3 = new ActiveXObject("Scripting.FileSystemObject");
		var fs3 = object3.CreateTextFile("C:\\Switch_Test_List.txt", true);
		
		fs3.WriteLine('Switch_Remote_Upgrade=>'+Number(document.getElementById('Switch_Remote_Upgrade').checked));							//Switch_Remote_Upgrade
		fs3.WriteLine('Switch_SNMP_sysDescr=>'+Number(document.getElementById('Switch_SNMP_sysDescr').checked));							//Switch_SNMP_sysDescr
		fs3.WriteLine('Switch_Ver_Console_Check=>'+Number(document.getElementById('Switch_Ver_Console_Check').checked));					//Switch_Ver_Console_Check
		fs3.WriteLine('Switch_Ver_Web_Check=>'+Number(document.getElementById('Switch_Ver_Web_Check').checked));							//Switch_Ver_Web_Check
		fs3.WriteLine('Switch_Reboot_Web=>'+Number(document.getElementById('Switch_Reboot_Web_Check').checked));							//Switch_Reboot_Web
		fs3.WriteLine('Switch_Power_Lose_DUT=>'+Number(document.getElementById('Switch_Power_Lose_DUT').checked));							//Switch_Power_Lose_DUT
		fs3.WriteLine('Switch_Default_Web=>'+Number(document.getElementById('Switch_Default_Web_Check').checked));							//Switch_Default_Web
		fs3.WriteLine('Switch_BPI_Test=>'+Number(document.getElementById('Switch_BPI_Test').checked));										//Switch_BPI_Test
		fs3.WriteLine('Switch_RF_Lock_MIB=>'+Number(document.getElementById('Switch_RF_Lock_MIB').checked));								//Switch_RF_Lock_MIB
		fs3.WriteLine('Switch_Wireless_Test=>'+Number(document.getElementById('Switch_Wireless_Test').checked));							//Switch_Wireless_Test
		fs3.WriteLine('Switch_SNMP_Agent_CM=>'+Number(document.getElementById('Switch_SNMP_Agent_CM').checked));							//Switch_SNMP_Agent_CM
		fs3.WriteLine('Switch_Web_Surf_GUI=>'+Number(document.getElementById('Switch_Web_Surf_GUI').checked));								//Switch_Web_Surf_GUI
		fs3.WriteLine('Switch_SortSite=>'+Number(document.getElementById('Switch_SortSite').checked));										//Switch_SortSite
		fs3.WriteLine('Switch_Router_Function=>'+getDropedBoxId('Switch_Router_Function'));													//Switch_Router_Function
		fs3.WriteLine('Switch_DHCP_on_LAN=>'+Number(document.getElementById('Switch_DHCP_on_LAN').checked));								//Switch_DHCP_on_LAN
		fs3.WriteLine('Switch_DMZ=>'+Number(document.getElementById('Switch_DMZ').checked));												//Switch_DMZ
		fs3.WriteLine('Switch_MAC_Filtering=>'+Number(document.getElementById('Switch_MAC_Filtering').checked));							//Switch_MAC_Filtering
		fs3.WriteLine('Switch_IP_Filtering=>'+Number(document.getElementById('Switch_IP_Filtering').checked));								//Switch_IP_Filtering
		fs3.WriteLine('Switch_Port_Filtering=>'+Number(document.getElementById('Switch_Port_Filtering').checked));							//Switch_Port_Filtering
		fs3.WriteLine('Switch_Port_Forwarding=>'+Number(document.getElementById('Switch_Port_Forwarding').checked));						//Switch_Port_Forwarding
		fs3.WriteLine('Switch_Port_Triggering=>'+Number(document.getElementById('Switch_Port_Triggering').checked));						//Switch_Port_Triggering
		fs3.WriteLine('Switch_NAT=>'+Number(document.getElementById('Switch_NAT').checked));												//Switch_NAT
		fs3.WriteLine('Switch_Web_Filtering=>'+Number(document.getElementById('Switch_Web_Filtering').checked));							//Switch_Web_Filtering
		fs3.WriteLine('Switch_Primary_SSID=>'+Number(document.getElementById('Switch_Primary_SSID').checked));								//Switch_Primary_SSID
		fs3.WriteLine('Switch_WPS_PIN=>'+Number(document.getElementById('Switch_WPS_PIN').checked));										//Switch_WPS_PIN
		fs3.WriteLine('Switch_WPS_PBC=>'+Number(document.getElementById('Switch_WPS_PBC').checked));										//Switch_WPS_PBC
		fs3.WriteLine('Switch_CDRouter_Quick=>'+Number(document.getElementById('Switch_CDRouter_Quick').checked));							//Switch_CDRouter_Quick 
    	fs3.Close();

		window.open('','_self','');      //close Window w/o message
		window.close();
}


