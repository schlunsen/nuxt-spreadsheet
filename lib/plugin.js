import Vue from 'vue'
import Spreadsheet from "x-data-spreadsheet";

export default async function ({ router, store }) {

    Vue.use('spreadsheet', {
        render: function (createElement) {
            return createElement('div', {
                attrs: {
                    id: 'spreadsheet' + this._uid
                }
            })
        },
        props: ['options', 'data', 'onChange'],
        data: function () {
            spreadsheet: null
        },
        mounted() {
            this.spreadsheet = new Spreadsheet('spreadsheet'+ this._uid, this.options)

            if (this.data) {
                this.spreadsheet.loadData(this.data)
            }

            if (this.onChange) {
                this.change(this.onChange)
            }

        }
    })


}
