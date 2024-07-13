<template>
    <div class="display">
      <div class="container-fluid">
            <div class="dashboard-header">
                <rds-row>
                    <div class="header-content">
                        <h1>RDS - Display Component's</h1>
                        <p>
                          The Display Components page in our design system highlights a collection of essential 
                          UI elements designed to enhance the visual presentation and layout of your applications. 
                          These Vue.js components are documented using Storybook, ensuring comprehensive guidance 
                          for implementation and customization.
                        </p>

                        <p>
                            Explore the different chart components and their configurations to find the best 
                            fit for your data visualization needs. Each component is accompanied by comprehensive 
                            documentation and examples to help you get started quickly and efficiently.
                        </p>
                    </div>
                </rds-row>
                <rds-divider :width="0" style="margin-top: 2%; margin-bottom: 2%;" />
            </div>
            <div class="dashboard-content">
                <div class="dashboard-main">
                    <rds-grid>
                        <div>
                          <h3>1. ActionBar</h3>
                          <p>
                            The ActionBar component serves as a versatile toolbar designed to display actions and 
                            relevant information to the user. It is an essential UI element that enhances the 
                            functionality and user experience by grouping actions in a clear and accessible manner.
                          </p>
                          <p>Click on buttons to open action-bar</p>
                        </div>
                        <rds-row>
                          <rds-col cols="6" offset="0" colsAtS="12" colsAtM="12" colsAtL="6" colsAtXl="6">
                              <h5>1. light='false' dismissible='true' float='flase'</h5>
                              <action-bar :light='false' :dismissible='true' :float='false' />
                            </rds-col>

                            <rds-col cols="6" offset="0" colsAtS="12" colsAtM="12" colsAtL="6" colsAtXl="6">
                              <h5>2. light='true' dismissible='false' float='flase'</h5>
                              <action-bar :light='true' :dismissible='false' :float='false' />
                            </rds-col>
                        </rds-row>
                        <rds-row>
                          <rds-col cols="6" offset="0" colsAtS="12" colsAtM="12" colsAtL="6" colsAtXl="6">
                            <h5>3. light='false'float='true' dismissible='true'</h5>
                            <action-bar :light='false' :dismissible='true' :float='true' />
                          </rds-col>
                        </rds-row>
                    </rds-grid>

                    <rds-divider :width="0" style="margin-top: 2%;" />

                    <rds-grid>
                        <div>
                          <h3>2. ActionsList</h3>
                          <p>
                            The ActionsList component is designed to display a collection of actionable items, which 
                            can be either visible or hidden. This component is particularly useful for managing multiple 
                            actions in a clean and organized manner, ensuring that the user interface remains uncluttered.
                          </p>
                        </div>
                        <rds-row>
                          <rds-col cols="6" offset="0" colsAtS="12" colsAtM="12" colsAtL="6" colsAtXl="6">
                              <h5>1. numberOfExpandedActions="2"</h5>
                              <actions-list :numberOfExpandedActions="2" />
                            </rds-col>

                            <rds-col cols="6" offset="0" colsAtS="12" colsAtM="12" colsAtL="6" colsAtXl="6">
                              <h5>2. numberOfExpandedActions="4"</h5>
                              <actions-list :numberOfExpandedActions="4" />
                            </rds-col>
                        </rds-row>
                    </rds-grid>

                    <rds-divider :width="0" style="margin-top: 2%;" />

                    <rds-grid>
                        <div>
                          <h3>3. Avatar</h3>
                          <p>
                            The Avatar component is used to display visual representations of users. This can include 
                            images, initials, or any other form of graphical depiction that helps identify a user within 
                            the interface. Avatars add a personal touch and are particularly useful in making the user 
                            experience more engaging and intuitive.
                          </p>
                        </div>
                        <rds-row>
                          <rds-col cols="2" offset="0" colsAtS="6" colsAtM="6" colsAtL="2" colsAtXl="2">
                            <h5>1. src</h5>
                            <avatar src="../../../public/img/avatar/pascal-prellwitz.jpg" />
                          </rds-col>

                          <rds-col cols="2" offset="0" colsAtS="6" colsAtM="6" colsAtL="2" colsAtXl="2">
                            <h5>2. size="sm"</h5>
                            <avatar size="sm" />
                          </rds-col>
                          
                          <rds-col cols="2" offset="0" colsAtS="6" colsAtM="6" colsAtL="2" colsAtXl="2">
                            <h5>3. size="md"</h5>
                            <avatar size="md" />
                          </rds-col>
                          
                          <rds-col cols="2" offset="0" colsAtS="6" colsAtM="6" colsAtL="2" colsAtXl="2">
                            <h5>4. size="lg"</h5>
                            <avatar size="lg" />
                          </rds-col>
                          
                          <rds-col cols="2" offset="0" colsAtS="6" colsAtM="6" colsAtL="2" colsAtXl="2">
                            <h5>5. variant</h5>
                            <avatar src="" variant="red" />
                          </rds-col>
                          
                          <rds-col cols="2" offset="0" colsAtS="6" colsAtM="6" colsAtL="2" colsAtXl="2">
                            <h5>6. clickable</h5>
                            <avatar clickable="true"/>
                          </rds-col>
                        </rds-row>
                    </rds-grid>

                    <rds-divider :width="0" style="margin-top: 2%;" />

                    <rds-grid>
                        <div>
                          <h3>4. AvatarGroup</h3>
                          <p>
                            The Avatar component is used to display visual representations of users. This can include 
                            images, initials, or any other form of graphical depiction that helps identify a user within 
                            the interface. Avatars add a personal touch and are particularly useful in making the user 
                            experience more engaging and intuitive.
                          </p>
                        </div>
                        <rds-row>
                          <rds-col cols="4" offset="0" colsAtS="12" colsAtM="12" colsAtL="4" colsAtXl="4">
                            <h5>1. size="sm"</h5>
                            <avatar src="../../../public/img/avatar/pascal-prellwitz.jpg" />
                          </rds-col>

                          <rds-col cols="4" offset="0" colsAtS="12" colsAtM="12" colsAtL="4" colsAtXl="4">
                            <h5>2. size="md"</h5>
                            <avatar size="sm" />
                          </rds-col>
                          
                          <rds-col cols="4" offset="0" colsAtS="12" colsAtM="12" colsAtL="4" colsAtXl="4">
                            <h5>3. size="lg"</h5>
                            <avatar size="md" />
                          </rds-col>
                        </rds-row>
                    </rds-grid>

                </div>
            </div>
        </div>
      
    </div>
  </template>

  <script>
  import ActionBar from '../components/Display/ActionBar.vue';
  import ActionsList from '../components/Display/ActionsList.vue';
  import Avatar from '../components/Display/Avatar.vue';

  export default {
    name: 'Display',
    
    // components
    components: {
      ActionBar,
      ActionsList,
      Avatar,
    },

    // component data
    data() {
      return {

      }
    }
  }
  </script>
  
  <style>
  @media (min-width: 1024px) {
    .display {
      min-height: 100%;
      display: flex;
      align-items: center;
    }
  }
  
  .mt-3 {
      margin-top: 2%;
  }

  .mb-3 {
      margin-bottom: 2%;
  }

  .header-content {
      padding: 1%;
  }
  </style>
  