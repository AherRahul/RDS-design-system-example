<template>
    <div class="structural">
      <div class="container-fluid">
        <div class="structural-header">
          <rds-row>
            <div class="header-content">
              <h1>RDS - Structural Component's</h1>
              <p>
                The Structural Components page in our design system showcases a variety of foundational 
                UI elements designed to create robust and scalable layouts for your applications. These 
                Vue.js components provide the essential framework for organizing and aligning content 
                seamlessly. Comprehensive documentation in Storybook ensures you have all the guidance 
                needed for implementation and customization, enabling you to adapt each component to 
                your specific project requirements.
              </p>

              <p>
                Explore the different components as well and their configurations to find the best 
                fit for your data visualization needs. Each component is accompanied by comprehensive 
                documentation and examples to help you get started quickly and efficiently.
              </p>
            </div>
          </rds-row>
        </div>

        <rds-divider :width="0" style="margin-top: 2%; margin-bottom: 2%;" />  

        <rds-grid>
          <div>
            <h3>1. AppBar</h3>
            <p>
              The Clickable Component in our design system provides a wrapper for components lacking 
              native click interaction, enabling them to be clickable. This Vue.js component enhances 
              usability by adding essential click functionality to various UI elements. Detailed 
              Storybook documentation ensures straightforward integration and customization for 
              seamless implementation across your application.
            </p>
          </div>
          <rds-row>
            <rds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12" >

              <app-bar
                :clickable="true"
              />
            </rds-col>
          </rds-row>
        </rds-grid>
        
        <rds-divider :width="0" style="margin-top: 2%; margin-bottom: 2%;" />  
        
        <rds-grid>
          <div>
            <h3>2. PageContainer</h3>
            <p>
              The PageContainer component in our design system serves as a fundamental structural block, 
              providing consistent padding and content alignment across different pages or sections of your 
              application. This Vue.js component ensures a cohesive layout and helps maintain design 
              consistency throughout your project.
            </p>
          </div>
          <rds-row>
            <rds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12" >

              <page-container
                :clickable="true"
              />
            </rds-col>
          </rds-row>
        </rds-grid>
        
        <rds-divider :width="0" style="margin-top: 2%; margin-bottom: 2%;" />  
        
        <rds-grid>
          <div>
            <h3>3. PageHeader</h3>
            <p>
              The PageHeader component in our design system enhances page layouts by providing a structured 
              way to display titles, subtitles, and actions. This Vue.js component helps maintain consistency 
              across pages and improves user navigation and interaction.
            </p>
          </div>
          <rds-row>
            <rds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12" >

              <page-header />
            </rds-col>
          </rds-row>
        </rds-grid>
      </div>
    </div>
  </template>
  
  <script>
  import AppBar from '../components/Structural/AppBar.vue';
  import PageContainer from '../components/Structural/PageContainer.vue';
  import PageHeader from '../components/Structural/PageHeader.vue';

  export default {
  components: { AppBar, PageContainer, PageHeader },
    name: "Structural",

    comments: {
      PageHeader,
      PageContainer,
      AppBar
    },
    data() {
      return {
        
      }
    },
    methods: {
      
    },
  }
  </script>
  <style>
  @media (min-width: 1024px) {
    .structural {
      min-height: 100%;
      display: flex;
      align-items: center;
      padding-bottom: 10rem;
    }
  }
  </style>
  