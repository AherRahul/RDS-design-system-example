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
      </div>
      <rds-divider :width="0" style="margin-top: 2%; margin-bottom: 2%;" />
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
                <avatar src="https://res.cloudinary.com/duojkrgue/image/upload/v1597425834/jptzppwmnuumyujfjvvo.jpg" />
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
                <avatar-group size="sm" maxCount="7" />
              </rds-col>

              <rds-col cols="4" offset="0" colsAtS="12" colsAtM="12" colsAtL="4" colsAtXl="4">
                <h5>2. size="md"</h5>
                <avatar-group size="md" maxCount="3"/>
              </rds-col>
              
              <rds-col cols="4" offset="0" colsAtS="12" colsAtM="12" colsAtL="4" colsAtXl="4">
                <h5>3. size="lg"</h5>
                <avatar-group size="lg" maxCount="3"/>
              </rds-col>
            </rds-row>
          </rds-grid>
          
          <rds-divider :width="0" style="margin-top: 2%;" />

          <rds-grid>
            <div>
              <h3>5. Badge</h3>
              <p>
                The Badge component serves as a visual indicator to highlight important metadata, providing 
                users with quick insights into statuses or categorizations. It is an effective way to draw 
                attention to specific pieces of information without disrupting the overall layout.
              </p>
            </div>
            <rds-row>
              <rds-col cols="4" offset="0" colsAtS="12" colsAtM="12" colsAtL="4" colsAtXl="4">
                <h5>1. size="sm" variant="red" clickable="true" </h5>
                <badge variant="red" size="sm" :clickable="true" />
              </rds-col>

              <rds-col cols="4" offset="0" colsAtS="12" colsAtM="12" colsAtL="4" colsAtXl="4">
                <h5>2. size="md"</h5>
                <badge size="md" />
              </rds-col>
              
              <rds-col cols="4" offset="0" colsAtS="12" colsAtM="12" colsAtL="4" colsAtXl="4">
                <h5>3. size="lg" clickable="true" </h5>
                <badge size="lg" :clickable="true"/>
              </rds-col>
            </rds-row>
          </rds-grid>

          <rds-divider :width="0" style="margin-top: 2%;" />

          <rds-grid>
            <div>
              <h3>6. CalloutCard</h3>
              <p>
                The CalloutCard component is designed to present users with useful information in a 
                visually appealing and non-intrusive manner. This includes tutorials, shortcuts, tips, 
                and other helpful content that can enhance the user experience without interrupting their workflow.
              </p>
            </div>
            <rds-row>
              <rds-col cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                <h5>1. actionButtonVariant="green" actionButtonText="Launch" actionButtonSecondary=false actionButtonDisabled=false compact=false </h5>
                <callout-card 
                  image="https://cdn-icons-png.flaticon.com/512/7486/7486747.png"
                  imageDescription="Image desc"
                  actionButtonVariant="green"
                  actionButtonText="Launch"
                  :actionButtonSecondary=false
                  :actionButtonDisabled=false
                  :compact=false
                />
              </rds-col>
            </rds-row>

            <rds-row>
              <rds-col cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                <h5>2. actionButtonText="Launch" actionButtonSecondary=true actionButtonDisabled=true compact=true </h5>
                <callout-card 
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMde2cM6z856SQ6YZiyrwZpiV0D8qk4HySQ&s"
                  imageDescription="Image desc"
                  actionButtonVariant="green"
                  actionButtonText="Ok"
                  :actionButtonSecondary=true
                  :actionButtonDisabled=true
                  :compact=true
                />
              </rds-col>
            </rds-row>
          </rds-grid>

          <rds-divider :width="0" style="margin-top: 2%;" />

          <rds-grid>
            <div>
              <h3>6. Dropdown</h3>
              <p>
                The Dropdown component is used to activate popovers that contain filtering options for 
                lists and views. It is an effective tool for allowing users to refine and narrow down 
                data based on specific criteria.
              </p>
            </div>
            <rds-row>
              <rds-col cols="3" offset="0" colsAtS="12" colsAtM="12" colsAtL="3" colsAtXl="3">
                <h5>1. content="0 to 120 years" label="Label 1"</h5>
                <dropdown content="0 to 120 years" label="Label 1" >
                  Dropdown Content
                </dropdown>
              </rds-col>

              <rds-col cols="3" offset="0" colsAtS="12" colsAtM="12" colsAtL="3" colsAtXl="3">
                <h5>2. disabled=true </h5>
                <dropdown :disabled=true content="0 to 120 years" label="Label 2" :dropdownWidth=60>
                  Dropdown Content
                </dropdown>
              </rds-col>

              <rds-col cols="6" offset="0" colsAtS="12" colsAtM="12" colsAtL="6" colsAtXl="6">
                <h5>3. dropdownWidth=500  </h5>
                <dropdown content="0 to 120 years" label="Label 3" :dropdownWidth=500 >
                  Dropdown Content
                </dropdown>
              </rds-col>
            </rds-row>
          </rds-grid>

          <rds-divider :width="0" style="margin-top: 2%;" />

          <rds-grid>
            <div>
              <h3>7. DropdownButtons</h3>
              <p>
                The DropdownButtons component is designed to activate popovers containing a list of actions. 
                This component is useful for grouping multiple actions together under the same context, 
                making it easier for users to find and execute related actions.
              </p>
            </div>
            <rds-row>
              <rds-col cols="3" offset="0" colsAtS="12" colsAtM="12" colsAtL="3" colsAtXl="3">
                <h5>1. variant="green"</h5>
                
                <dropdown-buttons variant="green" :secondary=false :dropdownWidth="0" />
              </rds-col>

              <rds-col cols="3" offset="0" colsAtS="12" colsAtM="12" colsAtL="3" colsAtXl="3">
                <h5>2. secondary=true </h5>
                <dropdown-buttons variant="green" :secondary=true :dropdownWidth="0" />
              </rds-col>

              <rds-col cols="6" offset="0" colsAtS="12" colsAtM="12" colsAtL="6" colsAtXl="6">
                <h5>3. dropdownWidth=500  </h5>
                <dropdown-buttons variant="green" :secondary=false :dropdownWidth="500" />
              </rds-col>
            </rds-row>
          </rds-grid>
          
          <rds-divider :width="0" style="margin-top: 2%;" />

          <rds-grid>
            <div>
              <h3>7. EmptyState</h3>
              <p>
                The EmptyState component is used to provide instructions or guidance to users during specific moments, 
                such as when a page or component lacks content or when an action results in an error. This component 
                helps to inform and direct users on what to do next.
              </p>
            </div>
            <rds-row>
              <rds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12" >
                <h5>1. variant="green"</h5>
                
                <empty-state
                  class="empty-state-border"
                  image="https://res.cloudinary.com/duojkrgue/image/upload/v1720880564/RDS-Design-system-images/Pngtree_error_404_page_not_found_6501259_eq8g7a.png"
                  image-description="404 Error page"
                  title="404 - Page Not Found"
                  text="To exit this empty state situation, perform the action below"
                  action-button-text="Add new feature"
                  :hideActionButton="false"
                />
              </rds-col>
            </rds-row>
          </rds-grid>
          
          <rds-divider :width="0" style="margin-top: 2%;" />

          <rds-grid>
            <div>
              <h3>7. FileViewer</h3>
              <p>
                The FileViewer component allows users to preview or download files. It is especially useful for 
                displaying images and providing quick access to file content without the need to download or 
                open them in a separate application.
              </p>
            </div>
            <rds-row>
              <rds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12" >
                <h5>1. variant="green"</h5>
                
                <file-viewer
                  label="Proof of address"
                  fileUrl="https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg"
                  variant="green"
                />
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
  import AvatarGroup from '../components/Display/AvatarGroup.vue';
  import Badge from '../components/Display/Badge.vue';
  import CalloutCard from '../components/Display/CalloutCard.vue';
  import Dropdown from '../components/Display/Dropdown.vue';
  import DropdownButtons from '../components/Display/DropdownButtons.vue';
  import EmptyState from '../components/Display/EmptyState.vue';
  import FileViewer from '../components/Display/FileViewer.vue';
  import FloatingAssistant from '../components/Display/FloatingAssistant.vue';
  import Highlight from '../components/Display/Highlight.vue';
  import ProgressBar from '../components/Display/ProgressBar.vue';
  import ProgressCircular from '../components/Display/ProgressCircular.vue';
  import Stepper from '../components/Display/Stepper.vue';
  import Table from '../components/Display/Table.vue';
  import Timeline from '../components/Display/Timeline.vue';
  import TimelineItem from '../components/Display/TimelineItem.vue';
  import Tooltip from '../components/Display/Tooltip.vue';
  import Wizard from '../components/Display/Wizard.vue';

  export default {
    name: 'Display',
    
    // components
    components: {
      ActionBar,
      ActionsList,
      Avatar,
      AvatarGroup,
      Badge,
      CalloutCard,
      Dropdown,
      DropdownButtons,
      EmptyState,
      FileViewer, 
      FloatingAssistant,
      Highlight,
      ProgressBar,
      ProgressCircular,
      Stepper,
      Table,
      Timeline,
      TimelineItem,
      Tooltip,
      Wizard,
    },

    // component data
    data() {
      return {}
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

  /* .filter-pill__dropdown {
    position: relative !important;
  }

  .dropdown-button__dropdown {
    position: relative !important;
  } */

  .empty-state-border {
    border: 1px solid #d1d1d1;
    border-radius: 15px;
  }
</style>
  