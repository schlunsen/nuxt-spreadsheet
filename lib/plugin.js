import Vue from 'vue'
import Spreadsheet from "x-data-spreadsheet";

Vue.component('spreadsheet', {
    name: 'spreadsheet',
    render: function (createElement) {
        return createElement('div', {
            attrs: {
                id: 'spreadsheet' + this._uid
            }
        })
    },
    props: ['options', 'data', 'onChange'],
    data: function () {
        return {
            spreadsheet: null
        }

    },
    mounted() {
        this.spreadsheet = new Spreadsheet(document.getElementById('spreadsheet' + this._uid), this.options)

        if (this.data) {
            this.spreadsheet.loadData(this.data)
        }

        if (this.onChange) {
            this.change(this.onChange)
        }

    }
})


export default async function ({ router, store }) {

    


}
