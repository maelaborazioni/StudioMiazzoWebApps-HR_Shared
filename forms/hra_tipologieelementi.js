/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param _triggerForm
 * @param _forceForm
 *
 * @properties={typeid:24,uuid:"4669A56F-ADE9-4764-9A40-7CF60AD3F679"}
 */
function dc_delete(event, _triggerForm, _forceForm) {
	_super.dc_delete(event, _triggerForm, controller.getName(), true)
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {JSFoundset} _foundset
 * @param {Boolean} _multiDelete
 *
 * @properties={typeid:24,uuid:"56323CF0-AD2B-42CF-8898-A121252205A3"}
 */
function dc_delete_pre(_foundset, _multiDelete)
{
	if(_super.dc_delete_pre(_foundset,_multiDelete))
	{
		var _answer = globals.ma_utl_showYesNoQuestion('i18n:hr.msg.deleteChildren','i18n:hr.msg.attention')
		return _answer ? 0 : -1
	}
	
	return -1
}
