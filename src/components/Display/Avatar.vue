<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col  cols="10" offset="0" colsAtS="12" colsAtM="12" colsAtL="10" colsAtXl="10">
                    <rds-avatar
                        :src="src"
                        :size="size"
                        :clickable="clickable"
                        :dropdown-content="dropdownContent"
                    />
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Avatar',
    props: {
        src: {
            type: String,
            default:"https://res.cloudinary.com/duojkrgue/image/upload/v1597061293/epecvtfhk1afumio20x2.jpg",
        },
        variant: {
            type: String,
            default:"green", 
        },
        size: {
            type: String,
            default:"md",
        },
        initials: {
			type: String,
			default: null,
        },
        name: {
			type: String,
			default: null,
        },
        clickable: {
            type: String,
            default:false,
        }
    },
    data() {
        return {
            dropdownContent : {
               content: '0 to 120 years' 
            }
        }
    },
    mounted () {},
    methods: {},
  }
  </script>
  
  <style>
  
  </style>
  