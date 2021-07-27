var originalExtDefine = Ext.define;
Ext.define = function(clazz, definition, createFn){
    if(!Ext.isEmpty(definition) && !Ext.isEmpty(definition.alias) && Sigma.startsWith(definition.alias, 'widget')){
        definition.xtype = definition.alias.replace('widget.', '');
    }

    var cls = originalExtDefine(clazz, definition, createFn);
    if(!Ext.isEmpty(definition) && !Ext.isEmpty(definition.alias) && Sigma.startsWith(definition.alias, 'plugin')){
        Ext.preg(definition.alias.replace('plugin.', ''), cls);
    }

    if(!Ext.isEmpty(definition) && !Ext.isEmpty(definition.alias) && Sigma.startsWith(definition.alias, 'command')){
        Sigma.creg(definition.alias.replace('command.', ''), cls);
    }
    return cls;
};

Ext.override(Ext.Component, {

    readMode: false,

    setReadMode: function(readMode) {
        this.readMode = readMode;
        this.setDisabled(this.disabled);
    },
    originalEnable : Ext.Component.prototype.enable,
    enable: function() {
        if (this._realCall) {
            this._realCall = false;
            this.originalEnable();
        } else {
            this.setDisabled(false);
        }
    },
    originalSetDisabled : Ext.Component.prototype.setDisabled,
    setDisabled: function(disabled) {
        this._realCall = true;
        this.originalSetDisabled(this.readMode || disabled);
    },
    getXType: function() {
        return this.xtype || this.constructor.xtype;
    }
});

Ext.override(Ext.form.TextField, {

    // stripCharsRe : /^\s+$/

    getErrors: function(v) {
        var errors = Ext.form.TextField.superclass.getErrors.apply(this, arguments);

        var value = Ext.isDefined(v) ? v : this.processValue(this.getRawValue());

        if (Ext.isFunction(this.validator)) {
            var msg = this.validator(value);
            if (msg !== true) {
                errors.push(msg);
            }
        }

        // Добавление
        if (typeof value == "string") {
            value = value.trim();
        }

        if (value.length < 1 || value === this.emptyText) {
            if (this.allowBlank) {
                //if value is blank and allowBlank is true, there cannot be any additional errors
                return errors;
            } else {
                errors.push(this.blankText);
            }
        }

        if (!this.allowBlank && (value.length < 1 || value === this.emptyText)) { // if it's blank
            errors.push(this.blankText);
        }

        if (value.length < this.minLength) {
            errors.push(String.format(this.minLengthText, this.minLength));
        }

        if (value.length > this.maxLength) {
            errors.push(String.format(this.maxLengthText, this.maxLength));
        }

        if (this.vtype) {
            var vt = Ext.form.VTypes;
            if (!vt[this.vtype](value, this)) {
                errors.push(this.vtypeText || vt[this.vtype + 'Text']);
            }
        }

        if (this.regex && !this.regex.test(value)) {
            errors.push(this.regexText);
        }

        return errors;
    }
});

Ext.override(Ext.form.DateField, {

    safeParse : function(value, format) {
        if (/[gGhH]/.test(format.replace(/(\\.)/g, ''))) {
            // if parse format contains hour information, no DST adjustment is necessary
            return Date.parseDate(value, format);
        } else {
            // set time to 12 noon, then clear the time
            var d;
            if (!/[dj]/.test(format.replace(/(\\.)/g, ''))) {
                d = Date.defaults.d;
                Date.defaults.d = 1;
            }
            var parsedDate = Date.parseDate(value.replace(/\\/g, "/") + ' ' + this.initTime, format + ' ' + this.initTimeFormat);
            if (Date.defaults.d !== d) {
                Date.defaults.d = d;
            }
            if (parsedDate) return parsedDate.clearTime();
        }
    },

    format: Sigma.common.format.date,

    altFormats: Sigma.common.format.altDateFormats
});

Ext.override(Ext.form.NumberField, {

    visibleDecimalSeparator: '.',

    decimalSeparator: ',.',

    setValue : function(value) {
        var v = this.fixPrecision(value);
        v = Ext.isNumber(v) ? v : parseFloat(String(v).replace(this.decimalSeparatorRegExp, "."));
        v = isNaN(v) ? '' : String(v).replace(".", this.visibleDecimalSeparator);
        return Ext.form.NumberField.superclass.setValue.call(this, v);
    },

    fixPrecision : function(value) {
        var nan = isNaN(value);

        if (!this.allowDecimals || this.decimalPrecision == -1 || nan || !value) {
            return nan ? '' : value;
        }

        return parseFloat(parseFloat(String(value).replace(this.decimalSeparatorRegExp, ".")).toFixed(this.decimalPrecision));
    },

    originalInitEvents : Ext.form.NumberField.prototype.initEvents,

    // private
    initEvents : function() {
        this.decimalSeparator += Ext.isString(this.visibleDecimalSeparator) ? this.visibleDecimalSeparator : '';
        this.originalInitEvents();
        this.decimalSeparatorRegExp = new RegExp('[' + Ext.escapeRe(this.decimalSeparator) + ']');
    },
    parseValue : function(v) {
        var value = parseFloat(String(v).replace(this.decimalSeparatorRegExp, "."));
        return isNaN(value) ? '' : value;
    },

    getErrors: function(v) {
        var errors = Ext.form.NumberField.superclass.getErrors.apply(this, arguments);

        var value = Ext.isDefined(v) ? v : this.processValue(this.getRawValue());

        if (value.length < 1) { // if it's blank and textfield didn't flag it then it's valid
            return errors;
        }

        value = String(value).replace(this.decimalSeparatorRegExp, ".");

        if (isNaN(value)) {
            errors.push(String.format(this.nanText, value));
        }

        var num = this.parseValue(value);

        if (num < this.minValue) {
            errors.push(String.format(this.minText, this.minValue));
        }

        if (num > this.maxValue) {
            errors.push(String.format(this.maxText, this.maxValue));
        }

        return errors;
    }
});


Ext.override(Ext.form.ComboBox, {

    getVisibleValue : function() {
        var text = this.getValue();
        if (this.valueField) {
            var r = this.findRecord(this.valueField, text);
            if (r) {
                text = r.data[this.displayField];
            } else if (Ext.isDefined(this.valueNotFoundText)) {
                text = this.valueNotFoundText;
            }
        }
        return text;
    }
});

//------------------------------------------------------------------------------
/*
 Ext.override(Ext.grid.GridView, {
 splitHandleWidth:5
 });
 */
Ext.override(Ext.DatePicker, {format: Sigma.common.format.date});

// -- Правки TreeGrid - ошибочная обработка ширин

Ext.override(Ext.ux.tree.TreeGrid, {

    updateColumnWidths : function() {
        var cols = this.columns,
            colCount = cols.length,
            header = this.outerCt.query('table>thead>tr'),
            groups = this.outerCt.query('table>tbody>tr.x-tree-node-el'),
            groupCount = groups.length,
            c, g, i, j, len;

        for (i = 0; i < colCount; i++) {
            c = cols[i];

            header[0].childNodes[i].style.width = (c.hidden ? 0 : c.width - 2) + 'px';

            for (j = 0; j < groupCount; j++) {
                g = groups[j];
                g.childNodes[i].style.width = (c.hidden ? 0 : c.width) + 'px';
            }
        }

        for (i = 0,groups = this.innerHd.query('td'),len = groups.length; i < len; i++) {
            c = Ext.fly(groups[i]);
            if (cols[i] && cols[i].hidden) {
                c.addClass('x-treegrid-hd-hidden');
            }
            else {
                c.removeClass('x-treegrid-hd-hidden');
            }
        }

        var tcw = this.getTotalColumnWidth();
        Ext.fly(this.innerHd.dom.firstChild).setWidth(tcw + (this.scrollOffset || 0));
        this.outerCt.select('table').setWidth(tcw);
        this.syncHeaderScroll();
    },

    onRender : function() {
        Ext.tree.TreePanel.superclass.onRender.apply(this, arguments);

        this.el.addClass('x-treegrid');

        //noinspection NestedConditionalExpressionJS
        this.outerCt = this.body.createChild({
            cls:'x-tree-root-ct x-treegrid-ct ' + (this.useArrows ? 'x-tree-arrows' : this.lines ? 'x-tree-lines' : 'x-tree-no-lines')
        });

        this.internalTpl.overwrite(this.outerCt, {columns: this.columns});

        this.mainHd = Ext.get(this.outerCt.dom.firstChild);
        this.innerHd = Ext.get(this.mainHd.dom.firstChild);
        this.innerBody = Ext.get(this.outerCt.dom.lastChild);
        this.innerCt = Ext.get(this.innerBody.dom.firstChild);

        //this.colgroupTpl.insertFirst(this.innerCt, {columns: this.columns});

        if (this.hideHeaders) {
            this.header.dom.style.display = 'none';
        }
        else if (this.enableHdMenu !== false) {
            this.hmenu = new Ext.menu.Menu({id: this.id + '-hctx'});
            if (this.enableColumnHide !== false) {
                this.colMenu = new Ext.menu.Menu({id: this.id + '-hcols-menu'});
                this.colMenu.on({
                    scope: this,
                    beforeshow: this.beforeColMenuShow,
                    itemclick: this.handleHdMenuClick
                });
                this.hmenu.add({
                    itemId:'columns',
                    hideOnClick: false,
                    text: this.columnsText,
                    menu: this.colMenu,
                    iconCls: 'x-cols-icon'
                });
            }
            this.hmenu.on('itemclick', this.handleHdMenuClick, this);
        }
    }
});

Ext.override(Ext.ux.tree.TreeGridNodeUI, {
    renderElements : function(n, a, targetNode, bulkRender) {
        var t = n.getOwnerTree(),
            cols = t.columns,
            c = cols[0],
            i, buf, len;

        this.indentMarkup = n.parentNode ? n.parentNode.ui.getChildIndent() : '';

        buf = [
            '<tbody class="x-tree-node">',
            '<tr ext:tree-node-id="', n.id ,'" class="x-tree-node-el x-tree-node-leaf ', a.cls, '">',
            '<td class="x-treegrid-col"', ' style="width:' + (cols[0].hidden ? 0 : cols[0].width) + 'px;" data-dataIndex="' , c.dataIndex,'">',
            '<span class="x-tree-node-indent">', this.indentMarkup, "</span>",
            '<img src="', this.emptyIcon, '" class="x-tree-ec-icon x-tree-elbow">',
            '<img src="', a.icon || this.emptyIcon, '" class="x-tree-node-icon', (a.icon ? " x-tree-node-inline-icon" : ""), (a.iconCls ? " " + a.iconCls : ""), '" unselectable="on">',
            '<a hidefocus="on" class="x-tree-node-anchor" href="', a.href ? a.href : '#', '" tabIndex="1" ',
            a.hrefTarget ? ' target="' + a.hrefTarget + '"' : '', '>',
            '<span unselectable="on">', (c.tpl ? c.tpl.apply(a) : a[c.dataIndex] || c.text), '</span></a>',
            '</td>'
        ];

        for (i = 1,len = cols.length; i < len; i++) {
            c = cols[i];
            buf.push(
                '<td class="x-treegrid-col ', (c.cls ? c.cls : ''), '" style="width:' + (cols[i].hidden ? 0 : cols[i].width) + 'px;" data-dataIndex="' , c.dataIndex,'">',
                '<div unselectable="on" class="x-treegrid-text"', (c.align ? ' style="text-align: ' + c.align + ';"' : ''), ' >',
                (c.tpl ? c.tpl.apply(a) : a[c.dataIndex]),
                '</div>',
                '</td>'
            );
        }

        buf.push(
            '</tr><tr class="x-tree-node-ct"><td colspan="', cols.length, '">',
            '<table class="x-treegrid-node-ct-table" cellpadding="0" cellspacing="0" style="table-layout: fixed; display: none; width: ', t.innerCt.getWidth(), 'px;">'
        );

        buf.push('</table></td></tr></tbody>');

        if (bulkRender !== true && n.nextSibling && n.nextSibling.ui.getEl()) {
            this.wrap = Ext.DomHelper.insertHtml("beforeBegin", n.nextSibling.ui.getEl(), buf.join(''));
        } else {
            this.wrap = Ext.DomHelper.insertHtml("beforeEnd", targetNode, buf.join(''));
        }

        this.elNode = this.wrap.childNodes[0];
        this.ctNode = this.wrap.childNodes[1].firstChild.firstChild;
        var cs = this.elNode.firstChild.childNodes;
        this.indentNode = cs[0];
        this.ecNode = cs[1];
        this.iconNode = cs[2];
        this.anchor = cs[3];
        this.textNode = cs[3].firstChild;
    }
});

/**
 * Лечение проблемы обновления узлов дерева - если потомки бли загружены через preload
 * то при обновлении, узел возьмет  их оттуда же, вместо обращения к сервису - ошибка
 */
Ext.override(Ext.tree.AsyncTreeNode, {
    /**
     * Trigger a reload for this node
     * @param {Function} callback
     * @param {Object} scope (optional) The scope (<code>this</code> reference) in which the callback is executed. Defaults to this Node.
     */
    reload : function(callback, scope) {
        this.collapse(false, false);
        while (this.firstChild) {
            this.removeChild(this.firstChild).destroy();
        }


        this.attributes.children = null; //!

        this.childrenRendered = false;
        this.loaded = false;
        if (this.isHiddenRoot()) {
            this.expanded = false;
        }
        this.expand(false, false, callback, scope);
    }
});


/**
 * Правка ошибки, возникающей по событию выбора строки, одновременно со срабатываением редактирования
 */

Ext.override(Ext.ux.grid.RowEditor, {

    onRowDblClick: function(g, rowIndex, e) {
        // Проверка доступности ряда
        if (this.grid.view.getRow(rowIndex)) {
            this.startEditing(rowIndex, false);
            this.doFocus.defer(this.focusDelay, this, [e.getPoint()]);
        }
    },
    originalOnRender: Ext.ux.grid.RowEditor.prototype.onRender,
    onRender: function(g, rowIndex, e) {

        this.originalOnRender(g, rowIndex, e);
        if (this.el.dom) {
            var comment = document.createAttribute("CLASS_NAME");
            comment.nodeValue = "RowEditor";
            this.el.dom.setAttributeNode(comment);
        }
    }
});

if (!('console' in window)) {
    window.console = {
        names : [ 'log', 'debug', 'info', 'warn', 'error', 'assert', 'dir', 'dirxml', 'group',
            'groupEnd', 'time', 'timeEnd', 'count', 'trace', 'profile', 'profileEnd' ]
    };
    for (var i = 0; i < window.console.names.length; ++i) window.console[window.console.names[i]] = Ext.emptyFn;
}


Ext.override(Ext.grid.CellSelectionModel, {

    getSelected: function() {
        return this.selection ? this.selection.record : null;
    }

});

/**
 * Механизм получения сконвертированых по описанию Record данных
 * Нужен для получения сконвертированых данных без пропускания через Reader
 */
Ext.override(Ext.data.Record, {
    getValues : function() {
        var values = {};
        var fields = this.fields.items;
        for (var j = 0; j < fields.length; j++) {
            f = fields[j];
            var v = this.data[f.name];
            values[f.name] = f.convert((v === undefined) ? f.defaultValue : v, this.data);
        }
        return values;
    }
});

Ext.override(Ext.ux.grid.filter.StringFilter, {
    validateRecordOriginal : Ext.ux.grid.filter.StringFilter.prototype.validateRecord,
    validateRecord : function(record) {
        var val = record.get(this.dataIndex);
        val = val.description || val;

        if (typeof val != 'string') {
            return (this.getValue().length === 0);
        }
        try {
            var reg = new RegExp(this.getValue(), 'gim');
            return reg.test(val);
        } catch(e) {
            console.log("incorrect regexp : " + e);
            return this.validateRecordOriginal(record);
        }
    },
    onInputKeyUp : function (field, e) {
        var k = e.getKey();

        if (e.LEFT == k || e.RIGHT == k) {

            return true;
        }

        if (k == e.RETURN && field.isValid()) {
            e.stopEvent();
            this.menu.hide(true);
            return;
        }
        this.updateTask.delay(this.updateBuffer);
    },
    initOriginal : Ext.ux.grid.filter.StringFilter.prototype.init,
    init : function(config) {
        this.initOriginal(config);
        this.menu.on('afterrender', function() {
            this.menu.keyNav.disable();
        }, this);

    }
});

if (Ext.form.DateField) {
    Ext.apply(Ext.form.DateField.prototype, {
        minText           : "Дата в этом поле должна быть позже {0}"
    });
}


// Применение плагинов ко всем GridPanel в проекте

Ext.ns("Sigma.utils");
Sigma.utils.initWithPlugins = function() {
    if (!this.plugins) {
        this.plugins = [];
    }
    else if (!Ext.isArray(this.plugins)) {
        this.plugins = [this.plugins];
    }

    var standardPlugins = this.getStandardPlugins();
    for (var j = 0; j < standardPlugins.length; j++) {
        var stPlugin = standardPlugins[j];
        stPlugin.needInsert = true;
        for (var i = 0; i < this.plugins.length; i++) {
            if (stPlugin.isIdentityType.call(this, this.plugins[i])) {
                stPlugin.needInsert = false;
                break;
            }
        }
    }

    for (j = 0; j < standardPlugins.length; j++) {
        stPlugin = standardPlugins[j];
        if (stPlugin.needInsert) {
            this.plugins.push(stPlugin.createPlugin());
        }
    }

    this.originalInitComponent();
};

Ext.override(Ext.grid.GridPanel, {

    originalInitComponent: Ext.grid.GridPanel.prototype.initComponent,

    initComponent: function() {
        Sigma.utils.initWithPlugins.apply(this);
    },

    getStandardPlugins: function() {
        return [
            {
                isIdentityType: function(comparedPlugin) {
                    return (comparedPlugin instanceof Sigma.common.grid.plugin.CopyRowsFromGrid || comparedPlugin.xtype == 'CopyRowsFromGrid')
                        || this instanceof Sigma.common.components.report.dynamicform.DynamicReportGrid
                        || this.xtype == 'DynamicReportGrid'; // Не добавлять плагин для DynamicReportGrid-ов
                },

                createPlugin: function() {
                    return new Sigma.common.grid.plugin.CopyRowsFromGrid();
                }
            },

            {
                isIdentityType: function(comparedPlugin) {
                    return (comparedPlugin instanceof Sigma.common.grid.plugin.CalculateCellSumPlugin || comparedPlugin.xtype == 'CalculateCellSumPlugin');
                },

                createPlugin: function() {
                    return new Sigma.common.grid.plugin.CalculateCellSumPlugin();
                }
            },

            {
                isIdentityType: function(comparedPlugin) {
                    return (comparedPlugin instanceof Sigma.common.grid.plugin.GridRecordViewerPlugin || comparedPlugin.xtype == 'GridRecordViewerPlugin');
                },

                createPlugin: function() {
                    return new Sigma.common.grid.plugin.GridRecordViewerPlugin();
                }
            }
        ];
    }
});

Ext.override(Ext.Window, {

    originalInitComponent: Ext.Window.prototype.initComponent,

    initComponent: function() {
        Sigma.utils.initWithPlugins.apply(this);
    },

    getStandardPlugins: function() {
        return [
            {
                isIdentityType: function(comparedPlugin) {
                    return (comparedPlugin instanceof Sigma.common.window.plugin.AttachedReportsMenuPlugin || comparedPlugin.xtype == 'AttachedReportsMenuPlugin');
                },

                createPlugin: function() {
                    return new Sigma.common.window.plugin.AttachedReportsMenuPlugin();
                }
            }
        ];
    }
});

Ext.override(Ext.tree.TreePanel, {

    originalInitComponent: Ext.tree.TreePanel.prototype.initComponent,

    initComponent: function() {
        Sigma.utils.initWithPlugins.apply(this);
    },

    getStandardPlugins: function() {
        return [
            {
                isIdentityType: function(comparedPlugin) {
                    return (comparedPlugin instanceof Sigma.common.grid.plugin.TreeRecordViewerPlugin || comparedPlugin.xtype == 'TreeRecordViewerPlugin');
                },

                createPlugin: function() {
                    return new Sigma.common.grid.plugin.TreeRecordViewerPlugin();
                }
            }
        ];
    }
});

var origComponentMgrReg = Ext.reg;
Ext.reg = function(xtype, cls) {
    origComponentMgrReg.call(this, xtype, cls);

    var origRender = cls.prototype.afterRender;
    cls.prototype.afterRender = function(container) {
        if (this.debugRendered) {
            origRender.call(this, container);
        } else {
            this.debugRendered = true;
            origRender.call(this, container);

            if (this.el.dom) {
                this.el.dom.setAttribute("CLASS_NAME", "" + xtype);
            }
        }
    }
};

Ext.override(Ext.Ajax, {
    abort: function(transId) {
        if(transId || this.isLoading()){
            Ext.lib.Ajax.abort(transId || this.transId);
        }
        Sigma.activeAjaxRequests--;
    }
});

Ext.override(Ext.form.TimeField, {
    initDate : '2/1/2008'
});

Ext.override(Ext.ux.grid.BufferView, {
    getCalculatedRowHeight: function () {
        return this.scroller.dom.scrollHeight === this.scroller.dom.clientHeight ?
        this.rowHeight + this.borderHeight : this.scroller.dom.scrollHeight / this.ds.getCount();
    }
});

/*if(Ext.isChrome) {
    dateParse = Date.parse;
    regExpDateTimeTester = new RegExp("\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}");
    localTimeZoneInMSecs = new Date().getTimezoneOffset() * 60 * 1000;
    Date.parse = function (v) {
            return dateParse(v) + (regExpDateTimeTester.test(v) ? localTimeZoneInMSecs : 0);
        };
}*/