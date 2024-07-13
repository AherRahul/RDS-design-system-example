<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col  cols="10" offset="0" colsAtS="12" colsAtM="12" colsAtL="10" colsAtXl="10">
                    <rds-avatar-group
                        :avatars="avatars"
                        :size="size"
                        :maxCount="maxCount"
                    />
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AvatarGroup',
    props: {
        size: {
            type: String,
            default: "md",
        },
        maxCount: {
            type: Number,
            default: 3,
        }
    },
    data() {
        return {
            avatars: [
                {
                    "src": "https://res.cloudinary.com/duojkrgue/image/upload/v1597245616/jjrxzygynbnycnkvmkle.jpg",
                    "name": "Cho Smith"
                },
                {
                    "src": "https://res.cloudinary.com/duojkrgue/image/upload/v1597061293/epecvtfhk1afumio20x2.jpg",
                    "name": "Alice Brown"
                },
                {
                    "src": "https://res.cloudinary.com/duojkrgue/image/upload/v1597061232/uyhpdxozzozcmr17wgof.jpg",
                    "name": "Leo Garcia"
                },
                {
                    "src": "https://res.cloudinary.com/duojkrgue/image/upload/v1597058392/zs4vxtldbq8flgdftgat.jpg",
                    "name": "Dave Jones"
                },
                {
                    "src": "https://res.cloudinary.com/duojkrgue/image/upload/v1597058028/eur6ranh3hudjuboazb1.jpg",
                    "name": "Maya Rodriguez"
                },
                {
                    "src": "https://res.cloudinary.com/duojkrgue/image/upload/v1588924014/j44b7rr8r7opzyiwhnw6.jpg",
                    "name": "Tina Smith"
                },
                {
                    "src": "https://res.cloudinary.com/duojkrgue/image/upload/v1586543245/icdiaxfqzguysbyiydge.png",
                    "name": "Paulo Williams"
                }
            ],
        }
    },
    mounted () {},
    methods: {},
  }
  </script>
  
  <style>
  
  </style>
  