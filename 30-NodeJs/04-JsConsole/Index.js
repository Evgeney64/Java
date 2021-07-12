// https://docs.sencha.com/extjs/6.2.0/modern/Ext.html#method-define

Ext.define('My.awesome.Class', {
     someProperty: 'something',

     someMethod: function(s) {
         alert(s + this.someProperty);
     }
 });

var test = Ext.create('My.awesome.Class', {
     someProperty: 'One'
 });

test.someMethod('+++')
