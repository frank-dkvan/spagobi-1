/** SpagoBI, the Open Source Business Intelligence suite
 * Copyright (C) 2012 Engineering Ingegneria Informatica S.p.A. - SpagoBI Competency Center
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0, without the "Incompatible With Secondary Licenses" notice.
 * If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/. **/

/**
 *
 *
 *  @author
 *  Alberto Ghedin (alberto.ghedin@eng.it)
 */

Ext.define('Sbi.olap.HierarchyModel', {
	extend: 'Ext.data.Model',
	idProperty: 'uniqueName',
	fields: [
		{name: 'name'},
		{name: 'uniqueName'},
		{name: 'caption'},
		{name: 'position', type: 'int'},
		{name: 'slicers',  type: 'array'},
		{name: 'levelNames',  type: 'array'}
	]
});