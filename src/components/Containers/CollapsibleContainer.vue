<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                    <rds-collapsible-container
                        :modelValue="modelValue"
                        :title="title"
                    >
                        <p>
                            Mussum Ipsum, cacilds vidis litro abertis. Todo mundo
                            vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!
                            Atirei o pau no gatis, per gatis num morreus. Pra lá , depois
                            divoltis porris, paradis. Leite de capivaris, leite de mula
                            manquis sem cabeça. Viva Forevis aptent taciti sociosqu ad
                            litora torquent. Per aumento de cachacis, eu reclamis. Nec
                            orci ornare consequat. Praesent lacinia ultrices consectetur.
                            Sed non ipsum felis. Cevadis im ampola pa arma uma pindureta.
                        </p>
                    </rds-collapsible-container>
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CollapsibleContainer',
    props: {
        /**
		 * Represents the state of the component. When 'false' the content is not shown
		 * and when 'true' the contents of the container are displayed.
		 */
		modelValue: {
			type: Boolean,
			default: false,
			required: true,
		},
		/**
		 * Title of the item to be expanded
		 */
		title: {
			type: String,
			default: 'View more',
		},
    },
    data() {
        return {
        }
    },
    mounted () {
    },
    methods: {},
  }
  </script>
  
  <style>
  
  </style>
  