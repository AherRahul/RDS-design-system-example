<template>
    <div class="navigation">
      <div class="container-fluid">
        <div class="navigation-header">
          <rds-row>
            <div class="header-content">
              <h1>RDS - Navigation Component's</h1>
              <p>
                The Navigation Components page in our design system offers a comprehensive suite of 
                essential UI elements designed to facilitate smooth and intuitive navigation within 
                your applications. These Vue.js components enable users to move effortlessly through 
                your app's interface. Detailed documentation in Storybook provides extensive guidance 
                for implementation and customization, ensuring each component can be tailored to your 
                precise requirements.
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
      
        <div>
          <div>
            <rds-grid>
              <div>
                <h3>1. Breadcrumb</h3>
                <p>
                  The Breadcrumb component is used to display the navigational path taken by a user within 
                  an application. It helps users understand their current location in the application's
                   hierarchy and easily navigate back to previous pages.
                </p>
              </div>
              <rds-row>
                <rds-col cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                  <h5>1. light='false' dismissible='true' float='flase'</h5>
                  <breadcrumb />
                </rds-col>
              </rds-row>
            </rds-grid>

            <rds-divider :width="0" style="margin-top: 2%;" />

            <rds-grid>
              <div>
                <h3>2. InnerTabs</h3>
                <p>
                  The InnerTabs component is used to create integrated navigation solutions using tabs. 
                  This component allows users to switch between different views or sections within the 
                  same context, providing an organized and user-friendly way to navigate through related content.
                </p>
              </div>
              <rds-row>
                <rds-col cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                  <h5>1. variant="green"</h5>
                  <inner-tabs
                    :tabs="dataSet"
                    :activeTab="dataSet[1]"
                    variant="green"
                  />
                </rds-col>
              </rds-row>

              <rds-row>
                <rds-col cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                  <h5>2. variant="red" + Hirizontal scroll</h5>
                  <inner-tabs
                    :tabs="dataSet2"
                    :activeTab="dataSet2[1]"
                    variant="red"
                  />
                </rds-col>
              </rds-row>
            </rds-grid>

            <rds-divider :width="0" style="margin-top: 2%;" />

            <rds-grid>
              <div>
                <h3>3. Link</h3>
                <p>
                  The Link component is used to navigate to another page within an application or to an external 
                  website. It provides options to open the link in the same tab or in a new tab, offering 
                  flexibility in navigation.
                </p>
              </div>
              <rds-row>
                <rds-col cols="4" offset="0" colsAtS="12" colsAtM="12" colsAtL="4" colsAtXl="4">
                  <h5>1. newTab="true" size="sm" :bold="false"</h5>
                  <link-component
                    href="https://github.com/aherrahul/design-system"
                    :newTab="true"
                    text="RDS"
                    size="sm"
                    :bold="false"
                  />
                </rds-col>

                <rds-col cols="4" offset="0" colsAtS="12" colsAtM="12" colsAtL="4" colsAtXl="4">
                  <h5>2. newTab="true" size="lg" :bold="true"</h5>
                  <link-component
                    href="https://github.com/aherrahul/design-system"
                    :newTab="true"
                    text="RDS"
                    size="md"
                    :bold="true"
                  />
                </rds-col>

                <rds-col cols="4" offset="0" colsAtS="12" colsAtM="12" colsAtL="4" colsAtXl="4">
                  <h5>3. newTab="true" size="xl" :bold="false"</h5>
                  <link-component
                    href="https://github.com/aherrahul/design-system"
                    :newTab="true"
                    text="RDS"
                    size="lg"
                    :bold="false"
                  />
                </rds-col>
              </rds-row>
            </rds-grid>

            <rds-divider :width="0" style="margin-top: 2%;" />

            <rds-grid>
              <div>
                <h3>4. MobileNavigation</h3>
                <p>
                  MobileNavigation is a sidebar that provides quick and easy access to the main sections of the 
                  application in the mobile environment.
                </p>
              </div>
              <rds-row>
                <rds-col cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                  
                  <MobileNavigation 
                    :items="sideBarItems"
                    :activeItem="sideBarItems[1]"
                    :user="user"
                  />
                </rds-col>
              </rds-row>
            </rds-grid>
            
            <rds-divider :width="0" style="margin-top: 2%;" />

            <rds-grid>
              <div>
                <h3>5. NavBar</h3>
                <p>
                  NavBars are components used to create navigation solutions and menus.
                </p>
              </div>
              <rds-row>
                <rds-col cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                  
                  <nav-bar />
                </rds-col>
              </rds-row>
            </rds-grid>
            
            <rds-divider :width="0" style="margin-top: 2%;" />

            <rds-grid>
              <div>
                <h3>6. PageLayout</h3>
                <p>
                  PageLayout is a collection of components that allows the creation of standardized screens with primary navigation vertically and secondary navigation horizontally.
                </p>
              </div>
              <rds-row>
                <rds-col cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                  
                  <page-layout />
                </rds-col>
              </rds-row>
            </rds-grid>
            
            <rds-divider :width="0" style="margin-top: 2%;" />

            <rds-grid>
              <div>
                <h3>7. Pagination</h3>
                <p>
                  Pagination are status indicators used to make important metadata evident.
                </p>
              </div>
              <rds-row>
                <rds-col cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                  <h5>1. value="1"  perPage="10" total="60" fluid="true"</h5>
                  <pagination />
                </rds-col>
              </rds-row>
            </rds-grid>

            <rds-divider :width="0" style="margin-top: 2%;" />

            <rds-grid>
              <div>
                <h3>8. SegmentedControl</h3>
                <p>
                  SegmentedControls are components that allow the user to view alternative versions of a feature or interface.
                </p>
              </div>
              <rds-row>
                <rds-col cols="6" offset="0" colsAtS="12" colsAtM="12" colsAtL="6" colsAtXl="6">
                  <h5>1. withIcon="false"</h5>
                  <segmented-control 
                    :segments="['info-outline', 'copy-outline', 'edit-outline']"
                    :withIcon="false"
                    :segmentsTooltipText="[ 'info', 'copy', 'edit' ]"
                  />
                </rds-col>

                <rds-col cols="6" offset="0" colsAtS="12" colsAtM="12" colsAtL="6" colsAtXl="6">
                  <h5>2. withIcon="false" segmentsTooltipText is passed</h5>
                  <segmented-control 
                    :segments="['info-outline', 'copy-outline', 'edit-outline']"
                    :withIcon="true"
                    :segmentsTooltipText="[ 'info', 'copy', 'edit' ]"
                  />
                </rds-col>
              </rds-row>
            </rds-grid>
            
            <rds-divider :width="0" style="margin-top: 2%;" />

            <rds-grid>
              <div>
                <h3>9. SideBar</h3>
                <p>
                  SideBars are components used to create navigation solutions and menus.
                </p>
              </div>
              <rds-row>
                <rds-col cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                  <h5>1. withIcon="false"</h5>
                  <side-bar />
                </rds-col>
              </rds-row>
            </rds-grid>
            
            <rds-divider :width="0" style="margin-top: 2%;" />

            <rds-grid>
              <div>
                <h3>10. Tabs</h3>
                <p>
                  Tabs are components used to create internal navigation solutions.
                </p>
              </div>
              <rds-row>
                <rds-col cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                  <h5>1. withIcon="false"</h5>
                  <tabs />
                </rds-col>
              </rds-row>
            </rds-grid>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Breadcrumb from '../components/Navigation/Breadcrumb.vue';
  import InnerTabs from '../components/Navigation/InnerTabs.vue';
  import LinkComponent from '../components/Navigation/Link.vue';
  import MobileNavigation from '../components/Navigation/MobileNavigation.vue';
  import NavBar from '../components/Navigation/NavBar.vue';
  import PageLayout from '../components/Navigation/PageLayout.vue';
  import Pagination from '../components/Navigation/Pagination.vue';
  import SegmentedControl from '../components/Navigation/SegmentedControl.vue';
  import SideBar from '../components/Navigation/SideBar.vue';
  import Tabs from '../components/Navigation/Tabs.vue';

  export default {
    name: "Navigation",

    // components
    components: {
      Breadcrumb,
      InnerTabs,
      LinkComponent,
      MobileNavigation,
      NavBar,
      PageLayout,
      Pagination,
      SegmentedControl,
      SideBar,
      Tabs,
    },

    // component data
    data() {
      return {
        subTitle: 'There is a theory that says that if one day someone discovers exactly what the Universe is for and why it is here, it will disappear instantly and be replaced by something still stranger and more inexplicable. There is a second theory that says that this has already happened.',
        dataSet: [
          {
          title: 'Overview',
              name: 'overview',
          },
          {
              title: 'Indicator 1',
              name: 'indicator-1',
          },
          {
              title: 'Indicator 2',
              name: 'indicator-2',
          },
          {
              title: 'Indicator 3',
              name: 'indicator-3',
          },
          {
              title: 'Indicator 4',
              name: 'indicator-4',
          }
        ],
        dataSet2: [
          {
              title: 'Overview',
              name: 'overview',
          },
          {
              title: 'Indicator 1',
              name: 'indicator-1',
          },
          {
              title: 'Indicator 2',
              name: 'indicator-2',
          },
          {
              title: 'Indicator 3',
              name: 'indicator-3',
          },
          {
              title: 'Indicator 4',
              name: 'indicator-4',
          },
          {
              title: 'Indicator 5',
              name: 'indicator-5',
          },
          {
              title: 'Indicator with the absurdly large name 6',
              name: 'indicator-6',
          },
          {
              title: 'Indicator 7',
              name: 'indicator-7',
          },
          {
              title: 'Indicator 8',
              name: 'indicator-8',
          },
        ],
        sideBarItems: [
            {
                label: 'Start',
                icon: 'home-outline',
                type: 'route',
                route: {
                path: '/home',
                name: 'home'
                },
            },
            {
                label: "Rahul's Design System",
                icon: 'shield-outline',
                type: 'route',
                route: {
                path: '/visa',
                name: 'visa'
                },
            },
            {
                label: 'Booking Center',
                icon: 'calendar-outline',
                type: 'route',
                route: {
                path: '/regulation',
                name: 'regulation'
                },
            },
            {
                label: 'Medical care',
                icon: 'heart-rate-outline',
                type: 'route',
                route: {
                path: '/medical-care',
                name: 'medical-care',
                },
            },
        ],
        user: {
            name: 'Joana Mendes',
            role: 'Administrator',
        },
      }
    },
  }
  </script>
  
  <style>
  @media (min-width: 1024px) {
    .navigation {
      min-height: 100%;
      display: flex;
      align-items: center;
      padding-bottom: 10rem;
    }
  }
  </style>
  