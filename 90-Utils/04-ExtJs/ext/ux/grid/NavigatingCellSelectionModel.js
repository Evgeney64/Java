Ext.namespace("Ext.ux.grid");
Ext.ux.grid.NavigatingCellSelectionModel = Ext.extend(Ext.grid.CellSelectionModel, {

    onEditorKey: function(field, e) {
        if (e.getKey() == e.TAB || e.getKey() == e.ENTER) {
            this.handleKeyDown(e);
        }
    },

    handleKeyDown : function(e) {
        if (!e.isNavKeyPress()) {
            return;
        }
        var k = e.getKey(),
            grid = this.grid,
            selection = this.selection,
            sm = this,
            walk = function(row, col, step) {
                return grid.walkCells(
                    row,
                    col,
                    step,
                    grid.isEditor && grid.editing ? sm.acceptsNav : sm.isSelectable,
                    sm
                );
            },
            cell, newCell, r, c, ae;

        switch (k) {
            case e.ESC:
            case e.PAGE_UP:
            case e.PAGE_DOWN:
                // do nothing
                break;
            default:
                // *** call e.stopEvent() only for non ESC, PAGE UP/DOWN KEYS
                e.stopEvent();
                break;
        }

        if (!selection) {
            cell = walk(0, 0, 1);
            if (cell) {
                this.select(cell[0], cell[1]);
            }
            return;
        }

        cell = selection.cell;  // currently selected cell
        r = cell[0];    // current row
        c = cell[1];    // current column

        switch (k) {
            case e.TAB:
                if (e.shiftKey) {
                    newCell = walk(r, c - 1, -1);
                } else {
                    newCell = walk(r, c + 1, 1);
                }
                break;
            case e.DOWN:
                newCell = walk(r + 1, c, 1);
                break;
            case e.UP:
                newCell = walk(r - 1, c, -1);
                break;
            case e.RIGHT:
                newCell = walk(r, c + 1, 1);
                break;
            case e.LEFT:
                newCell = walk(r, c - 1, -1);
                break;
            case e.ENTER:
                if (this.grid.editing) {
                    if (e.shiftKey) {

                        newCell = walk(r, c - 1, -1);
                    } else {
                        newCell = walk(r, c + 1, 1);

                    }
                    if (!Ext.isEmpty(newCell)) {
                        this.grid.getView().focusCell(newCell[0], newCell[1], true);
                    }
                }
                else this.grid.startEditing(r, c);
                break;
            default :
                break;
        }

        if (newCell) {
            // *** reassign r & c variables to newly-selected cell's row and column
            r = newCell[0];
            c = newCell[1];

            this.select(r, c); // *** highlight newly-selected cell and update selection

            if ((grid.isEditor && grid.editing) || this.forceEditing) { // *** handle tabbing while editorgrid is in edit mode
                ae = grid.activeEditor;
                if (ae && ae.field.triggerBlur) {
                    // *** if activeEditor is a TriggerField, explicitly call its triggerBlur() method
                    ae.field.triggerBlur();
                }

                this.grid.startEditing.defer(50, this.grid, [r, c]);
            }
        }
    },

    /**
     * Returns the first selected record.
     * @return {Record}
     */
    getSelected : function() {
        return (this.selection) ? this.selection.record : null;
    }
});