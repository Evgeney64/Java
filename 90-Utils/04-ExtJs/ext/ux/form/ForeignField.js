/**
 * Поле, выборка значения которого осуществляется через стороннее окно
 * Принимает окно кидающее события:
 *        select
 *             ссылка на себя
 *             выбранный record
 *
 * Поле кидает события:
 *         setValue
 *             searchForm - форма выбора значений, record - выбранная запись
 *             Именно по этому событию надо преобразовывать выбранное значение, а не по событию select формы searchForm!
 *        cancelSet
 *             При отмене выбора
 */
Sigma.components.ForeignField = Ext.extend(Ext.form.TriggerField,
    {
        triggerClass :'x-form-search-trigger-ccb',
        hiddenField  : undefined,
        editable     :    false,
        triggerClickSingleTone: false,
        triggerClickOn: false,

        constructor: function(config) {
            this.addEvents(
                /**
                 * @event setValue
                 * @param {Object} - field
                 * @param {Object} - Выбраный record
                 */
                'setValue',
                'cancelSet'
            );
            if(this.searchForm){
                console.warn("Not lazy initialization for Foreign field. " +
                    "Use createSearchForm function instead explicit set searchForm property");
                console.trace();
            }
            Sigma.components.ForeignField.superclass.constructor.call(this, config);
        },

        destroy :  function(){
            Sigma.components.ForeignField.superclass.destroy.call(this);
            Sigma.common.destroyInnerComponent(this, 'searchForm');
            Sigma.common.destroyInnerComponent(this, 'hiddenField');
        },

        initComponent: function() {
            Sigma.components.ForeignField.superclass.initComponent.call(this);

            if (!this.editable)
                this.on('focus', this.onTriggerClick, this);


            this.hiddenField = new Ext.form.Hidden();

            if (this.searchForm) {
                this.mon(this.searchForm, 'select', this.setSelectedValueHandler, this);
            }
        },

        setSelectedValueHandler: function(searchForm, record) {
            this.resumeEvents();
            this.fireEvent('setValue', this, record);
            this.fireEvent('afterSetValue', this, this.getValue());
            var result = true;


            if (this.setSelectedValue) // Наследие
            {
                result = this.setSelectedValue(searchForm, record, this) !== false;
            }

            if (result) {
                this.resultIsSet = true;
                this.selectedRecord = record;
                searchForm.hide();
            }
        },

        setSearchForm: function(searchForm) {
            if (this.searchForm) {
                this.searchForm.un('select', this.setSelectedValueHandler);
                this.searchForm.close();
            }
            this.searchForm = searchForm;

            this.mon(this.searchForm, 'select', this.setSelectedValueHandler, this);
        },

        /**
         * Инициализация поисковой формы при клике на внешнее поле
         * @param searchForm - поисковая форма
         */
        initSearchForm: function(searchForm) {
            if (searchForm.doInit) {
                searchForm.doInit.call(searchForm);
            }
        },

        /**
         * @deprecated - использовать initSearchform
         */
        collectValues : Ext.emptyFn,

        /**
         * Выставить системное и видимое значение
         * @param value - системное значение
         * @param differentDisplayValue - Deprecated (неуместный аргумент)
         * @param displayValue - видимое значение (если undefined - совпадает с системным)
         */
        setValue : function(value, differentDisplayValue, displayValue) {
            var setDisplayValue;
            if (arguments.length == 3) {
                setDisplayValue = (differentDisplayValue === true) ? displayValue : value;
            }
            else {
                setDisplayValue = (differentDisplayValue === undefined) ? value : differentDisplayValue;
            }

            this.hiddenField.setValue(value);
            this.setVisibleValue(setDisplayValue);

            this.selectedRecord = null;
        },

        /**
         * Получить системное значение поля
         */
        getValue : function() {
            return this.hiddenField.getValue();
        },

        initValue : function() {
            if (this.value !== undefined) {
                this.setVisibleValue(this.value);
            } else if (!Ext.isEmpty(this.el.dom.value) && this.el.dom.value != this.emptyText) {
                this.setVisibleValue(this.el.dom.value);
            }
        },
        /**
         * Получить видимое значение поля
         */
        getVisibleValue : function() {
            return Sigma.components.ForeignField.superclass.getValue.call(this);
        },

        setVisibleValue : function(value) {
            Sigma.components.ForeignField.superclass.setValue.call(this, value);
        },

        configureSearchForm : function(){
            if(!this.searchForm){
                this.setSearchForm(this.createSearchForm());
            }
        },

        onTriggerClick: function() {
            if (this.disabled || this.triggerClickOn){
                return;
            }

            if(this.triggerClickSingleTone) {
                this.triggerClickOn = true;
            }

            this.configureSearchForm();
            if (!this.searchForm) return;

            this.resultIsSet = false;

            var me = this;
            var listener = function(sForm) {
                sForm.un('hide', listener);
                me.resumeEvents();
                this.triggerClickOn = false;
                if (!this.resultIsSet) {
                    this.fireEvent('cancelSet');
                }
                me.fireEvent('blur', this);
            };
            this.searchForm.on('hide', listener, this);

            if (!this.searchForm.hasListener('select')) {
                this.mon(this.searchForm, 'select', this.setSelectedValueHandler, this);
            }


            this.suspendEvents();
            this.searchForm.show();

            // Если есть функция инициализации окна - УСТАРЕЛО
            if (
                this.collectValues != Ext.emptyFn &&
                    ( this.searchForm.init || (!this.searchForm.init && this.searchForm.doInit) )
                ) {
                var data = this.collectValues();
                if (this.searchForm.init) {
                    this.searchForm.init(data);
                }
                else {
                    this.searchForm.doInit(data);
                }
            }
            else if (this.initSearchForm) {
                var activeForm = this.searchForm.content || this.searchForm;
                this.initSearchForm(activeForm);
            }
            return false;
        },

        getSelectedRecord: function() {
            return this.selectedRecord;
        },

        onBlur: function() {
            if (this.editable) {
                if (this.getRawValue() != this.beforeEditValue) {
                    var setValue = this.getRawValue();
                    this.hiddenField.setValue(setValue);
                    this.fireEvent('afterSetValue', this, setValue);
                }
            }
        },

        onFocus: function() {
            Sigma.components.ForeignField.superclass.onFocus.call(this);

            if (this.editable) {
                this.beforeEditValue = this.getRawValue();
            }
        }
    });
Ext.reg("foreignfield", Sigma.components.ForeignField);
