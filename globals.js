/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C802FF8D-776A-4505-810B-82422BE2EF0D"}
 */
var _codZERO = '0';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"214014E1-B9F8-41B9-B9C2-FAE303CC2EFA",variableType:4}
 */
var _iddipsel = -1;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"06240276-A8F5-439A-B057-52865DFED8DC",variableType:4}
 */
var _idlavoratore = -1;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F1F741D1-2864-4AF7-A008-EAB86FF2C610",variableType:8}
 */
var _lastidditta = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D33634FB-DC78-41E0-801F-6BBF6F3F7D8A",variableType:4}
 */
var _prevDittaDipendente = 0;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"233904C5-C620-4846-BD1E-B305020D56C6",variableType:93}
 */
var _TODAY = new Date();

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0E850FF1-30FC-4E55-882A-FFD4DFAE12C6"}
 */
var codALTRO = 'A';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6C024608-37C1-4E5D-BD00-898CD0370973"}
 */
var codASPP = 'AS';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5E758AA5-C259-460E-9FE0-1BA37A54CD33"}
 */
var codATECO = 'ATE';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"362001EC-37EB-4D1E-B861-CC6D023F91E7"}
 */
var codCELL = 'C';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"08043705-A175-4F74-B797-D3F6D79398D4"}
 */
var codCLASSIFICAZIONI_RAGGRCONT = '99';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4E064FCD-34A3-468F-954D-94D7338373E1"}
 */
var codCLASSIFICAZIONI_SEDE = '0';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6D516BEF-B2EE-4E99-947F-8FD9770C7CA5"}
 */
var codDITTA = 'DIT';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"87A6B21E-6A14-4FCB-A3AB-08B9723A0631"}
 */
var codDLGS81 = 'DI';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1FE754FE-1933-40D2-B576-DA0FEEB517C2"}
 */
var codELEMENTI = 'ER';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F8DCF3C6-EE82-4DF7-BD2A-8498421C0FD5"}
 */
var codEMAIL = 'M';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1A470DF4-6C66-4D06-8C90-8B1EFA4393A5"}
 */
var codEVENTI = 'EV';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8AF25FC6-DDFF-4A00-B98D-36AE868B9480"}
 */
var codFAX = 'F';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6C9AA9FB-0805-4436-BC90-BF9090EB54A8"}
 */
var codINCENDIO = 'INC';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"06626C32-11EA-4886-95DE-9A6A1C05DB49"}
 */
var codMEDICODIFABBRICA = 'MF';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8A350CBA-2DF7-4E76-82B0-AC6551C920B3"}
 */
var codPEC = 'P';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9D888FBC-9F5A-4986-B7C9-72499B45CC4C"}
 */
var codPOSINAIL = '12';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EC1385D8-50DA-4ED5-BB01-BE0D5A68BD0D"}
 */
var codRLS = 'RL';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"82181A07-4AF1-4537-8B52-09A8DA708FE7"}
 */
var codRP = 'RP';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D75E2E34-EFF3-4C99-A462-14B04098A73F"}
 */
var codRSPP = 'RS';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"49F34A9A-67B6-4F83-966C-7047F577509B"}
 */
var codVOCI = 'VV';

/**
 * @properties={typeid:24,uuid:"D050B9FD-4050-4088-BB56-F0F2B1AD840F"}
 * 
 * @param {Number} _idLav
 * @param {String} _codTipoCampo
 */
function _getTipoCampoLavHistory(_idLav, _codTipoCampo) {
	var _masterSql = "SELECT master.* FROM [dbo].[HRF_TipoCampoLavHist](?,?) as master"
	var	_orderSql = "ORDER BY master.Decorrenza DESC"
			
	var _sql = _masterSql + " " + _orderSql
	var _ds = databaseManager.getDataSetByQuery(globals.Server.MA_HR, _sql, [_idLav, _codTipoCampo], 1000)
	if(_ds.getMaxRowIndex() > 0)
	{
		_sql = "SELECT master.*, child1.Valore, child2.Valore, child3.Valore FROM [dbo].[HRF_TipoCampoLavHist](?,?) as master"
		_sql += " LEFT OUTER JOIN [dbo].[HRF_TipoCampoLavAl](?,?,?) as child1"
		_sql += " ON master.idLavoratore = child1.idLavoratore"
		_sql += " LEFT OUTER JOIN [dbo].[HRF_TipoCampoLavAl](?,?,?) as child2"
		_sql += " ON master.idLavoratore = child2.idLavoratore"
		_sql += " LEFT OUTER JOIN [dbo].[HRF_TipoCampoLavAl](?,?,?) as child3"
		_sql += " ON master.idLavoratore = child3.idLavoratore"
		_sql += _orderSql
		
		var _altriCampiFoundset = databaseManager.getFoundSet(globals.Server.MA_HR, 'TabTipiCampo')
		_altriCampiFoundset.addFoundSetFilterParam('codice','<>',_codTipoCampo)
		
		/** @type {Date} */
		var _decorrenza = _ds.getValue(1,3)
		
		if(_altriCampiFoundset.loadAllRecords())
		{
			var _params = [_idLav, _codTipoCampo,
						   _idLav, _altriCampiFoundset.getRecord(1)['codice'], _decorrenza,
						   _idLav, _altriCampiFoundset.getRecord(2)['codice'], _decorrenza,
						   _idLav, _altriCampiFoundset.getRecord(3)['codice'], _decorrenza]
			
			return databaseManager.getDataSetByQuery(globals.Server.MA_HR, _sql, _params, 1000)
		}
		
		return null
	}
	
	return null
}

/**
 * @AllowToRunInFind
 * 
 * @param {String} tipologia
 * @param {String} form
 * 
 * @return {String} the name of the prepared form to use
 *
 * @properties={typeid:24,uuid:"4ED0C3E0-516B-4DAE-860C-E77C4D7315C1"}
 */
function preparaElementiRiclassificazione(tipologia, form)
{
	if(!tipologia)
		throw 'Nessuna riclassificazione trovata per la sezione selezionata';
	
	var dataSource = globals.ma_utl_getDataSource(globals.Server.MA_HR, 'hrv_elementi');
	
	/**
	 * Crea la relazione corretta per la tipologia considerata
	 */
	var relName = 'elementiriclassificazioni_to_hrv_elementi';
	var relation = solutionModel.getRelation(relName);
	if(!relation)
	{
		relation = solutionModel.newRelation(relName, forms[form].foundset.getDataSource(), dataSource, JSRelation.LEFT_OUTER_JOIN);
		relation.newRelationItem('idtabella', '=', 'idtabella');
		relation.newRelationItem('tipologia', '=', 'tipologia');
	}
	
	var cloneForm = form + '_clone';
	var jsForm = solutionModel.getForm(cloneForm);
	if(!jsForm)
	{
		jsForm = solutionModel.cloneForm(cloneForm, solutionModel.getForm(form));
		
		jsForm.getField(forms[form].elements['fld_codice'].getName()).dataProviderID = relation.name + '.codice';
		jsForm.getField(forms[form].elements['fld_contratto'].getName()).dataProviderID = relation.name + '.codcontratto';
		jsForm.getField(forms[form].elements['fld_descrizione'].getName()).dataProviderID = relation.name + '.descrizione';
		jsForm.getField(forms[form].elements['fld_proprieta'].getName()).dataProviderID = relation.name + '.proprieta';
		jsForm.getField(forms[form].elements['fld_descproprieta'].getName()).dataProviderID = relation.name + '.descproprieta';
	}
	
	return cloneForm;
}

/**
 * @AllowToRunInFind
 * 
 * // TODO generated, please specify type and doc for the params
 * @param {JSRecord} record
 * 
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"ACBC21CB-72F7-4957-959E-B76CA0979FA7"}
 */
function validatePosInail(record) {
	var not_valid = false
	
	var _fs = record.foundset.duplicateFoundSet()//databaseManager.getFoundSet(globals.Server.MA_HR, 'ditteinailposizioni')
	_fs.loadAllRecords()
	if(_fs.find())
	{
		_fs['iddittainailposizione'] = '!=' + record['iddittainailposizione']
		_fs['idditta'] = record['idditta']
		_fs['posizioneinail'] = '^||=' + record['posizioneinail']
		not_valid = _fs.search(true) > 0
	}
	// throw exception to pass info to handler, will be returned in record.exception.getValue() when record.exception is a DataException
	if (not_valid) throw 'La posizione inserita è già presente per questa ditta'

	// return boolean to indicate success
	return true
}

/**
 * @AllowToRunInFind
 * 
 * // TODO generated, please specify type and doc for the params
 * @param {JSRecord} record
 * 
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"E20FFDD3-C099-414E-95CB-6211120AE766"}
 */
function validateSedeTurno(record) {
	var not_valid = false
	
	var _fs = record.foundset.duplicateFoundSet()//databaseManager.getFoundSet(globals.Server.MA_HR, 'SediTurni')
	_fs.loadAllRecords()
	if(_fs.find())
	{
		_fs['idsedeturno'] = '!=' + record['idsedeturno']
		_fs['iddittaturno'] = record['iddittaturno']
		_fs['iddittasede'] = record['iddittasede']
		not_valid = _fs.search(true) > 0
	}
	// throw exception to pass info to handler, will be returned in record.exception.getValue() when record.exception is a DataException
	if (not_valid) throw 'Il turno selezionato è già stato assegnato a questa sede'

	// return boolean to indicate success
	return true
}

/**
 * @AllowToRunInFind
 * 
 * // TODO generated, please specify type and doc for the params
 * @param {JSRecord<db:/ma_anagrafiche/ditte_turni>} record
 * 
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"0FEB028C-5DEE-4552-9470-38AE889EF21F"}
 */
function validateDittaTurno(record) {
	var not_valid = false;
	
	var fs = record.foundset.duplicateFoundSet();//databaseManager.getFoundSet(globals.Server.MA_HR, 'DitteTurni')
	if(fs.find())
	{
		fs.iddittaturno = '!=' + record.iddittaturno;
		fs.idditta = record.idditta;
		fs.codice = record.codice;
		not_valid = fs.search(true) > 0;
	}

	if (not_valid) throw 'Il turno inserito è già presente';

	// return boolean to indicate success
	return true;
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {JSRecord} record
 * 
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"579FE1B2-B48B-4CAF-978E-F016764D8E2A"}
 * @AllowToRunInFind
 */
function validateSedeCodice(record)
{
//	var _regex = /[A-Z]{1,2}/
//	var _match = String(record['codice']).match(_regex)
//	if(!_match || _match.length == 0)
//		throw 'Codice: è possibile inserire solo caratteri alfabetici maiuscoli'
		
	var _fs = record.foundset.duplicateFoundSet()//databaseManager.getFoundSet(record.getDataSource())
	if(_fs.find())
	{
		_fs['iddittasede'] = '!=' + record['iddittasede']
		_fs['idditta'] = record['idditta']
		_fs['codice'] = record['codice']
		if(_fs.search(true) > 0)
			throw 'Il codice inserito è già presente'
	}
		
	return true
}

/**
 * @param {JSRecord<db:/ma_hr/dittescopiriclassificazioni>} record
 *
 * @properties={typeid:24,uuid:"BFE8AC85-B8C6-4D86-8A36-C1DC00E78EAB"}
 * @AllowToRunInFind
 */
function validateScopoRiclassificazione(record)
{
	/** @type {JSFoundSet<db:/ma_hr/dittescopiriclassificazioni>} */
	var fs = databaseManager.getFoundSet(record.getDataSource())
	if(fs.find())
	{
		fs.iddittascoporiclassificazione = '!=' + record.iddittascoporiclassificazione
		fs.idscopo = record.idscopo;
		fs.idditta = record.idditta;
		fs.codice = record.codice;
		fs.idtipologiaelemento = record.idtipologiaelemento;
		if(fs.search(true) > 0)
			throw 'Il codice inserito è già presente per la tipologia selezionata'
	}
	
	if(fs.find())
	{
		fs['iddittascoporiclassificazione'] = '!=' + record['iddittascoporiclassificazione']
		fs['idscopo'] = record['idscopo']
		fs['idditta'] = record['idditta']
		fs['ordine'] = record['ordine']
		fs['idtipologiaelemento'] = record['idtipologiaelemento']
		if(fs.search(true) > 0)
			throw 'L\'ordine inserito è già presente per la tipologia selezionata'
	}
		
	return true
}

/**
 * @param {JSRecord<db:/ma_hr/dittesezioniriclassificazioni>} record
 * 
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"6C26A906-03D6-4EC0-BA99-D79912FEB210"}
 * @AllowToRunInFind
 */
function validateSezioneRiclassificazione(record)
{
	var fs = record.foundset.duplicateFoundSet();
	
	/**
	 * Controlla la presenza di eventuali codici duplicati
	 */
	if(fs && fs.find())
	{
		fs.iddittasezionericlassificazione = '!=' + record.iddittasezionericlassificazione;
		fs.iddittascoporiclassificazione = record.iddittascoporiclassificazione;
		fs.codice = record.codice;
		
		if(fs.search(true) > 0)
			throw 'Il codice inserito è già presente per la sezione corrente';
	}
		
	/**
	 * Controlla la presenza di eventuali ordini duplicati
	 */
	if(fs && fs.find())
	{
		fs.iddittasezionericlassificazione = '!=' + record.iddittasezionericlassificazione;
		fs.iddittascoporiclassificazione = record.iddittascoporiclassificazione;
		fs.ordine = record.ordine;
		
		if(fs.search(true) > 0)
			throw 'L\'ordine inserito è già presente per la sezione corrente';
	}
		
	return true;
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {JSRecord} record
 * 
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"4B15A9CA-61CC-4DC2-BCBE-DD2A4CBEEE05"}
 * @AllowToRunInFind
 */
function validateElementoRiclassificazione(record)
{
//	var _regex = /[A-Z]{1,2}/
//	var _match = String(record['codice']).match(_regex)
//	if(!_match || _match.length == 0)
//		throw 'Codice: è possibile inserire solo caratteri alfabetici maiuscoli'
		
	var _fs = record.foundset.duplicateFoundSet()//databaseManager.getFoundSet(record.getDataSource())
	if(_fs.find())
	{
		_fs['iddittaelementoriclassificazione'] = '!=' + record['iddittaelementoriclassificazione']
		_fs['iddittasezionericlassificazione'] = '=' + record['iddittasezionericlassificazione']
		_fs['idtabella'] = record['idtabella']
		if(_fs.search(true) > 0)
			throw 'L\'elemento selezionato è già stato riclassificato'
	}
		
	return true
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {JSRecord} record
 * 
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"74DBB256-A894-4E4A-835C-4EB433C5A2BD"}
 * @AllowToRunInFind
 */
function validateCodice(record)
{
//	var _regex = /[A-Z]{1,2}/
//	var _match = String(record['codice']).match(_regex)
//	if(!_match || _match.length == 0)
//		throw 'Codice: è possibile inserire solo caratteri alfabetici maiuscoli'
		
	var _fs = record.foundset.duplicateFoundSet()//databaseManager.getFoundSet(record.getDataSource())
	if(_fs.find())
	{
		var _pkName = databaseManager.getTable(_fs.getDataSource()).getRowIdentifierColumnNames()[0]
		_fs[_pkName] = '!=' + record[_pkName]
		_fs['codice'] = record['codice']
		if(_fs.search(true) > 0)
			throw 'Il codice inserito è già presente'
	}
		
	return true
}

/**
 * @param {JSRecord} record
 *
 * @properties={typeid:24,uuid:"FBE9A235-BFCD-4BE8-A306-79B332270EF7"}
 * @AllowToRunInFind
 */
function validateRecapito(record)
{
	var _fs = record.foundset.duplicateFoundSet()//databaseManager.getFoundSet(record.getDataSource())
	if(_fs.find())
	{
		_fs['idpersonarecapito'] = '!=' + record['idpersonarecapito']
		_fs['idpersona'] = record['idpersona']
		_fs['codtiporesidenza'] = record['codtiporesidenza']
		_fs['codtiporecapito'] = record['codtiporecapito']
		_fs['datadecorrenza'] = record['datadecorrenza']
		if(_fs.search(true) > 0)
			throw 'È già presente un recapito del tipo inserito per la data di decorrenza specificata'
	}
		
	return true
}

/**
 * @AllowToRunInFind
 * 
 * // TODO generated, please specify type and doc for the params
 * @param {JSRecord} record
 *
 * @properties={typeid:24,uuid:"9ABF1864-3AF9-4D06-848B-41EDEA664F77"}
 */
function validateCodiceINAIL(record)
{
//	var _regex = /[A-Z]{1,2}/
//	var _match = String(record['codice']).match(_regex)
//	if(!_match || _match.length == 0)
//		throw 'Codice: è possibile inserire solo caratteri alfabetici maiuscoli'
		
	var _fs = record.foundset.duplicateFoundSet()//databaseManager.getFoundSet(record.getDataSource())
	if(_fs.find())
	{
		_fs['iddittainailposizione'] = '!=' + record['iddittainailposizione']
		_fs['idditta'] = record['idditta']
		_fs['posizioneinail'] = record['posizioneinail']
		if(_fs.search(true) > 0)
			throw 'La posizione inserita è già presente'
	}
		
	return true
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} record
 *
 * @properties={typeid:24,uuid:"48EAECE9-7B71-4EF6-89B2-9D1028F5FC36"}
 */
function validatePosinail(record)
{
	var _regex = /[A-Z]{2}/
	var _match = String(record['posizioneinail']).match(_regex)
	if(!_match || _match.length == 0)
		throw 'Posizione: è possibile inserire solo caratteri alfabetici maiuscoli'
		
	return true
}

/**
 * // TODO la PAT è univoca, ma in teoria non posso raggiungerla...da rivedere
 * @param {JSRecord} record
 * 
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"25D8E937-3861-4F28-804D-CF1BECDACD71"}
 * @AllowToRunInFind
 */
function validateVoceTariffa(record)
{
	var not_valid = false
	
	var _fs = record.foundset.duplicateFoundSet()//databaseManager.getFoundSet(globals.Server.MA_HR, 'ditteinailvocitariffa')
	_fs.loadAllRecords()
	if(_fs.find())
	{
		_fs['ditteinailvocitariffa_to_ditteinailposizioni.ditteinailvocitariffa_to_ditteinailposizioni._to_ditte.idditta'] = '!=' + record.foundset['ditteinailvocitariffa_to_ditteinailposizioni.ditteinailvocitariffa_to_ditteinailposizioni._to_ditte.idditta']
		_fs['iddittainailposizione'] = record['iddittainailposizione']
		_fs['idinailvocitariffa'] = record['idinailvocitariffa']

		not_valid = _fs.search(true) > 0
	}
	// throw exception to pass info to handler, will be returned in record.exception.getValue() when record.exception is a DataException
	if (not_valid) throw 'La voce tariffa inserita è già presente'

	// return boolean to indicate success
	return true
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {JSRecord} record
 * @param {String} relation
 *
 * @properties={typeid:24,uuid:"FB3ADD53-1244-4C89-A764-DACC7F407885"}
 * @AllowToRunInFind
 */
function validateDataDecorrenza(record, relation)
{
	var _emplRecord = null
	// TODO come recupero il dipendente corretto? Per ora piglio l'id lavoratore dal top form, ma è una soluzione del cazzo...
	/** @type{JSFoundset} */
	var _lavoratoriFs = record.foundset[relation]
	if(_lavoratoriFs.find())
	{
		_lavoratoriFs['idlavoratore'] = forms[globals.nav.form_view_01].foundset['idlavoratore']
		_emplRecord = _lavoratoriFs.search(true) > 0 ? _lavoratoriFs.getSelectedRecord() : null
	}
	
	if(
			_emplRecord && record['datadecorrenza'] &&
				(_emplRecord['assunzione'] && record['datadecorrenza'] < _emplRecord['assunzione']) ||
				(_emplRecord['cessazione'] && record['datadecorrenza'] > _emplRecord['cessazione'])
		)
	{
		throw 'La data di decorrenza deve essere compresa tra il '
	//		+ utils.dateFormat(_emplRecord['assunzione'], globals.EU_DATEFORMAT) + ' (assunzione) e il '
	//		+ utils.dateFormat(_emplRecord['cessazione'], globals.EU_DATEFORMAT) + ' (cessazione)'
			+ utils.dateFormat(_emplRecord['assunzione'], globals.EU_DATEFORMAT) + ' e il '
			+ utils.dateFormat(_emplRecord['cessazione'], globals.EU_DATEFORMAT)
	}
		
	return true
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {JSRecord} record
 *
 * @properties={typeid:24,uuid:"C4A08284-62D5-4E7F-983A-41759694B602"}
 * @AllowToRunInFind
 */
function validateCittadinanza(record)
{
	return validateDataDecorrenza(record,'personecittadinanza_to_lavoratori')
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {JSRecord} record
 *
 * @properties={typeid:24,uuid:"5051AEA5-1FAF-47ED-8E9C-FAFD3275B8FD"}
 * @AllowToRunInFind
 */
function validateIndirizzo(record)
{
	return validateDataDecorrenza(record,'personedomicili_to_lavoratori')
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {JSRecord} record
 * @param {String} [_dateToValidate]
 * @param {String} [_exMessage]
 *
 * @properties={typeid:24,uuid:"46788B10-546C-421F-893C-5F4BBC80936E"}
 */
function validateDateActive(record, _dateToValidate, _exMessage)
{
	if(!_dateToValidate)
		_dateToValidate = 'datacessazione'
			
	if(!_exMessage)
		_exMessage = 'Data cessazione'

	if(record[_dateToValidate] && record[_dateToValidate] < globals._TODAY)
	{
		throw 'Il campo ' + _exMessage + ' deve essere posteriore la data odierna'
	}
		
	return true
}

/**
 * 
 * @param {JSRecord} record
 *
 * @properties={typeid:24,uuid:"4E8F970F-6C64-4B67-9098-1C304D59CC1A"}
 */
function validateDataNomina(record)
{	
	var _fs = record.foundset['lavoratoriprivacy_to_lavoratori'].duplicateFoundSet()//databaseManager.getFoundSet(record.getDataSource())
	if(record['inizionomina'] && record['inizionomina'] < _fs['assunzione'])
		throw 'La data di nomina non può precedere l\'assunzione'
		
	return true
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {JSRecord} record
 * 
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"6B41E4B5-9D2B-4743-82BC-1A6F3EB0E761"}
 * @AllowToRunInFind
 */
function validateStatoMilitare(record)
{		
	var _fs = record.foundset.duplicateFoundSet()//databaseManager.getFoundSet(record.getDataSource())
	if(_fs['statomilitare_dal'] >= _fs['statomilitare_al'])
		throw 'Il campo \'Alla data\' deve essere posteriore al campo \'Dalla data\''
		
	return true
}

/**
 * @properties={typeid:24,uuid:"26C5983C-6DBD-4B33-BAC9-7821D492838C"}
 * 
 * @param {Number} _idLavoratore
 * @param {Date} _allaData
 * 
 * @return {JSDataSet}
 */
function _getElementiRetributivi(_idLavoratore, _allaData) {
	var _sql = "SELECT * FROM [dbo].[HRF_RetribuzioneLavAl](?,?)"
		_sql += " ORDER BY Valore DESC, Decorrenza DESC"
		
	var _ds = databaseManager.getDataSetByQuery(globals.Server.MA_HR, _sql, [_idLavoratore, utils.dateFormat(_allaData, globals.ISO_DATEFORMAT)], 1000)
	if(_ds.getMaxRowIndex() > 0)
	{
		return _ds
	}
	
	return null
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Number} _idLavoratore
 * @param {Date} _allaData
 * 
 * @return {String}
 *
 * @properties={typeid:24,uuid:"A3EA670B-834C-4742-A067-AF2F025D2982"}
 */
function _getElementiRetributiviDataSource(_idLavoratore, _allaData)
{
	var _sql = "SELECT * FROM [dbo].[HRF_RetribuzioneLavAl](?,?)"
	_sql += "ORDER BY Valore DESC, Decorrenza DESC"
	
	var _ds = databaseManager.createDataSourceByQuery('elementi_retributivi', globals.Server.MA_HR, _sql, [_idLavoratore, utils.dateFormat(_allaData, globals.ISO_DATEFORMAT)], 1000)
	return _ds ? _ds : null
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {JSRecord} _rec
 * 
 * @return {String} the data source to use
 *
 * @properties={typeid:24,uuid:"AD2DBE8E-9D06-408F-BCC0-EE3F3B96DADC"}
 * @AllowToRunInFind
 */
function getStoricoElementiRetributivi(_rec) {
	var _sql = null
	var _ds = null
	
	if(_rec['codiceaggiuntivo'] == 'Dipendente')
	{
		_sql = "SELECT * FROM [dbo].[HRF_StoricoElementiADipendente](?,?,?,?) \
				ORDER BY Decorrenza DESC";
		
		_ds = databaseManager.getDataSetByQuery(globals.getSwitchedServer(globals.Server.MA_HR), _sql, [_rec['idlavoratore'], _rec['codcontratto'], _rec['codice'], utils.dateFormat(_rec['decorrenza'],globals.ISO_DATEFORMAT)], -1)
	}
	else if(_rec['codiceaggiuntivo'] == 'Contratto')
	{
		_sql = "SELECT * FROM [dbo].[HRF_StoricoElementiAContratto](?,?,?)\
			    ORDER BY Decorrenza DESC";

		_ds = databaseManager.getDataSetByQuery(globals.getSwitchedServer(globals.Server.MA_HR), _sql, [ _rec['idlavoratore'], _rec['codice'], utils.dateFormat(_rec['decorrenza'],globals.ISO_DATEFORMAT)], -1)
	}

	if(_ds.getMaxRowIndex() > 0)
	{
		return _ds.createDataSource(
			'storico_elemento'
			,[
				 JSColumn.TEXT		/* Descrizione */
				,JSColumn.DATETIME	/* Decorrenza */
				,JSColumn.NUMBER	/* Importo */
				,JSColumn.TEXT		/* Valuta */
			 ]
		);
	}
	
	return null
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {JSRecord} _rec
 *
 * @properties={typeid:24,uuid:"629EA7D0-5D2A-4DCC-B4DD-B66485CE008D"}
 */
function getStoricoVoci(_rec) {
	var _sql = null
	var _ds = null
	
	_sql = "SELECT * FROM [dbo].[HRF_StoricoVoci](?,?,?,?)"
	_sql += " ORDER BY Decorrenza DESC"
	
	_ds = databaseManager.getDataSetByQuery(globals.getSwitchedServer(globals.Server.MA_HR), _sql, [_rec['idlavoratore'], _rec['codice'], _rec['descrizione'], utils.dateFormat(_rec['decorrenza'],globals.ISO_DATEFORMAT)], -1)
	
	if(_ds.getMaxRowIndex() > 0)
	{
		return _ds.createDataSource(
		'storico_elemento'
		,[
			 JSColumn.DATETIME		// Decorrenza
			,JSColumn.NUMBER		// Importo
			,JSColumn.TEXT			// Descrizione
			,JSColumn.TEXT			// Valuta
		 ])
	}
	
	return null
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Number} _idLavoratore
 * @param {Date} _allaData
 * @param {String} _codScopo
 * 
 * @return {JSDataSet}
 *
 * @properties={typeid:24,uuid:"18BB8376-7414-4D39-844F-9AFFD724D917"}
 */
function _getAltriElementiRetributivi(_idLavoratore, _allaData, _codScopo) {
	var _sql = "SELECT * FROM [dbo].[HRF_VociCedolini](?,?,?)"
		_sql += "ORDER BY Importo DESC"
		
	var _ds = databaseManager.getDataSetByQuery(globals.Server.MA_HR, _sql, [_idLavoratore, (_allaData.getFullYear() * 100) + (_allaData.getMonth() + 1), _codScopo], 1000)
	if(_ds.getMaxRowIndex() > 0)
	{
		return _ds
	}
	
	return null
}

/**
 * @properties={typeid:24,uuid:"7B02E53C-1AD8-4B20-8618-0DDA455020C6"}
 * 
 * @param {Number} _idLavoratore
 * @param {String} [_nullSymbol]
 * 
 * @return {String} the data source
 */
function _getStoricoTipoCampoLavDataSource(_idLavoratore, _nullSymbol) {
	if(_nullSymbol == null || _nullSymbol == undefined)
		_nullSymbol = '-'
			
	var _sql =  "SELECT * FROM [dbo].[HRF_StoricoTipoCampoLav](?,?)"
		_sql += "ORDER BY Decorrenza"
		
	var _ds = databaseManager.getDataSetByQuery(globals.Server.MA_HR, _sql, [_idLavoratore, _nullSymbol], -1)
	
	return _ds.createDataSource('tipocampo_history')
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Number} _idLavoratore
 * 
 * @return {JSDataSet}
 *
 * @properties={typeid:24,uuid:"83907DA0-B618-49F7-8770-7C86158997B6"}
 */
function _getRetribuzioneLorda(_idLavoratore)
{
	var _sql =  "SELECT idLavoratore, SUM(Valore) AS RetrLorda FROM [dbo].[HRF_StoricoTipoCampoLav](?,'-')"
		_sql += "GROUP BY idLavoratore"
	
	var _ds = databaseManager.getDataSetByQuery(globals.Server.MA_HR, _sql, [_idLavoratore], 1000)
	if(_ds.getMaxRowIndex() > 0)
	{
		return _ds
	}

	return null
}

/**
 * @param {Number} idLavoratore
 * @param {Date} allaData
 * @param {Number} idSezioneRiclassificazione
 * 
 * @properties={typeid:24,uuid:"1BA6724B-EE1B-4D47-B27F-CE68BF75ADC6"}
 */
function getRiclassificazioneElementiDataSource(idLavoratore, allaData, idSezioneRiclassificazione)
{
	var sqlQuery = "SELECT * FROM [dbo].[HRF_Riclassificazione_Elementi](?,?,?) \
					ORDER BY OrdineScopo, OrdineSezione, Codice";
	
	var ds = databaseManager.getDataSetByQuery(globals.getSwitchedServer(globals.Server.MA_HR), sqlQuery, [idLavoratore, allaData, idSezioneRiclassificazione], 1000)
	var types = [
					JSColumn.INTEGER,	// idLavoratore
					JSColumn.TEXT, 		// Contratto
					JSColumn.TEXT, 		// Livello
					JSColumn.TEXT, 		// Codice
					JSColumn.TEXT, 		// Descrizione
					JSColumn.NUMBER, 	// Importo
					JSColumn.TEXT, 		// Valuta
					JSColumn.DATETIME, 	// Decorrenza
					JSColumn.NUMBER, 	// Segno
					JSColumn.TEXT, 		// CodiceAggiuntivo
					JSColumn.INTEGER, 	// idSezione
					JSColumn.INTEGER,	// AmmetteStorico
					JSColumn.INTEGER,	// OrdineScopo
					JSColumn.INTEGER,	// OrdineSezione
				];
	
	return ds.getValue(1,1) ? ds.createDataSource(['elementi_riclassificati',idSezioneRiclassificazione,_idlavoratore].join('_'), types) : null;
}

/**
 * @param {Number} idLavoratore
 * @param {Number} idSezioneRiclassificazione
 * @param {Date} periodo
 * 
 * @properties={typeid:24,uuid:"206BFF7C-7647-4D64-B379-7F1AB37F2750"}
 */
function getRiclassificazioneVociDataSource(idLavoratore, periodo, idSezioneRiclassificazione)
{
	var sqlQuery = "SELECT * FROM [dbo].[HRF_Riclassificazione_Voci](?,?,?) \
					ORDER BY OrdineScopo, OrdineSezione, Codice";
	
	var ds = databaseManager.getDataSetByQuery(globals.getSwitchedServer(globals.Server.MA_HR), sqlQuery, [idLavoratore,periodo.getFullYear() * 100 + periodo.getMonth() + 1, idSezioneRiclassificazione], 1000)
	var types = [
					JSColumn.INTEGER,	// idLavoratore
					JSColumn.TEXT, 		// Codice
					JSColumn.TEXT, 		// Descrizione
					JSColumn.NUMBER, 	// Importo
					JSColumn.TEXT, 		// Valuta
					JSColumn.DATETIME, 	// Decorrenza
					JSColumn.NUMBER, 	// Segno
					JSColumn.TEXT, 		// CodiceAggiuntivo
					JSColumn.INTEGER, 	// idSezione
					JSColumn.INTEGER,	// AmmetteStorico
					JSColumn.INTEGER,	// OrdineSezione
					JSColumn.INTEGER,	// OrdineScopo
				];
	
	return ds.getValue(1,1) ? ds.createDataSource(['voci_riclassificate',idSezioneRiclassificazione,_idlavoratore].join('_'), types) : null
}

/**
 * @param {Number} _idLavoratore
 * @param {Number} _idSezioneRiclassificazione
 * @param {Date} _periodo
 * 
 * @properties={typeid:24,uuid:"ED25655F-8AEB-45FF-8828-A4CDA677C8D6"}
 */
function getRiclassificazioneEventiDataSource(_idLavoratore, _periodo, _idSezioneRiclassificazione)
{
	var _sql = "SELECT * FROM [dbo].[HRF_Riclassificazione_Eventi](?,?,?) \
				ORDER BY OrdineScopo, OrdineSezione, Codice";
	
	var _ds = databaseManager.getDataSetByQuery(globals.getSwitchedServer(globals.Server.MA_HR), _sql, [_idLavoratore, _periodo.getFullYear() * 100 + _periodo.getMonth() + 1, _idSezioneRiclassificazione], 1000)
	var types = [
					JSColumn.INTEGER,	// idLavoratore
					JSColumn.TEXT, 		// Codice
					JSColumn.TEXT, 		// Descrizione
					JSColumn.NUMBER, 	// Importo
					JSColumn.DATETIME, 	// Decorrenza
					JSColumn.NUMBER, 	// Segno
					JSColumn.TEXT, 		// CodiceAggiuntivo
					JSColumn.INTEGER, 	// idSezione
					JSColumn.INTEGER,	// AmmetteStorico
					JSColumn.INTEGER,	// OrdineScopo
					JSColumn.INTEGER,	// OrdineSezione
				];
	
	return _ds.getValue(1,1) ? _ds.createDataSource('eventi_riclassificati_' + _idSezioneRiclassificazione + '_' + _idlavoratore, types) : null
}

/**
 * @param {Number} idLavoratore
 * @param {Date} allaData
 * @param {Number} idScopo
 * 
 * @properties={typeid:24,uuid:"6EA56031-C727-4956-AE4A-AF081A34AD34"}
 */
function getTotaleSezioniElementiDataSource(idLavoratore, allaData, idScopo)
{
	var sqlQuery = "SELECT * FROM [dbo].[HRF_Totale_Sezioni_Elementi](?,?,?) \
					ORDER BY OrdineScopo, OrdineSezione, Codice";
	
	var ds = databaseManager.getDataSetByQuery(globals.getSwitchedServer(globals.Server.MA_HR), sqlQuery, [idLavoratore, utils.dateFormat(allaData, globals.ISO_DATEFORMAT), idScopo], -1);
	var types =
		[
		  JSColumn.INTEGER	// Id
		 ,JSColumn.TEXT		// Codice
		 ,JSColumn.TEXT 	// Descrizione
		 ,JSColumn.NUMBER	// Importo
		 ,JSColumn.TEXT		// Valuta
		 ,JSColumn.INTEGER	// OrdineScopo
		 ,JSColumn.INTEGER	// OrdineSezione
		];
	
	return ds.getValue(1,1) ? ds.createDataSource('sezioni_riclassificate_' + idScopo + '_' + idLavoratore, types) : null;
}

/**
 * @param {Number} idLavoratore
 * @param {Date} periodo
 * @param {Number} idScopo
 * 
 * @properties={typeid:24,uuid:"92AC7272-E636-4C9A-94A6-AA97A2D5E6AE"}
 */
function getTotaleSezioniVociDataSource(idLavoratore, periodo, idScopo)
{
	var sqlQuery = "SELECT * FROM [dbo].[HRF_Totale_Sezioni_Voci](?,?,?) \
					ORDER BY OrdineScopo, OrdineSezione, Codice";
	
	var ds = databaseManager.getDataSetByQuery(globals.getSwitchedServer(globals.Server.MA_HR), sqlQuery, [idLavoratore, periodo.getFullYear() * 100 + periodo.getMonth() + 1, idScopo], -1);
	var types =
		[
		  JSColumn.INTEGER	// Id
		 ,JSColumn.TEXT		// Codice
		 ,JSColumn.TEXT 	// Descrizione
		 ,JSColumn.NUMBER	// Importo
		 ,JSColumn.TEXT		// Valuta
		 ,JSColumn.INTEGER	// OrdineScopo
		 ,JSColumn.INTEGER	// OrdineSezione
		];
	
	return ds.getValue(1,1) ? ds.createDataSource('sezioni_riclassificate_' + idScopo + '_' + idLavoratore, types) : null;
}

/**
 * @param {Number} idLavoratore
 * @param {Date} periodo
 * @param {Number} idScopo
 * 
 * @properties={typeid:24,uuid:"ECB660D9-C364-465E-B886-C7375FE135C6"}
 */
function getTotaleSezioniEventiDataSource(idLavoratore, periodo, idScopo)
{
	var sqlQuery = "SELECT * FROM [dbo].[HRF_Totale_Sezioni_Eventi](?,?,?) \
					ORDER BY OrdineScopo, OrdineSezione, Codice";
	
	var ds = databaseManager.getDataSetByQuery(globals.getSwitchedServer(globals.Server.MA_HR), sqlQuery, [idLavoratore, periodo.getFullYear() * 100 + periodo.getMonth() + 1, idScopo], -1);
	var types =
		[
		  JSColumn.INTEGER	// Id
		 ,JSColumn.TEXT		// Codice
		 ,JSColumn.TEXT 	// Descrizione
		 ,JSColumn.NUMBER	// Importo
		 ,JSColumn.INTEGER	// OrdineScopo
		 ,JSColumn.INTEGER	// OrdineSezione
		];

	
	return ds.getValue(1,1) ? ds.createDataSource('sezioni_riclassificate_' + idScopo + '_' + idLavoratore, types) : null
}

/**
 * @param {Number} idLavoratore
 * @param {Number} idClassificazione
 * @param {String} [dataSource]
 *
 * @properties={typeid:24,uuid:"13841913-8FAC-4AA2-A22E-F47A298FD6D0"}
 */
function getClassificazioniDipendenteDataSource(idLavoratore, idClassificazione, dataSource)
{
	var sqlQuery = "SELECT * FROM [dbo].[HRF_ClassificazioniADipendente](?,?)";
//		_sql += " ORDER BY Importo DESC"
	
	var ds = databaseManager.getDataSetByQuery(globals.Server.MA_HR, sqlQuery, [idLavoratore, idClassificazione], -1);
	
	return ds.createDataSource(globals.ma_utl_isNullOrEmpty(dataSource) ? 'classificazioni_dipendente' : dataSource);
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Number} _companyId
 * @param {Number} _scopoId
 * @param {Number} _tipologiaId
 * @param {String} _form
 * @param {String} _program
 * @param {Array<Array<Array<String>>>} _defaultvalues
 * @param {String} _windowTitle
 *
 * @properties={typeid:24,uuid:"96B11BB6-DCD3-41F0-BBA0-2272FA486147"}
 */
function _addScopoRiclassificazione(_companyId, _scopoId, _tipologiaId, _form, _program, _defaultvalues, _windowTitle)
{	
	if(_defaultvalues == null)
		/** @type {Array<Array<Array<String>>>} */
		_defaultvalues = new Array()
	
	if(_defaultvalues[_form] == null)
		_defaultvalues[_form] = new Array()
	
	_defaultvalues[_form]['idditta'] = _companyId
	_defaultvalues[_form]['idscopo'] = _scopoId
	_defaultvalues[_form]['idtipologiaelemento'] = _tipologiaId
	
	globals._addRecords(
		_form
		,_program
		,_defaultvalues
		,_windowTitle
		)
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Number} _scopoRiclassificazioneId
 * @param {String} _form
 * @param {String} _program
 * @param {Array<Array<Array<String>>>} _defaultvalues
 * @param {String} _windowTitle
 *
 * @properties={typeid:24,uuid:"F6771FE6-6778-4DD0-89E0-750E5B4FEC6F"}
 */
function _addSezioneRiclassificazione(_scopoRiclassificazioneId, _form, _program, _defaultvalues, _windowTitle)
{	
	if(_defaultvalues == null)
		/** @type {Array<Array<Array<String>>>} */
		_defaultvalues = new Array()
	
	if(_defaultvalues[_form] == null)
		_defaultvalues[_form] = new Array()
	
	_defaultvalues[_form]['iddittascoporiclassificazione'] = _scopoRiclassificazioneId
	
	globals._addRecords(
		_form
		,_program
		,_defaultvalues
		,_windowTitle
		)
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {JSRecord} _record1
 * @param {JSRecord} _record2
 *
 * @properties={typeid:24,uuid:"2379AC18-ECDE-48CC-8A62-1F5FF49811A2"}
 */
function _sortByCodice(_record1, _record2)
{
	var _iCodice1 = parseInt(_record1['codice'], 10)
	var _iCodice2 = parseInt(_record2['codice'], 10)
	var _diff = _iCodice1 - _iCodice2
	if(_diff > 0)
	{
		return 1
	}
	else if(_diff < 0)
	{
		return -1
	}
	else
	{
		return 0
	}
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"349F6110-783D-4554-AE3A-0B0C2DB50823"}
 */
function onRender(event) {
	
	if (event == null)
		return

	if(!event['getRecord']) return
	var rec = event.getRecord()
    var recInd = event.getRecordIndex()
    var recRen = event.getRenderable()
   
    if (recRen == null)
    	return
   
	// Also colour checked records when in multiselect
    if (event.isRecordSelected())
    	recRen.bgcolor = '#EBA618'
    else if(rec && rec['checked'])
    	recRen.bgcolor = '#FFCC00'
    else if( (recInd % 2) == 0)
		recRen.bgcolor = '#E8E8E8'			   
	else 
		recRen.bgcolor = '#FFFFFF'   	
}

/**
 * Callback method for when an error occurred.
 *
 * @param {ServoyException} ex exception to handle
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"57B5B5F8-AEA1-4A8E-8E71-6ADC0B0CDDB9"}
 */
function onError(ex) {
	// TODO Auto-generated method stub
	application.output('Exception Object: ' + ex)
	application.output('MSG: ' + ex.getMessage())
	if (ex instanceof ServoyException) {
		/** @type {ServoyException} */
		var servoyException = ex;
		application.output("is a ServoyException")
		application.output("Errorcode: " + servoyException.getErrorCode())
		if (servoyException.getErrorCode() == ServoyException.SAVE_FAILED) {
			plugins.dialogs.showErrorDialog('Error', 'It seems you did not fill in a required field', 'OK');
			//Get the failed records after a save
			var array = databaseManager.getFailedRecords()
			for (var i = 0; i < array.length; i++) {
				var record = array[i];
				application.output(record.exception);
				if (record.exception instanceof DataException) {
					/** @type {DataException} */
					var dataException = record.exception;
					application.output('SQL: ' + dataException.getSQL())
					application.output('SQLState: ' + dataException.getSQLState())
					application.output('VendorErrorCode: ' + dataException.getVendorErrorCode())
				}
			}
			return false
		}
	}
	//if returns false or no return, error is not reported to client; if returns true error is reported
	//by default error report means logging the error, in smart client an error dialog will also show up
	return true
}

/**
 * @properties={typeid:24,uuid:"A48C99A4-0290-4899-BD45-9D43D59CBCFE"}
 */
function getStoricoRapporto(idLavoratore, nullSymbol)
{
	var sqlQuery = "SELECT * FROM [dbo].[HRF_StoricoRapporto](?,?) \
					ORDER BY Decorrenza DESC";
	
	return databaseManager.getDataSetByQuery(globals.getSwitchedServer(globals.Server.MA_HR), sqlQuery, [idLavoratore, nullSymbol], -1).createDataSource('ds_rapporto');
}

/**
 * @properties={typeid:24,uuid:"90D658BB-A5C3-45E8-9861-47ADD14840A1"}
 */
function getSituazioneLavoratore(idLavoratore, allaData)
{
	var sqlQuery = "SELECT * FROM [dbo].[HRF_SituazioneLavoratore](?,?)";
	return databaseManager.getDataSetByQuery(globals.getSwitchedServer(globals.Server.MA_HR), sqlQuery, [idLavoratore, allaData], -1).createDataSource('ds_rapporto');
}

