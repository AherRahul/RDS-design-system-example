<template>
    <div style="padding: 5px">
        <rds-grid>
            <rds-row>
                <rds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                    <rds-scrollable
                        :maxHeight="maxHeight"
                        :autoHeight="autoHeight"
                        :horizontalScroll="horizontalScroll"
                    >
                        <p>
                            Design systems have been in practice for a long time under different nomenclatures.
                             Design systems have been significant in the design field since they were created but 
                             have had many changes and improvements since their origin. Using systems or patterns 
                             as they called it in 1960s was first mentioned in NATO Software Engineering Conference 
                             (discussion on how the softwares should be developed) by Christopher Alexander gaining 
                             industry’s attention. In 1970s, he published a book named “A Pattern Language” along 
                             with Murray Silverstein, and Sara Ishikawa which discussed the interconnected patterns 
                             in architecture in an easy and democratic way and that gave birth to what we know today 
                             as “Design Systems”.
                        </p>
                        <p>
                            Interests in the digital field surged again in the latter half of the 1980s, for this tool 
                            to be used in software development which led to the notion of Software Design Pattern. 
                            As patterns are best maintained in a collaborative editing environment, it led to the invention 
                            of the first wiki, which later led to the invention of Wikipedia itself. Regular conferences 
                            were held, and even back then, patterns were used to build user interfaces. The surge 
                            continued well into the 90s, with Jennifer Tidwell's research closing the decade. Scientific 
                            interest continued way into the 2000s.
                        </p>
                        <p>
                            Mainstream interest about pattern languages for UI design surged again by the opening of Yahoo! 
                            Design Pattern Library in 2006[13] with the simultaneous introduction of Yahoo! User Interface 
                            Library (YUI Library for short). The simultaneous introduction was meant to allow more systematic 
                            design than mere components which the UI library has provided.
                        </p>
                        <p>
                            Google's Material Design in 2014 was the first to be called a "design language" by the firm (the 
                            previous version was called "Holo Theme"). Soon, others followed suit. Technical challenges of 
                            large-scale web projects led to the invention of systematic approaches in the 2010s, most notably 
                            BEM and Atomic Design. The book about Atomic Design helped popularize the term "Design System" 
                            since 2016. The book describes an approach to design layouts of digital products in a component-based
                             way making it future-friendly and easy to update.
                        </p>
                    </rds-scrollable>
                </rds-col>
            </rds-row>
        </rds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Scrollable',
    props: {
        /**
		 * Maximum height of the container until scrolled
		 */
		maxHeight: {
			type: String,
			default: '300px',
			required: true,
		},
		/**
		 * Sets height to 'auto' for the container up to the maximum limit
		 */
		autoHeight: {
			type: Boolean,
			default: false,
		},
		/**
		 * Makes the container horizontally scrollable
		 */
		horizontalScroll: {
			type: Boolean,
			default: false,
		},
    },
    data() {
        return {}
    },
    mounted () {},
    methods: {},
  }
  </script>
  
  <style>
  
  </style>
  